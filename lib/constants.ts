export const MODELS = [
  {
    label: "Qwen 2.5 Coder 32B",
    value: "Qwen/Qwen2.5-Coder-32B-Instruct",
  },
  {
    label: "Llama 3.1 405B",
    value: "meta-llama/Meta-Llama-3.1-405B-Instruct-Turbo",
  },
  {
    label: "Llama 3.3 70B",
    value: "meta-llama/Llama-3.3-70B-Instruct-Turbo",
  },
  {
    label: "DeepSeek V3",
    value: "deepseek-ai/DeepSeek-V3",
  },
];

// export const SUGGESTED_PROMPTS = [
//   {
//     title: "Quiz app",
//     description:
//       "Make me a quiz app about American history. Make sure to give the user an explanation on each question whether they got it right or wrong and keep a score going",
//   },
//   {
//     title: "SaaS Landing page",
//     description:
//       "A landing page for a SaaS business that includes a clear value proposition in a prominent hero section, concise feature overviews, testimonials, pricing, and a clear call-to-action button leading to a free trial or demo.",
//   },
//   {
//     title: "Pomodoro Timer",
//     description:
//       "Make a beautiful pomodoro timer where I can adjust the lengths of the focus time and the break and it will beep when done.",
//   },
//   {
//     title: "Blog app",
//     description:
//       "Make me a blog app that has a few blogs there for people to read. Users can click into the blogs and read them, then go back to the homepage to see more.",
//   },
//   // {
//   //   title: "Recipe site",
//   //   description:
//   //     "Make me a site that has easy to make recipes in a grid that you can click into and see the full recipe. Also make it possible for me to add my own",
//   // },
//   {
//     title: "Flashcard app",
//     description:
//       "Build me a flashcard app about llamas. Have some flash cards and also have the ability for users to add their own. Show one side of a card at first and reveal the answer on button click, keeping track of correct guesses to measure progress.",
//   },
//   {
//     title: "Timezone dashboard",
//     description:
//       "Make me a time zone dashboard that shows me the time zone in the top 6 most popular time zones and gives me a dropdown to add others",
//   },
// ];

export const SUGGESTED_PROMPTS = [
  {
    title: "Smart Calculator",
    description:
      "Build a calculator that not only performs basic arithmetic operations but also explains how it arrived at the result. For example, if the user inputs 2 + 3 4, it explains the order of operations (BODMAS) and shows the steps: first multiplying 3 4, then adding 2. Include advanced features like scientific calculations (e.g., trigonometry, logarithms), a unit converter, and a graphing function for equations. Make it user-friendly with a clean, responsive interface, and ensure it provides tooltips for less common functions.",
  },
  {
    title: "AI-Powered Recipe Generator",
    description:
      "Create a recipe generator that takes user-inputted ingredients and dietary preferences to suggest recipes. For instance, if the user types 'chicken, rice, broccoli' and selects 'low-carb,' the app generates a healthy recipe. Integrate an AI model to provide cooking instructions step-by-step, offer substitution suggestions for unavailable ingredients, and include an estimated cooking time and nutritional breakdown for each recipe. Add a feature to save or share recipes and rate them after trying.",
  },
  // {
  //   title: "Dynamic Budget Tracker and Advisor",
  //   description:
  //     "Develop a financial tracker where users can input their income, expenses, and savings goals. The app dynamically calculates their remaining budget and provides advice on optimizing spending. For example, if a user overspends in one category (e.g., dining out), it suggests adjustments in other areas or ways to save. Include graphs for spending trends, reminders for bill payments, and customizable alerts for exceeding budgets. Add a 'What-If' tool to simulate changes in spending habits and their impact on long-term savings.",
  // },
  {
    title: "Personalized Workout Planner",
    description:
      "Build a fitness app that creates tailored workout plans based on a user's goals, fitness level, and available equipment. For instance, if a user wants to build muscle and only has dumbbells, the app generates a weekly strength training plan with detailed exercise descriptions, videos, and tracking features. Integrate AI to adapt the plan based on user progress and feedback. Include motivational features like progress visualizations, achievements, and reminders to ensure adherence.",
  },
  {
    title: "AI Travel Itinerary Planner",
    description:
      "Design an app that helps users plan trips by generating detailed itineraries based on their destination, interests, and travel dates. For example, if a user selects 'Paris' and specifies interests in art and food, the app creates a daily schedule with museum visits, local food tours, and dining recommendations. Include features for budget estimation, real-time weather updates, and local transportation options. Add a collaborative mode for group travel planning, allowing multiple users to contribute to the itinerary.",
  },
];
