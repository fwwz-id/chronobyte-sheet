const { faker } = require("@faker-js/faker");

const COMPANY_POOL = require("./templates/company");
const { PROJECTS_POOL, PRIORITIES } = require("./templates/project");
const { ROLES } = require("./templates/role");
const { TASK_POOL } = require("./templates/task");

// const INDUSTRY_POOL = ["Healthcare", "Finance", "Technology", "Energy", "Marketing", "Transportation", "Retail", "Aerospace", "Education"]

const DEFAULT_YEAR_STARTED_PROJECTS = [2, 3, 4, 5];

module.exports = class Generator {
    constructor() {
        this.companies = COMPANY_POOL;
        this.projects = PROJECTS_POOL;
        this.roles = ROLES;
        this.tasks = TASK_POOL;
    }

    /**
     * 
     * @returns {import("./definition").Company[]}
     */
    getCompanies() {
        return this.companies.map(company => {
            const person = faker.person.fullName();

            const { company: name, industry, emailSuffix } = company;

            const years = faker.helpers.arrayElement(DEFAULT_YEAR_STARTED_PROJECTS);
            const date = faker.date.past({ years });

            const _company = {
                id: faker.string.uuid(),
                name,
                industry,
                contact_person: person,
                email: `${person.split(' ').join('.').toLowerCase()}${emailSuffix}`,
                phone: faker.phone.number({ style: 'international' }),
                address: faker.helpers.arrayElement([faker.location.streetAddress(), faker.location.streetAddress({ useFullAddress: true })]),
                created_at: date,
                updated_at: date,
            }

            return _company;

        });
    }

    /**
     * 
     * @param {import("./definition").Project} company 
     * @returns 
     */
    getProject(company) {
        /** @type {import("./definition").Project} */
        const { title: name, ...project } = faker.helpers.arrayElement(this.projects[company.industry]);

        project.start_date = company.created_at;
        project.end_date = "";
        project.created_at = company.created_at;
        project.updated_at = company.updated_at;


        if (project.status === "Completed") {
            project.end_date = faker.date.soon({ refDate: project.start_date, days: 280 });
            project.updated_at = project.end_date;
        }

        return {
            id: faker.string.uuid(),
            company_id: company.id,
            name,
            ...project,
        }
    }


    getCompaniesWithProjects() {
        const companies = this.getCompanies();

        return companies.map(company => {
            /** @type {import("./definition").Project[]} */
            const projects = Array.from({ length: faker.number.int({ min: 1, max: 5 }) }, () => this.getProject(company));

            return { ...company, projects };
        });
    }

    /**
     * 
     * @param {import("./definition").RoleEntity[]} roles 
     * @returns {import("./definition").Employee[]}
     */
    getEmployees(roles) {
        const employees = new Map();

        // First, ensure at least 4 people per role
        for (const role of roles) {
            employees.set(role.name, []);

            for (let i = 0; i < 4; i++) {
                const firstName = faker.person.firstName(),
                    lastName = faker.person.lastName();

                const fullName = `${firstName} ${lastName}`;
                const email = faker.internet.email({ firstName, lastName, provider: "chronobyte.com" }).toLowerCase().replace(/_/g, '.');

                const employee = {
                    id: faker.string.uuid(),
                    role_id: role.id,
                    name: fullName,
                    email,
                    password: faker.internet.password({ length: 25 }),
                    phone: faker.phone.number({ style: 'international' }),
                    hourly_rate: faker.number.int({ min: 25, max: 200 }),
                    created_at: faker.date.past(),
                    updated_at: faker.date.recent()
                };

                employees.get(role.name).push(employee);
            }
        }

        // Convert Map to array and flatten
        return Array.from(employees.values()).flat();
    }

    getRoles() {
        return this.roles.map(role => {
            return {
                id: faker.string.uuid(),
                name: role,
                created_at: faker.date.past(),
                updated_at: faker.date.recent()
            }
        });
    }

    /**
     * 
     * @param {import("./definition").Employee[]} employees 
     * @param {import("./definition").Project[]} projects 
     * @param {import("./definition").RoleEntity[]} roles 
     * @returns 
     */
    getProjectAssignments(employees, projects, roles) {
        const assignments = [];

        for (const project of projects) {
            const projectRoles = roles.filter(role => project.roles.includes(role.name));
            const projectEmployees = employees.filter(employee => projectRoles.some(role => role.id === employee.role_id));

            for (const employee of projectEmployees) {
                const assigned_date = faker.date.recent({ refDate: project.start_date });

                /** @type {import("./definition").ProjectAssignment} */
                const assignment = {
                    id: faker.string.uuid(),
                    project_id: project.id,
                    employee_id: employee.id,
                    assigned_date,
                    unassigned_date: "",
                    created_at: assigned_date,
                    updated_at: assigned_date
                }

                if (project.end_date) {
                    assignment.unassigned_date = faker.date.soon({ refDate: project.end_date });
                    assignment.updated_at = assignment.unassigned_date;
                }

                assignments.push(assignment);
            }
        }

        return assignments;
    }

    /**
     * 
     * @param {import("./definition").ProjectAssignment[]} assignments
     * @param {import("./definition").Project[]} projects
     * @returns 
     */
    getTasks(assignments, projects) {
        const TASK_STATUSES = ["Not Started", "In Progress"];
        
        /** @type {Array<{project_id: string, tasks: import("./definition").TaskEntity[]}>} */
        const tasks_each_project = [];

        assignments.map(assignment => {
            const project = projects.find(project => project.id === assignment.project_id);

            const projectIndex = tasks_each_project.findIndex(task => task.project_id === project.id);

            /**
             * Constraints:
             * 1. Each task must have a unique ID
             * 2. Each task must be assigned to an employee
             * 3. The employee's role must match the project's required roles
             * 4. The task's start date must be the project's start date or between the project's start and end dates
             * 5. The task's due date can be the project's end date or a date between the recently before end dates
             */

            const roles = Object.keys(this.tasks).filter(role => project.roles.includes(role));

            const tasks_for_role = roles.map(role => {
                /** @type {import("./definition").Task["Frontend Developer"]} */
                const tasks_role = faker.helpers.shuffle(this.tasks[role]);

                const start_date = faker.date.soon({ refDate: project.start_date });

                const { task: description, priority } = faker.helpers.arrayElement(tasks_role);

                /** @type {import("./definition").TaskEntity} */
                const task = {
                    id: faker.string.uuid(),
                    project_id: project.id,
                    assigned_to: assignment.employee_id,
                    description,
                    priority,
                    status: faker.helpers.arrayElement(TASK_STATUSES),
                    start_date,
                    due_date: faker.date.soon({ refDate: start_date, days: faker.helpers.arrayElement([14, 18, 24]) }),
                    created_at: start_date,
                    updated_at: start_date
                }

                if (project.status === "Completed") {
                    task.status = "Completed";
                    task.updated_at = faker.date.between({ from: task.start_date, to: task.due_date });
                }

                return task
            });

            if (projectIndex > -1) {
                tasks_each_project[projectIndex].tasks.concat(tasks_for_role);
            } else {
                tasks_each_project.push({ project_id: project.id, tasks: tasks_for_role });
            }
        });

        return tasks_each_project;
    }
}