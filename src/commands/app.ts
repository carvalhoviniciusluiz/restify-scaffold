
import { GluegunToolbox } from 'gluegun'

module.exports = {
  name: 'app',
  alias: 'a',
  description: 'Creates a new base project.',
  run: async (toolbox: GluegunToolbox) => {
    const { print: { success, error }, parameters, template: { generate } } = toolbox

    const name = parameters.first

    if (!name) {
      error('App name must be specified')
      return
    }

    /**
     * core files
     * */
    await generate({ template: 'common/environment.js.ejs', target: `${name}/common/environment.ts`, props: { name } })
    await generate({ template: 'common/router-base.js.ejs', target: `${name}/common/router-base.ts` })
    await generate({ template: 'common/router.js.ejs', target: `${name}/common/router.ts` })
    await generate({ template: 'common/socket-base.js.ejs', target: `${name}/common/socket-base.ts` })
    await generate({ template: 'common/utils.js.ejs', target: `${name}/common/utils.ts` })

    success(`create  ${name}/common/environment.ts`)
    success(`create  ${name}/common/router-base.ts`)
    success(`create  ${name}/common/router.ts`)
    success(`create  ${name}/common/socket-base.ts`)
    success(`create  ${name}/common/utils.ts`)

    /**
     * test files
     * */
    await generate({ template: 'common/test/utils-test.js.ejs', target: `${name}/common/test/utils.test.ts` })
    await generate({ template: 'common/test/mockup-test.js.ejs', target: `${name}/common/test/mockup.test.ts` })

    success(`create  ${name}/common/test/utils.test.ts`)
    success(`create  ${name}/common/test/mockup.test.ts`)

    /**
     *
     * */
    await generate({ template: 'jobs/notify/event.js.ejs', target: `${name}/jobs/notify/event.ts` })

    /**
     * Adding i18n plugin
     * */
    await generate({ template: 'plugins/i18next/index.js.ejs', target: `${name}/plugins/i18next/index.ts` })
    await generate({ template: 'plugins/i18next/locales/index.js.ejs', target: `${name}/plugins/i18next/locales/index.ts` })
    await generate({ template: 'plugins/i18next/locales/pt-BR/index.js.ejs', target: `${name}/plugins/i18next/locales/pt-BR/index.ts` })
    await generate({ template: 'plugins/i18next/locales/pt-BR/joi18n.js.ejs', target: `${name}/plugins/i18next/locales/pt-BR/joi18n.ts` })

    success(`create  ${name}/plugins/i18next/index.ts`)
    success(`create  ${name}/plugins/i18next/locales/index.ts`)
    success(`create  ${name}/plugins/i18next/locales/pt-BR/index.ts`)
    success(`create  ${name}/plugins/i18next/locales/pt-BR/joi18n.ts`)

    /**
     * Adding passport plugin
     * */
    await generate({ template: 'plugins/passport/index.js.ejs', target: `${name}/plugins/passport/index.ts` })
    await generate({ template: 'plugins/passport/confirmation.js.ejs', target: `${name}/plugins/passport/confirmation.ts` })
    await generate({ template: 'plugins/passport/validation.js.ejs', target: `${name}/plugins/passport/validation.ts` })
    await generate({ template: 'plugins/passport/strategies/authHeader.js.ejs', target: `${name}/plugins/passport/strategies/authHeader.ts` })
    await generate({ template: 'plugins/passport/strategies/urlQuery.js.ejs', target: `${name}/plugins/passport/strategies/urlQuery.ts` })

    success(`create  ${name}/plugins/passport/index.ts`)
    success(`create  ${name}/plugins/passport/confirmation.ts`)
    success(`create  ${name}/plugins/passport/validation.ts`)
    success(`create  ${name}/plugins/passport/strategies/authHeader.ts`)
    success(`create  ${name}/plugins/passport/strategies/urlQuery.ts`)

    /**
     * Adding redis plugin
     * */
    await generate({ template: 'plugins/redis/index.js.ejs', target: `${name}/plugins/redis/index.ts` })
    await generate({ template: 'plugins/redis/client.js.ejs', target: `${name}/plugins/redis/client.ts` })

    success(`create  ${name}/plugins/redis/index.ts`)
    success(`create  ${name}/plugins/redis/client.ts`)

    /**
     * Adding restify-joi-middleware plugin
     * */
    await generate({ template: 'plugins/restify-joi-middleware/index.js.ejs', target: `${name}/plugins/restify-joi-middleware/index.ts` })

    success(`create  ${name}/plugins/restify-joi-middleware/index.ts`)

    /**
     * Adding restify-joi-middleware plugin
     * */
    await generate({ template: 'plugins/restify-render-middleware/index.js.ejs', target: `${name}/plugins/restify-render-middleware/index.ts` })

    success(`create  ${name}/plugins/restify-render-middleware/index.ts`)

    /**
     * Adding server files
     * */
    await generate({ template: 'server/index.js.ejs', target: `${name}/server/index.ts` })
    await generate({ template: 'server/error.handler.js.ejs', target: `${name}/server/error.handler.ts` })
    await generate({ template: 'server/merge-patch.parser.js.ejs', target: `${name}/server/merge-patch.parser.ts` })

    success(`create  ${name}/server/index.ts`)
    success(`create  ${name}/server/error.handler.ts`)
    success(`create  ${name}/server/merge-patch.parser.ts`)

    /**
     * Adding ts types
     * */
    await generate({ template: 'types/default/index.js.ejs', target: `${name}/types/default/index.d.ts` })

    success(`create  ${name}/types/default/index.d.ts`)

    /**
     * Adding config files
     * */
    await generate({ template: 'common-services.js.ejs', target: `${name}/common-services.yml` })
    await generate({ template: 'docker-compose.stage.js.ejs', target: `${name}/docker-compose.stage.yml`, props: { name } })
    await generate({ template: 'docker-compose.js.ejs', target: `${name}/docker-compose.yml`, props: { name } })
    await generate({ template: 'env.example.js.ejs', target: `${name}/.env.example`, props: { name } })
    await generate({ template: 'gitignore.js.ejs', target: `${name}/.gitignore` })
    await generate({ template: 'jest.startup.js.ejs', target: `${name}/jest.startup.ts` })
    await generate({ template: 'main.js.ejs', target: `${name}/main.ts` })
    await generate({ template: 'main.routes.js.ejs', target: `${name}/main.routes.ts`, props: { name } })
    await generate({ template: 'makefile.js.ejs', target: `${name}/Makefile` })
    await generate({ template: 'package.js.ejs', target: `${name}/package.json`, props: { name } })
    await generate({ template: 'readme.js.ejs', target: `${name}/README.md`, props: { name } })
    await generate({ template: 'tsconfig.js.ejs', target: `${name}/tsconfig.json` })

    success(`create  ${name}/common-services.yml`)
    success(`create  ${name}/docker-compose.stage.yml`)
    success(`create  ${name}/docker-compose.yml`)
    success(`create  ${name}/.env.example`)
    success(`create  ${name}/.gitignore`)
    success(`create  ${name}/jest.startup.ts`)
    success(`create  ${name}/main.ts`)
    success(`create  ${name}/main.routes.ts`)
    success(`create  ${name}/Makefile`)
    success(`create  ${name}/package.json`)
    success(`create  ${name}/README.md`)
    success(`create  ${name}/tsconfig.json`)
  }
}
