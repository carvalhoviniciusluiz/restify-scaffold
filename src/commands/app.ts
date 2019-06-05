
import { GluegunToolbox } from 'gluegun'


module.exports = {
  name: 'app',
  run: async (toolbox: GluegunToolbox) => {
    const { print } = toolbox

    print.info('Welcome to your CLI')
  },
}
