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
    rootY: [0, -0.28],
    highlight: ['torso', 'upperArmL', 'upperArmR'],
    preparation: "Start in a plank position with hands under your shoulders and body in a straight line.",
    execution: "Lower your body toward the ground by bending your elbows. Push back up to the starting position.",
    joints: {
      hipL: { flex: [0, 0] },
      hipR: { flex: [0, 0] },
      kneeL: { flex: [0, 5] },
      kneeR: { flex: [0, 5] },
      spine: { flex: [0, 0] },
      shoulderL: { flex: [0, 0], abd: [45, 45] },
      shoulderR: { flex: [0, 0], abd: [45, 45] },
      elbowL: { flex: [10, 95] },
      elbowR: { flex: [10, 95] }
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
  }
};
