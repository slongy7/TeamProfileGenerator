//create Manager card
const generateMgr = function (manager) {
    
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


  }

// manager func
  if (role = "Manager") {
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
  ${jobCard}
  </body>
  `;
}

//export
module.exports = generateHTML;

