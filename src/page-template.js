// create the about section
const generateTeam = team => {

  
  
  const generateManager = manager => {
    return `
    <div class="card m-1" style="width: 18rem;">
    <div class="card-header bg-info">
      <h5 class="card-title">${manager.name}</h5>
      <i class="fas fa-mug-hot"></i>
      <span class="card-text">${manager.getRole()}</span>
    </div>
    <div class="card-body border-bottom">
      <p class="card-text">Employee ID: ${manager.id}</p>
    </div>
    <div class="card-body border-bottom">
      <span>Email: </span>
      <a href="mailto: ${manager.email}" class="card-link">${manager.email}</a>
    </div>
    <div class="card-body">
      <p class="card-text">Office number: ${manager.officeNumber}</p>
    </div>
    </div>
    `
  }
  
  const generateIntern = intern => {
    return `
    <div class="card m-1" style="width: 18rem;">
    <div class="card-header bg-info">
      <h5 class="card-title">${intern.name}</h5>
      <i class="fas fa-user-graduate"></i>
      <span class="card-text">${intern.getRole()}</span>
    </div>
    <div class="card-body border-bottom">
      <p class="card-text">Employee ID: ${intern.id}</p>
    </div>
    <div class="card-body border-bottom">
      <span>Email: </span>
      <a href="mailto: ${intern.email}" class="card-link">${intern.email}</a>
    </div>
    <div class="card-body">
      <p class="card-text">School: ${intern.school}</p>
    </div>
    </div>
    `
  }

  const generateEngineer = engineer => {
    return `
    <div class="card m-1" style="width: 18rem;">
    <div class="card-header bg-info">
      <h5 class="card-title">${engineer.name}</h5>
      <i class="fas fa-glasses"></i>
      <span class="card-text">${engineer.getRole()}</span>
    </div>
    <div class="card-body border-bottom">
      <p class="card-text">Employee ID: ${engineer.id}</p>
    </div>
    <div class="card-body border-bottom">
      <span>Email: </span>
      <a href="mailto: ${engineer.email}" class="card-link">${engineer.email}</a>
    </div>
    <div class="card-body border-bottom">
      <span>Github: </span>
      <a href="https://github.com/${engineer.github}" class="card-link">${engineer.github}</a>
    </div>
    </div>
    `
  }

  const newTeam = []
  newTeam.push(team.filter(manager => manager.getRole() === 'Manager').map(manager => generateManager(manager)))
  newTeam.push(team.filter(engineer => engineer.getRole() === 'Engineer').map(engineer => generateEngineer(engineer)))
  newTeam.push(team.filter(intern => intern.getRole() === 'Intern').map(intern => generateIntern(intern)))
  return newTeam.join('')
}

module.exports = team => {
  console.log(team);
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      <link rel="stylesheet" href="style.css">
      <title>Document</title>
  </head>
  <header class="p-5 bg-info">
    <h1 class="text-center fw-bolder">Company Roster</h1>
  </header>
  <body>
  <div class="container m-3">
    ${generateTeam(team)}
  </div>
  </body>
  </html>`
}
