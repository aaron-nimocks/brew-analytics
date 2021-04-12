import React from 'react';

import {
    EuiCard,
    EuiFlexGroup,
    EuiFlexItem
} from '@elastic/eui';

interface IFormImages {
    coffeeClicked: any;
}

export const FormImages: React.FC<IFormImages> = (props: IFormImages) => {

    function coffeeClick(source: String) {
        props.coffeeClicked(source);
    }

    return (
        <EuiFlexGroup gutterSize="l">
            <EuiFlexItem>
                <EuiCard
                    textAlign="center"
                    image={
                        <div>
                            <img
                                src="http://localhost:5601/lpm/plugins/brewAnalytics/assets/espresso.png"
                                alt="espresso"
                            />
                        </div>
                    }
                    title="Espresso"
                    description=""
                    display="plain"
                    className="clear-background"
                    onClick={() => coffeeClick("espresso")}
                />
            </EuiFlexItem>
            <EuiFlexItem>
                <EuiCard
                    textAlign="center"
                    image={
                        <div>
                            <img
                                src="http://localhost:5601/lpm/plugins/brewAnalytics/assets/coffee.png"
                                alt="coffee"
                            />
                        </div>
                    }
                    title="Coffee"
                    description=""
                    display="plain"
                    className="clear-background"
                    onClick={() => coffeeClick("coffee")}
                />
            </EuiFlexItem>
            <EuiFlexItem>
                <EuiCard
                    textAlign="center"
                    image={
                        <div>
                            <img
                                src="http://localhost:5601/lpm/plugins/brewAnalytics/assets/tea.png"
                                alt="tea"
                            />
                        </div>
                    }
                    title="Tea"
                    description=""
                    display="plain"
                    className="clear-background"
                    onClick={() => coffeeClick("tea")}
                />
            </EuiFlexItem>
            <EuiFlexItem>
                <EuiCard
                    textAlign="center"
                    image={
                        <div>
                            <img
                                src="http://localhost:5601/lpm/plugins/brewAnalytics/assets/roast.png"
                                alt="roast"
                            />
                        </div>
                    }
                    title="Roast"
                    description=""
                    display="plain"
                    className="clear-background"
                    onClick={() => coffeeClick("roast")}
                />
            </EuiFlexItem>
        </EuiFlexGroup>

    );
};
