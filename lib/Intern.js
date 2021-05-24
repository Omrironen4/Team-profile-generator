// import Employee class
const Employee = require('./Employee');

// create child Intern class by extending parent Employee class
class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }

  // function to get school name
  getSchool() {
    return this.school;
  }

  // function to get role
  getRole() {
    return "Intern";
  }

  // function to create HTML
  createHTML(){
    return `
    <div class="col s12 m4 l4 center">
    <div class="card">
        <div class="card-image">
            <i
                class="medium material-icons">account_circle</i>
            <span class="card-title">
            </span>
        </div>


        <h3>${this.getName()}</h3>
        <h5>${this.getRole()}</h5>

        <div class="card-content">
            <ul class="collection">
                <li
                    class="collection-item">
                    ID:${this.getId()}</li>
                <li
                    class="collection-item">
                    Email: <a
                        href="${this.getEmail()}">${this.getEmail()}</a>
                </li>
                <li
                    class="collection-item">
                    School:${this.getSchool()}</li>
            </ul>
        </div>
    </div>
</div>
      `
  }
}

// export Intern class
module.exports = Intern;