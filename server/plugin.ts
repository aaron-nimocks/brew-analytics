import {
  PluginInitializerContext,
  CoreSetup,
  CoreStart,
  Plugin,
  Logger,
} from '../../../src/core/server';

import { BrewAnalyticsPluginSetup, BrewAnalyticsPluginStart } from './types';
import { defineRoutes } from './routes';

export class BrewAnalyticsPlugin
  implements Plugin<BrewAnalyticsPluginSetup, BrewAnalyticsPluginStart> {
  private readonly logger: Logger;

  constructor(initializerContext: PluginInitializerContext) {
    this.logger = initializerContext.logger.get();
  }

  public setup(core: CoreSetup) {
    this.logger.debug('brewAnalytics: Setup');
    const router = core.http.createRouter();

    // Register server side APIs
    defineRoutes(router);

    return {};
  }

  public start(core: CoreStart) {
    this.logger.debug('brewAnalytics: Started');
    return {};
  }

  public stop() {}
}
