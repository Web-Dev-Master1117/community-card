const boxen = require('boxen')
const chalk = require('chalk')
const fs = require('fs')
const path = require('path')

const message = {
  title: chalk.yellow('Node.js Communiy Card'),
  coreMesasge: 'Node.js Core:',
  coreLink: chalk.blue('https://github.com/nodejs/node'),
  gettingStartedMessage: 'Getting Started:',
  gettingStartedLink: chalk.blue('https://github.com/nodejs/getting-started'),
  goodFirstIsusesMessage: 'Good First Issues:',
  goodFirstIssuesLink: chalk.blue('https://git.io/fj1Tv')
}

const boxenOptions = {
  padding: 1,
  margin: 1,
  borderStyle: 'round',
  borderColor: 'green'
}

const result = boxen(`${message.title}\n\n${message.coreMesasge} ${message.coreLink}\n${message.gettingStartedMessage} ${message.gettingStartedLink}\n${message.goodFirstIsusesMessage} ${message.goodFirstIssuesLink}`, boxenOptions)

fs.writeFileSync(path.join(__dirname, 'bin/output'), result)
