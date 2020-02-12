var employee = {
    name: 'ABC',
    city: 'city1',
    department: 'd1'
};

var newEmployee = Object.assign(employee);
console.log('First Object: ',employee);
console.log('Second Object',newEmployee);
