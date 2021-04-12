import React, { useState } from 'react';

import {
    EuiFormRow,
    EuiRange,
} from '@elastic/eui';

interface ICoffeeRangeForm {
    coffeeType: any;
    rangeMin: number;
    rangeMax: number;
    rangeName: string;
    rangeId?: string;
    rangeLabel: string;
    onAddForm: (key: string, value: string) => void;
}

export const CoffeeRangeForm: React.FC<ICoffeeRangeForm> = (props: ICoffeeRangeForm) => {

    const [rangeValue, setRangeValue] = useState("");

    const onRangeChange = (event: any, isValid: boolean) => {
        setRangeValue(event.target.value);
        props.onAddForm(props.rangeName, event.target.value);
    };

    return (

        <EuiFormRow label={props.rangeLabel} display="columnCompressed" fullWidth={true}>
            <EuiRange
                min={props.rangeMin}
                max={props.rangeMax}
                name={props.rangeName}
                id={props.rangeId}
                showInput
                showLabels
                value={rangeValue}
                onChange={onRangeChange}
                step={.1}
            />
        </EuiFormRow>
    );
};
