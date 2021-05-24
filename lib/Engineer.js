// import Employee class
const Employee = require('./Employee');

// create child Engineer class by extending parent Employee class
class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }

  // function to get github username
  getGithub() {
    return this.github;
  }

  // function to get role
  getRole() {
    return "Engineer";
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
       <h5>Engineer</h5>

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
                   GitHub:${this.getGithub()}</li>

           </ul>
       </div>
   </div>
</div> 
     `
  }
}

// export Engineer class
module.exports = Engineer;