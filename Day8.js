const employees = [
  { name: "Arun", department: "IT" },
  { name: "Priya", department: "HR" },
  { name: "Kumar", department: "IT" },
  { name: "Divya", department: "Finance" },
  { name: "Rahul", department: "HR" },
  { name: "Sneha", department: "IT" },
];

function groupByDepartment(employees) {
  // Your logic here
  //first i need to extract unique values based on the department
  //with extracted key filterout the matching entities whos department === key as array
  // combine all arrays to an single object as keys and values

  //   const extarctDepart = employees.map((x) => x.department);
  //   const uniqueDepart = [...new Set(extarctDepart)];

  //   const groupByKey = uniqueDepart.reduce((acc, current) => {
  //     const filterByDepart = employees.filter(
  //       (employee) => employee.department === current,
  //     );
  //     acc[current] = filterByDepart;
  //     return acc;
  //   }, {});

  //   return groupByKey;

  // optimized ans
  let finalObj = {};
  employees.forEach((employee) => {
    if (!finalObj[employee.department]) {
      finalObj[employee.department] = [];
    }
    finalObj[employee.department].push(employee);
  });
  return finalObj;
}

console.log(groupByDepartment(employees));

//sample output
// {
//   IT: [
//     { name: "Arun", department: "IT" },
//     { name: "Kumar", department: "IT" },
//     { name: "Sneha", department: "IT" }
//   ],
//   HR: [
//     { name: "Priya", department: "HR" },
//     { name: "Rahul", department: "HR" }
//   ],
//   Finance: [
//     { name: "Divya", department: "Finance" }
//   ]
// }
