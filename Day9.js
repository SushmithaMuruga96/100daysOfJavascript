const employees = [
  { name: "Arun", salary: 5000 },
  { name: "Priya", salary: 8000 },
  { name: "Akash", salary: 5000 },
  { name: "Divya", salary: 10000 },
  { name: "Rahul", salary: 6000 },
];
function sortEmployeesBySalaryAsc(employees) {
  return employees.toSorted((a, b) => {
    if (a.salary === b.salary) {
      return a.name.localeCompare(b.name);
    } else {
      return a.salary - b.salary;
    }
  });
}

function sortEmployeesBySalaryDsc(employees) {
  return employees.toSorted((a, b) => b.salary - a.salary);
}

console.log(sortEmployeesBySalaryAsc(employees));
console.log(sortEmployeesBySalaryDsc(employees));
