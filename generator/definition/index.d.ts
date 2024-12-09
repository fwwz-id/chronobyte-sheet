export type ProjectType = "Web" | "Mobile" | "Desktop" | "Embedded" | "AI" | "VR" | "AR" | "Game";

export type ProjectStatus = 'In Progress' | 'Completed';

export type Priority = 'Low' | 'Medium' | 'High';

export type Role = 'AI Engineer' | 'Data Scientist' | 'Mobile Developer' |
    'Project Manager' | 'Frontend Developer' | 'Backend Developer' | 'UX Designer' | 'UI Designer' |
    'QA Tester' | 'Product Owner' | 'Embedded Developer' | 'Electronics Engineer' |
    'VR Developer' | '3D Modeler' | 'Desktop Developer' | 'Database Administrator' | 'Data Analyst' | 'Event Coordinator' |
    'Cryptography Specialist' | 'Hardware Engineer' | 'Cloud Engineer' | 'Security Specialist' | 'IoT Developer' | 'Network Engineer' | 'AR Developer' |
    'Product Manager' | 'Event Planner' | 'Social Media Strategist' | 'Marketing Specialist' | 'Energy Consultant' | 'Energy Specialist' |
    'Solar Energy Expert' | 'Safety Specialist' | 'Logistics Specialist' | 'Game Developer' | 'Retail Expert' | 'Satellite Data Analyst' |
    'Aerospace Engineer' | 'Drone Specialist' | 'Aerospace Technician' | 'Astronaut Trainer' | 'Education Consultant' | 'Education Specialist' |
    'Science Educator';

export type Project = {
    title: string;
    description: string;
    type: ProjectType;
    roles: Role[];
    budget: number;
    start_date: string;
    end_date: string | null;
    status: ProjectStatus;
    created_at: Date;
    updated_at: Date;
}

export type Company = {
    id: string;
    name: string;
    contact_person: string;
    email: string;
    phone: string;
    address: string;
    industry: string;
    created_at: Date;
    updated_at: Date;
}

export type CompanyProject = Company | { projects: Project[] };

export type RoleEntity = {
    id: string;
    name: Role;
    created_at: string;
    updated_at: string;
}

export type Employee = {
    id: string;
    role_id: string;
    name: string;
    email: string;
    password: string;
    phone: string;
    hourly_rate: number;
    created_at: Date;
    updated_at: Date;
}

export type ProjectAssignment = {
    id: string;
    project_id: string;
    employee_id: string;
    role_id: string;
    created_at: Date;
    updated_at: Date;
}

export type Task = {
    [key in Role]: Array<{
        task: string;
        priority: Priority
    }>
}

export type TaskEntity = {
    id: string;
    project_id: string;
    description: string;
    assigned_to: string;
    status: ProjectStatus;
    priority: Priority;
    start_date: Date;
    due_date: Date;
    created_at: Date;
    updated_at: Date
}