
import { GluegunToolbox } from 'gluegun'

module.exports = (toolbox: GluegunToolbox) => {
  const { print: { success, error }, parameters, template: { generate } } = toolbox
  toolbox.create = (folder: string, resources: any) => {
    const name = parameters.first

    if (!name) {
      error(`${folder} name must be specified`)
      return
    }

    resources.forEach(async (resource: any) => {
      let suffix: string
      const { file, rename, prefix, ext } = resource

      if (ext === undefined) {
        suffix = '.ts'
      } else if (ext === '') {
        suffix = ''
      } else {
        suffix = `.${ext}`
      }

      const filename = `${prefix || ''}${rename || file}${suffix}`
      const target = `${name}/${filename}`

      await generate({
        template: `${folder}/${file}.js.ejs`,
        target,
        props: { name }
      })
      success(`created ${target}`)
    })
  }
}
