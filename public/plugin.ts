import { i18n } from '@kbn/i18n';
import { AppMountParameters, CoreSetup, CoreStart, Plugin, DEFAULT_APP_CATEGORIES } from '../../../src/core/public';
import {
  BrewAnalyticsPluginSetup,
  BrewAnalyticsPluginStart,
  AppPluginStartDependencies,
} from './types';
import { PLUGIN_NAME } from '../common';
import { SecurityPluginSetup } from '../../../x-pack/plugins/security/public';

interface PluginSetupDeps {
  security: SecurityPluginSetup;
}

export class BrewAnalyticsPlugin
  implements Plugin<BrewAnalyticsPluginSetup, BrewAnalyticsPluginStart> {
  public setup(core: CoreSetup, { security }: PluginSetupDeps ): BrewAnalyticsPluginSetup {
    // Register an application into the side navigation menu
    core.application.register({
      id: 'brewAnalytics',
      title: PLUGIN_NAME,
      category: DEFAULT_APP_CATEGORIES.kibana,
      order: 9000,
      defaultPath: '#/',
      async mount(params: AppMountParameters) {
        // Load application bundle
        const { renderApp } = await import('./application');
        // Get start services as specified in kibana.json
        const [coreStart, depsStart] = await core.getStartServices();

        coreStart.chrome.docTitle.change("Brew Analytics");

        const { getCurrentUser } = security.authc;
        getCurrentUser().then(user => {
          console.log(user);
      });

        // Render the application
        return renderApp(coreStart, depsStart as AppPluginStartDependencies, params);
      },
    });

    // Return methods that should be available to other plugins
    return {
      getGreeting() {
        return i18n.translate('brewAnalytics.greetingText', {
          defaultMessage: 'Hello from {name}!',
          values: {
            name: PLUGIN_NAME,
          },
        });
      },
    };
  }

  public start(core: CoreStart): BrewAnalyticsPluginStart {
    return {};
  }

  public stop() { }
}
