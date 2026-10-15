// Muscle info data for the 3D muscle viewer.
// Keys match the mesh names in muscles.glb exactly.
// Phase 1: text-only stretches + workouts. Phase 2 will add animations.

const MUSCLE_DATA = {
  sternocleidomastoid: {
    name: "Sternocleidomastoid",
    region: "Neck",
    layer: "surface",
    function: "Turns your head side to side and tilts it, and helps bend your neck forward. The thick strap you feel on the side of your neck.",
    stretches: [
      { name: "Ear-to-shoulder tilt", how: "Sit tall, slowly tilt your right ear toward your right shoulder until you feel a stretch on the left side of your neck. Hold 20-30 seconds, then switch sides." },
      { name: "Chin-tuck head turn", how: "Tuck your chin slightly back, then slowly turn your head to look over one shoulder. Hold 20 seconds each side. Keep shoulders relaxed and down." }
    ],
    workouts: [
      { name: "Neck isometric hold", how: "Place your palm on your forehead and gently push your head into your hand without letting it move. Hold 10 seconds. Repeat on each side and the back of your head." },
      { name: "Controlled head turns", how: "Slowly turn your head left and right through a comfortable range, pausing 2 seconds at each end. 10 reps per side. Keep the motion smooth, never jerky." }
    ]
  },
  trapezius: {
    name: "Trapezius",
    region: "Back / Neck",
    layer: "surface",
    function: "The big kite-shaped muscle across your upper back and neck. Shrugs your shoulders, pulls shoulder blades together, and stabilizes your neck.",
    stretches: [
      { name: "Upper-trap stretch", how: "Sit tall, tilt your right ear toward your right shoulder and gently press with your right hand for a deeper stretch. Hold 30 seconds per side." },
      { name: "Cross-body shoulder stretch", how: "Bring your right arm across your chest and hold it with your left hand just above the elbow. Hold 30 seconds per side to open the mid-traps." }
    ],
    workouts: [
      { name: "Dumbbell shrugs", how: "Hold a dumbbell in each hand at your sides, lift your shoulders straight up toward your ears, squeeze for 2 seconds, lower slowly. 3 sets of 12-15." },
      { name: "Face pulls", how: "Using a cable or band at face height, pull toward your forehead with elbows high and wide, squeezing your shoulder blades together. 3 sets of 12." }
    ]
  },
  deltoid: {
    name: "Deltoid",
    region: "Shoulders",
    layer: "surface",
    function: "The round cap over your shoulder. Lifts your arm out to the side, forward, and behind you. Gives shoulders their width.",
    stretches: [
      { name: "Cross-body shoulder stretch", how: "Pull one arm straight across your chest with the other hand and hold 30 seconds per side. Keep the stretched shoulder pulled down away from your ear." },
      { name: "Behind-the-back chest opener", how: "Clasp your hands behind your back and straighten your arms, lifting them slightly while opening your chest. Hold 30 seconds." }
    ],
    workouts: [
      { name: "Overhead press", how: "Press dumbbells from shoulder height straight overhead until arms are extended, then lower with control. 3 sets of 8-12." },
      { name: "Lateral raises", how: "With light dumbbells at your sides, raise your arms out to shoulder height with a slight elbow bend, then lower slowly. 3 sets of 12-15." },
      { name: "Front raises", how: "Raise one or both dumbbells straight in front of you to shoulder height, then lower slowly. 3 sets of 12." }
    ]
  },
  pectoralis_major: {
    name: "Pectoralis Major",
    region: "Chest",
    layer: "surface",
    function: "The big chest muscle. Pushes your arms forward and across your body — the main driver of push-ups and bench press.",
    stretches: [
      { name: "Doorway chest stretch", how: "Place your forearms on each side of a doorway, step one foot through and lean forward until you feel a stretch across your chest. Hold 30 seconds." },
      { name: "Wall chest stretch", how: "Stand sideways to a wall, place your palm flat on it at shoulder height, and slowly turn your body away until you feel the stretch. 30 seconds per side." }
    ],
    workouts: [
      { name: "Push-ups", how: "Hands under shoulders, body in a straight line, lower your chest to just above the floor and press back up. 3 sets to near-failure." },
      { name: "Dumbbell bench press", how: "Lying on a bench, press dumbbells from chest height straight up until arms are extended, then lower slowly. 3 sets of 8-12." },
      { name: "Chest fly", how: "Lying on a bench with a slight elbow bend, open your arms wide like hugging a tree, then bring the weights back together over your chest. 3 sets of 10-12." }
    ]
  },
  serratus_anterior: {
    name: "Serratus Anterior",
    region: "Chest / Ribs",
    layer: "surface",
    function: "The finger-like muscle along your ribs under your armpit. Punches your shoulder blade forward and keeps it glued to your rib cage — key for healthy shoulders.",
    stretches: [
      { name: "Thread the needle", how: "On all fours, slide your right arm under your left until your right shoulder rests on the floor. Hold 30 seconds per side." },
      { name: "Wall serratus stretch", how: "Face a wall, place one hand flat on it, and lean your body weight through that arm while rotating your torso away. Hold 30 seconds per side." }
    ],
    workouts: [
      { name: "Scapular push-ups (push-up plus)", how: "In a push-up position, keep arms straight and let your chest sink between your shoulders, then push the floor away to round your upper back. 3 sets of 12." },
      { name: "Straight-arm punches", how: "Hold a light dumbbell or band handle and punch straight forward, reaching the shoulder blade forward at the end. 3 sets of 15 per arm." }
    ]
  },
  rectus_abdominis: {
    name: "Rectus Abdominis",
    region: "Core",
    layer: "surface",
    function: "The 'six-pack' muscle running down the front of your belly. Bends your trunk forward and braces your midsection.",
    stretches: [
      { name: "Cobra stretch", how: "Lie face down, place your hands under your shoulders, and press your chest up while keeping your hips on the floor. Hold 20-30 seconds." },
      { name: "Standing back extension", how: "Stand tall, place your hands on your lower back, and gently lean backward. Hold 10-15 seconds, repeat 3 times." }
    ],
    workouts: [
      { name: "Crunches", how: "Lie on your back, knees bent, and curl your shoulders a few inches off the floor, squeezing your abs at the top. 3 sets of 15-20." },
      { name: "Hanging or lying leg raises", how: "Hang from a bar (or lie on your back) and raise your legs until your hips bend 90 degrees, then lower slowly. 3 sets of 10-12." },
      { name: "Plank", how: "Hold a forearm plank with your body in a straight line, bracing your abs hard. 3 holds of 30-60 seconds." }
    ]
  },
  external_oblique: {
    name: "External Oblique",
    region: "Core",
    layer: "surface",
    function: "The side-abs. Twist and side-bend your trunk, and help brace your core during heavy lifts.",
    stretches: [
      { name: "Standing side bend", how: "Stand tall, raise your right arm overhead and lean to the left until you feel a stretch down your right side. Hold 30 seconds per side." },
      { name: "Lying trunk rotation", how: "Lie on your back with arms out, drop both bent knees to one side while keeping shoulders on the floor. Hold 30 seconds per side." }
    ],
    workouts: [
      { name: "Russian twists", how: "Sit leaning back slightly, feet off the floor if you can, and rotate your torso side to side touching the floor each way. 3 sets of 20 total." },
      { name: "Side plank", how: "On one forearm with your body in a straight line, hold 30-45 seconds per side, keeping hips lifted." },
      { name: "Bicycle crunches", how: "Lie on your back and alternate bringing opposite elbow to knee in a pedaling motion. 3 sets of 20 total." }
    ]
  },
  latissimus_dorsi: {
    name: "Latissimus Dorsi",
    region: "Back",
    layer: "surface",
    function: "The big 'wings' of your back. Pull your arms down and back — the main muscle behind pull-ups and rows.",
    stretches: [
      { name: "Overhead lat stretch", how: "Grab a doorframe or pole overhead with both hands and lean your hips back and away until you feel a deep stretch under your arms. Hold 30 seconds." },
      { name: "Child's pose lat stretch", how: "Kneel and reach both hands forward on the floor, then walk them to the right to stretch the left lat. Hold 30 seconds per side." }
    ],
    workouts: [
      { name: "Pull-ups", how: "Hang from a bar and pull your chest up to it, then lower with control. Use a band or assisted machine if needed. 3 sets to near-failure." },
      { name: "Bent-over rows", how: "Hinge at the hips with a flat back and row a barbell or dumbbells to your lower ribs, squeezing your shoulder blades. 3 sets of 8-12." },
      { name: "Lat pulldown", how: "Pull the bar down to your upper chest while keeping your torso upright, then let it rise slowly. 3 sets of 10-12." }
    ]
  },
  biceps_brachii: {
    name: "Biceps Brachii",
    region: "Arms",
    layer: "surface",
    function: "The front of your upper arm. Bends your elbow and helps twist your palm upward.",
    stretches: [
      { name: "Wall biceps stretch", how: "Place your palm flat on a wall behind you at shoulder height with fingers pointing back, then gently turn your body away. Hold 30 seconds per arm." },
      { name: "Behind-the-back clasp", how: "Clasp your hands behind your back, straighten your arms, and lift them while turning your palms down. Hold 30 seconds." }
    ],
    workouts: [
      { name: "Dumbbell curls", how: "Curl dumbbells from your sides up to shoulder height, keeping elbows pinned to your ribs. Lower slowly. 3 sets of 10-12." },
      { name: "Chin-ups", how: "Hang from a bar with palms facing you and pull your chin over the bar. 3 sets to near-failure." },
      { name: "Hammer curls", how: "Curl dumbbells with palms facing each other like holding hammers. 3 sets of 10-12." }
    ]
  },
  triceps_brachii: {
    name: "Triceps Brachii",
    region: "Arms",
    layer: "surface",
    function: "The back of your upper arm — actually bigger than the biceps. Straightens your elbow and powers pressing moves.",
    stretches: [
      { name: "Overhead triceps stretch", how: "Reach one hand down your back between your shoulder blades and gently press the elbow down with your other hand. Hold 30 seconds per arm." },
      { name: "Cross-body triceps stretch", how: "Bend one elbow behind your head and use the other hand to pull the elbow toward the center. Hold 30 seconds per arm." }
    ],
    workouts: [
      { name: "Triceps dips", how: "On parallel bars or a bench behind you, lower your body by bending your elbows to 90 degrees, then press back up. 3 sets of 10-12." },
      { name: "Overhead dumbbell extension", how: "Hold one dumbbell overhead with both hands, lower it behind your head by bending your elbows, then press back up. 3 sets of 10-12." },
      { name: "Close-grip push-ups", how: "Do push-ups with hands directly under your chest in a diamond or narrow position. 3 sets to near-failure." }
    ]
  },
  brachioradialis: {
    name: "Brachioradialis",
    region: "Arms",
    layer: "surface",
    function: "The thick muscle on top of your forearm near the elbow. Helps bend the elbow, especially when your palm faces inward.",
    stretches: [
      { name: "Prayer stretch", how: "Press your palms together in front of your chest with fingers up, then slowly lower your hands while keeping palms together. Hold 20-30 seconds." },
      { name: "Wrist flexor stretch", how: "Extend one arm forward palm-up and gently pull the fingers back with your other hand. Hold 30 seconds per arm." }
    ],
    workouts: [
      { name: "Hammer curls", how: "Curl dumbbells with a neutral grip (palms facing each other). 3 sets of 10-12." },
      { name: "Reverse curls", how: "Curl a barbell or dumbbells with palms facing down. Keep it light and controlled. 3 sets of 12." }
    ]
  },
  extensor_digitorum: {
    name: "Extensor Digitorum",
    region: "Arms",
    layer: "surface",
    function: "Runs along the top of your forearm and straightens your fingers and wrist. Works hard during gripping and pulling.",
    stretches: [
      { name: "Wrist extensor stretch", how: "Extend one arm forward palm-down and gently press the back of your hand down with the other hand. Hold 30 seconds per arm." },
      { name: "Fist-to-fan", how: "Make a tight fist, hold 5 seconds, then spread your fingers as wide as possible and hold 5 seconds. Repeat 10 times." }
    ],
    workouts: [
      { name: "Reverse wrist curls", how: "Rest your forearms on your thighs, palms down, and curl a light dumbbell upward with your wrists only. 3 sets of 15." },
      { name: "Rubber-band finger extensions", how: "Loop a rubber band around your fingertips and open your hand against the resistance. 3 sets of 15." }
    ]
  },
  gluteus_maximus: {
    name: "Gluteus Maximus",
    region: "Glutes",
    layer: "surface",
    function: "The biggest muscle in your body — your butt. Drives your hips forward in squats, sprints, and climbs.",
    stretches: [
      { name: "Figure-4 stretch", how: "Lie on your back, cross your right ankle over your left knee, and pull the left thigh toward you. Hold 30 seconds per side." },
      { name: "Pigeon pose", how: "From a plank, bring your right knee forward behind your right wrist and sink your hips down. Hold 30-60 seconds per side." }
    ],
    workouts: [
      { name: "Barbell squats", how: "With the bar on your upper back, sit your hips back and down until thighs are parallel, then drive up through your heels. 3-4 sets of 6-10." },
      { name: "Hip thrusts", how: "With your upper back on a bench and a barbell over your hips, thrust your hips up and squeeze your glutes hard at the top. 3 sets of 10-12." },
      { name: "Glute bridges", how: "Lie on your back, feet flat, and lift your hips until your body forms a straight line from shoulders to knees. 3 sets of 15." }
    ]
  },
  rectus_femoris: {
    name: "Rectus Femoris",
    region: "Legs (Front)",
    layer: "surface",
    function: "The middle quad muscle on the front of your thigh. Straightens your knee and lifts your thigh — key for squats, lunges, and kicking.",
    stretches: [
      { name: "Standing quad stretch", how: "Stand on one leg, pull your other foot toward your butt with the same-side hand, keeping knees together. Hold 30 seconds per leg." },
      { name: "Kneeling hip-flexor stretch", how: "Kneel on one knee with the other foot forward, tuck your pelvis and shift forward until you feel the front of the hip and thigh stretch. 30 seconds per side." }
    ],
    workouts: [
      { name: "Squats", how: "Feet shoulder-width, sit hips back and down to at least parallel, then drive up. 3-4 sets of 8-12." },
      { name: "Walking lunges", how: "Step forward and lower until both knees bend 90 degrees, then step through to the next lunge. 3 sets of 10 per leg." },
      { name: "Leg press", how: "Press the platform away until legs are nearly straight (don't lock knees), then lower with control. 3 sets of 10-12." }
    ]
  },
  vastus_lateralis: {
    name: "Vastus Lateralis",
    region: "Legs (Front)",
    layer: "surface",
    function: "The outer quad on the side of your thigh. The largest quad head — a huge driver of knee extension in squats and leg press.",
    stretches: [
      { name: "Standing quad stretch", how: "Pull your foot to your butt while standing, keeping knees together and torso upright. Hold 30 seconds per leg." },
      { name: "Side-lying quad stretch", how: "Lie on your side, grab the top ankle, and pull the foot to your butt. 30 seconds per leg — easier on balance than standing." }
    ],
    workouts: [
      { name: "Squats", how: "Sit back and down to parallel or below, keeping knees tracking over toes. 3-4 sets of 8-12." },
      { name: "Leg extensions", how: "On the machine, extend your knees fully against the pad and squeeze for 1 second at the top. 3 sets of 12-15." },
      { name: "Bulgarian split squats", how: "Rear foot on a bench, lower your front thigh to parallel, then drive up. 3 sets of 8-10 per leg." }
    ]
  },
  vastus_medialis: {
    name: "Vastus Medialis",
    region: "Legs (Front)",
    layer: "surface",
    function: "The teardrop-shaped quad just above the inside of your knee. Finishes knee extension and helps track the kneecap properly.",
    stretches: [
      { name: "Standing quad stretch", how: "Hold a wall for balance, pull your foot to your butt, knees together. Hold 30 seconds per leg." },
      { name: "Prone quad stretch", how: "Lie face down and pull one foot to your butt with a strap or your hand. 30 seconds per leg." }
    ],
    workouts: [
      { name: "Deep squats", how: "Squat below parallel — the deeper range hits the VMO hardest. Keep it controlled. 3 sets of 8-10." },
      { name: "Step-ups", how: "Step onto a bench or box with one foot and drive up through the heel, then lower slowly. 3 sets of 10 per leg." },
      { name: "Terminal knee extensions", how: "With a band looped behind your knee anchored to something sturdy, straighten your knee against the band's pull. 3 sets of 15 per leg." }
    ]
  },
  sartorius: {
    name: "Sartorius",
    region: "Legs (Front)",
    layer: "surface",
    function: "The longest muscle in the body, running diagonally across your thigh. Helps lift the knee and rotate the leg outward — like crossing your legs.",
    stretches: [
      { name: "Butterfly stretch", how: "Sit with the soles of your feet together, hold your feet, and gently press your knees toward the floor. Hold 30 seconds." },
      { name: "Kneeling hip-flexor stretch", how: "Half-kneeling, tuck your pelvis under and shift forward. 30 seconds per side — this opens the whole front of the hip." }
    ],
    workouts: [
      { name: "Lateral lunges", how: "Step wide to the side, sit your hips back over that leg, then push back to center. 3 sets of 10 per side." },
      { name: "Compound leg work", how: "The sartorius can't be isolated well — squats, lunges, and step-ups train it along with the rest of the thigh. Pick 2-3 and train them hard." }
    ]
  },
  adductor_longus: {
    name: "Adductor Longus",
    region: "Legs (Inner)",
    layer: "surface",
    function: "One of the inner-thigh muscles. Pulls your legs together and helps stabilize the pelvis when you squat or run.",
    stretches: [
      { name: "Butterfly stretch", how: "Soles of feet together, knees dropping toward the floor. Lean forward slightly for a deeper stretch. Hold 30-45 seconds." },
      { name: "Side-lunge stretch", how: "Take a wide stance and shift your weight to one side, keeping the other leg straight, until you feel the inner thigh stretch. 30 seconds per side." }
    ],
    workouts: [
      { name: "Sumo squats", how: "Wide stance with toes out, squat down keeping knees over toes, then drive up. 3 sets of 10-12." },
      { name: "Side lunges", how: "Step out to the side and sit back into the hip, keeping the trailing leg straight. 3 sets of 10 per side." },
      { name: "Copenhagen plank", how: "Side plank with your top leg on a bench — brutal for the adductors. Hold 20-30 seconds per side, 3 rounds." }
    ]
  },
  biceps_femoris: {
    name: "Biceps Femoris",
    region: "Legs (Back)",
    layer: "surface",
    function: "The outer hamstring on the back of your thigh. Bends your knee and extends your hip — powers sprinting and deadlifts.",
    stretches: [
      { name: "Standing toe touch", how: "With a slight knee bend, hinge at the hips and reach toward your toes until you feel the back of your thighs stretch. Hold 30 seconds." },
      { name: "Lying hamstring stretch", how: "Lie on your back, loop a strap around one foot, and straighten the leg toward the ceiling. 30 seconds per leg." }
    ],
    workouts: [
      { name: "Romanian deadlifts", how: "Hinge at the hips with a slight knee bend, lowering the bar along your legs until you feel a deep hamstring stretch, then drive hips forward. 3 sets of 8-12." },
      { name: "Lying leg curls", how: "Curl the pad toward your butt, squeezing the hamstrings hard at the top. 3 sets of 12-15." },
      { name: "Good mornings", how: "Bar on your upper back, hinge forward with a soft knee bend, then stand tall. Start light. 3 sets of 10." }
    ]
  },
  gastrocnemius: {
    name: "Gastrocnemius",
    region: "Legs (Calves)",
    layer: "surface",
    function: "The big two-headed calf muscle you see. Pushes you up onto your toes and helps bend the knee — the spring in your step.",
    stretches: [
      { name: "Wall calf stretch (straight knee)", how: "Face a wall, step one foot back with the knee straight and heel pressed down. Lean in. Hold 30 seconds per leg." },
      { name: "Downward dog", how: "In a downward-dog position, pedal your heels toward the floor one at a time. Hold the stretch 30 seconds." }
    ],
    workouts: [
      { name: "Standing calf raises", how: "Rise up onto your toes, pause 2 seconds at the top, lower slowly below the step. 4 sets of 12-15." },
      { name: "Jump rope", how: "3 rounds of 1-2 minutes. The repeated push-off hammers the calves and builds endurance." }
    ]
  },
  soleus: {
    name: "Soleus",
    region: "Legs (Calves)",
    layer: "surface",
    function: "The deep calf muscle under the gastrocnemius. Works hardest when your knee is bent — key for walking, running, and posture.",
    stretches: [
      { name: "Wall calf stretch (bent knee)", how: "Same as the straight-knee version, but bend the back knee slightly — you'll feel the stretch lower and deeper in the calf. 30 seconds per leg." },
      { name: "Half-kneeling soleus stretch", how: "Kneel with one foot flat in front, and drive that knee forward over your toes while keeping the heel down. 30 seconds per leg." }
    ],
    workouts: [
      { name: "Seated calf raises", how: "With weight on your knees, rise onto your toes and squeeze. The bent knee takes the gastrocnemius out and hits the soleus. 4 sets of 12-15." },
      { name: "Bent-knee standing calf raises", how: "Do standing calf raises with a soft knee bend to shift the work to the soleus. 3 sets of 15." }
    ]
  },
  gluteus_medius: {
    name: "Gluteus Medius",
    region: "Glutes",
    layer: "deep",
    function: "The side-butt muscle hiding under the glute max. Keeps your hips level every step you take — weak ones cause knee cave and hip drop when you run or squat.",
    stretches: [
      { name: "Figure-4 stretch", how: "Lie on your back, cross your right ankle over your left knee, then pull the left thigh toward your chest until you feel a deep stretch in the right glute. Hold 30 seconds per side." },
      { name: "Seated hip opener", how: "Sit with your right ankle on your left knee and gently lean forward with a flat back. Hold 30 seconds per side." }
    ],
    workouts: [
      { name: "Clamshells", how: "Lie on your side with knees bent, feet together. Open the top knee like a clamshell without rolling your hips back. 3 sets of 15 per side." },
      { name: "Side-lying hip abduction", how: "Lie on your side, legs straight. Lift the top leg to about 45 degrees, pause, lower slowly. 3 sets of 12-15 per side." },
      { name: "Single-leg glute bridge", how: "On your back, one foot planted, other leg up. Drive through the heel to lift your hips, squeezing the glute. 3 sets of 10 per side." }
    ]
  },
  gluteus_minimus: {
    name: "Gluteus Minimus",
    region: "Glutes",
    layer: "deep",
    function: "The deepest butt muscle, tucked beneath the medius. Fine-tunes hip stability with every step — the unsung hero of pain-free running.",
    stretches: [
      { name: "Lying figure-4 (deep)", how: "Lie on your back, cross one ankle over the opposite knee and pull the bottom thigh in tight. Push the crossed knee gently away for a deeper stretch. 30 seconds per side." },
      { name: "Standing IT-band cross stretch", how: "Cross your right leg behind your left and lean left until you feel the stretch along the outer right hip. Hold 30 seconds per side." }
    ],
    workouts: [
      { name: "Banded clamshells", how: "Same as clamshells but with a mini band just above the knees for extra resistance. 3 sets of 12 per side." },
      { name: "Fire hydrants", how: "On all fours, lift one bent knee out to the side like a dog at a hydrant, keeping hips square. 3 sets of 12 per side." },
      { name: "Lateral band walks", how: "Mini band around your ankles, slight squat stance, step sideways 10 steps each way without letting knees cave. 3 rounds." }
    ]
  },
  erector_spinae: {
    name: "Erector Spinae",
    region: "Back",
    layer: "deep",
    function: "The long rope of muscle running up each side of your spine. Holds you upright all day and locks your back in on deadlifts and rows.",
    stretches: [
      { name: "Child's pose", how: "Kneel, sit your hips back to your heels and reach your arms forward on the floor, letting your back round and stretch. Hold 45 seconds, breathe deep." },
      { name: "Cat-cow", how: "On all fours, slowly arch your back up like a cat, then dip it down like a cow. Move with your breath for 10 slow reps." }
    ],
    workouts: [
      { name: "Deadlifts", how: "Hinge at the hips with a flat back, grip the bar and stand tall by driving your hips forward. The king of back builders. 3-4 sets of 5-8." },
      { name: "Superman holds", how: "Lie face down, lift your chest, arms and legs off the floor at once and hold 20-30 seconds. 3 rounds." },
      { name: "Back extensions", how: "On a hyperextension bench, lower your torso with control then raise until your body is straight. Don't overextend. 3 sets of 12-15." }
    ]
  },
  rhomboid_major: {
    name: "Rhomboid Major",
    region: "Back",
    layer: "deep",
    function: "Sits under the traps between your shoulder blades. Pinches them together — the posture muscle that undoes desk slouch.",
    stretches: [
      { name: "Cross-body arm stretch", how: "Pull one arm straight across your chest and hold 30 seconds per side to open the mid-back." },
      { name: "Thread the needle", how: "On all fours, slide your right arm under your body to the left, resting your shoulder on the floor. Hold 30 seconds per side." }
    ],
    workouts: [
      { name: "Bent-over rows", how: "Hinge forward with a flat back, pull dumbbells or a barbell to your lower ribs, squeezing shoulder blades hard. 3 sets of 8-12." },
      { name: "Face pulls", how: "Cable or band at face height, pull to your forehead with elbows high, pinching shoulder blades together. 3 sets of 12-15." },
      { name: "Band pull-aparts", how: "Hold a band at arm's length and pull it apart until it touches your chest, squeezing the mid-back. 3 sets of 15-20." }
    ]
  },
  rhomboid_minor: {
    name: "Rhomboid Minor",
    region: "Back",
    layer: "deep",
    function: "The smaller partner sitting just above rhomboid major. Same mission: pulling the shoulder blades in and down for strong posture.",
    stretches: [
      { name: "Doorway chest opener", how: "Forearms on a doorframe, step through and lean forward to stretch the chest and wake up the upper back. Hold 30 seconds." },
      { name: "Eagle arms", how: "Wrap your right arm under your left, press palms together and lift elbows while rounding the upper back. Hold 20 seconds per side." }
    ],
    workouts: [
      { name: "Seated cable rows", how: "Pull the handle to your lower chest, driving elbows back and squeezing shoulder blades for a full second. 3 sets of 10-12." },
      { name: "Reverse flys", how: "Hinge forward, arms hanging, raise dumbbells out to the sides with a slight elbow bend. 3 sets of 12-15." }
    ]
  },
  supraspinatus: {
    name: "Supraspinatus",
    region: "Shoulders",
    layer: "deep",
    function: "One of the four rotator cuff muscles, tucked under the trap on top of the shoulder blade. Kicks off every overhead lift you do.",
    stretches: [
      { name: "Cross-body shoulder stretch", how: "Pull one arm across your chest and hold 30 seconds per side. Keep the shoulder pulled down away from your ear." },
      { name: "Sleeper stretch", how: "Lie on your side, bottom arm bent 90 degrees in front of you, gently press the forearm toward the floor with the other hand. 30 seconds per side." }
    ],
    workouts: [
      { name: "Empty-can raises (light!)", how: "With very light dumbbells, thumbs pointing down like emptying cans, raise arms to 45 degrees. This one is rehab-grade — keep it light. 3 sets of 12." },
      { name: "Scaption raises", how: "Raise dumbbells up and slightly forward (in the scapular plane) to shoulder height with thumbs up. 3 sets of 12." }
    ]
  },
  infraspinatus: {
    name: "Infraspinatus",
    region: "Shoulders",
    layer: "deep",
    function: "Rotator cuff muscle covering the back of the shoulder blade. Rotates your arm outward — critical for healthy pressing and throwing.",
    stretches: [
      { name: "Cross-body posterior stretch", how: "Pull your arm across your body at shoulder height and hold 30 seconds per side to open the back of the shoulder." },
      { name: "Doorway internal-rotation stretch", how: "Stand in a doorway, elbow bent 90 degrees with forearm up against the frame, gently lean forward. 30 seconds per side." }
    ],
    workouts: [
      { name: "Side-lying external rotation", how: "Lie on your side, elbow tucked to your ribs holding a light dumbbell, rotate the forearm up toward the ceiling. 3 sets of 12-15 per side." },
      { name: "Band external rotations", how: "Elbow pinned to your side, pull a band outward by rotating your forearm away from your body. 3 sets of 15 per side." }
    ]
  },
  teres_major: {
    name: "Teres Major",
    region: "Back",
    layer: "deep",
    function: "The lat's little helper — pulls your arm down and back from just below the shoulder joint. Big in pull-ups and rows.",
    stretches: [
      { name: "Overhead lat stretch", how: "Grab a doorframe overhead with one hand and lean away, feeling the stretch from armpit down your side. 30 seconds per side." },
      { name: "Child's pose side bend", how: "In child's pose, walk both hands to the right to stretch the left lat and teres. 30 seconds per side." }
    ],
    workouts: [
      { name: "Straight-arm pulldowns", how: "At a cable station, keep arms straight and pull the bar from overhead down to your thighs, squeezing the lats. 3 sets of 12." },
      { name: "Dumbbell pullovers", how: "Lying on a bench, lower one dumbbell back behind your head with a slight elbow bend, then pull it back over your chest. 3 sets of 10-12." }
    ]
  },
  teres_minor: {
    name: "Teres Minor",
    region: "Shoulders",
    layer: "deep",
    function: "The smallest rotator cuff muscle. Helps rotate the arm outward and keeps the shoulder joint snug in its socket.",
    stretches: [
      { name: "Cross-body stretch", how: "Pull one arm across your chest at shoulder height, holding 30 seconds per side." },
      { name: "Behind-back towel stretch", how: "Hold a towel behind your back, one hand over the shoulder and one up from below, gently pulling. 30 seconds per side." }
    ],
    workouts: [
      { name: "Band external rotation", how: "Anchor a band at elbow height, keep your elbow pinned to your side and rotate your forearm outward. 3 sets of 15 per side." },
      { name: "Cable external rotation", how: "Same motion on a cable machine with light weight — smooth and controlled, no shrugging. 3 sets of 12 per side." }
    ]
  },
  brachialis: {
    name: "Brachialis",
    region: "Arms",
    layer: "deep",
    function: "Sits underneath the biceps and pushes it up from below — training it is what makes arms look thicker from the front.",
    stretches: [
      { name: "Straight-arm wall stretch", how: "Place your palm flat on a wall behind you with a straight arm and gently turn away until the front of the arm stretches. 30 seconds per side." },
      { name: "Overhead reach-back", how: "Reach one arm overhead and back, letting the front of the upper arm open up. Hold 20 seconds per side." }
    ],
    workouts: [
      { name: "Hammer curls", how: "Curl dumbbells with palms facing each other like holding hammers — this shifts the work to the brachialis. 3 sets of 10-12." },
      { name: "Reverse curls", how: "Curl a barbell with palms facing down. Lighter than normal curls — the brachialis and forearms do the work. 3 sets of 10-12." },
      { name: "Cross-body curls", how: "Curl each dumbbell up across your body toward the opposite shoulder. 3 sets of 10 per side." }
    ]
  },
  psoas_major: {
    name: "Psoas Major",
    region: "Core",
    layer: "deep",
    function: "The deep hip flexor linking your spine to your thigh. Gets tight and short from sitting all day — the usual suspect behind achy lower backs.",
    stretches: [
      { name: "Kneeling hip flexor stretch", how: "Half-kneeling, tuck your pelvis under and shift your hips forward until the front of the back hip stretches. Hold 30 seconds per side." },
      { name: "Couch stretch", how: "Back knee against a wall or couch, front foot planted, drive your hips forward tall. Intense — 30 seconds per side." }
    ],
    workouts: [
      { name: "Hanging knee raises", how: "Hang from a bar and lift your knees toward your chest with control, no swinging. 3 sets of 10-12." },
      { name: "Dead bugs", how: "On your back, extend opposite arm and leg slowly without letting your lower back arch off the floor. 3 sets of 8 per side." },
      { name: "Standing marches", how: "March in place lifting knees above hip height, bracing your core. Great warm-up — 2 sets of 20." }
    ]
  },
  vastus_intermedius: {
    name: "Vastus Intermedius",
    region: "Legs",
    layer: "deep",
    function: "The hidden fourth quad head buried under the rectus femoris. Pure knee-extension power — the engine of your squat and leg press.",
    stretches: [
      { name: "Standing quad stretch", how: "Hold a wall for balance, grab one ankle behind you and pull your heel to your glute, knees together. 30 seconds per side." },
      { name: "Kneeling quad stretch", how: "Half-kneeling, gently push your hips forward to stretch the front of the back thigh. 30 seconds per side." }
    ],
    workouts: [
      { name: "Squats", how: "Feet shoulder-width, sit back and down keeping your chest up, drive through your heels to stand. 3-4 sets of 6-10." },
      { name: "Leg press", how: "Feet flat on the platform, lower until knees hit 90 degrees, press without locking out. 3 sets of 10-12." },
      { name: "Walking lunges", how: "Long steps, back knee kissing the floor, torso tall. 3 sets of 10 per leg." }
    ]
  },
  adductor_magnus: {
    name: "Adductor Magnus",
    region: "Legs",
    layer: "deep",
    function: "The biggest inner-thigh muscle. Pulls your legs together and fires hard to power you out of the bottom of a squat.",
    stretches: [
      { name: "Frog stretch", how: "On all fours with knees wide, sit your hips back toward your heels until the inner thighs stretch. Hold 45 seconds." },
      { name: "Seated butterfly", how: "Soles of feet together, knees out, gently press knees toward the floor. Hold 45 seconds." }
    ],
    workouts: [
      { name: "Copenhagen plank", how: "Side plank with your top foot on a bench — brutal inner-thigh strength. Hold 20-30 seconds per side, 3 rounds." },
      { name: "Sumo squats", how: "Wide stance, toes out, sit straight down keeping knees over toes. 3 sets of 10-12." },
      { name: "Cable hip adduction", how: "Ankle strap on a low cable, pull your leg across your body with control. 3 sets of 12 per side." }
    ]
  },
  tibialis_posterior: {
    name: "Tibialis Posterior",
    region: "Legs",
    layer: "deep",
    function: "Deep calf muscle that slings under your foot and holds up the arch. When it's weak you get flat feet and shin splints.",
    stretches: [
      { name: "Towel calf stretch", how: "Seated with legs straight, loop a towel around your forefoot and pull your toes toward you. Hold 30 seconds per side." },
      { name: "Bent-knee wall stretch", how: "Half-kneel against a wall with a bent front knee and lean in — targets the deep calf. 30 seconds per side." }
    ],
    workouts: [
      { name: "Towel scrunches", how: "Barefoot, scrunch a towel toward you using only your toes and arch. 2 sets of 15 per foot." },
      { name: "Resisted ankle inversion", how: "Loop a band around your forefoot and turn your sole inward against resistance. 3 sets of 15 per foot." },
      { name: "Bent-knee calf raises", how: "Calf raises with soft knees to shift work to the deep calf. 3 sets of 15." }
    ]
  },
  fibularis_longus: {
    name: "Fibularis Longus",
    region: "Legs",
    layer: "deep",
    function: "Runs down the outside of your shin to the sole of your foot. Stabilizes the ankle — your anti-rolled-ankle muscle.",
    stretches: [
      { name: "Kneeling shin stretch", how: "Kneel with the tops of your feet flat on the floor and sit back gently to stretch the front and outer shin. Hold 30 seconds." },
      { name: "Standing outer-calf stretch", how: "Cross one foot over the other and lean toward the crossing side until the outer lower leg stretches. 30 seconds per side." }
    ],
    workouts: [
      { name: "Banded ankle eversion", how: "Band around your forefoot, turn the sole of your foot outward against resistance. 3 sets of 15 per foot." },
      { name: "Single-leg balance", how: "Stand on one foot for 30-60 seconds — progress to eyes closed. 3 rounds per foot." }
    ]
  },
  tensor_fasciae_latae: {
    name: "Tensor Fasciae Latae",
    region: "Legs",
    layer: "surface",
    function: "The small muscle at the front-outside of your hip that tensions the IT band. Gets cranky in runners and anyone who sits all day.",
    stretches: [
      { name: "Standing IT-band stretch", how: "Cross your right leg behind your left, raise your right arm overhead and lean left. Hold 30 seconds per side." },
      { name: "Pigeon pose", how: "Front shin across your body, back leg extended behind, fold forward over the front leg. 45 seconds per side." }
    ],
    workouts: [
      { name: "Lateral band walks", how: "Mini band above knees, quarter-squat stance, step sideways keeping tension. 10 steps each way, 3 rounds." },
      { name: "Clamshells", how: "Side-lying, knees bent, open the top knee without rolling the hips. 3 sets of 15 per side." }
    ]
  },
  gracilis: {
    name: "Gracilis",
    region: "Legs",
    layer: "surface",
    function: "The long, thin inner-thigh muscle running from groin to knee. Helps pull the legs together and bend the knee.",
    stretches: [
      { name: "Side lunge stretch", how: "Wide stance, shift your weight to one side bending that knee while the other leg stays straight. Hold 30 seconds per side." },
      { name: "Butterfly stretch", how: "Soles together, knees dropping out, hinge forward gently. Hold 45 seconds." }
    ],
    workouts: [
      { name: "Side-lying leg adduction", how: "Lie on your side, bottom leg straight, lift it toward the ceiling. 3 sets of 12 per side." },
      { name: "Sumo squats", how: "Wide stance toes out, sit down between your heels. 3 sets of 10-12." }
    ]
  },
  semitendinosus: {
    name: "Semitendinosus",
    region: "Legs",
    layer: "surface",
    function: "One of the three hamstrings, running down the inner back of your thigh. Bends the knee and extends the hip when you sprint or hinge.",
    stretches: [
      { name: "Standing hamstring stretch", how: "Foot on a low step, leg straight, hinge forward at the hips until the back of the thigh stretches. 30 seconds per side." },
      { name: "Lying towel stretch", how: "On your back, loop a towel around your foot and straighten the leg toward the ceiling. 30 seconds per side." }
    ],
    workouts: [
      { name: "Romanian deadlifts", how: "Soft knees, hinge at the hips pushing your butt back, lower the weights along your legs until you feel the hamstrings load, then drive hips forward. 3 sets of 8-12." },
      { name: "Lying leg curls", how: "Face down on the curl machine, curl your heels to your glutes with control. 3 sets of 10-12." },
      { name: "Glute-ham raises", how: "Knees on a pad, ankles locked, lower your torso slowly then pull back up. Brutal — start assisted. 3 sets of 6-8." }
    ]
  },
  semimembranosus: {
    name: "Semimembranosus",
    region: "Legs",
    layer: "surface",
    function: "The flattest hamstring, tucked beneath the semitendinosus. Same essential job: powerful knee flexion and hip extension.",
    stretches: [
      { name: "Seated toe-touch stretch", how: "Sit with legs straight and reach for your toes, hinging at the hips rather than rounding the back. Hold 30 seconds." },
      { name: "Doorway hamstring stretch", how: "Lie in a doorway with one leg up the frame, scoot closer for a deeper stretch. 30 seconds per side." }
    ],
    workouts: [
      { name: "Romanian deadlifts", how: "Hinge deep with a flat back, feeling the hamstrings stretch under load, then snap the hips through. 3 sets of 8-12." },
      { name: "Nordic curls (assisted)", how: "Use a band or push off the floor to assist — lower slowly for 3-5 seconds. 3 sets of 5." },
      { name: "Good mornings", how: "Bar on your back, hinge forward with soft knees until your torso is near parallel, then stand tall. Start light. 3 sets of 10." }
    ]
  },
  flexor_carpi_radialis: {
    name: "Flexor Carpi Radialis",
    region: "Arms",
    layer: "surface",
    function: "Palm-side forearm muscle that flexes the wrist. Fires every time you grip, curl, or carry something heavy.",
    stretches: [
      { name: "Prayer stretch", how: "Press your palms together in front of your chest, fingers up, and slowly lower your hands while keeping palms together. Hold 30 seconds." },
      { name: "Wrist flexor wall stretch", how: "Palm flat on a wall, fingers pointing down, gently lean in. 30 seconds per side." }
    ],
    workouts: [
      { name: "Wrist curls", how: "Forearms on your thighs, palms up, curl a light dumbbell up with just your wrists. 3 sets of 15." },
      { name: "Farmer's carries", how: "Heavy dumbbells at your sides, walk 40-60 seconds with a crushing grip. 3 rounds." },
      { name: "Dead hangs", how: "Hang from a pull-up bar as long as you can. Builds grip and decompresses the spine. 3 sets to failure." }
    ]
  },
  extensor_carpi_radialis_longus: {
    name: "Extensor Carpi Radialis",
    region: "Arms",
    layer: "surface",
    function: "Top-of-forearm muscle that cocks the wrist back. It's the ridge that pops up when you make a fist.",
    stretches: [
      { name: "Reverse prayer stretch", how: "Backs of hands together in front of you, fingers down, gently press. Hold 30 seconds." },
      { name: "Wrist extensor stretch", how: "Arm straight, palm down, use the other hand to gently press the fingers downward. 30 seconds per side." }
    ],
    workouts: [
      { name: "Reverse wrist curls", how: "Forearms on thighs, palms down, curl light dumbbells up with the wrists only. 3 sets of 15." },
      { name: "Reverse curls", how: "EZ-bar curls with palms facing down — hammers the extensors and brachialis. 3 sets of 10-12." }
    ]
  },

  tibialis_anterior: {
    name: "Tibialis Anterior",
    region: "Legs (Shins)",
    layer: "surface",
    function: "The muscle along the front of your shin. Lifts your toes and foot upward — keeps you from tripping and stabilizes your ankle.",
    stretches: [
      { name: "Kneeling toe-point stretch", how: "Kneel with the tops of your feet flat on the floor and sit back onto your heels. Hold 30 seconds." },
      { name: "Wall shin stretch", how: "Stand facing away from a wall, press the top of one foot against the wall behind you, and gently push down. 30 seconds per side." }
    ],
    workouts: [
      { name: "Toe raises", how: "Stand with your back against a wall, heels on the floor, and lift your toes toward your shins. 3 sets of 15-20." },
      { name: "Heel walks", how: "Walk on your heels with toes lifted for 30-60 seconds. Simple and surprisingly tough." }
    ]
  }
};
