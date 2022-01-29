// create the about section
const generateTeam = team => {

  
  
  const generateManager = manager => {
    return `
      <section class="my-3" id="portfolio">
        <h2 class="text-dark bg-primary p-2 display-inline-block">${manager.name}</h2>
        <div class="flex-row justify-space-between">
        ${manager.name})
          
          
        </div>
      </section>
    `;
  };
  
  const generateIntern = intern => {

  }

  const generateEngineer = engineer => {

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
