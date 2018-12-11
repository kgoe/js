// Object.freeze()

// shallow freeze
var employee = {
  name: 'Mayank',
  designation: 'Developer',
  address: {
    street: 'Rohini',
    city: 'Delhi',
  },
};

Object.freeze(employee);

employee.name = 'Dummy';
// fails silently in non-strict mode

employee.address.city = 'Noida';
// attributes of child object can be modified

console.log(employee.address.city);
// Output: 'Noida'
