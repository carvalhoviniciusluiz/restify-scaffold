
import { GluegunToolbox } from 'gluegun'

const load = (options: any) => {
  const { generate, namespaced, success, resources } = options
  resources.forEach(async (resource: any) => {
    let extension: string
    const { template, rename: name, prefix, ext, props } = resource

    if (ext === undefined) {
      extension = '.ts'
    } else if (ext === '') {
      extension = ''
    } else {
      extension = `.${ext}`
    }

    const filename = `${prefix || ''}${name || template}${extension}`
    const target = `${namespaced}/${filename}`

    await generate({
      template: `app/${template}.js.ejs`,
      target,
      props
    })
    success(`created ${target}`)
  })
}

module.exports = {
  name: 'create',
  alias: 'c',
  description: 'Creates a new base project.',
  run: async (toolbox: GluegunToolbox) => {
    const { print: { success, error }, parameters, template: { generate } } = toolbox
    const name = parameters.first

    if (!name) {
      error('App name must be specified')
      return
    }

    load({
      generate,
      namespaced: name,
      success,
      resources: [
        { template: 'common/test/fixtures/mockup.model' },
        { template: 'common/test/fixtures/mockup.routes' },
        { template: 'common/test/fixtures/mockup.sockets' },
        { template: 'common/test/mockup.test' },
        { template: 'common/test/utils.test' },
        { template: 'common/environment', props: { name } },
        { template: 'common/router-base' },
        { template: 'common/router' },
        { template: 'common/socket-base' },
        { template: 'common/utils' },
        { template: 'jobs/notify/event' },
        { template: 'plugins/i18next/locales/pt-BR/index' },
        { template: 'plugins/i18next/locales/pt-BR/joi18n' },
        { template: 'plugins/i18next/locales/index' },
        { template: 'plugins/i18next/index' },
        { template: 'plugins/passport/strategies/authHeader' },
        { template: 'plugins/passport/strategies/urlQuery' },
        { template: 'plugins/passport/confirmation' },
        { template: 'plugins/passport/index' },
        { template: 'plugins/passport/validation' },
        { template: 'plugins/redis/client' },
        { template: 'plugins/redis/index' },
        { template: 'plugins/restify-joi-middleware/index' },
        { template: 'plugins/restify-render-middleware/index' },
        { template: 'server/error.handler' },
        { template: 'server/index' },
        { template: 'server/merge-patch.parser' },
        { template: 'types/default/index', ext: 'd.ts' },
        { template: 'views/home', ext: 'pug' },
        { template: 'views/layout', ext: 'pug' },
        { template: 'common-services', ext: 'yml' },
        { template: 'docker-compose', ext: 'yml', props: { name } },
        { template: 'docker-compose.stage', ext: 'yml', props: { name } },
        { template: 'env.example', prefix: '.', ext: '', props: { name } },
        { template: 'gitignore', prefix: '.', ext: '' },
        { template: 'jest.startup' },
        { template: 'main' },
        { template: 'main.routes', props: { name } },
        { template: 'makefile', rename: 'Makefile', ext: '' },
        { template: 'package', ext: 'json', props: { name } },
        { template: 'readme', rename: 'README', ext: 'md', props: { name } },
        { template: 'tsconfig', ext: 'json' },
      ]
    })
  }
}
