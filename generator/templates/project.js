const PROJECTS_POOL = {
    Healthcare: [
        {
            title: "Diagnostic AI App",
            description: "An AI-powered application to assist in early disease detection and diagnosis.",
            type: "AI",
            roles: ["AI Engineer", "Data Scientist", "Mobile Developer", "Project Manager"],
            budget: 150000,
            start_date: "2023-06-01",
            end_date: null,
            status: "In Progress",
            priority: "High"
        },
        {
            title: "Telemedicine Portal",
            description: "A web-based platform enabling remote consultations between patients and doctors.",
            type: "Web",
            roles: ["Frontend Developer", "Backend Developer", "UX Designer", "Project Manager"],
            budget: 85000,
            start_date: "2023-02-10",
            end_date: "2023-11-15",
            status: "Completed",
            priority: "Medium"
        },
        {
            title: "Health Tracker Mobile App",
            description: "A mobile application for users to monitor vital health statistics.",
            type: "Mobile",
            roles: ["Mobile Developer", "UI Designer", "QA Tester", "Product Owner"],
            budget: 50000,
            start_date: "2024-01-01",
            end_date: null,
            status: "In Progress",
            priority: "High"
        },
        {
            title: "Smart Bed Embedded System",
            description: "An embedded solution for hospital beds to monitor patient movements and vitals.",
            type: "Embedded",
            roles: ["Embedded Developer", "Electronics Engineer", "Backend Developer"],
            budget: 120000,
            start_date: "2023-03-15",
            end_date: "2023-12-01",
            status: "In Progress",
            priority: "High"
        },
        {
            title: "Virtual Surgery Simulator",
            description: "A VR-based system for training surgeons in a risk-free environment.",
            type: "VR",
            roles: ["VR Developer", "3D Modeler", "AI Engineer", "QA Tester"],
            budget: 200000,
            start_date: "2023-10-05",
            end_date: null,
            status: "In Progress",
            priority: "High"
        },
        {
            title: "Pharmacy Management System",
            description: "A desktop application for managing pharmacy inventory and prescriptions.",
            type: "Desktop",
            roles: ["Desktop Developer", "Database Administrator", "QA Tester"],
            budget: 45000,
            start_date: "2022-11-20",
            end_date: "2023-08-15",
            status: "Completed",
            priority: "Medium"
        }
    ],
    Finance: [
        {
            title: "Investment Portfolio Tracker",
            description: "A web app for users to track and analyze their investment portfolios.",
            type: "Web",
            roles: ["Backend Developer", "Frontend Developer", "Data Analyst"],
            budget: 70000,
            start_date: "2023-05-01",
            end_date: "2023-12-01",
            status: "Completed",
            priority: "Medium"
        },
        {
            title: "Personal Budget Planner",
            description: "A mobile application for users to manage and plan their budgets effectively.",
            type: "Mobile",
            roles: ["Mobile Developer", "UI Designer", "Product Owner"],
            budget: 40000,
            start_date: "2023-11-01",
            end_date: null,
            status: "In Progress",
            priority: "High"
        },
        {
            title: "Financial Forecast AI",
            description: "An AI-based system for predicting market trends and financial forecasts.",
            type: "AI",
            roles: ["AI Engineer", "Data Scientist", "Project Manager"],
            budget: 130000,
            start_date: "2023-09-15",
            end_date: null,
            status: "In Progress",
            priority: "High"
        },
        {
            title: "Trading Dashboard Desktop App",
            description: "A desktop application for real-time stock trading and analytics.",
            type: "Desktop",
            roles: ["Desktop Developer", "Database Administrator", "QA Tester"],
            budget: 90000,
            start_date: "2023-01-20",
            end_date: "2023-10-10",
            status: "Completed",
            priority: "Medium"
        },
        {
            title: "Virtual Finance Seminar Platform",
            description: "A VR environment for hosting finance-related workshops and seminars.",
            type: "VR",
            roles: ["VR Developer", "3D Modeler", "Event Coordinator"],
            budget: 140000,
            start_date: "2023-07-01",
            end_date: null,
            status: "In Progress",
            priority: "High"
        },
        {
            title: "Cryptocurrency Wallet Embedded System",
            description: "An embedded solution for secure storage of cryptocurrency keys.",
            type: "Embedded",
            roles: ["Embedded Developer", "Cryptography Specialist", "Hardware Engineer"],
            budget: 160000,
            start_date: "2023-03-10",
            end_date: "2023-12-15",
            status: "In Progress",
            priority: "High"
        }
    ],
    Technology: [
        {
            title: "Cloud Storage Platform",
            description: "A scalable web platform for secure file storage and sharing.",
            type: "Web",
            roles: ["Backend Developer", "Cloud Engineer", "Security Specialist"],
            budget: 100000,
            start_date: "2023-04-01",
            end_date: null,
            status: "In Progress",
            priority: "High"
        },
        {
            title: "IoT Device Management System",
            description: "An embedded system for managing connected IoT devices in smart homes.",
            type: "Embedded",
            roles: ["IoT Developer", "Embedded Developer", "Network Engineer"],
            budget: 85000,
            start_date: "2023-08-15",
            end_date: null,
            status: "In Progress",
            priority: "High"
        },
        {
            title: "Tech Support AR Tool",
            description: "An AR application for providing step-by-step tech support guidance.",
            type: "AR",
            roles: ["AR Developer", "UI Designer", "QA Tester"],
            budget: 65000,
            start_date: "2023-06-01",
            end_date: "2023-11-30",
            status: "Completed",
            priority: "Medium"
        },
        {
            title: "AI-Powered Developer Assistant",
            description: "An AI-based desktop application for coding and debugging assistance.",
            type: "AI",
            roles: ["AI Engineer", "Backend Developer", "Product Manager"],
            budget: 120000,
            start_date: "2024-01-01",
            end_date: null,
            status: "In Progress",
            priority: "High"
        },
        {
            title: "VR Conference Platform",
            description: "A VR platform for hosting virtual tech conferences and meetups.",
            type: "VR",
            roles: ["VR Developer", "3D Modeler", "Event Coordinator"],
            budget: 150000,
            start_date: "2023-05-01",
            end_date: null,
            status: "In Progress",
            priority: "High"
        },
        {
            title: "Mobile Security Suite",
            description: "A mobile app for secure communications and data encryption.",
            type: "Mobile",
            roles: ["Mobile Developer", "Cryptography Specialist", "QA Tester"],
            budget: 90000,
            start_date: "2023-09-01",
            end_date: "2023-12-20",
            status: "Completed",
            priority: "Medium"
        },
    ],
    Marketing: [
        {
            title: "Social Media Campaign Manager",
            description: "A web application for planning, managing, and analyzing social media campaigns.",
            type: "Web",
            roles: ["Frontend Developer", "Backend Developer", "Social Media Strategist"],
            budget: 60000,
            start_date: "2023-05-01",
            end_date: null,
            status: "In Progress",
            priority: "High"
        },
        {
            title: "Ad Performance Analytics Tool",
            description: "An AI-powered analytics platform to evaluate advertisement performance in real-time.",
            type: "AI",
            roles: ["Data Scientist", "Backend Developer", "AI Engineer"],
            budget: 80000,
            start_date: "2023-07-15",
            end_date: null,
            status: "In Progress",
            priority: "High"
        },
        {
            title: "Event Planning AR Assistant",
            description: "An AR mobile app to visualize and plan event setups for marketing campaigns.",
            type: "AR",
            roles: ["AR Developer", "UI Designer", "Event Coordinator"],
            budget: 70000,
            start_date: "2023-02-01",
            end_date: "2023-10-01",
            status: "Completed",
            priority: "Medium"
        },
        {
            title: "Video Editing Collaboration Platform",
            description: "A desktop application for collaborative video editing tailored for marketing teams.",
            type: "Desktop",
            roles: ["Desktop Developer", "UI Designer", "QA Tester"],
            budget: 50000,
            start_date: "2023-01-10",
            end_date: "2023-09-30",
            status: "Completed",
            priority: "Medium"
        },
        {
            title: "Interactive VR Ads Platform",
            description: "A VR-based platform to create and host interactive advertisements.",
            type: "VR",
            roles: ["VR Developer", "3D Modeler", "Marketing Specialist"],
            budget: 120000,
            start_date: "2023-03-20",
            end_date: null,
            status: "In Progress",
            priority: "High"
        },
        {
            title: "Brand Management Mobile App",
            description: "A mobile app for tracking and managing brand assets and campaigns.",
            type: "Mobile",
            roles: ["Mobile Developer", "UX Designer", "Project Manager"],
            budget: 40000,
            start_date: "2023-08-01",
            end_date: null,
            status: "In Progress",
            priority: "Low"
        }
    ],
    Energy: [
        {
            title: "Smart Grid Management System",
            description: "A web-based system for real-time monitoring and management of smart grids.",
            type: "Web",
            roles: ["Backend Developer", "Frontend Developer", "Energy Consultant"],
            budget: 95000,
            start_date: "2023-06-01",
            end_date: "2023-12-15",
            status: "Completed",
            priority: "High"
        },
        {
            title: "Renewable Energy Forecast AI",
            description: "An AI solution to predict renewable energy production based on weather conditions.",
            type: "AI",
            roles: ["AI Engineer", "Data Scientist", "Energy Specialist"],
            budget: 140000,
            start_date: "2023-09-01",
            end_date: null,
            status: "In Progress",
            priority: "High"
        },
        {
            title: "Solar Panel Efficiency Tracker",
            description: "A mobile app to monitor and optimize solar panel performance.",
            type: "Mobile",
            roles: ["Mobile Developer", "UI Designer", "Solar Energy Expert"],
            budget: 50000,
            start_date: "2023-04-01",
            end_date: "2023-12-01",
            status: "Completed",
            priority: "Medium"
        },
        {
            title: "Power Plant Embedded Monitoring System",
            description: "An embedded system for real-time monitoring of power plant equipment.",
            type: "Embedded",
            roles: ["Embedded Developer", "Electronics Engineer", "QA Tester"],
            budget: 120000,
            start_date: "2023-07-15",
            end_date: null,
            status: "In Progress",
            priority: "High"
        },
        {
            title: "Energy Training VR Simulator",
            description: "A VR platform for training energy sector workers on safety protocols.",
            type: "VR",
            roles: ["VR Developer", "3D Modeler", "Safety Specialist"],
            budget: 90000,
            start_date: "2023-05-01",
            end_date: null,
            status: "In Progress",
            priority: "Medium"
        },
        {
            title: "Energy Consumption Dashboard",
            description: "A desktop application for visualizing and analyzing energy consumption data.",
            type: "Desktop",
            roles: ["Desktop Developer", "Data Analyst", "UX Designer"],
            budget: 45000,
            start_date: "2023-02-10",
            end_date: "2023-11-10",
            status: "Completed",
            priority: "Low"
        }
    ],
    Transportation: [
        {
            title: "Fleet Management System",
            description: "A web-based system for tracking and managing transportation fleets.",
            type: "Web",
            roles: ["Backend Developer", "Frontend Developer", "Data Analyst"],
            budget: 80000,
            start_date: "2023-03-01",
            end_date: "2023-11-01",
            status: "Completed",
            priority: "Medium"
        },
        {
            title: "Driver Behavior Monitoring AI",
            description: "An AI-powered platform to assess and improve driver behavior.",
            type: "AI",
            roles: ["AI Engineer", "Data Scientist", "Project Manager"],
            budget: 110000,
            start_date: "2023-06-01",
            end_date: null,
            status: "In Progress",
            priority: "High"
        },
        {
            title: "Passenger Navigation Mobile App",
            description: "A mobile app for real-time navigation and ticketing for passengers.",
            type: "Mobile",
            roles: ["Mobile Developer", "UX Designer", "QA Tester"],
            budget: 55000,
            start_date: "2023-08-15",
            end_date: null,
            status: "In Progress",
            priority: "Medium"
        },
        {
            title: "Autonomous Vehicle Simulation VR",
            description: "A VR platform for simulating autonomous vehicle behaviors.",
            type: "VR",
            roles: ["VR Developer", "3D Modeler", "AI Engineer"],
            budget: 150000,
            start_date: "2023-04-01",
            end_date: null,
            status: "In Progress",
            priority: "High"
        },
        {
            title: "Cargo Load Optimization Embedded System",
            description: "An embedded system to optimize cargo load distribution in vehicles.",
            type: "Embedded",
            roles: ["Embedded Developer", "Logistics Specialist", "Hardware Engineer"],
            budget: 100000,
            start_date: "2023-09-01",
            end_date: null,
            status: "In Progress",
            priority: "High"
        },
        {
            title: "Airport Operations Desktop Dashboard",
            description: "A desktop application to streamline airport operations management.",
            type: "Desktop",
            roles: ["Desktop Developer", "Database Administrator", "QA Tester"],
            budget: 60000,
            start_date: "2023-02-01",
            end_date: "2023-10-15",
            status: "Completed",
            priority: "Low"
        }
    ],
    Retail: [
        {
            title: "Personalized Shopping Assistant",
            description: "An AI-powered mobile app providing personalized recommendations for shoppers.",
            type: "Mobile",
            roles: ["Mobile Developer", "AI Engineer", "UX Designer"],
            budget: 70000,
            start_date: "2023-05-01",
            end_date: null,
            status: "In Progress",
            priority: "High"
        },
        {
            title: "Inventory Management Dashboard",
            description: "A web application for tracking and optimizing store inventories.",
            type: "Web",
            roles: ["Frontend Developer", "Backend Developer", "Database Administrator"],
            budget: 65000,
            start_date: "2023-03-15",
            end_date: "2023-10-30",
            status: "Completed",
            priority: "Medium"
        },
        {
            title: "AR Fitting Room",
            description: "An AR application allowing users to virtually try on clothes.",
            type: "AR",
            roles: ["AR Developer", "3D Modeler", "UI Designer"],
            budget: 80000,
            start_date: "2023-08-01",
            end_date: null,
            status: "In Progress",
            priority: "High"
        },
        {
            title: "Retail Analytics Platform",
            description: "A desktop application to analyze customer behavior and sales data.",
            type: "Desktop",
            roles: ["Data Analyst", "Desktop Developer", "UX Designer"],
            budget: 50000,
            start_date: "2023-02-01",
            end_date: "2023-09-01",
            status: "Completed",
            priority: "Medium"
        },
        {
            title: "Gamified Loyalty Program",
            description: "A mobile app gamifying loyalty programs to increase customer retention.",
            type: "Game",
            roles: ["Game Developer", "UX Designer", "Marketing Specialist"],
            budget: 60000,
            start_date: "2023-06-01",
            end_date: null,
            status: "In Progress",
            priority: "Medium"
        },
        {
            title: "VR Shopping Experience",
            description: "A VR platform for immersive online shopping experiences.",
            type: "VR",
            roles: ["VR Developer", "3D Modeler", "Retail Expert"],
            budget: 120000,
            start_date: "2023-04-01",
            end_date: null,
            status: "In Progress",
            priority: "High"
        }
    ],
    Aerospace: [
        {
            title: "Satellite Monitoring System",
            description: "A web application to monitor and analyze satellite data in real-time.",
            type: "Web",
            roles: ["Backend Developer", "Frontend Developer", "Satellite Data Analyst"],
            budget: 150000,
            start_date: "2023-05-01",
            end_date: null,
            status: "In Progress",
            priority: "High"
        },
        {
            title: "Rocket Launch Simulation VR",
            description: "A VR platform for simulating rocket launches and orbital mechanics.",
            type: "VR",
            roles: ["VR Developer", "3D Modeler", "Aerospace Engineer"],
            budget: 200000,
            start_date: "2023-02-01",
            end_date: "2023-10-15",
            status: "Completed",
            priority: "High"
        },
        {
            title: "Autonomous Drone Controller",
            description: "An AI-based embedded system to manage autonomous drones.",
            type: "Embedded",
            roles: ["Embedded Developer", "AI Engineer", "Drone Specialist"],
            budget: 180000,
            start_date: "2023-06-15",
            end_date: null,
            status: "In Progress",
            priority: "High"
        },
        {
            title: "Flight Path Optimization AI",
            description: "An AI platform to optimize flight paths for fuel efficiency and safety.",
            type: "AI",
            roles: ["AI Engineer", "Aerospace Engineer", "Data Scientist"],
            budget: 170000,
            start_date: "2023-03-01",
            end_date: "2023-12-01",
            status: "In Progress",
            priority: "High"
        },
        {
            title: "Aircraft Maintenance Dashboard",
            description: "A desktop application for tracking and scheduling aircraft maintenance.",
            type: "Desktop",
            roles: ["Desktop Developer", "Database Administrator", "Aerospace Technician"],
            budget: 75000,
            start_date: "2023-04-01",
            end_date: "2023-11-15",
            status: "Completed",
            priority: "Medium"
        },
        {
            title: "Astronaut Training Simulator",
            description: "A VR platform for training astronauts on zero-gravity operations.",
            type: "VR",
            roles: ["VR Developer", "3D Modeler", "Astronaut Trainer"],
            budget: 220000,
            start_date: "2023-05-01",
            end_date: null,
            status: "In Progress",
            priority: "High"
        }
    ],
    Education: [
        {
            title: "Virtual Classroom Platform",
            description: "A web-based platform for hosting and managing virtual classrooms.",
            type: "Web",
            roles: ["Backend Developer", "Frontend Developer", "Education Consultant"],
            budget: 70000,
            start_date: "2023-01-01",
            end_date: "2023-08-01",
            status: "Completed",
            priority: "High"
        },
        {
            title: "AR Interactive Textbooks",
            description: "An AR app enhancing learning through interactive 3D visuals and animations.",
            type: "AR",
            roles: ["AR Developer", "3D Modeler", "Education Specialist"],
            budget: 85000,
            start_date: "2023-03-01",
            end_date: null,
            status: "In Progress",
            priority: "High"
        },
        {
            title: "AI Tutoring System",
            description: "An AI-powered platform for personalized tutoring based on student performance.",
            type: "AI",
            roles: ["AI Engineer", "Data Scientist", "Education Specialist"],
            budget: 100000,
            start_date: "2023-06-01",
            end_date: null,
            status: "In Progress",
            priority: "High"
        },
        {
            title: "Student Management System",
            description: "A desktop application for managing student records and performance data.",
            type: "Desktop",
            roles: ["Desktop Developer", "Database Administrator", "Project Manager"],
            budget: 60000,
            start_date: "2023-02-01",
            end_date: "2023-10-01",
            status: "Completed",
            priority: "Medium"
        },
        {
            title: "Virtual Science Lab VR",
            description: "A VR platform for conducting virtual science experiments safely.",
            type: "VR",
            roles: ["VR Developer", "3D Modeler", "Science Educator"],
            budget: 95000,
            start_date: "2023-05-01",
            end_date: null,
            status: "In Progress",
            priority: "High"
        },
        {
            title: "Mobile Exam Prep App",
            description: "A mobile app for students to prepare for exams with quizzes and tips.",
            type: "Mobile",
            roles: ["Mobile Developer", "UX Designer", "Education Specialist"],
            budget: 40000,
            start_date: "2023-07-01",
            end_date: null,
            status: "In Progress",
            priority: "Low"
        }
    ]
};

const PROJECT_TYPES = ["Web", "Mobile", "Desktop", "Embedded", "AI", "VR", "AR", "Game"];
const PROJECT_STATUSES = ["In Progress", "Completed"];
const PRIORITIES = ["Low", "Medium", "High"];

module.exports = { PROJECTS_POOL, PROJECT_TYPES, PROJECT_STATUSES, PRIORITIES };
