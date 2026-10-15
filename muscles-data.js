// Muscle info data for the 3D muscle viewer.
// Keys match the mesh names in muscles.glb exactly.
// Phase 1: text-only stretches + workouts. Phase 2 will add animations.

const MUSCLE_DATA = {
  sternocleidomastoid: {
    name: "Sternocleidomastoid",
    region: "Neck",
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
  tibialis_anterior: {
    name: "Tibialis Anterior",
    region: "Legs (Shins)",
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
