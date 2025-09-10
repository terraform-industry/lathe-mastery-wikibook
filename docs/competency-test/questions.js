// Lathe Safety Competency Test Questions
// Based on Chapters 1-2: Safety and Core Principles

const questions = [
  // The Three Cardinal Rules
  {
    question: "According to the sacred contract, what must you wear at ALL times in the shop?",
    options: [
      "Gloves for protection",
      "Safety glasses",
      "Steel-toed boots",
      "A shop apron"
    ],
    correct: 1,
    explanation: "Safety glasses must be worn at all times - no exceptions, not even 'just for a second'."
  },
  {
    question: "Why should you NEVER wear gloves while operating the lathe?",
    options: [
      "They make your hands sweaty",
      "They reduce your grip strength",
      "They can catch and pull your hand into the machine",
      "They're expensive to replace"
    ],
    correct: 2,
    explanation: "Gloves can catch on rotating parts and don't let go, pulling your hand into the machine."
  },
  {
    question: "Where are the ONLY two acceptable places for a chuck key?",
    options: [
      "In your hand actively in use, or in its designated home",
      "On the lathe bed, or in the chuck",
      "In your pocket, or on the workbench",
      "In the chuck, or hanging on the headstock"
    ],
    correct: 0,
    explanation: "A chuck key must only be in your hand (in use) or in its designated storage location."
  },
  {
    question: "What happens when you forget a chuck key in the chuck and start the lathe?",
    options: [
      "The lathe won't start due to safety interlock",
      "The key becomes a high-speed projectile",
      "The chuck loosens automatically",
      "Nothing - it's designed to be safe"
    ],
    correct: 1,
    explanation: "A forgotten chuck key becomes a missile that often targets operator skulls."
  },
  
  // Clothing and Personal Safety
  {
    question: "What must you do with long hair before operating a lathe?",
    options: [
      "Wear a hair net",
      "Keep it behind your shoulders",
      "Tie it back or cover it completely",
      "Cut it short"
    ],
    correct: 2,
    explanation: "Long hair must be tied back or covered - it can wrap around spinning parts instantly."
  },
  {
    question: "Why must you remove ALL jewelry before operating the lathe?",
    options: [
      "It might get scratched",
      "It conducts electricity",
      "It can catch and cause severe injury",
      "It interferes with precision work"
    ],
    correct: 2,
    explanation: "Jewelry can catch on rotating parts and cause severe injury, including degloving."
  },
  
  // Safe Operating Practices
  {
    question: "Where should you stand while the lathe is running?",
    options: [
      "Directly in front for best visibility",
      "To the side, never directly in front",
      "Behind the machine",
      "Wherever feels comfortable"
    ],
    correct: 1,
    explanation: "Stand to the side to avoid the direct path of any ejected parts or broken tools."
  },
  {
    question: "When is it acceptable to reach over spinning parts?",
    options: [
      "When measuring the workpiece",
      "When applying cutting oil",
      "When clearing chips",
      "Never - it's absolutely forbidden"
    ],
    correct: 3,
    explanation: "NEVER reach over spinning parts for any reason - stop the machine first."
  },
  {
    question: "What should you do BEFORE making any adjustments to the setup?",
    options: [
      "Slow down the spindle speed",
      "Stop the machine completely",
      "Engage the brake",
      "Alert your supervisor"
    ],
    correct: 1,
    explanation: "Always stop the machine completely before making any adjustments."
  },
  
  // Core Principles and Machine Understanding
  {
    question: "What is the fundamental principle of how a lathe creates parts?",
    options: [
      "The tool rotates while the workpiece is stationary",
      "Both tool and workpiece rotate",
      "The workpiece rotates while the tool remains stationary",
      "The workpiece oscillates back and forth"
    ],
    correct: 2,
    explanation: "The lathe operates by rotating the workpiece while the cutting tool remains stationary."
  },
  {
    question: "What type of cutting does a lathe use?",
    options: [
      "Multi-point cutting",
      "Single point cutting",
      "Abrasive cutting",
      "Laser cutting"
    ],
    correct: 1,
    explanation: "Lathes use single point cutting tools - only one small point contacts the work."
  },
  {
    question: "What are the two primary axes of movement on a lathe?",
    options: [
      "X (vertical) and Y (horizontal)",
      "Z (parallel to spindle) and X (perpendicular to spindle)",
      "A (rotational) and B (angular)",
      "U (universal) and V (variable)"
    ],
    correct: 1,
    explanation: "The Z-axis moves parallel to the spindle, X-axis moves perpendicular to it."
  },
  
  // Safety Philosophy
  {
    question: "According to the text, machine tools are:",
    options: [
      "Perfectly safe when used properly",
      "Only dangerous to beginners",
      "Actively trying to murder you at all times",
      "Equipped with modern safety features"
    ],
    correct: 2,
    explanation: "Machine tools are actively dangerous at all times - this mindset keeps you safe."
  },
  {
    question: "What is the proper attitude toward lathe safety rules?",
    options: [
      "They're guidelines for beginners",
      "They're suggestions to consider",
      "They're absolute and non-negotiable",
      "They depend on the situation"
    ],
    correct: 2,
    explanation: "Safety rules are non-negotiable - accept them fully or stay away from the machine."
  },
  
  // Practical Safety Scenarios
  {
    question: "You need to clear chips from the work area. What should you do?",
    options: [
      "Brush them away with your hand quickly",
      "Stop the machine and use a chip brush",
      "Blow them away with compressed air",
      "Let them accumulate until the job is done"
    ],
    correct: 1,
    explanation: "Stop the machine completely and use proper chip removal tools, never your hands."
  },
  {
    question: "You notice an unusual vibration while cutting. The correct response is:",
    options: [
      "Speed up to push through it",
      "Slow down gradually",
      "Stop immediately and investigate",
      "Ignore it if the cut looks good"
    ],
    correct: 2,
    explanation: "Unusual vibrations indicate a problem - stop immediately and investigate the cause."
  },
  {
    question: "The pre-operation safety ritual should include checking all EXCEPT:",
    options: [
      "Safety glasses are on",
      "Chuck key is in its home",
      "Machine oil levels",
      "Removal of jewelry and loose items"
    ],
    correct: 2,
    explanation: "While maintenance is important, the safety ritual focuses on personal protective items."
  },
  
  // Understanding Forces and Rigidity
  {
    question: "Why is rigidity crucial in lathe operation?",
    options: [
      "It makes the machine last longer",
      "It prevents deflection that causes errors and danger",
      "It reduces noise levels",
      "It improves motor efficiency"
    ],
    correct: 1,
    explanation: "Rigidity prevents deflection which causes dimensional errors, poor finish, and safety hazards."
  },
  {
    question: "When the tool pushes into the workpiece, what happens according to Newton's third law?",
    options: [
      "The workpiece absorbs all the force",
      "The force dissipates as heat",
      "The workpiece pushes back with equal force",
      "The machine frame neutralizes the force"
    ],
    correct: 2,
    explanation: "Newton's third law: the workpiece pushes back on the tool with equal and opposite force."
  },
  
  // Final Safety Wisdom
  {
    question: "Master machinists demonstrate calm confidence because they:",
    options: [
      "Are fearless around machines",
      "Have become immune to danger",
      "Understand dangers and practice disciplined safety",
      "Work too slowly to encounter problems"
    ],
    correct: 2,
    explanation: "Master machinists understand the dangers intimately and maintain disciplined safety practices."
  },

  // Cincinnati 10-inch Tray-Top Specific Questions
  {
    question: "On the Cincinnati 10-inch tray-top lathe, what must be done before attempting to change spindle speeds?",
    options: [
      "Turn the motor to full speed first",
      "Stop the headstock spindle completely",
      "Engage the clutch",
      "Apply cutting oil"
    ],
    correct: 1,
    explanation: "The headstock spindle must be stopped completely before changing speeds - NEVER attempt speed changes while running!"
  },
  {
    question: "The Cincinnati 10-inch uses a 'color-match' system for:",
    options: [
      "Tool identification",
      "Speed selection guidance",
      "Safety warnings",
      "Maintenance schedules"
    ],
    correct: 1,
    explanation: "The color-match dial on the headstock front face guides proper speed selection using colored reference marks."
  },
  {
    question: "When engaging power movements on the Cincinnati 10-inch, what is the correct sequence?",
    options: [
      "Engage carriage first, then cross slide",
      "Engage both simultaneously",
      "Engage cross slide first, then carriage",
      "Only one can be engaged at a time"
    ],
    correct: 3,
    explanation: "Only one power movement (carriage OR cross slide) can be engaged at a time - never both simultaneously."
  },
  {
    question: "The Cincinnati 10-inch leadscrew reverse lever allows:",
    options: [
      "Spindle direction reversal",
      "Speed range changes",
      "Feeding direction reversal for carriage and cross slide",
      "Emergency stops"
    ],
    correct: 2,
    explanation: "The leadscrew reverse lever reverses the feeding direction for both carriage and cross slide movements."
  },
  {
    question: "For chip removal on the Cincinnati 10-inch, the proper tool is:",
    options: [
      "Compressed air",
      "Hands (when stopped)",
      "Chip rake or brush",
      "Shop rag"
    ],
    correct: 2,
    explanation: "Always use a chip rake or brush for chip removal - never use hands, even when the machine is stopped."
  },
  {
    question: "When starting the Cincinnati 10-inch motor, the correct procedure involves:",
    options: [
      "Pressing START then engaging clutch",
      "Engaging clutch then pressing START",
      "Both actions simultaneously",
      "Starting with clutch already engaged"
    ],
    correct: 0,
    explanation: "Press the FORWARD button to start the motor, THEN engage the clutch by raising the start-stop lever."
  },
  {
    question: "For the Cincinnati 10-inch tray-top lathe, proper spindle rotation (facing from tailstock) should be:",
    options: [
      "Clockwise for all operations",
      "Counterclockwise for forward cutting",
      "Variable depending on material",
      "Alternating for best surface finish"
    ],
    correct: 1,
    explanation: "When facing the spindle from the tailstock end, it should rotate counterclockwise for forward cutting operations."
  },
  {
    question: "If work is not turning straight on the Cincinnati 10-inch, first check:",
    options: [
      "Spindle speed settings",
      "Tool sharpness",
      "Headstock and tailstock center alignment",
      "Motor voltage"
    ],
    correct: 2,
    explanation: "The most common cause of work not turning straight is misalignment between headstock and tailstock centers."
  }
];

// Shuffle array function for randomizing questions
function shuffleArray(array) {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

// Export for use in test
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { questions, shuffleArray };
}