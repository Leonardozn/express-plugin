const config = require('../config')
const fs = require('fs')

function generateTemplate(project_root, templates_path) {
  try {
    const template = 'index'
    const extension = config.templates.extension

    if (!config.templates.names.includes(template)) {
      const content = fs.readFileSync(`${templates_path}/${template}.${extension}`).toString()
      fs.writeFileSync(project_root, content)
    }
  } catch (error) {
    console.error(error)
  }
}

module.exports = generateTemplate