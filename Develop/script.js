// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
let firstName = "";
let lastName = "";
let salary;
let employeesArray = [];
const collectEmployees = function() {

  // Get user input to create and return an array of employee objects

  do {
      firstName = prompt("Enter first name:");
  } while (!firstName.trim()); // Continue loop if the input is an empty string or contains only whitespace

  do {
    lastName = prompt("Enter first name:");
  } while (!lastName.trim()); // Continue loop if the input is an empty string or contains only whitespace

  do{
        salary = prompt("enter employee salary");
    }while(isNaN(salary) || salary === "" || salary === null){   //accepts salary in numbers only
      salary = parseFloat(salary);    
  }

  let employeesData = {                 //employees data object
      firstName: firstName,
      lastName: lastName,
      salary: salary
  };
    
  employeesArray.push(employeesData);   //add employee records to employeeArray
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

  // Calculate and display the average salary

    let average_salary = 0;
    let total_salary = 0;
  
    for(i = 0; i < employeesArray.length -1; i++){  
      total_salary = total_salary+ parseInt(employeesArray[i].salary);
    }

    average_salary = total_salary/employeesArray.length;
    console.log(`The average employees salary between our ${employeesArray.length} is $ ${average_salary}`);
    return average_salary;

}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  
  // Select and display a random employee

    let randomNumber = '';
    randomNumber = Math.floor(Math.random() * employeesArray.length);
    console.log(randomNumber);
    employeesArray[randomNumber];
    console.log(`Congratulations to ${employeesArray[randomNumber].firstName} ${employeesArray[randomNumber].lastName} 
    , our random drawing winner!`);


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
