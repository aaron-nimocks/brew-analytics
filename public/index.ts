import './index.scss';

import { BrewAnalyticsPlugin } from './plugin';

// This exports static code and TypeScript types,
// as well as, Kibana Platform `plugin()` initializer.
export function plugin() {
  return new BrewAnalyticsPlugin();
}
export { BrewAnalyticsPluginSetup, BrewAnalyticsPluginStart } from './types';
