
/**
 * @type {import("../definition").Task}
 */
const TASK_POOL = {
    "AI Engineer": [
        { task: "Develop predictive models", priority: "High" },
        { task: "Train machine learning algorithms", priority: "Medium" },
        { task: "Optimize neural networks", priority: "Medium" },
        { task: "Deploy AI solutions to production", priority: "High" },
        { task: "Fine-tune NLP models", priority: "Low" }
    ],
    "Data Scientist": [
        { task: "Perform data wrangling and cleaning", priority: "High" },
        { task: "Build data pipelines", priority: "Medium" },
        { task: "Conduct statistical analysis", priority: "Medium" },
        { task: "Create data visualizations", priority: "Low" },
        { task: "Develop machine learning models", priority: "High" }
    ],
    "Mobile Developer": [
        { task: "Develop native mobile applications", priority: "High" },
        { task: "Integrate REST APIs", priority: "Medium" },
        { task: "Fix app crashes and bugs", priority: "High" },
        { task: "Implement push notifications", priority: "Medium" },
        { task: "Optimize app performance", priority: "Low" }
    ],
    "Project Manager": [
        { task: "Define project scope", priority: "High" },
        { task: "Manage timelines and deliverables", priority: "High" },
        { task: "Conduct team stand-ups", priority: "Medium" },
        { task: "Coordinate stakeholder meetings", priority: "Medium" },
        { task: "Track project milestones", priority: "High" }
    ],
    "Frontend Developer": [
        { task: "Slicing UI/UX designs", priority: "Medium" },
        { task: "Implement responsive designs", priority: "High" },
        { task: "Integrate APIs with front-end", priority: "High" },
        { task: "Optimize performance for web pages", priority: "Medium" },
        { task: "Debug UI issues", priority: "High" }
    ],
    "Backend Developer": [
        { task: "Design database schemas", priority: "High" },
        { task: "Develop API endpoints", priority: "High" },
        { task: "Implement authentication systems", priority: "Medium" },
        { task: "Optimize server performance", priority: "Medium" },
        { task: "Fix back-end bugs", priority: "High" }
    ],
    "UX Designer": [
        { task: "Conduct user interviews", priority: "High" },
        { task: "Create user journey maps", priority: "Medium" },
        { task: "Design wireframes", priority: "High" },
        { task: "Perform usability testing", priority: "Medium" },
        { task: "Analyze user feedback", priority: "Medium" }
    ],
    "UI Designer": [
        { task: "Create pixel-perfect mockups", priority: "High" },
        { task: "Design interactive prototypes", priority: "High" },
        { task: "Develop style guides", priority: "Medium" },
        { task: "Ensure consistency in design systems", priority: "Medium" },
        { task: "Collaborate on branding", priority: "Low" }
    ],
    "QA Tester": [
        { task: "Write test cases", priority: "High" },
        { task: "Perform manual testing", priority: "Medium" },
        { task: "Automate regression tests", priority: "High" },
        { task: "Identify and log bugs", priority: "High" },
        { task: "Verify bug fixes", priority: "Medium" }
    ],
    "Product Owner": [
        { task: "Prioritize product backlog", priority: "High" },
        { task: "Write detailed user stories", priority: "Medium" },
        { task: "Define acceptance criteria", priority: "High" },
        { task: "Gather requirements from stakeholders", priority: "High" },
        { task: "Approve deliverables", priority: "Medium" }
    ],
    "Embedded Developer": [
        { task: "Write firmware for microcontrollers", priority: "High" },
        { task: "Debug embedded systems", priority: "High" },
        { task: "Test hardware/software integration", priority: "Medium" },
        { task: "Implement real-time communication protocols", priority: "Medium" },
        { task: "Optimize low-level code", priority: "Low" }
    ],
    "Electronics Engineer": [
        { task: "Design circuit boards", priority: "High" },
        { task: "Simulate electronic circuits", priority: "Medium" },
        { task: "Build prototypes for testing", priority: "Medium" },
        { task: "Perform hardware debugging", priority: "High" },
        { task: "Conduct signal analysis", priority: "Low" }
    ],
    "VR Developer": [
        { task: "Integrate VR hardware with software", priority: "High" },
        { task: "Optimize 3D environments for VR", priority: "Medium" },
        { task: "Develop immersive experiences", priority: "High" },
        { task: "Implement motion controls", priority: "Medium" },
        { task: "Debug performance issues", priority: "High" }
    ],
    "3D Modeler": [
        { task: "Create detailed 3D assets", priority: "High" },
        { task: "Apply textures and materials", priority: "Medium" },
        { task: "Perform UV mapping", priority: "Medium" },
        { task: "Optimize models for rendering", priority: "Medium" },
        { task: "Export models for game engines", priority: "Low" }
    ],
    "Desktop Developer": [
        { task: "Develop desktop applications", priority: "High" },
        { task: "Implement multi-threading", priority: "Medium" },
        { task: "Integrate third-party libraries", priority: "Medium" },
        { task: "Optimize UI for desktop platforms", priority: "Medium" },
        { task: "Debug application crashes", priority: "High" }
    ],
    "Database Administrator": [
        { task: "Optimize database queries", priority: "High" },
        { task: "Perform regular database backups", priority: "High" },
        { task: "Ensure data security", priority: "High" },
        { task: "Manage database migrations", priority: "Medium" },
        { task: "Monitor database performance", priority: "Medium" }
    ],
    "Data Analyst": [
        { task: "Analyze business trends", priority: "High" },
        { task: "Create dashboards and reports", priority: "Medium" },
        { task: "Extract insights from data", priority: "High" },
        { task: "Identify data inconsistencies", priority: "Medium" },
        { task: "Provide actionable recommendations", priority: "High" }
    ],
    "Event Coordinator": [
        { task: "Plan virtual event structure and flow", priority: "High" },
        { task: "Coordinate with technical teams for platform setup", priority: "High" },
        { task: "Manage participant registrations", priority: "Medium" },
        { task: "Prepare event schedules and session timelines", priority: "High" },
        { task: "Ensure smooth execution of virtual events", priority: "High" }
    ],
    "Cryptography Specialist": [
        { task: "Develop encryption algorithms", priority: "High" },
        { task: "Analyze cryptographic vulnerabilities", priority: "High" },
        { task: "Implement secure communication protocols", priority: "Medium" },
        { task: "Perform cryptographic audits and generate reports", priority: "Medium" },
        { task: "Maintain cryptographic security", priority: "Low" }
    ],
    "Hardware Engineer": [
        { task: "Design and test hardware prototypes", priority: "High" },
        { task: "Develop hardware schematics", priority: "Medium" },
        { task: "Integrate hardware with software systems", priority: "High" },
        { task: "Analyze and resolve hardware issues", priority: "High" },
        { task: "Ensure compliance with standards", priority: "Medium" }
    ],
    "Cloud Engineer": [
        { task: "Set up cloud infrastructure", priority: "High" },
        { task: "Optimize cloud resource usage", priority: "Medium" },
        { task: "Ensure cloud system security", priority: "High" },
        { task: "Automate cloud deployment pipelines", priority: "Medium" },
        { task: "Monitor cloud performance", priority: "Low" }
    ],
    "Security Specialist": [
        { task: "Perform security audits", priority: "High" },
        { task: "Develop security policies", priority: "High" },
        { task: "Respond to security breaches", priority: "High" },
        { task: "Train staff on security practices", priority: "Medium" },
        { task: "Monitor for vulnerabilities", priority: "Medium" }
    ],
    "IoT Developer": [
        { task: "Develop IoT device firmware", priority: "High" },
        { task: "Integrate IoT devices with cloud systems", priority: "High" },
        { task: "Test IoT hardware and software", priority: "Medium" },
        { task: "Implement communication protocols", priority: "Medium" },
        { task: "Debug IoT systems", priority: "High" }
    ],
    "Network Engineer": [
        { task: "Design network architectures", priority: "High" },
        { task: "Monitor network performance", priority: "Medium" },
        { task: "Troubleshoot network issues", priority: "High" },
        { task: "Implement network security protocols", priority: "High" },
        { task: "Optimize network infrastructure", priority: "Medium" }
    ],
    "AR Developer": [
        { task: "Develop AR applications", priority: "High" },
        { task: "Integrate AR with real-world environments", priority: "High" },
        { task: "Optimize AR performance", priority: "Medium" },
        { task: "Debug AR experiences", priority: "High" },
        { task: "Implement AR interaction mechanics", priority: "Medium" }
    ],
    "Product Manager": [
        { task: "Define product vision", priority: "High" },
        { task: "Manage cross-functional teams", priority: "High" },
        { task: "Develop product roadmaps", priority: "Medium" },
        { task: "Gather and prioritize user requirements", priority: "High" },
        { task: "Track product development progress", priority: "Medium" }
    ],
    "Social Media Strategist": [
        { task: "Develop social media campaigns", priority: "High" },
        { task: "Analyze social media metrics", priority: "Medium" },
        { task: "Engage with online communities", priority: "Medium" },
        { task: "Optimize posts for maximum reach", priority: "Medium" },
        { task: "Stay updated on social media trends", priority: "Low" }
    ],
    "Marketing Specialist": [
        { task: "Develop marketing plans", priority: "High" },
        { task: "Conduct market research", priority: "Medium" },
        { task: "Create promotional materials", priority: "Medium" },
        { task: "Manage advertising campaigns", priority: "High" },
        { task: "Analyze campaign performance", priority: "Medium" }
    ],
    "Energy Consultant": [
        { task: "Evaluate energy efficiency", priority: "High" },
        { task: "Develop renewable energy plans", priority: "Medium" },
        { task: "Advise on energy cost savings", priority: "Medium" },
        { task: "Conduct energy audits", priority: "High" },
        { task: "Research energy market trends", priority: "Low" }
    ],
    "Energy Specialist": [
        { task: "Analyze energy usage data", priority: "High" },
        { task: "Recommend sustainable solutions", priority: "Medium" },
        { task: "Oversee energy-saving projects", priority: "Medium" },
        { task: "Ensure compliance with regulations", priority: "High" },
        { task: "Report on energy performance", priority: "Medium" }
    ],
    "Solar Energy Expert": [
        { task: "Design solar panel systems", priority: "High" },
        { task: "Oversee solar installations", priority: "High" },
        { task: "Evaluate site feasibility", priority: "Medium" },
        { task: "Optimize solar energy output", priority: "Medium" },
        { task: "Stay updated on solar technologies", priority: "Low" }
    ],
    "Safety Specialist": [
        { task: "Conduct safety inspections", priority: "High" },
        { task: "Develop workplace safety protocols", priority: "High" },
        { task: "Train employees on safety measures", priority: "Medium" },
        { task: "Monitor compliance with regulations", priority: "High" },
        { task: "Respond to safety incidents", priority: "High" }
    ],
    "Logistics Specialist": [
        { task: "Plan transportation routes", priority: "High" },
        { task: "Monitor supply chain efficiency", priority: "Medium" },
        { task: "Manage inventory levels", priority: "High" },
        { task: "Coordinate with shipping providers", priority: "Medium" },
        { task: "Resolve logistical issues", priority: "High" }
    ],
    "Retail Expert": [
        { task: "Analyze customer behavior", priority: "High" },
        { task: "Manage store layout and design", priority: "Medium" },
        { task: "Develop retail strategies", priority: "High" },
        { task: "Optimize product placement", priority: "Medium" },
        { task: "Monitor sales trends", priority: "Low" }
    ],
    "Satellite Data Analyst": [
        { task: "Analyze satellite imagery", priority: "High" },
        { task: "Interpret geospatial data", priority: "Medium" },
        { task: "Develop predictive models", priority: "High" },
        { task: "Create data visualizations", priority: "Medium" },
        { task: "Ensure data accuracy", priority: "High" }
    ],
    "Aerospace Engineer": [
        { task: "Design aircraft structures", priority: "High" },
        { task: "Test aerospace components", priority: "High" },
        { task: "Analyze aerodynamics", priority: "Medium" },
        { task: "Develop aerospace systems", priority: "High" },
        { task: "Research new aerospace technologies", priority: "Medium" }
    ],
    "Drone Specialist": [
        { task: "Develop drone prototypes", priority: "High" },
        { task: "Test drone performance", priority: "High" },
        { task: "Implement drone safety protocols", priority: "Medium" },
        { task: "Analyze drone data", priority: "Medium" },
        { task: "Maintain and repair drones", priority: "Low" }
    ],
    "Aerospace Technician": [
        { task: "Assemble aerospace components", priority: "High" },
        { task: "Test aerospace systems", priority: "High" },
        { task: "Troubleshoot aerospace equipment", priority: "Medium" },
        { task: "Perform routine maintenance", priority: "Low" },
        { task: "Ensure equipment complies with standards", priority: "Medium" }
    ],
    "Astronaut Trainer": [
        { task: "Develop astronaut training programs", priority: "High" },
        { task: "Conduct astronaut fitness assessments", priority: "Medium" },
        { task: "Simulate space missions for training", priority: "High" },
        { task: "Evaluate astronaut performance", priority: "Medium" },
        { task: "Research astronaut health issues", priority: "Low" }
    ],
    "Education Consultant": [
        { task: "Analyze educational needs", priority: "High" },
        { task: "Develop learning strategies", priority: "Medium" },
        { task: "Recommend educational tools", priority: "High" },
        { task: "Provide teacher training", priority: "Medium" },
        { task: "Evaluate student performance", priority: "Low" }
    ],
    "Education Specialist": [
        { task: "Design educational programs", priority: "High" },
        { task: "Conduct educational research", priority: "Medium" },
        { task: "Assess educational outcomes", priority: "Medium" },
        { task: "Develop training materials", priority: "High" },
        { task: "Ensure educational standards are met", priority: "Low" }
    ],
    "Science Educator": [
        { task: "Develop science curriculum", priority: "High" },
        { task: "Teach science concepts", priority: "Medium" },
        { task: "Prepare science experiments", priority: "Medium" },
        { task: "Evaluate student progress", priority: "Low" },
        { task: "Stay updated on scientific advancements", priority: "Low" }
    ],
    "Game Developer": [
        { task: "Develop game mechanics for the loyalty program (e.g., points, levels, rewards)", priority: "High" },
        { task: "Implement user interactions such as achievements, leaderboards, and challenges", priority: "High" },
        { task: "Optimize gameplay for mobile platforms (iOS and Android)", priority: "Medium" },
        { task: "Integrate game progression with loyalty program database", priority: "High" },
        { task: "Collaborate with UX designers to create an engaging user interface", priority: "Medium" },
        { task: "Design and implement animations for visual appeal", priority: "Medium" },
        { task: "Perform rigorous testing to ensure a bug-free user experience", priority: "High" },
        { task: "Implement reward system integration with third-party services", priority: "Medium" },
        { task: "Ensure the game complies with app store requirements", priority: "High" },
        { task: "Monitor and optimize in-game performance post-launch", priority: "Medium" }
    ]
};

module.exports = { TASK_POOL };