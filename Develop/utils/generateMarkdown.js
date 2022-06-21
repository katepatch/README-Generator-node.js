// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const badges = {
    mit: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    isc: '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)',
    wtfpl: '[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)',
  }
  return badges[license]
};
renderLicenseBadge();

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseLink = {
    mit: 'https://choosealicense.com/licenses/mit/',
    isc: 'https://choosealicense.com/licenses/isc/',
    wtfpl: 'https://choosealicense.com/licenses/wtfpl/',
  }
  return licenseLink[license]
};
renderLicenseLink();

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
function renderLicenseSection(license) {
   if(license){
    return `This uses the ${this.renderLicenseLink(license)} license`
   } else {
    return ''
   }
};
renderLicenseSection();

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ${this.renderLicenseBadge(data.license)}

  ## Table of Contents
  -[Project Description](#Description)
  -[Installation](#Installation)
  -[Usage](#Usage)
  -[License](#License)
  -[Contributing](#Contributing)
  -[Tests](#Tests)
  -[Questions](#Questions)

  ## Description
  ${data.descritpion}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${this.renderLicenseSection(data.license)}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  For questions my GitHub username is ${data.github}
  Or feel free to email me at ${data.email}
`
}

module.exports = generateMarkdown;
