import { NavigationPublicPluginStart } from '../../../src/plugins/navigation/public';

export interface BrewAnalyticsPluginSetup {
  getGreeting: () => string;
}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface BrewAnalyticsPluginStart {}

export interface AppPluginStartDependencies {
  navigation: NavigationPublicPluginStart;
}
