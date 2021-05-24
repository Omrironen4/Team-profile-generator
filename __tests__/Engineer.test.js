const Engineer = require("../lib/Engineer");

const name = "Bob";
const id = "22";
const email = "ok@gml.com";
const github = "bobml"
describe("create Engineer class", () => {
    it("should create engineer extention class from Employee", () => {
        const engineer = new Engineer(name, id, email, github);

        expect(engineer.name).toEqual("Bob");
        expect(engineer.id).toEqual("22");
        expect(engineer.email).toEqual("ok@gml.com");
        expect(engineer.github).toEqual("bobml");
    })
});

describe("gitHub method", () => {
    it("should get github account name for engineer", () => {
        const engineer = new Engineer(name, id, email, github);

        expect(engineer.getGithub()).toEqual("bobml");
    })
});

describe("getRole method", () => {
    it("should get role of employee", () => {
        const engineer = new Engineer(name, id, email, github);

        expect(engineer.getRole()).toEqual("Engineer");
    })
});

// describe("createHTML method", () => {
//     it("should create html section for engineer", () => {
//         const engineer = new Engineer(name, id, email, github);
//         console.log(engineer.createHTML());
//         expect(engineer.createHTML()).toMatch(`<div class="col s12 m4 l4 center">
//         +    <div class="card">
//         +        <div class="card-image">
//         +            <i
//         +                class="medium material-icons">account_circle</i>
//         +            <span class="card-title">
//         +            </span>
//         +        </div>
//         +
//         +        <h3>Bob</h3>
//         +        <h5>Engineer</h5>
//         +
//         +        <div class="card-content">
//         +            <ul class="collection">
//         +                <li
//         +                    class="collection-item">
//         +                    ID:22</li>
//         +                <li
//         +                    class="collection-item">
//         +                    Email:<a
//         +                        href="mailto:ok@gml.com">ok@gml.com</a>
//         +                </li>
//         +                <li
//         +                    class="collection-item">
//         +                    GitHub:bobml</li>
//         +
//         +            </ul>
//         +        </div>
//         +    </div>
//         + </div>`
//      );
//     });
// });

