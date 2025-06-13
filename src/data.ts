const data = {
  title: "Identifying Valid Screening Tests for Students",
  metadataBadges: ["10 min", "Assessment", "Beginner", "Interactive"],
  scenarioHook: "You’re a school psychologist deciding how to support a new student with learning concerns. The team asks you to recommend a screening test—but which one is best suited?",
  section1: {
    title: "What Makes a Screening Test Valid?",
    openingText: "Understanding validity helps you select tools that truly reflect student needs.",
    keyConcepts: [
      {
        title: "Construct Validity",
        definition: "The test actually measures the concept it claims to measure.",
        icon: "", altText: "Target icon", example: "A reading test measures reading, not memory."
      },
      {
        title: "Predictive Validity",
        definition: "The test predicts future performance or outcomes.",
        icon: "", altText: "Graph icon", example: "A screener forecasts later math performance."
      }
    ]
  },
  section2: {
    title: "Common Pitfalls to Avoid",
    guidance: [
      { point: "Assuming all tests are equal", explanation: "Not all screeners are backed by evidence." },
      { point: "Ignoring student background", explanation: "Cultural and linguistic context matters." }
    ]
  },
  section3: {
    title: "Where to Find Valid Screeners",
    resources: [
      {
        name: "National Center on Intensive Intervention",
        usage: "Browse their tools chart for rated screeners.",
        benefit: "Evidence-based ratings to compare tools."
      },
      {
        name: "Your District’s Approved List",
        usage: "Check what’s already validated locally.",
        benefit: "Easier implementation and compliance."
      }
    ]
  },
  selfReflection: {
    questions: [
      {
        prompt: "Which screener is best if you want to forecast a student’s academic future?",
        options: [
          { label: "A", text: "One that is quick and easy" },
          { label: "B", text: "One that is teacher-approved" },
          { label: "C", text: "One with predictive validity" },
          { label: "D", text: "One used by another school" }
        ],
        feedback: [
          { label: "A", text: "Speed is helpful, but accuracy in forecasting matters more." },
          { label: "B", text: "Expert buy-in is great—but look for evidence-based validity." },
          { label: "C", text: "Correct! Predictive validity ensures future outcomes are considered." },
          { label: "D", text: "Other schools’ use doesn’t guarantee validity." }
        ]
      },
      {
        prompt: "How might you apply this in your next student support meeting?",
        options: [
          { label: "A", text: "Suggest any available screener" },
          { label: "B", text: "Ask about the test's predictive validity" },
          { label: "C", text: "Choose based on parent preference" },
          { label: "D", text: "Use the one you know from grad school" }
        ],
        feedback: [
          { label: "A", text: "It's best to vet for purpose and validity." },
          { label: "B", text: "Correct! That shows you’re grounding the decision in data." },
          { label: "C", text: "Parent insights matter, but aren’t a replacement for validity." },
          { label: "D", text: "Outdated familiarity may not meet current standards." }
        ]
      }
    ]
  },
  glossary: [
    { term: "Validity", definition: "Accuracy of what the test measures.", context: "Select tools with demonstrated validity." },
    { term: "Screening Test", definition: "A brief assessment to identify risk.", context: "Used early to flag potential needs." },
    { term: "Predictive Validity", definition: "How well a test forecasts outcomes.", context: "Important when planning long-term support." }
  ],
  scoring: "unscored"
};

export default data;
