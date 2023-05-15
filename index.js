#!/usr/bin/env node

const { cwd } = require('node:process')
const fs = require('fs')
const indexTmpl = require('./controllers/indexTemplate')
const appTmpl = require('./controllers/appTemplate')

try {
  const project_root = cwd()
  const templates_path = `${project_root}/templates`

  if (!fs.readFileSync(`${project_root}/settings.json`)) {
    throw { coyote: true, msg: `${chalk.red.bold('Coyote-express Error:')} A project created with coyote-cli must have a 'settings.json' file.` }
  }

  indexTmpl(project_root, templates_path)
  appTmpl(project_root, templates_path)
} catch (error) {
  if (error.coyote) {
    console.log(error.msg)
  } else {
      console.error(error)
  }
}