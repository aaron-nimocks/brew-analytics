import React, { useState } from 'react';
import { FormattedMessage, I18nProvider } from '@kbn/i18n/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { FormImages } from './input-form/form-images'
import { CoffeeInputForm } from './input-form/form'

import {
  EuiPage,
  EuiPageBody,
  EuiPageContent,
  EuiPageContentBody,
  EuiPageContentHeader,
  EuiPageHeader,
  EuiTitle,
} from '@elastic/eui';

import { CoreStart } from '../../../../src/core/public';
import { NavigationPublicPluginStart } from '../../../../src/plugins/navigation/public';

import { PLUGIN_ID, PLUGIN_NAME } from '../../common';

interface BrewAnalyticsAppDeps {
  basename: string;
  notifications: CoreStart['notifications'];
  http: CoreStart['http'];
  navigation: NavigationPublicPluginStart;
  type: String;
}

export const BrewAnalyticsApp = ({
  basename,
  notifications,
  http,
  navigation,
}: BrewAnalyticsAppDeps) => {
  // Use React hooks to manage state.

  const onCoffeeClicked = (arg: String) => {
    if (arg != null) {
      setShowOptions(true);
      setCoffeeType(arg);
    } else {
      setShowOptions(false);
    }
  }

  const [showOptions, setShowOptions] = useState(false);
  const [coffeeType, setCoffeeType] = useState<String>('none');

  // Render the application DOM.
  // Note that `navigation.ui.TopNavMenu` is a stateful component exported on the `navigation` plugin's start contract.
  return (
    <Router basename={basename}>
      <I18nProvider>
        <>
          <navigation.ui.TopNavMenu
            appName={PLUGIN_ID}
            showSearchBar={false}
            useDefaultBehaviors={false}
          />
          <EuiPage restrictWidth={1100} className="brew-analytics">
            <EuiPageBody>
              <EuiPageHeader>
                <EuiTitle size="l">
                  <h1>
                    <FormattedMessage
                      id="brewAnalytics.helloWorldText"
                      defaultMessage="{name}"
                      values={{ name: PLUGIN_NAME }}
                    />
                  </h1>
                </EuiTitle>
              </EuiPageHeader>
              <EuiPageContent color="transparent" hasShadow={false}>
                <EuiPageContentHeader>
                  <FormImages coffeeClicked={onCoffeeClicked} />
                </EuiPageContentHeader>
                <EuiPageContentBody>
                  {showOptions ? <CoffeeInputForm coffeeType={coffeeType} http={http} /> : ''}
                </EuiPageContentBody>
              </EuiPageContent>
            </EuiPageBody>
          </EuiPage>
        </>
      </I18nProvider>
    </Router>
  );
};
