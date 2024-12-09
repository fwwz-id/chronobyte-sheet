function main() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();

  setClients(spreadsheet);
  setProjects(spreadsheet);
  setRoles(spreadsheet);
  setEmployees(spreadsheet);
  setProjectAssignments(spreadsheet);
  setTasks(spreadsheet);
}

/**
 * 
 * @param {GoogleAppsScript.Spreadsheet.Spreadsheet} spreadsheet 
 */
function setClients(spreadsheet) {
  const sheet = spreadsheet.getSheetByName("Clients");
  const values = [];

  /** @type {Array<import("./generator/definition").Company>} */
  const companies = COMPANIES_POOL;

  companies.forEach(company => {
    const { id, name, industry, contact_person, email, phone, address, created_at, updated_at } = company;

    values.push([id, name, industry, contact_person, email, phone, address, created_at, updated_at]);
  });

  inject(sheet, values);
}

/**
 * 
 * @param {GoogleAppsScript.Spreadsheet.Spreadsheet} spreadsheet 
 */
function setProjects(spreadsheet) {
  const sheet = spreadsheet.getSheetByName("Projects");
  const values = [];

  /** @type {Array<import("./generator/definition").Project>} */
  const projects = COMPANIES_POOL.flatMap(company => company.projects);

  projects.forEach(project => {

    const { id, company_id, name, description, start_date, end_date, status, budget, created_at, updated_at } = project;

    values.push([id, company_id, name, description,
      start_date,
      end_date,
      status, budget,
      created_at,
      updated_at]);
  });

  inject(sheet, values);
}

function setRoles(spreadsheet) {
  const sheet = spreadsheet.getSheetByName("Roles");
  const values = [];

  /** @type {import("./generator/definition").RoleEntity[]} */
  const roles = ROLES_POOL;

  roles.forEach(role => {
    const { id, name, created_at, updated_at } = role;

    values.push([id, name, created_at, updated_at]);
  });

  inject(sheet, values);
}

function setEmployees(spreadsheet) {
  const sheet = spreadsheet.getSheetByName("Employees");
  const values = [];

  /** @type {Array<import("./generator/definition").Employee>} */
  const employees = EMPLOYEES_POOL;

  employees.forEach(employee => {
    const { id, role_id, name, email, password, phone, hourly_rate, created_at, updated_at } = employee;

    values.push([id, role_id, name, email, password, phone, hourly_rate, created_at, updated_at]);
  });

  inject(sheet, values);
}

function setTasks(spreadsheet) {
  const sheet = spreadsheet.getSheetByName("Tasks");
  const values = [];

  const tasks = TASKS_POOL;

  tasks.forEach(task => {
    const { id, project_id, name, description, start_date, end_date, status, created_at, updated_at } = task;

    values.push([id, project_id, name, description, start_date, end_date, status, created_at, updated_at]);
  });

  inject(sheet, values);
}

function setProjectAssignments(spreadsheet) {
  const sheet = spreadsheet.getSheetByName("ProjectAssignments");
  const values = [];

  const assignments = PROJECT_ASSIGNMENTS_POOL;

  assignments.forEach(assignment => {
    const { id, project_id, employee_id, assigned_date, unassigned_date, created_at, updated_at } = assignment;

    values.push([id, project_id, employee_id, assigned_date, unassigned_date, created_at, updated_at]);
  });

  inject(sheet, values);
}

/**
 * 
 * @param {GoogleAppsScript.Spreadsheet.Spreadsheet} sheet 
 * @param {Array<any>} values 
 */
function inject(sheet, values) {
  const ROW = values.length, COL = values[0].length;
  const RANGE = calculateRange(ROW, COL);

  const range = sheet.getRange(RANGE);

  range.setValues(values);
}

function calculateRange(row, col) {
  return `A2:${String.fromCharCode(65 + col - 1)}${row + 1}`;
}

/**
 * 
 * @param {string | Date | null} date 
 * @returns 
 */
function formatDate(date) {
  if (date != null || date != "")
    return new Date(date).toISOString();

  return "";
}