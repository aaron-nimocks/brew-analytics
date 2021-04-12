import { PluginInitializerContext } from '../../../src/core/server';
import { BrewAnalyticsPlugin } from './plugin';

//  This exports static code and TypeScript types,
//  as well as, Kibana Platform `plugin()` initializer.

export function plugin(initializerContext: PluginInitializerContext) {
  return new BrewAnalyticsPlugin(initializerContext);
}

export { BrewAnalyticsPluginSetup, BrewAnalyticsPluginStart } from './types';
