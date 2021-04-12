import React, { useState } from 'react';

import {
    EuiCheckbox,
} from '@elastic/eui';

interface ICoffeeCheckBoxForm {
    coffeeType: any;
    checkId: string;
    checkLabel: string;
    onAddForm: (key: string, value: string) => void;
}

export const CoffeeCheckBoxForm: React.FC<ICoffeeCheckBoxForm> = (props: ICoffeeCheckBoxForm) => {

    const onCheckBoxChange = (event: any) => {
        setCheckBoxValue(event.target.checked);
        props.onAddForm('addOns', event.target.id);
    };

    const [checkBoxValue, setCheckBoxValue] = useState();

    return (
        <>
            <EuiCheckbox
                id={props.checkId}
                label={props.checkLabel}
                checked={checkBoxValue}
                onChange={onCheckBoxChange}
            />
        </>
    );
};
