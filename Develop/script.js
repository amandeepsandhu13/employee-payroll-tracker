// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data

let employeesArray = [];
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects

  let firstName = prompt('enter employee first name');
  let lastName = prompt('enter employee last name');
  let salary = prompt('enter salary');

  let employeesData = {
    firstName: firstName,
    lastName: lastName,
    salary: salary
  };
  
  employeesArray.push(employeesData);
  console.log(employeesArray);
  let another_employee = confirm('add another employee');

  if(another_employee){
    console.log(employeesArray.length);
    collectEmployees();
    
  }else{
    return employeesArray; //return employee array

  }
  return employeesArray;

    

}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary

  let average_salary = 0;
  let total_salary = 0;
  
  //console.log(employeesArray);
  //console.log(employeesArray.length);

  for(i = 0; i < employeesArray.length -1; i++){  
    total_salary = total_salary+ parseInt(employeesArray[i].salary);
  }

   average_salary = total_salary/employeesArray.length;
   console.log(`The average employees salary between our $employeesArray.length is ${average_salary}`);
  return average_salary;

}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee

    let randomNumber = '';
    randomNumber = Math.floor(Math.random() * employeesArray.length);
    console.log(randomNumber);
    console.log(employeesArray[randomNumber]);

    //console.log(employeesArray[(Math.floor(Math.random() * employeesArray.length))]);

}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
