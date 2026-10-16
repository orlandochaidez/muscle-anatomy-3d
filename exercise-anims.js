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
    rootY: [-0.35, 0],
    preparation: "Stand with feet roughly shoulder-width apart, toes slightly out, and arms extended forward for balance.",
    execution: "Sit the hips back and down, bending the knees to lower until the thighs are near parallel to the ground. Keep the chest up and knees tracking over the toes, then drive through the heels to stand.",
    joints: {
      hipL: { flex: [0, 75] },
      hipR: { flex: [0, 75] },
      kneeL: { flex: [5, 95] },
      kneeR: { flex: [5, 95] },
      spine: { flex: [0, 15] },
      shoulderL: { flex: [0, 45] },
      shoulderR: { flex: [0, 45] }
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
};
