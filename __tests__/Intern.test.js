const { describe, expect, it } = require("@jest/globals");
const Intern = require("../lib/Intern");

const name = "Bob";
const id = "100";
const email = "bob@example.com";
const school = "UCI"

describe("create Intern class", () => {
    it("should create the intern class as an extention from Employee", () => {
        const intern = new Intern(name, id, email, school);

        expect(intern.name).toEqual("Bob");
        expect(intern.id).toEqual("100");
        expect(intern.email).toEqual("bob@example.com");
        expect(intern.school).toEqual("UCI");
    })
})

describe("getSchool method", () => {
    it("should get intern's school name", () => {
        const intern = new Intern(name, id, email, school);

        expect(intern.getSchool()).toEqual("UCI");
    })
})

describe("getRole method", () => {
    it("should get role of the intern", () => {
        const intern = new Intern(name, id, email, school);

        expect(intern.getRole()).toEqual("Intern");
    })
})

// describe("createHTML method", () => {
//     it("should get html code for intern card", () => {
//         const intern = new Intern(name, id, email, school);

//         expect(intern.createHTML()).toEqual(`<div class="col s12 m4 l4 center">
//         <div class="card">
//             <div class="card-image">
//                 <i
//                     class="medium material-icons">account_circle</i>
//                 <span class="card-title">
//                 </span>
//             </div>
    
    
//             <h3>Mark</h3>
//             <h5>Intern</h5>
    
//             <div class="card-content">
//                 <ul class="collection">
//                     <li
//                         class="collection-item">
//                         ID:</li>
//                     <li
//                         class="collection-item">
//                         Email: <a
//                             href="mailto:mark@fakemail.com">mark@fakemail.com</a>
//                     </li>
//                     <li
//                         class="collection-item">
//                         School:</li>
//                 </ul>
//             </div>
//         </div>
//     </div>`);
//     })
// })