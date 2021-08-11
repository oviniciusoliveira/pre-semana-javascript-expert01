// const EntityBase = require("./entityBase");

// console.log(
//   new EntityBase({
//     name: "Vinícius Oliveira",
//     gender: "male",
//   }).name
// );

const assert = require("assert");
const Employee = require("./employee");
const Manager = require("./manager");
const Util = require("./util");

const GENDER = {
  male: "male",
  female: "female",
};

{
  const employee = new Employee({
    name: "Maria",
    gender: GENDER.female,
  });

  assert.throws(() => employee.birthYear, {
    message: "You must define age first!",
  });
}

const CURRENT_YEAR = 2021;
Date.prototype.getFullYear = () => CURRENT_YEAR;

{
  const employee = new Employee({
    name: "João",
    age: 22,
    gender: GENDER.male,
  });

  assert.deepStrictEqual(employee.name, "Mr. João");
  assert.deepStrictEqual(employee.age, undefined);
  assert.deepStrictEqual(employee.gender, undefined);
  assert.deepStrictEqual(employee.grossPay, Util.formatCurrency(5000.4));
  assert.deepStrictEqual(employee.netPay, Util.formatCurrency(4000.32));

  const expectedBirthYear = 1999;
  assert.deepStrictEqual(employee.birthYear, expectedBirthYear);

  // não tem set, não vai mudar!!
  employee.birthYear = new Date().getFullYear() - 80;
  assert.deepStrictEqual(employee.birthYear, expectedBirthYear);

  employee.age = 80;
  assert.deepStrictEqual(employee.birthYear, 1941);

  console.log(`\n -----employee-----`);
  console.log("employee.name", employee.name);
  console.log("employee.age", employee.age);
  console.log("employee.gender", employee.gender);
  console.log("employee.grossPay", employee.grossPay);
  console.log("employee.netPay", employee.netPay);
}

{
  const manager = new Manager({
    name: "Lulu",
    age: 842,
    gender: GENDER.female,
  });
  
  assert.deepStrictEqual(manager.name, "Ms. Lulu");
  assert.deepStrictEqual(manager.age, undefined);
  assert.deepStrictEqual(manager.gender, undefined);
  assert.deepStrictEqual(manager.birthYear, 1179);
  assert.deepStrictEqual(manager.grossPay, Util.formatCurrency(5000.4));
  assert.deepStrictEqual(manager.bonuses, Util.formatCurrency(2000));
  assert.deepStrictEqual(manager.netPay, Util.formatCurrency(6000.32));

  
  console.log(`\n -----manager-----`);
  console.log("manager.name", manager.name)
  console.log("manager.age", manager.age)
  console.log("manager.gender", manager.gender)
  console.log("manager.birthYear", manager.birthYear)
  console.log("manager.grossPay", manager.grossPay)
  console.log("manager.bonuses", manager.bonuses)
  console.log("manager.netPay", manager.netPay)
}
