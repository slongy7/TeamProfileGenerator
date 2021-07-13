//create Manager card
const generateManager = function (manager) {
    
    return `
    </div>
    <div class="row">
      <div class="col-sm-3">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">${manager.name}</h5>
            <h6 class="title">Manager</h6>
            <p class="card-text">ID: ${manager.id}</p>
            <p class="card-text">Email: <a href="mailto:${manager.email}"</p>
            <p class="card-text">${manager.officeNumber}</p>
          </div>
        </div>
      </div>
      `;
}

//create Engineer card
const generateEngineer = function (engineer) {
  return `
  </div>
    <div class="row">
      <div class="col-sm-3">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">${engineer.name}</h5>
            <h6 class="title">Manager</h6>
            <p class="card-text">ID: ${engineer.id}</p>
            <p class="card-text">Email: <a href="mailto:${engineer.email}"</p>
            <p class="github">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
          </div>
        </div>
      </div>
      `;

};

// create Intern card
const generateIntern = function (intern) {
  return `
  </div>
    <div class="row">
      <div class="col-sm-3">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">${intern.name}</h5>
            <h6 class="title">Manager</h6>
            <p class="card-text">ID: ${intern.id}</p>
            <p class="card-text">Email: <a href="mailto:${intern.email}"</p>
            <p class="school">School: ${intern.school}</p>
          </div>
        </div>
      </div>
  ;`
};


generateHTML = (data) => {

  pageArray = [];

  for (let i = 0; i < data.length; i++){
    const employee = data[i];
    const role = employee.getRole();



// manager func
  if (role == "Manager") {
    const mgrCard = generateManager (employee);
    pageArray.push(mgrCard);
  }

// engineer func
  if (role = "Engineer") {
    const engCard = generateEngineer(employee);
    pageArray.push(engCard);
  }

// intern func
  if (role = "Intern") {
    const intCard = generateIntern(employee);
    pageArray.push(intCard);
  }
}


const jobCard = pageArray.join('');
const generateTeam = generateTeamPage(jobCard);
return generateTeam;

}

const generateTeamPage = function (jobCard) {
  return`
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <title>Team Generator</title>
  </head>
  
  <body>
  <header>
  <nav class="navbar" id="navbar">
      <span class="navbar-brand mb-0 h1 w-100 text-center" id="navbar-text">Team Profile</span>
  </nav>
</header>
<main>
  <div class="container">
      <div class="row justify-content-center" id="team-cards">
          
          ${jobCard}
      </div>
  </div>
</main>
    
</body>
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
  </html>
  `;
}

//export
module.exports = generateHTML;

