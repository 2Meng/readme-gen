function generateMarkdown(data) {
    return `

${renderBadge(data.license)}

${data.title}

## Description

${data.description}

## License

This project is licensed under the ${data.license} license.

## Table of Contents 🗒

* [Installations](#dependencies)

* [Usage](#usage)

${renderLink(data.license)}

* [Contributors](#contributors)

* [Test](#test)

## Contributors

${data.contributors}

## Github URL 🌐

[${data.github}](https://github.com/${data.github}/)

## Contact

For more information about this project, please contact ${data.github} at ${data.email}.
    `;
}

// Function to render badge
function renderBadge(license) {
    if (license !== "None") {
      return `![GitHub license](https://img.shields.io/badge/license-${license}-yellowgreen.svg)`
    }
    return ''
  }
  
  // Function to render link
  function renderLink(license) {
    if (license !== "None") {
      return (
        `\n* [License](#license)\n`
      )
    }
    return ''
  }
  
  
  // Function to render section
  function renderSection(license) {
    if (license !== "None") {
      return (
        `## License 📛
  
        Copyright © ${license}. All rights reserved. 
        
        Licensed under the ${license} license.`
  
      )
    }
    return ''
  }

module.exports = generateMarkdown;