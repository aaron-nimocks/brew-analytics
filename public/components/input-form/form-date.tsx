import React, { useState } from 'react';
import moment, { Moment } from 'moment';

import {
    EuiDatePicker,
    EuiText,
    EuiSpacer,
} from '@elastic/eui';

interface CoffeeDateForm {
    coffeeType: any;
    onAddForm: (key: string, value: string) => void;
}

export const CoffeeDateForm: React.FC<CoffeeDateForm> = (props: CoffeeDateForm) => {

    const onDateChange = (date: Moment) => {
        setDateValue(date);
        console.log(date);
        props.onAddForm("roastDate", date.format('MM-DD-YYYY'));
    };

    const [dateValue, setDateValue] = useState(moment());

    return (
        <>
            <EuiSpacer size="m" />
            <EuiText>Roast Date</EuiText>
            <EuiDatePicker 
                selected={dateValue}
                onChange={onDateChange}
                fullWidth={true}
            />
        </>
    );
};
