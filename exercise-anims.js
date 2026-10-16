// exercise-anims.js — animation data for the exercise demo figure.
// Generated with Grok; rootY/lift extensions added for calf raise + shrug.
// rootY: [min,max] meters — bobs the whole figure vertically (calf raise).
// lift: [min,max] meters — raises/lowers the shoulder pivots (shrug).
export const EXERCISE_ANIMS = {
  "Biceps Curl": {
    tempo: 2.2,
    view: "front",
    highlight: ['upperArmL', 'upperArmR', 'forearmL', 'forearmR'],
    preparation: "Stand tall with feet hip-width apart and arms hanging at your sides, palms facing forward.",
    execution: "Keep upper arms stationary against your torso. Flex both elbows to curl the forearms upward until the hands approach the shoulders. Pause, then lower slowly under control to the start.",
    joints: {
      shoulderL: { flex: [0, 12], abd: [8, 6] },
      shoulderR: { flex: [0, 12], abd: [-8, -6] },
      elbowL: { flex: [10, 145] },
      elbowR: { flex: [10, 145] },
      wristL: { twist: 0 },
      wristR: { twist: 0 }
    }
  },
  "Alternating Curl": {
    tempo: 2.6,
    view: "front",
    highlight: ['upperArmL', 'upperArmR', 'forearmL', 'forearmR'],
    preparation: "Stand upright with arms relaxed at your sides and core lightly braced.",
    execution: "Curl one arm at a time so that as one forearm rises the other lowers. Maintain a steady alternating rhythm while keeping the upper arms mostly still.",
    joints: {
      shoulderL: { flex: [0, 10], abd: [8, 5] },
      shoulderR: { flex: [0, 10], abd: [-8, -5] },
      elbowL: { flex: [10, 145] },
      elbowR: { flex: [10, 145], phase: Math.PI },
      wristL: { twist: 0 },
      wristR: { twist: [0, 0], phase: 0 }
    }
  },
  "Overhead Press": {
    tempo: 2.4,
    view: "front",
    camDist: 4.1, camY: 1.05,
    highlight: ['upperArmL', 'upperArmR', 'forearmL', 'forearmR', 'torso'],
    preparation: "Stand with feet shoulder-width apart, core tight, and elbows bent so the hands start near shoulder height.",
    execution: "Press the arms overhead by extending the elbows and flexing the shoulders until the arms are straight. Lower back to shoulder level under control without excessive lower-back arch.",
    joints: {
      shoulderL: { flex: [25, 165], abd: [18, 8] },
      shoulderR: { flex: [25, 165], abd: [-18, -8] },
      elbowL: { flex: [85, 8] },
      elbowR: { flex: [85, 8] },
      spine: { flex: [0, 6] }
    }
  },
  "Lateral Raise": {
    tempo: 2.0,
    view: "front",
    highlight: ['upperArmL', 'upperArmR'],
    preparation: "Stand tall with a soft bend in the elbows and arms resting at your sides.",
    execution: "Raise both arms out to the sides until they reach about shoulder height, leading with the elbows. Keep the slight elbow bend and lower slowly back down.",
    joints: {
      shoulderL: { flex: [0, 6], abd: [8, 90] },
      shoulderR: { flex: [0, 6], abd: [-8, -90] },
      elbowL: { flex: [10, 18] },
      elbowR: { flex: [10, 18] }
    }
  },
  "Squat": {
    tempo: 2.8,
    view: "side",
    highlight: ['thighL', 'thighR', 'shinL', 'shinR', 'torso'],
    rootY: [-0.45, 0],
    preparation: "Stand with feet roughly shoulder-width apart, toes slightly out, and arms extended forward for balance.",
    execution: "Sit the hips straight down, bending the knees to lower until the thighs are parallel to the ground. Keep the chest up and knees tracking over the toes, then drive through the heels to stand.",
    joints: {
      hipL: { flex: [0, 88] },
      hipR: { flex: [0, 88] },
      kneeL: { flex: [5, 108] },
      kneeR: { flex: [5, 108] },
      spine: { flex: [0, 32] },
      shoulderL: { flex: [0, 50] },
      shoulderR: { flex: [0, 50] }
    }
  },
  "Deadlift": {
    tempo: 3.0,
    view: "side",
    highlight: ['thighL', 'thighR', 'torso', 'forearmL', 'forearmR'],
    preparation: "Stand with feet hip-width apart and arms hanging straight down in front of the thighs.",
    execution: "Hinge at the hips by pushing them backward, maintaining a neutral spine and only a soft knee bend. Lower the torso until a hamstring stretch is felt, then drive the hips forward to return upright.",
    joints: {
      hipL: { flex: [0, 12] },
      hipR: { flex: [0, 12] },
      kneeL: { flex: [5, 20] },
      kneeR: { flex: [5, 20] },
      spine: { flex: [0, 45] },
      shoulderL: { flex: [0, 4], abd: [8, 8] },
      shoulderR: { flex: [0, 4], abd: [-8, -8] }
    }
  },
  "Bent-Over Row": {
    tempo: 2.5,
    view: "side",
    highlight: ['upperArmL', 'upperArmR', 'forearmL', 'forearmR', 'torso'],
    preparation: "Hinge at the hips so the torso is nearly parallel to the ground with a flat back and arms hanging straight down.",
    execution: "Pull the elbows back and upward toward the hips while squeezing the shoulder blades. Keep the torso stable, then lower the arms under control to the hanging position.",
    joints: {
      spine: { flex: [48, 54] },
      hipL: { flex: [10, 18] },
      hipR: { flex: [10, 18] },
      kneeL: { flex: [10, 25] },
      kneeR: { flex: [10, 25] },
      shoulderL: { flex: [4, -32], abd: [12, 22] },
      shoulderR: { flex: [4, -32], abd: [-12, -22] },
      elbowL: { flex: [12, 105] },
      elbowR: { flex: [12, 105] }
    }
  },
  "Standing Calf Raise": {
    tempo: 1.8,
    view: "side",
    camDist: 3.2,
    highlight: ['shinL', 'shinR'],
    rootY: [0, 0.05],
    preparation: "Stand tall with feet hip-width apart and weight balanced evenly.",
    execution: "Rise onto the balls of the feet as high as possible. Pause at the top, then lower the heels slowly back to the floor while keeping the legs mostly straight.",
    joints: {
      kneeL: { flex: [5, 2] },
      kneeR: { flex: [5, 2] }
    }
  },
  "Overhead Triceps Extension": {
    tempo: 2.3,
    view: "side",
    camDist: 4.1, camY: 1.05,
    highlight: ['upperArmL', 'upperArmR', 'forearmL', 'forearmR'],
    preparation: "Stand tall and raise both arms fully overhead with the elbows pointing forward and close to the head.",
    execution: "Keeping the upper arms stationary, flex the elbows to lower the hands behind the head. Then extend the elbows to return to the straight overhead position.",
    joints: {
      shoulderL: { flex: [158, 168], abd: [4, 10] },
      shoulderR: { flex: [158, 168], abd: [-4, -10] },
      elbowL: { flex: [8, 135] },
      elbowR: { flex: [8, 135] }
    }
  },
  "Shrug": {
    tempo: 1.6,
    view: "front",
    highlight: ['upperArmL', 'upperArmR', 'torso'],
    lift: [0, 0.045],
    preparation: "Stand with arms relaxed at the sides and shoulders in a neutral, lowered position.",
    execution: "Elevate the shoulders straight upward toward the ears. Hold briefly at the top, then lower them back down under control without rolling forward or backward.",
    joints: {
      shoulderL: { flex: [0, 4], abd: [8, 12] },
      shoulderR: { flex: [0, 4], abd: [-8, -12] }
    }
  },
  "Hammer Curl": {
    tempo: 2.2,
    view: "front",
    highlight: ['forearmL', 'forearmR', 'handL', 'handR'],
    preparation: "Stand tall with arms hanging at your sides, palms facing your thighs (neutral grip).",
    execution: "Keeping the palms facing each other the entire time, flex both elbows to curl the forearms up. Pause at the top, then lower slowly. Do not rotate the wrists.",
    joints: {
      shoulderL: { flex: [0, 10], abd: [8, 6] },
      shoulderR: { flex: [0, 10], abd: [-8, -6] },
      elbowL: { flex: [10, 135] },
      elbowR: { flex: [10, 135] },
      wristL: { twist: 90 },
      wristR: { twist: -90 }
    }
  },
  "Wrist Curl": {
    tempo: 1.6,
    view: "side",
    highlight: ['forearmL', 'forearmR', 'handL', 'handR'],
    preparation: "Stand with elbows bent about 90 degrees so the forearms point forward, palms facing up.",
    execution: "Keeping the forearms still, curl only the wrists upward as far as comfortable, then lower them back down slowly. Works in both directions.",
    joints: {
      shoulderL: { flex: [8, 12] },
      shoulderR: { flex: [8, 12] },
      elbowL: { flex: [88, 95] },
      elbowR: { flex: [88, 95] },
      wristL: { flex: [-18, 32] },
      wristR: { flex: [-18, 32] }
    }
  },
  "Front Raise": {
    tempo: 2.2,
    view: "side",
    highlight: ['upperArmL', 'upperArmR', 'forearmL', 'forearmR'],
    preparation: "Stand tall with feet hip-width apart and arms hanging at your sides with a soft bend in the elbows.",
    execution: "Raise both arms straight forward to shoulder height, keeping the slight elbow bend and palms facing down. Pause briefly, then lower the arms slowly back to your sides under control.",
    joints: {
      shoulderL: { flex: [0, 90], abd: [8, 5] },
      shoulderR: { flex: [0, 90], abd: [-8, -5] },
      elbowL: { flex: [10, 20] },
      elbowR: { flex: [10, 20] }
    }
  },
  "Reverse Fly": {
    tempo: 2.5,
    view: "front",
    highlight: ['upperArmL', 'upperArmR', 'torso'],
    rootY: [-0.1, -0.1],
    preparation: "Hinge at the hips so your torso is angled forward about 45 degrees with a flat back and arms hanging down.",
    execution: "With a slight bend in the elbows, sweep both arms out to the sides until they are roughly parallel to the ground. Squeeze your shoulder blades together at the top, then lower the arms slowly.",
    joints: {
      spine: { flex: [42, 48] },
      hipL: { flex: [12, 18] },
      hipR: { flex: [12, 18] },
      kneeL: { flex: [10, 20] },
      kneeR: { flex: [10, 20] },
      shoulderL: { flex: [5, 10], abd: [10, 80] },
      shoulderR: { flex: [5, 10], abd: [-10, -80] },
      elbowL: { flex: [15, 25] },
      elbowR: { flex: [15, 25] }
    }
  },
  "Lunge": {
    tempo: 2.8,
    view: "side",
    highlight: ['thighL', 'thighR', 'shinL', 'shinR', 'torso'],
    rootY: [-0.32, 0],
    preparation: "Stand in a split stance with one foot forward and the other back, torso upright and core braced.",
    execution: "Lower your body by bending both knees until the back knee approaches the ground, keeping the front knee over the ankle. Push through the front heel to rise back up.",
    joints: {
      hipL: { flex: [15, 70] },
      hipR: { flex: [5, -12] },
      kneeL: { flex: [10, 85] },
      kneeR: { flex: [10, 45] },
      spine: { flex: [0, 6] }
    }
  },
  "Standing Hip Abduction": {
    tempo: 2.0,
    view: "front",
    highlight: ['thighR', 'shinR'],
    preparation: "Stand tall on your left leg with the right leg free and a slight bend in the supporting knee for balance.",
    execution: "Keeping the torso upright and the working leg straight, swing the right leg out to the side. Pause at the top of the range, then return the leg slowly to the start under control.",
    joints: {
      hipR: { flex: [0, 5], abd: [0, -35] },
      kneeR: { flex: [5, 8] },
      hipL: { flex: [0, 5] },
      kneeL: { flex: [5, 8] },
      spine: { flex: [0, 3] }
    }
  },
  "Face Pull": {
    tempo: 2.3,
    view: "front",
    highlight: ['upperArmL', 'upperArmR', 'forearmL', 'forearmR', 'torso'],
    preparation: "Stand upright with arms extended forward at shoulder height and a soft bend in the elbows.",
    execution: "Pull the elbows high and wide back toward your face while externally rotating the shoulders. Squeeze the shoulder blades together at the end range, then slowly return the arms forward.",
    joints: {
      shoulderL: { flex: [80, 40], abd: [15, 50] },
      shoulderR: { flex: [80, 40], abd: [-15, -50] },
      elbowL: { flex: [20, 90] },
      elbowR: { flex: [20, 90] },
      spine: { flex: [0, 5] }
    }
  },
  "Band Pull-Apart": {
    tempo: 2.1,
    view: "front",
    highlight: ['upperArmL', 'upperArmR', 'forearmL', 'forearmR'],
    preparation: "Stand tall with arms extended straight forward at shoulder height, hands together in front of you.",
    execution: "Keeping the elbows locked straight, pull the hands apart out to the sides until the arms are roughly in line with the shoulders. Squeeze the shoulder blades, then return the hands together slowly.",
    joints: {
      shoulderL: { flex: [85, 70], abd: [5, 75] },
      shoulderR: { flex: [85, 70], abd: [-5, -75] },
      elbowL: { flex: [8, 12] },
      elbowR: { flex: [8, 12] }
    }
  },
  "Pull-Up": {
    tempo: 2.6,
    view: "front",
    camDist: 4.1, camY: 1.05,
    highlight: ['upperArmL', 'upperArmR', 'forearmL', 'forearmR', 'torso'],
    lift: [0, 0.08],
    preparation: "Stand with arms extended fully overhead as if gripping a bar, core braced and shoulders set.",
    execution: "Pull the elbows down and back toward your ribs while driving the chest upward. Squeeze the shoulder blades at the top of the pull, then slowly extend the arms back overhead.",
    joints: {
      shoulderL: { flex: [160, 40], abd: [10, 25] },
      shoulderR: { flex: [160, 40], abd: [-10, -25] },
      elbowL: { flex: [10, 110] },
      elbowR: { flex: [10, 110] },
      spine: { flex: [0, 8] }
    }
  },
  "Standing Back Extension": {
    tempo: 2.4,
    view: "side",
    highlight: ['torso', 'thighL', 'thighR'],
    preparation: "Stand with feet hip-width apart and hinge slightly forward at the hips with a neutral spine.",
    execution: "Extend the torso by driving the hips forward and lifting the chest until you are upright, then continue a few degrees past neutral into a gentle back extension. Return slowly to the slight forward hinge.",
    joints: {
      spine: { flex: [25, -12] },
      hipL: { flex: [20, -5] },
      hipR: { flex: [20, -5] },
      kneeL: { flex: [5, 8] },
      kneeR: { flex: [5, 8] }
    }
  },
  "Romanian Deadlift": {
    tempo: 2.8,
    view: "side",
    highlight: ['thighL', 'thighR', 'torso'],
    preparation: "Stand with feet hip-width apart, knees soft but nearly straight, and arms hanging straight down in front of your thighs.",
    execution: "Push the hips back and hinge forward, sliding the hands down the thighs toward mid-shin while keeping the back flat and legs nearly straight. Squeeze the glutes to drive the hips forward and stand tall.",
    joints: {
      hipL: { flex: [0, 10] },
      hipR: { flex: [0, 10] },
      kneeL: { flex: [5, 12] },
      kneeR: { flex: [5, 12] },
      spine: { flex: [0, 55] },
      shoulderL: { flex: [0, 8] },
      shoulderR: { flex: [0, 8] }
    }
  },
  "Nordic Curl": {
    tempo: 3.2,
    view: "side",
    highlight: ['thighL', 'thighR', 'shinL', 'shinR'],
    rootY: [-0.47, -0.47],
    preparation: "Kneel upright with feet anchored, torso tall and core braced, arms resting at your sides.",
    execution: "Keeping a straight line from knees to head, slowly lower your torso forward toward the ground, resisting with the hamstrings. Catch yourself at the bottom, then drive back up to kneeling.",
    joints: {
      hipL: { flex: [0, 5] },
      hipR: { flex: [0, 5] },
      kneeL: { flex: [88, 92] },
      kneeR: { flex: [88, 92] },
      spine: { flex: [8, 68] },
      shoulderL: { flex: [0, 10] },
      shoulderR: { flex: [0, 10] }
    }
  },
  "Lying Leg Curl": {
    tempo: 2.4,
    view: "side",
    prone: true,
    highlight: ['thighL', 'thighR', 'shinL', 'shinR'],
    preparation: "Lie face-down with legs extended straight behind you and arms resting at your sides.",
    execution: "Keeping the thighs pressed to the ground, bend both knees to curl the heels up toward your butt. Squeeze the hamstrings hard at the top, then lower the feet slowly back down.",
    joints: {
      hipL: { flex: [0, 5] },
      hipR: { flex: [0, 5] },
      kneeL: { flex: [8, 125] },
      kneeR: { flex: [8, 125] },
      spine: { flex: [0, 2] },
      shoulderL: { flex: [0, 5] },
      shoulderR: { flex: [0, 5] },
      elbowL: { flex: [10, 15] },
      elbowR: { flex: [10, 15] }
    }
  },
  "Crunches": {
    tempo: 2.0,
    view: "side",
    supine: true,
    highlight: ['torso'],
    preparation: "Lie on your back with knees bent at 90 degrees and arms crossed over your chest.",
    execution: "Curl your upper torso off the ground by contracting your abs. Lower back down with control to complete the rep.",
    joints: {
      hipL: { flex: [0, 0] },
      hipR: { flex: [0, 0] },
      kneeL: { flex: [90, 90] },
      kneeR: { flex: [90, 90] },
      spine: { flex: [0, 30] },
      shoulderL: { flex: [25, 25] },
      shoulderR: { flex: [25, 25] },
      elbowL: { flex: [90, 90] },
      elbowR: { flex: [90, 90] }
    }
  },
  "Bicycle Crunches": {
    tempo: 2.6,
    view: "side",
    supine: true,
    highlight: ['torso'],
    preparation: "Lie on your back with hands near your head and knees bent.",
    execution: "Alternate bringing each elbow toward the opposite knee while twisting your torso. Keep a controlled rhythm as you switch sides.",
    joints: {
      hipL: { flex: [15, 85] },
      hipR: { flex: [15, 85], phase: Math.PI },
      kneeL: { flex: [25, 100] },
      kneeR: { flex: [25, 100], phase: Math.PI },
      spine: { flex: [10, 20], twist: [-25, 25] },
      shoulderL: { flex: [30, 30] },
      shoulderR: { flex: [30, 30] },
      elbowL: { flex: [100, 100] },
      elbowR: { flex: [100, 100] }
    }
  },
  "Reverse Crunches": {
    tempo: 2.2,
    view: "side",
    supine: true,
    highlight: ['torso', 'thighL', 'thighR'],
    preparation: "Lie on your back with knees bent and arms resting at your sides.",
    execution: "Curl your hips and legs upward toward your chest. Lower them back down with control.",
    joints: {
      hipL: { flex: [0, 65] },
      hipR: { flex: [0, 65] },
      kneeL: { flex: [85, 95] },
      kneeR: { flex: [85, 95] },
      spine: { flex: [0, 12] },
      shoulderL: { flex: [0, 5] },
      shoulderR: { flex: [0, 5] },
      elbowL: { flex: [10, 10] },
      elbowR: { flex: [10, 10] }
    }
  },
  "Russian Twists": {
    tempo: 2.4,
    view: "front",
    rootY: [-0.45, -0.45],
    highlight: ['torso'],
    preparation: "Sit with knees bent, torso leaned back, and hands together in front of you.",
    execution: "Rotate your torso from side to side while keeping your core engaged. Maintain the lean throughout the movement.",
    joints: {
      hipL: { flex: [85, 85] },
      hipR: { flex: [85, 85] },
      kneeL: { flex: [90, 90] },
      kneeR: { flex: [90, 90] },
      spine: { flex: [-25, -25], twist: [-35, 35] },
      shoulderL: { flex: [55, 55] },
      shoulderR: { flex: [55, 55] },
      elbowL: { flex: [5, 10] },
      elbowR: { flex: [5, 10] }
    }
  },
  "Dead Bugs": {
    tempo: 2.8,
    view: "side",
    supine: true,
    highlight: ['torso'],
    preparation: "Lie on your back with hips and knees at 90 degrees and arms pointing upward.",
    execution: "Extend one leg while reaching the opposite arm overhead. Alternate sides while keeping your lower back flat.",
    joints: {
      hipL: { flex: [90, 15] },
      hipR: { flex: [90, 15], phase: Math.PI },
      kneeL: { flex: [90, 15] },
      kneeR: { flex: [90, 15], phase: Math.PI },
      spine: { flex: [0, 5] },
      shoulderL: { flex: [90, 160], phase: Math.PI },
      shoulderR: { flex: [90, 160] },
      elbowL: { flex: [0, 0] },
      elbowR: { flex: [0, 0] }
    }
  },
  "Glute Bridges": {
    tempo: 2.4,
    view: "side",
    supine: true,
    highlight: ['thighL', 'thighR', 'torso'],
    preparation: "Lie on your back with knees bent at 90 degrees and feet flat on the ground.",
    execution: "Drive through your heels to lift your hips toward the ceiling. Lower back down with control.",
    joints: {
      hipL: { flex: [45, 5] },
      hipR: { flex: [45, 5] },
      kneeL: { flex: [90, 70] },
      kneeR: { flex: [90, 70] },
      spine: { flex: [0, 0] },
      shoulderL: { flex: [0, 5] },
      shoulderR: { flex: [0, 5] },
      elbowL: { flex: [10, 10] },
      elbowR: { flex: [10, 10] }
    }
  },
  "Push-Ups": {
    tempo: 2.4,
    view: "side",
    prone: true,
    rootY: [-0.11, -0.21],
    highlight: ['torso', 'upperArmL', 'upperArmR'],
    preparation: "Start in a plank position with hands under your shoulders and body in a straight line.",
    execution: "Lower your body toward the ground by bending your elbows. Push back up to the starting position.",
    joints: {
      hipL: { flex: [0, 0] },
      hipR: { flex: [0, 0] },
      kneeL: { flex: [0, 5] },
      kneeR: { flex: [0, 5] },
      spine: { flex: [0, 0] },
      shoulderL: { flex: [90, 45], abd: [45, 45] },
      shoulderR: { flex: [90, 45], abd: [-45, -45] },
      elbowL: { flex: [10, 90] },
      elbowR: { flex: [10, 90] },
      wristL: { flex: [90, 90] },
      wristR: { flex: [90, 90] }
    }
  },
  "Lying Leg Raises": {
    tempo: 2.6,
    view: "side",
    supine: true,
    camDist: 3.9, camY: 0.6,
    highlight: ['torso', 'thighL', 'thighR'],
    preparation: "Lie on your back with legs straight and arms resting at your sides.",
    execution: "Lift both legs upward until they are vertical. Lower them back down with control while keeping them straight.",
    joints: {
      hipL: { flex: [0, 90] },
      hipR: { flex: [0, 90] },
      kneeL: { flex: [0, 5] },
      kneeR: { flex: [0, 5] },
      spine: { flex: [0, 5] },
      shoulderL: { flex: [0, 5] },
      shoulderR: { flex: [0, 5] },
      elbowL: { flex: [10, 10] },
      elbowR: { flex: [10, 10] }
    }
  },
"Overhead Lat Stretch": {
  tempo: 3.5,
  view: "front",
  camDist: 4.0, camY: 1.0,
  highlight: ['torso', 'upperArmR'],
  preparation: "Stand tall with feet hip-width apart and one arm relaxed at your side.",
  execution: "Reach the opposite arm straight overhead and gently lean your torso away from that arm. Hold the side bend to lengthen the lat, then ease back to center.",
  joints: {
    shoulderR: { flex: [170, 180], abd: [10, 15] },
    shoulderL: { flex: [5, 5], abd: [8, 8] },
    elbowL: { flex: [10, 10] },
    elbowR: { flex: [5, 10] },
    spine: { flex: [0, -10], twist: [0, 0] },
    hipL: { flex: [0, 0] },
    hipR: { flex: [0, 0] },
    kneeL: { flex: [0, 0] },
    kneeR: { flex: [0, 0] }
  }
},
"Child's Pose Lat Stretch": {
  tempo: 4.0,
  view: "side",
  prone: true,
  highlight: ['torso'],
  preparation: "Kneel on the floor with your hips sitting back toward your heels.",
  execution: "Fold your torso forward and walk your hands overhead along the floor. Gently shift the hands to one side to deepen the lat stretch, then ease back.",
  rootY: [-0.35, -0.38],
  joints: {
    hipL: { flex: [100, 110] },
    hipR: { flex: [100, 110] },
    kneeL: { flex: [130, 135] },
    kneeR: { flex: [130, 135] },
    shoulderL: { flex: [160, 170], abd: [8, 12] },
    shoulderR: { flex: [160, 170], abd: [8, 12] },
    elbowL: { flex: [5, 10] },
    elbowR: { flex: [5, 10] },
    spine: { flex: [40, 50] }
  }
},
"Child's Pose": {
  tempo: 4.0,
  view: "side",
  prone: true,
  highlight: ['torso'],
  preparation: "Kneel on the floor and sit your hips back toward your heels.",
  execution: "Fold your torso forward so your forehead rests toward the floor and extend both arms straight ahead. Breathe into the lower back and gently ease the stretch.",
  rootY: [-0.35, -0.38],
  joints: {
    hipL: { flex: [95, 105] },
    hipR: { flex: [95, 105] },
    kneeL: { flex: [130, 135] },
    kneeR: { flex: [130, 135] },
    shoulderL: { flex: [140, 150], abd: [8, 10] },
    shoulderR: { flex: [140, 150], abd: [8, 10] },
    elbowL: { flex: [10, 15] },
    elbowR: { flex: [10, 15] },
    spine: { flex: [35, 45] }
  }
},
"Cat-Cow": {
  tempo: 3.5,
  view: "side",
  prone: true,
  highlight: ['torso'],
  preparation: "Start on all fours with wrists under shoulders and knees under hips.",
  execution: "Slowly round your spine upward into cat, then reverse into cow by dipping the belly and lifting the chest. Move gently with your breath between the two shapes.",
  joints: {
    hipL: { flex: [80, 90] },
    hipR: { flex: [80, 90] },
    kneeL: { flex: [85, 95] },
    kneeR: { flex: [85, 95] },
    shoulderL: { flex: [85, 95], abd: [8, 10] },
    shoulderR: { flex: [85, 95], abd: [8, 10] },
    elbowL: { flex: [5, 10] },
    elbowR: { flex: [5, 10] },
    spine: { flex: [-20, 25] }
  }
},
"Cross-Body Arm Stretch": {
  tempo: 3.0,
  view: "front",
  highlight: ['upperArmR', 'torso'],
  preparation: "Stand upright with one arm extended across your chest.",
  execution: "Use the opposite hand to gently pull the straight arm closer to your body. Hold the stretch across the rear shoulder and upper back, then ease the arm back out.",
  joints: {
    shoulderR: { flex: [85, 90], abd: [-25, -30] },
    shoulderL: { flex: [40, 45], abd: [8, 12] },
    elbowR: { flex: [5, 10] },
    elbowL: { flex: [90, 100] },
    spine: { flex: [0, 5] },
    hipL: { flex: [0, 0] },
    hipR: { flex: [0, 0] },
    kneeL: { flex: [0, 0] },
    kneeR: { flex: [0, 0] }
  }
},
"Thread the Needle": {
  tempo: 3.5,
  view: "front",
  prone: true,
  highlight: ['torso', 'upperArmR'],
  preparation: "Begin on all fours with a neutral spine.",
  execution: "Thread one arm under your torso and lower that shoulder toward the floor while the other arm stays planted. Rotate gently through the upper back, then unwind back to center.",
  joints: {
    hipL: { flex: [85, 90] },
    hipR: { flex: [85, 90] },
    kneeL: { flex: [90, 95] },
    kneeR: { flex: [90, 95] },
    shoulderR: { flex: [60, 80], abd: [-30, -40] },
    shoulderL: { flex: [85, 90], abd: [8, 10] },
    elbowR: { flex: [10, 20] },
    elbowL: { flex: [5, 10] },
    spine: { flex: [10, 20], twist: [0, 35] }
  }
},
"Doorway Chest Opener": {
  tempo: 3.5,
  view: "front",
  highlight: ['torso'],
  preparation: "Stand in a doorway with both forearms resting on the frame at shoulder height.",
  execution: "Gently lean your chest forward so the shoulders open and the upper back lengthens. Hold the stretch through the front of the chest, then ease back upright.",
  joints: {
    shoulderL: { flex: [85, 90], abd: [75, 85] },
    shoulderR: { flex: [85, 90], abd: [75, 85] },
    elbowL: { flex: [85, 90] },
    elbowR: { flex: [85, 90] },
    spine: { flex: [-5, -12] },
    hipL: { flex: [5, 10] },
    hipR: { flex: [5, 10] },
    kneeL: { flex: [5, 8] },
    kneeR: { flex: [5, 8] }
  }
},
"Eagle Arms": {
  tempo: 3.0,
  view: "front",
  highlight: ['upperArmL', 'upperArmR', 'torso'],
  preparation: "Stand tall and cross one arm under the other in front of your chest.",
  execution: "Wrap the arms and lift the elbows while drawing the hands toward each other. Hold the stretch between the shoulder blades, then slowly unwind.",
  joints: {
    shoulderL: { flex: [75, 85], abd: [-20, -25] },
    shoulderR: { flex: [75, 85], abd: [-20, -25] },
    elbowL: { flex: [95, 105] },
    elbowR: { flex: [95, 105] },
    spine: { flex: [10, 15] },
    hipL: { flex: [0, 0] },
    hipR: { flex: [0, 0] },
    kneeL: { flex: [0, 0] },
    kneeR: { flex: [0, 0] }
  }
},
"Child's Pose Side Bend": {
  tempo: 4.0,
  view: "side",
  prone: true,
  highlight: ['torso'],
  preparation: "Kneel and sit the hips back into child's pose with arms extended forward.",
  execution: "Walk both hands toward one side so the torso lengthens laterally. Hold the side stretch through the back and ribs, then ease the hands back to center.",
  rootY: [-0.35, -0.38],
  joints: {
    hipL: { flex: [100, 110] },
    hipR: { flex: [100, 110] },
    kneeL: { flex: [130, 135] },
    kneeR: { flex: [130, 135] },
    shoulderL: { flex: [150, 165], abd: [25, 35] },
    shoulderR: { flex: [150, 165], abd: [25, 35] },
    elbowL: { flex: [8, 12] },
    elbowR: { flex: [8, 12] },
    spine: { flex: [40, 50], twist: [0, 20] }
  }
},
"Deep Breathing Expansion": {
  tempo: 4.0,
  view: "front",
  highlight: ['torso'],
  preparation: "Sit upright with both hands resting lightly on your lower ribs.",
  execution: "Inhale slowly to expand the ribcage outward and upward, then exhale to release. Keep the movement minimal and smooth so the breath itself creates the gentle stretch.",
  joints: {
    hipL: { flex: [85, 90] },
    hipR: { flex: [85, 90] },
    kneeL: { flex: [85, 90] },
    kneeR: { flex: [85, 90] },
    shoulderL: { flex: [25, 35], abd: [20, 30] },
    shoulderR: { flex: [25, 35], abd: [20, 30] },
    elbowL: { flex: [70, 80] },
    elbowR: { flex: [70, 80] },
    spine: { flex: [-5, 8] }
  }
},
"Figure-4 Stretch": {
  tempo: 3.5,
  view: "side",
  supine: true,
  highlight: ['thighR'],
  preparation: "Lie on your back and cross one ankle over the opposite knee.",
  execution: "Gently pull the bottom leg toward your chest to deepen the stretch in the glute. Hold and breathe, then ease the leg back out.",
  joints: {
    hipR: { flex: [45, 55], abd: [30, 40] },
    kneeR: { flex: [90, 100] },
    hipL: { flex: [70, 85] },
    kneeL: { flex: [90, 100] },
    shoulderL: { flex: [20, 30], abd: [8, 10] },
    shoulderR: { flex: [20, 30], abd: [8, 10] },
    elbowL: { flex: [80, 90] },
    elbowR: { flex: [80, 90] }
  }
},
"Standing Quad Stretch": {
  tempo: 3.0,
  view: "side",
  highlight: ['thighR'],
  preparation: "Stand on one leg and reach back to hold the opposite foot.",
  execution: "Pull the heel toward your glute while keeping the knees close together. Hold the stretch through the front of the thigh, then slowly release.",
  joints: {
    hipL: { flex: [0, 0] },
    kneeL: { flex: [0, 5] },
    hipR: { flex: [-5, -15] },
    kneeR: { flex: [120, 135] },
    shoulderR: { flex: [10, 15], abd: [8, 10] },
    elbowR: { flex: [60, 80] },
    shoulderL: { flex: [5, 10], abd: [20, 30] },
    elbowL: { flex: [10, 15] },
    spine: { flex: [0, 5] }
  }
},
"Pigeon Pose": {
  tempo: 4.0,
  view: "side",
  prone: true,
  highlight: ['thighL'],
  preparation: "From all fours, bring one shin across the body and extend the back leg behind you.",
  execution: "Settle the hips and gently fold the torso forward over the front leg. Hold the deep hip and glute stretch, then ease back upright.",
  rootY: [-0.30, -0.33],
  joints: {
    hipL: { flex: [70, 80], abd: [40, 50] },
    kneeL: { flex: [90, 100] },
    hipR: { flex: [-15, -20] },
    kneeR: { flex: [0, 5] },
    spine: { flex: [10, 25] },
    shoulderL: { flex: [60, 75], abd: [8, 12] },
    shoulderR: { flex: [60, 75], abd: [8, 12] },
    elbowL: { flex: [10, 15] },
    elbowR: { flex: [10, 15] }
  }
},
"Standing Hamstring Stretch": {
  tempo: 3.5,
  view: "side",
  highlight: ['thighR', 'shinR'],
  preparation: "Stand with one heel forward on the ground and the opposite leg supporting you.",
  execution: "Hinge at the hips and reach toward the front toes while keeping that leg straight. Hold the stretch along the back of the thigh, then rise slowly.",
  joints: {
    hipR: { flex: [40, 50] },
    kneeR: { flex: [0, 5] },
    hipL: { flex: [0, 0] },
    kneeL: { flex: [0, 5] },
    spine: { flex: [30, 45] },
    shoulderL: { flex: [70, 90], abd: [8, 10] },
    shoulderR: { flex: [70, 90], abd: [8, 10] },
    elbowL: { flex: [5, 10] },
    elbowR: { flex: [5, 10] }
  }
},
"Wall Calf Stretch": {
  tempo: 3.5,
  view: "side",
  highlight: ['shinR'],
  preparation: "Place both hands on a wall and step one leg back with the heel down.",
  execution: "Lean gently forward while keeping the back knee straight and the heel pressed into the floor. Hold the stretch through the calf, then ease off.",
  joints: {
    hipL: { flex: [25, 35] },
    kneeL: { flex: [30, 40] },
    hipR: { flex: [-15, -20] },
    kneeR: { flex: [0, 5] },
    shoulderL: { flex: [75, 85], abd: [8, 12] },
    shoulderR: { flex: [75, 85], abd: [8, 12] },
    elbowL: { flex: [10, 15] },
    elbowR: { flex: [10, 15] },
    spine: { flex: [10, 15] }
  }
},
"Butterfly Stretch": {
  tempo: 3.5,
  view: "front",
  highlight: ['thighL', 'thighR'],
  preparation: "Sit on the floor and bring the soles of your feet together.",
  execution: "Let the knees drop outward and gently hinge forward from the hips. Hold the stretch through the inner thighs, then sit back upright.",
  joints: {
    hipL: { flex: [85, 90], abd: [45, 55] },
    hipR: { flex: [85, 90], abd: [45, 55] },
    kneeL: { flex: [95, 105] },
    kneeR: { flex: [95, 105] },
    spine: { flex: [5, 15] },
    shoulderL: { flex: [35, 45], abd: [10, 15] },
    shoulderR: { flex: [35, 45], abd: [10, 15] },
    elbowL: { flex: [40, 50] },
    elbowR: { flex: [40, 50] }
  }
},
"Kneeling Hip-Flexor Stretch": {
  tempo: 3.5,
  view: "side",
  highlight: ['thighR'],
  preparation: "Kneel on one knee with the front foot planted and the torso upright.",
  execution: "Gently shift the hips forward while keeping the back knee down and the chest tall. Hold the stretch through the front of the hip, then ease back.",
  rootY: [-0.25, -0.28],
  joints: {
    hipL: { flex: [85, 90] },
    kneeL: { flex: [85, 95] },
    hipR: { flex: [-10, -15] },
    kneeR: { flex: [85, 95] },
    spine: { flex: [-5, -10] },
    shoulderL: { flex: [40, 50], abd: [8, 12] },
    shoulderR: { flex: [40, 50], abd: [8, 12] },
    elbowL: { flex: [30, 40] },
    elbowR: { flex: [30, 40] }
  }
},
"Side-Lunge Stretch": {
  tempo: 3.5,
  view: "front",
  highlight: ['thighR'],
  preparation: "Stand in a wide stance with both feet pointing forward.",
  execution: "Shift your weight to one side, bending that knee while keeping the opposite leg straight. Hold the stretch along the inner thigh of the straight leg, then return to center.",
  joints: {
    hipL: { flex: [40, 50], abd: [25, 35] },
    kneeL: { flex: [85, 95] },
    hipR: { flex: [5, 10], abd: [35, 45] },
    kneeR: { flex: [0, 5] },
    spine: { flex: [5, 10] },
    shoulderL: { flex: [30, 40], abd: [15, 25] },
    shoulderR: { flex: [30, 40], abd: [15, 25] },
    elbowL: { flex: [20, 30] },
    elbowR: { flex: [20, 30] }
  }
},
"Lying Hamstring Stretch": {
  tempo: 3.5,
  view: "side",
  supine: true,
  highlight: ['thighR', 'shinR'],
  preparation: "Lie on your back and lift one leg straight toward the ceiling.",
  execution: "Hold behind the thigh and gently draw the leg closer while keeping the knee mostly straight. Hold the stretch along the back of the leg, then lower slowly.",
  joints: {
    hipR: { flex: [75, 90] },
    kneeR: { flex: [0, 10] },
    hipL: { flex: [0, 5] },
    kneeL: { flex: [0, 5] },
    shoulderL: { flex: [30, 45], abd: [8, 12] },
    shoulderR: { flex: [30, 45], abd: [8, 12] },
    elbowL: { flex: [60, 75] },
    elbowR: { flex: [60, 75] }
  }
},
"Downward Dog": {
  tempo: 4.0,
  view: "side",
  prone: true,
  highlight: ['shinL', 'shinR', 'thighL', 'thighR'],
  preparation: "Start on all fours and lift the hips up and back.",
  execution: "Straighten the legs and press the heels toward the floor while lengthening the spine. Hold the full posterior-chain stretch, then gently ease the hips down.",
  rootY: [0.15, 0.20],
  joints: {
    hipL: { flex: [85, 95] },
    hipR: { flex: [85, 95] },
    kneeL: { flex: [0, 5] },
    kneeR: { flex: [0, 5] },
    shoulderL: { flex: [150, 165], abd: [8, 12] },
    shoulderR: { flex: [150, 165], abd: [8, 12] },
    elbowL: { flex: [5, 10] },
    elbowR: { flex: [5, 10] },
    spine: { flex: [15, 20] }
  }
}
};
