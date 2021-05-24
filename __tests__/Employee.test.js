const Employee = require("../lib/Employee");

const name = "dude";
const id = "111";
const email = "example@gmail.com"
describe("Employee", () => {
    describe("name to my employee class", () => {
        it("Should create new object using Employee class", () => {

            const employee = new Employee(name, id, email);

            expect(employee.name).toEqual(name);
            expect(employee.id).toEqual(id)
            expect(employee.email).toEqual(email)
        })
    });

    describe("getName method", () => {
        it("should get employee name", () => {
            const employee = new Employee(name, id, email);

            expect(employee.getName()).toEqual("dude");
        })
    });

    describe("getId method", () => {
        it("should get employee ID", () => {
            const employee = new Employee(name, id, email);

            expect(employee.getId()).toEqual("111")
        })
    })
});
describe("getEmail method", () => {
    it("should get employee email", () => {
        const employee = new Employee(name, id, email);

        expect(employee.email).toEqual("example@gmail.com")
    })
});
describe("getId method", () => {
    it("should get employee role", () => {
        const employee = new Employee(name, id, email);

        expect(employee.getRole()).toEqual("Employee")
    })
});