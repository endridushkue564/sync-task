/* 
Filename: ComplexCode.js 
Content: Complex Code Example
*/

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name}`);
  }

  celebrateBirthday() {
    console.log(`Happy ${this.age}th birthday, ${this.name}!`);
    this.age++;
  }
}

class Employee extends Person {
  constructor(name, age, position, department) {
    super(name, age);
    this.position = position;
    this.department = department;
  }

  doWork() {
    console.log(`${this.name} is working as a ${this.position} in the ${this.department} department.`);
  }

  attendMeeting() {
    console.log(`${this.name} is attending a meeting.`);
  }
}

class Manager extends Employee {
  constructor(name, age, position, department, employees) {
    super(name, age, position, department);
    this.employees = employees;
  }

  hireEmployee(employee) {
    this.employees.push(employee);
    console.log(`New employee ${employee.name} is hired.`);
  }

  fireEmployee(employee) {
    const index = this.employees.findIndex(emp => emp.name === employee.name);
    if (index !== -1) {
      this.employees.splice(index, 1);
      console.log(`${employee.name} is fired.`);
    }
  }

  listEmployees() {
    console.log(`Employees under ${this.name}:`);
    this.employees.forEach(emp => console.log(emp.name));
  }
}

// Create instances of the classes
const person1 = new Person('John', 25);
person1.sayHello();

const employee1 = new Employee('Alice', 30, 'Software Engineer', 'IT');
employee1.doWork();
employee1.attendMeeting();

const manager1 = new Manager('Bob', 40, 'Manager', 'Management', [employee1]);
manager1.hireEmployee(new Employee('Eve', 28, 'Marketing Specialist', 'Marketing'));
manager1.fireEmployee(employee1);
manager1.listEmployees();

// Complex calculations
function calculateComplexResult() {
  let complexResult = 0;

  for (let i = 1; i <= 1000; i++) {
    complexResult += Math.sqrt(i) * 2 + Math.pow(i, 2);
  }

  return complexResult;
}

console.log('Complex calculation result:', calculateComplexResult());

// More complex functions
function multiplyByTwo(number) {
  return number * 2;
}

function subtractOne(number) {
  return number - 1;
}

function addTen(number) {
  return number + 10;
}

function doComplexOperation(input) {
  let result = multiplyByTwo(input);
  result = subtractOne(result);
  result = addTen(result);
  return result;
}

console.log('Complex operation result:', doComplexOperation(5));

// More complex logic
const value1 = 10;
const value2 = 20;
let maxValue;

if (value1 > value2) {
  maxValue = value1;
} else if (value2 > value1) {
  maxValue = value2;
} else {
  maxValue = 'Both values are equal';
}

console.log('Max value:', maxValue);

// Complex data manipulation
const array = [1, 2, 3, 4, 5];
const multipliedArray = array.map(number => number * 2);
const filteredArray = multipliedArray.filter(number => number > 5);
const sumArray = filteredArray.reduce((sum, number) => sum + number, 0);

console.log('Sum of filtered array elements:', sumArray);

// Complex async operations
function resolveAfter(delay) {
  return new Promise(resolve => {
    setTimeout(resolve, delay);
  });
}

async function doComplexAsyncOperation() {
  console.log('Start of complex async operation');
  await resolveAfter(2000);
  console.log('After 2 seconds');
  await resolveAfter(3000);
  console.log('After another 3 seconds');
  return 'Complex async operation completed';
}

doComplexAsyncOperation()
  .then(result => console.log(result));

// More complex error handling
function throwError() {
  throw new Error('This is a complex error');
}

function handleComplexError() {
  try {
    throwError();
  } catch (error) {
    console.error('Complex error handled:', error.message);
  }
}

handleComplexError();

// ... continue with additional complex code ...