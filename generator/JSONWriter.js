const fs = require('fs');

/**
 * 
 * @param {string} filename 
 * @returns 
 */
const filepath = (filename) => `${__dirname}/results/${filename}`;

module.exports = class JSONWriter {
    /**
     * 
     * @param {import("./Generator")} generator 
     */
    constructor(generator) {
        this.generator = generator;
        this.companies = this.generator.getCompaniesWithProjects();
        this.projects = this.companies.flatMap(company => company.projects);
        this.roles = this.generator.getRoles();
        this.employees = this.generator.getEmployees(this.roles);
        this.projectAssignments = this.generator.getProjectAssignments(this.employees, this.projects, this.roles);
    }

    writeAll() {
        this.writeCompaniesOnly();
        this.writeProjectsOnly();
        this.writeCompleteCompanies();
        this.writeRoles();
        this.writeEmployees();
        this.writeProjectAssignments();
        this.writeTasks();
    }

    writeCompleteCompanies() {
        const companies = this.companies;
        fs.writeFileSync(filepath("companies.json"), JSON.stringify(companies, null, 2));
    }

    writeCompaniesOnly() {
        const companies = this.companies.map(({ projects, ...company }) => company);
        fs.writeFileSync(filepath("companies-only.json"), JSON.stringify(companies, null, 2));
    }

    writeProjectsOnly() {
        const projects = this.projects;
        fs.writeFileSync(filepath("projects.json"), JSON.stringify(projects, null, 2));
    }

    writeRoles() {
        const roles = this.roles;
        fs.writeFileSync(filepath("roles.json"), JSON.stringify(roles, null, 2));
    }

    writeEmployees() {
        const employees = this.employees;
        fs.writeFileSync(filepath("employees.json"), JSON.stringify(employees, null, 2));
    }

    writeProjectAssignments() {
        const assignments = this.projectAssignments;

        fs.writeFileSync(filepath("project-assignments.json"), JSON.stringify(assignments, null, 2));
    }

    writeTasks(){
        const tasks = this.generator.getTasks(this.projectAssignments, this.projects);

        fs.writeFileSync(filepath("tasks.json"), JSON.stringify(tasks, null, 2));
    }
}
