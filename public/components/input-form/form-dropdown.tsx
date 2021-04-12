import React, { useState } from 'react';

import {
    EuiComboBox,
    EuiText,
    EuiSpacer,
    EuiComboBoxOptionOption,
} from '@elastic/eui';

interface ICoffeeDropDownForm {
    coffeeType: any;
    onAddForm: (key: string, value: string) => void;
}

export const CoffeeDropDownForm: React.FC<ICoffeeDropDownForm> = props => {

    const typeOptions = [
        {
            label: 'Espresso',
            value: 'espresso'
        },
        {
            label: 'Doppio',
            value: 'doppio'
        },
        {
            label: 'Lungo',
            value: 'lungo'
        },
        {
            label: 'Cappucino',
            value: 'cappucino'
        },
        {
            label: 'Mocha',
            value: 'mocha'
        },
        {
            label: 'Latte',
            value: 'latte'
        },
        {
            label: 'Cortado',
            value: 'cortado'
        },
        {
            label: 'Americano',
            value: 'americano'
        }
    ];

    const roastOptions = [
        {
            label: 'Espresso Workshop #47 A Taste of Honey',
            value: 'espresso-workshop'
        },
        {
            label: 'Panama Bambito Estate Typica',
            value: 'panama-bambito'
        },
        {
            label: 'New Classic Espresso Blend',
            value: 'new-classic'
        },
        {
            label: 'Espresso Monkey Blend',
            value: 'espresso-monkey'
        },
        {
            label: 'Sumatra Dry Process Aceh Bebesen',
            value: 'sumatra-dry'
        },
        {
            label: 'Colombia Inza Palomos del Sur',
            value: 'columbia-inza'
        },
        {
            label: 'Guatemala Proyecto Xinabajul Los Chuchitos',
            value: 'guatemala-proyecto'
        }
    ];

    const onChangeType = (options: EuiComboBoxOptionOption[]) => {
        setTypeSelected(options);
        const singleSelectValue: any = options[0].value;
        props.onAddForm("drinkType", singleSelectValue);
    };

    const onChangeRoast = (options: EuiComboBoxOptionOption[]) => {
        setRoastSelected(options);
        const singleSelectValue: any = options[0].value;
        props.onAddForm("roastName", singleSelectValue);
    };

    const [selectedTypeOptions, setTypeSelected] = useState<EuiComboBoxOptionOption[]>();
    const [selectedRoastOptions, setRoastSelected] = useState<EuiComboBoxOptionOption[]>();

    return (
        <>
            <EuiText>Drink Type</EuiText>
            <EuiComboBox
                placeholder="Select a single option"
                singleSelection={{ asPlainText: true }}
                options={typeOptions}
                fullWidth={true}
                onChange={onChangeType}
                selectedOptions={selectedTypeOptions}
                id="drink-type-select"
            />
            <EuiSpacer size="m" />
            <EuiText>Roast Name</EuiText>
            <EuiComboBox
                placeholder="Select a single option"
                singleSelection={{ asPlainText: true }}
                options={roastOptions}
                fullWidth={true}
                onChange={onChangeRoast}
                selectedOptions={selectedRoastOptions}
                id="roast-name-select"
            />
        </>
    );
};