// create the about section
const generateTeam = team => {

  
  
  const generateManager = manager => {
    return `
      <section>
        <h2>${manager.name}</h2>
        <div>
          <p>${manager.id})</p>
          <p>${manager.email})</p>
          <p>${manager.officeNumber})</p>
        </div>
      </section>
    `
  }
  
  const generateIntern = intern => {
    return `
      <section>
        <h2>${intern.name}</h2>
        <div>
          <p>${intern.id})</p>
          <p>${intern.email})</p>
          <p>${intern.school})</p>
        </div>
      </section>
    `
  }

  const generateEngineer = engineer => {
    return `
      <section>
        <h2>${engineer.name}</h2>
        <div>
          <p>${engineer.id})</p>
          <p>${engineer.email})</p>
          <p>${engineer.github})</p>
        </div>
      </section>
    `
  }

  const newTeam = []
  newTeam.push(team.filter(manager => manager.getRole() === 'Manager').map(manager => generateManager(manager)))
  newTeam.push(team.filter(engineer => engineer.getRole() === 'Engineer').map(engineer => generateEngineer(engineer)))
  newTeam.push(team.filter(intern => intern.getRole() === 'Intern').map(intern => generateIntern(intern)))
  return newTeam.join('')
}

module.exports = team => {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
  </head>
  <body>
      ${generateTeam(team)}
  </body>
  </html>`
}
