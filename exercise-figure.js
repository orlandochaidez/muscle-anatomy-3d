// exercise-figure.js
// Sign conventions (all angles in degrees; applied as rad = deg * Math.PI/180):
// shoulder.flex (rotation.x): positive = arm swings forward/up
// shoulder.abd  (rotation.z): positive = arm abducts outward on left;
//   on right, positive rotation.z moves the arm inward — supply negative values for outward
// elbow.flex    (rotation.x): positive = forearm swings forward/up (elbow flexion)
// hip.flex      (rotation.x): positive = thigh swings forward (hip flexion)
// knee.flex     (rotation.x): positive = knee bends (shin swings backward)
// spine.flex    (rotation.x): positive = torso bends forward

export function createExerciseFigure(THREE) {
  const { Group, Mesh, CapsuleGeometry, SphereGeometry, BoxGeometry,
          MeshStandardMaterial, Object3D } = THREE;
  const DEG = Math.PI / 180;
  const bodyColor = 0x6b7c93;
  const group = new Group();
  const joints = {};
  const segments = {};

  const hips = new Object3D();
  hips.position.set(0, 0.95, 0);
  group.add(hips);

  const spine = new Object3D();
  hips.add(spine);
  joints.spine = { flex: spine };

  const baseMat = new MeshStandardMaterial({ color: bodyColor, roughness: 0.55, metalness: 0.05 });

  const torso = new Mesh(new CapsuleGeometry(0.13, 0.38, 6, 10), baseMat.clone());
  torso.position.y = 0.24;
  spine.add(torso);
  segments.torso = torso;

  const head = new Mesh(new SphereGeometry(0.11, 16, 12), baseMat.clone());
  head.position.y = 0.58;
  spine.add(head);

  function makeArm(side) {
    const sign = side === 'L' ? -1 : 1;
    const shoulder = new Object3D();
    shoulder.position.set(sign * 0.22, 0.47, 0);
    spine.add(shoulder);
    joints['shoulder' + side] = { flex: shoulder, abd: shoulder };

    const upper = new Mesh(new CapsuleGeometry(0.045, 0.30, 5, 8), baseMat.clone());
    upper.position.y = -0.15;
    shoulder.add(upper);
    segments['upperArm' + side] = upper;

    const elbow = new Object3D();
    elbow.position.y = -0.30;
    shoulder.add(elbow);
    joints['elbow' + side] = { flex: elbow };

    const fore = new Mesh(new CapsuleGeometry(0.038, 0.28, 5, 8), baseMat.clone());
    fore.position.y = -0.14;
    elbow.add(fore);
    segments['forearm' + side] = fore;

    const hand = new Mesh(new SphereGeometry(0.048, 10, 8), baseMat.clone());
    hand.position.y = -0.30;
    elbow.add(hand);

    shoulder.rotation.z = (side === 'L' ? 8 : -8) * DEG;
    elbow.rotation.x = 10 * DEG;
  }
  makeArm('L');
  makeArm('R');

  function makeLeg(side) {
    const sign = side === 'L' ? -1 : 1;
    const hip = new Object3D();
    hip.position.set(sign * 0.10, 0, 0);
    hips.add(hip);
    joints['hip' + side] = { flex: hip };

    const thigh = new Mesh(new CapsuleGeometry(0.055, 0.42, 5, 8), baseMat.clone());
    thigh.position.y = -0.21;
    hip.add(thigh);
    segments['thigh' + side] = thigh;

    const knee = new Object3D();
    knee.position.y = -0.42;
    hip.add(knee);
    joints['knee' + side] = { flex: knee };

    const shin = new Mesh(new CapsuleGeometry(0.048, 0.42, 5, 8), baseMat.clone());
    shin.position.y = -0.21;
    knee.add(shin);
    segments['shin' + side] = shin;

    const foot = new Mesh(new BoxGeometry(0.09, 0.04, 0.20), baseMat.clone());
    foot.position.set(0, -0.44, 0.04);
    knee.add(foot);

    knee.rotation.x = 5 * DEG;
  }
  makeLeg('L');
  makeLeg('R');

  return { group, joints, segments };
}

export function playAnimation(fig, animData) {
  const DEG = Math.PI / 180;
  const REST = {
    shoulderL: { flex: 0, abd: 8 },
    shoulderR: { flex: 0, abd: -8 },
    elbowL: { flex: 10 },
    elbowR: { flex: 10 },
    hipL: { flex: 0 },
    hipR: { flex: 0 },
    kneeL: { flex: 5 },
    kneeR: { flex: 5 },
    spine: { flex: 0 }
  };
  const highlightColor = 0xe8632a;
  const orig = {};

  // optional root motions (added for calf raise + shrug):
  // animData.rootY = [min,max] meters, bobs the whole figure vertically
  // animData.lift  = [min,max] meters, raises/lowers the shoulder pivots
  const rootYRange = animData.rootY;
  const liftRange = animData.lift;
  const shoulderBaseY = {};
  for (const s of ['shoulderL', 'shoulderR']) {
    const p = fig.joints[s] && fig.joints[s].flex;
    if (p) shoulderBaseY[s] = p.position.y;
  }

  if (animData.highlight && fig.segments) {
    for (const name of animData.highlight) {
      const m = fig.segments[name];
      if (m && m.material) {
        orig[name] = m.material.color.getHex();
        m.material.color.setHex(highlightColor);
      }
    }
  }

  let running = true;
  let raf = null;
  const t0 = performance.now();

  function frame() {
    if (!running) return;
    const elapsed = (performance.now() - t0) / 1000;
    const wave = (elapsed / (animData.tempo || 2)) * Math.PI * 2;

    for (const jName in REST) {
      const j = fig.joints[jName];
      if (!j) continue;
      const data = (animData.joints && animData.joints[jName]) || {};
      const phase = data.phase || 0;
      const s = Math.sin(wave + phase);
      const t = 0.5 + 0.5 * s;

      if (data.flex && j.flex) {
        const [mn, mx] = data.flex;
        j.flex.rotation.x = (mn + (mx - mn) * t) * DEG;
      } else if (j.flex && REST[jName].flex != null) {
        j.flex.rotation.x = REST[jName].flex * DEG;
      }

      if (data.abd && j.abd) {
        const [mn, mx] = data.abd;
        j.abd.rotation.z = (mn + (mx - mn) * t) * DEG;
      } else if (j.abd && REST[jName].abd != null) {
        j.abd.rotation.z = REST[jName].abd * DEG;
      }
    }
    // root motions use the unphased wave so the body moves as one
    const tR = 0.5 + 0.5 * Math.sin(wave);
    if (rootYRange) {
      const [mn, mx] = rootYRange;
      fig.group.position.y = mn + (mx - mn) * tR;
    }
    if (liftRange) {
      const [mn, mx] = liftRange;
      const l = mn + (mx - mn) * tR;
      for (const s in shoulderBaseY) {
        const p = fig.joints[s].flex;
        if (p) p.position.y = shoulderBaseY[s] + l;
      }
    }
    raf = requestAnimationFrame(frame);
  }
  frame();

  return function stop() {
    running = false;
    if (raf) cancelAnimationFrame(raf);
    for (const name in orig) {
      const m = fig.segments[name];
      if (m && m.material) m.material.color.setHex(orig[name]);
    }
    fig.group.position.y = 0;
    for (const s in shoulderBaseY) {
      const p = fig.joints[s].flex;
      if (p) p.position.y = shoulderBaseY[s];
    }
  };
}
