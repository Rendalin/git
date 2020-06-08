const goodNumber = 17;
let anotherNumber = goodNumber;
anotherNumber = 77;

Console.log(goodNumber);
Console.log(anotherNumber);

const customer = { name: 'John', age: 17 };
const anotherCustomer = customer;
anotherCustomer.age = 20;

Console.log(customer.age);
Console.log(anotherCustomer.age);