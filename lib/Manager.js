// import Employee class
const Employee = require('./Employee');

// create child Manager class by extending parent Employee class
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  // function to get office number
  getOfficeNumber() {
    return this.officeNumber;
  }

  // function to get role
  getRole() {
    return "Manager";
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
        <h5>Manager</h5>

        <div class="card-content">
            <ul class="collection">
                <li
                    class="collection-item">
                    ID:${this.getId()}</li>
                <li
                    class="collection-item">
                    Email:<a
                        href="mailto:${this.getEmail()}">${this.getEmail()}</a>
                </li>
                <li
                    class="collection-item">
                    Office Number:${this.getOfficeNumber()}
                </li>
            </ul>
        </div>
    </div>
</div>
      `
  }
}

// export Manager class
module.exports = Manager;