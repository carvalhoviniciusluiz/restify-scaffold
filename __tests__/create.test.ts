import { system, filesystem } from 'gluegun'

const src = filesystem.path(__dirname, '..')

const cli = async (cmd: string) =>
  system.run(
    'node ' + filesystem.path(src, 'bin', 'restify-scaffold') + ` ${cmd}`
  )

test('outputs version', async () => {
  const output = await cli('--version')
  expect(output).toContain('0.0.1')
})

test('outputs help', async () => {
  const output = await cli('--help')
  expect(output).toContain('0.0.1')
})

test('generates file', async () => {
  const output = await cli('create _app_')

  // cleanup artifact
  filesystem.remove('_app_')

  const content = `\u001b[32mcreated _app_/common/test/fixtures/mockup.model.ts\u001b[39m\n\u001b[32mcreated _app_/common/test/fixtures/mockup.routes.ts\u001b[39m\n\u001b[32mcreated _app_/common/test/fixtures/mockup.sockets.ts\u001b[39m\n\u001b[32mcreated _app_/common/test/mockup.test.ts\u001b[39m\n\u001b[32mcreated _app_/common/test/utils.test.ts\u001b[39m\n\u001b[32mcreated _app_/common/environment.ts\u001b[39m\n\u001b[32mcreated _app_/common/router-base.ts\u001b[39m\n\u001b[32mcreated _app_/common/router.ts\u001b[39m\n\u001b[32mcreated _app_/common/socket-base.ts\u001b[39m\n\u001b[32mcreated _app_/common/utils.ts\u001b[39m\n\u001b[32mcreated _app_/jobs/notify/event.ts\u001b[39m\n\u001b[32mcreated _app_/plugins/i18next/locales/pt-BR/index.ts\u001b[39m\n\u001b[32mcreated _app_/plugins/i18next/locales/pt-BR/joi18n.ts\u001b[39m\n\u001b[32mcreated _app_/plugins/i18next/locales/index.ts\u001b[39m\n\u001b[32mcreated _app_/plugins/i18next/index.ts\u001b[39m\n\u001b[32mcreated _app_/plugins/passport/strategies/authHeader.ts\u001b[39m\n\u001b[32mcreated _app_/plugins/passport/strategies/urlQuery.ts\u001b[39m\n\u001b[32mcreated _app_/plugins/passport/confirmation.ts\u001b[39m\n\u001b[32mcreated _app_/plugins/passport/index.ts\u001b[39m\n\u001b[32mcreated _app_/plugins/passport/validation.ts\u001b[39m\n\u001b[32mcreated _app_/plugins/redis/client.ts\u001b[39m\n\u001b[32mcreated _app_/plugins/redis/index.ts\u001b[39m\n\u001b[32mcreated _app_/plugins/restify-joi-middleware/index.ts\u001b[39m\n\u001b[32mcreated _app_/plugins/restify-render-middleware/index.ts\u001b[39m\n\u001b[32mcreated _app_/server/error.handler.ts\u001b[39m\n\u001b[32mcreated _app_/server/index.ts\u001b[39m\n\u001b[32mcreated _app_/server/merge-patch.parser.ts\u001b[39m\n\u001b[32mcreated _app_/types/default/index.d.ts\u001b[39m\n\u001b[32mcreated _app_/views/home.pug\u001b[39m\n\u001b[32mcreated _app_/views/layout.pug\u001b[39m\n\u001b[32mcreated _app_/common-services.yml\u001b[39m\n\u001b[32mcreated _app_/docker-compose.yml\u001b[39m\n\u001b[32mcreated _app_/docker-compose.stage.yml\u001b[39m\n\u001b[32mcreated _app_/.env.example\u001b[39m\n\u001b[32mcreated _app_/.gitignore\u001b[39m\n\u001b[32mcreated _app_/jest.startup.ts\u001b[39m\n\u001b[32mcreated _app_/main.ts\u001b[39m\n\u001b[32mcreated _app_/main.routes.ts\u001b[39m\n\u001b[32mcreated _app_/Makefile\u001b[39m\n\u001b[32mcreated _app_/package.json\u001b[39m\n\u001b[32mcreated _app_/README.md\u001b[39m\n\u001b[32mcreated _app_/tsconfig.json\u001b[39m\n`;
  expect({ output }).toEqual({ output: content })
})
