const { describe, expect, it } = require("@jest/globals");
const { off } = require("process");
const Manager = require("../lib/Manager");

const name = "Joe";
const id = "102";
const email = "joe@example.com";
const officeNumber = "16"

describe("create class for manager", () => {
    it("should create a class for manager as extention off Employee", () => {
        const manager = new Manager(name, id, email, officeNumber);

        expect(manager.name).toEqual("Joe");
        expect(manager.id).toEqual("102");
        expect(manager.email).toEqual("joe@example.com");
        expect(manager.officeNumber).toEqual("16");
    })
})

describe("getOfficeNumber method", () => {
    it("should get office number if manager", () => {
        const manager = new Manager(name, id, email, officeNumber);

        expect(manager.getOfficeNumber()).toEqual("16")

    })
})

describe("getRole method", () => {
    it("should get role of this person", () => {
        const manager = new Manager(name, id, email, officeNumber);

        expect(manager.getRole()).toEqual("Manager");
    })
})

// describe("creating html for manager", () => {
//     it("should create the html section for the manager", () => {
//         const manager = new Manager(name, id, email, officeNumber);

//         expect(manager.createHTML).toBe(`<div class="col s12 m4 l4 center">
//         <div class="card">
//             <div class="card-image">
//                 <i
//                     class="medium material-icons">account_circle</i>
//                 <span class="card-title">
//                 </span>
//             </div>
    
//             <h3>Joe</h3>
//             <h5>Manager</h5>
    
//             <div class="card-content">
//                 <ul class="collection">
//                     <li
//                         class="collection-item">
//                         ID:102</li>
//                     <li
//                         class="collection-item">
//                         Email:<a
//                             href="mailto:joe@example.com">joe@example.com</a>
//                     </li>
//                     <li
//                         class="collection-item">
//                         Office Number:16
//                     </li>
//                 </ul>
//             </div>
//         </div>
//     </div>`)
//     })
// })

