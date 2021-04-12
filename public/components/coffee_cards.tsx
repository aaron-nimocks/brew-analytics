import React from 'react';

import {
    EuiCard
} from '@elastic/eui';

interface ICoffeeCards {
    coffeeClicked: any;
}

export const CoffeeCards: React.FC<ICoffeeCards> = (props: ICoffeeCards) => {

    function coffeeClick(source: String) {
        props.coffeeClicked(source);
    }

    return (
        <>
            <EuiCard
                layout="horizontal"
                title=""
                description="Espresso"
                onClick={() => coffeeClick("espresso")}
            />
            <EuiCard
                layout="horizontal"
                title=""
                description="Coffee"
                onClick={() => coffeeClick("coffee")}
            />
            <EuiCard
                layout="horizontal"
                title=""
                description="Tea"
                onClick={() => coffeeClick("tea")}
            />
            <EuiCard
                layout="horizontal"
                title=""
                description="Roast"
                onClick={() => coffeeClick("roast")}
            />
        </>
    );
};
