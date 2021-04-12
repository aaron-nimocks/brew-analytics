import React, { useState } from 'react';
import moment from 'moment';

import {
    EuiFormRow,
    EuiRange,
    EuiComboBox,
    EuiFlexGroup,
    EuiFlexItem,
    EuiText,
    EuiSpacer,
    EuiDatePicker,
    EuiTextArea,
    EuiCheckboxGroup,
    EuiPanel
} from '@elastic/eui';

interface ICoffeeInputForm {
    type: String;
}

export const CoffeeInputForm: React.FC<ICoffeeInputForm> = (type: ICoffeeInputForm) => {

    console.log(type);

    const [value, setValue] = useState('120');

    const onRangeChange = (e: any) => {
        setValue(e.target.value);
    };

    const options = [
        {
            label: 'Espresso',
            'data-test-subj': 'titanOption',
        },
        {
            label: 'Doppio',
        },
        {
            label: 'Lungo',
        },
        {
            label: 'Cappucino',
        },
        {
            label: 'Mocha',
        },
        {
            label: 'Latte',
        },
        {
            label: 'Cortado',
        },
        {
            label: 'Americano',
        }
    ];
    const [startDate, setStartDate] = useState(moment());

    const handleChange = (date: any) => {
        setStartDate(date);
    };

    const [checkboxIdToSelectedMap, setCheckboxIdToSelectedMap] = useState({
        [`df1`]: true,
    });

    const leftCheckboxes = [
        {
            id: `sdf0`,
            label: 'Sugar',
            'data-test-sub': 'dts_test',
        },
        {
            id: `sdf0`,
            label: 'Salt',
            'data-test-sub': 'dts_test',
        },
        {
            id: `sdf0`,
            label: 'Syrup',
            'data-test-sub': 'dts_test',
        },
        {
            id: `sdf0`,
            label: 'Cinnamon',
            'data-test-sub': 'dts_test',
        },
    ];

    const rightCheckboxes = [
        {
            id: `sdf0`,
            label: 'Chocolate',
            'data-test-sub': 'dts_test',
        },
        {
            id: `sdf0`,
            label: 'Caramel',
            'data-test-sub': 'dts_test',
        },
        {
            id: `sdf0`,
            label: 'Whipped Cream',
            'data-test-sub': 'dts_test',
        },
        {
            id: `sdf0`,
            label: 'Creamer',
            'data-test-sub': 'dts_test',
        },
    ];


    return (
        <>

            <EuiFlexGroup>
                <EuiFlexItem grow={true}>
                    <EuiText>Drink Type</EuiText>
                    <EuiComboBox
                        placeholder="Select a single option"
                        singleSelection={{ asPlainText: true }}
                        options={options}
                        fullWidth={true}
                    />
                    <EuiSpacer size="m" />
                    <EuiText>Roast Name</EuiText>
                    <EuiComboBox
                        placeholder="Select a single option"
                        singleSelection={{ asPlainText: true }}
                        options={options}
                        fullWidth={true}
                    />
                    <EuiSpacer size="m" />
                    <EuiText>Roast Date</EuiText>
                    <EuiDatePicker selected={startDate} onChange={handleChange} fullWidth={true} />


                </EuiFlexItem>
                <EuiFlexItem grow={true}>
                    <EuiFormRow label="Brew Time (s)" display="columnCompressed" fullWidth={true}>
                        <EuiRange
                            min={0}
                            max={60}
                            name="range"
                            id="range"
                            showInput
                            showLabels
                            value={value}
                            onChange={onRangeChange}
                            step={.1}
                        />
                    </EuiFormRow>
                    <EuiFormRow label="Brew Temp (f)" display="columnCompressed" fullWidth={true}>
                        <EuiRange
                            min={95}
                            max={210}
                            name="range"
                            id="range"
                            showInput
                            showLabels
                            value={value}
                            onChange={onRangeChange}
                        />
                    </EuiFormRow>
                    <EuiFormRow label="Bean Mass (g)" display="columnCompressed" fullWidth={true}>
                        <EuiRange
                            min={0}
                            max={30}
                            name="range"
                            id="range"
                            showInput
                            showLabels
                            value={value}
                            onChange={onRangeChange}
                        />
                    </EuiFormRow>
                    <EuiFormRow label="Water Mass (ml)" display="columnCompressed" fullWidth={true}>
                        <EuiRange
                            min={0}
                            max={250}
                            name="range"
                            id="range"
                            showInput
                            showLabels
                            value={value}
                            onChange={onRangeChange}
                        />
                    </EuiFormRow>
                    <EuiFormRow label="Milk Mass (ml)" display="columnCompressed" fullWidth={true}>
                        <EuiRange
                            min={0}
                            max={250}
                            name="range"
                            id="range"
                            showInput
                            showLabels
                            value={value}
                            onChange={onRangeChange}
                        />
                    </EuiFormRow>
                </EuiFlexItem>
            </EuiFlexGroup>
            <EuiFlexGroup>
                <EuiFlexItem grow={true}>
                    <EuiText>Drink Type</EuiText>
                    <EuiFlexGroup>
                        <EuiFlexItem>
                            <EuiPanel grow={true}>
                                <EuiCheckboxGroup
                                    options={leftCheckboxes}
                                    idToSelectedMap={checkboxIdToSelectedMap}
                                    onChange={(id) => onRangeChange(id)}
                                />
                            </EuiPanel>
                        </EuiFlexItem>
                        <EuiFlexItem>
                            <EuiPanel grow={true}>
                                <EuiCheckboxGroup
                                    options={rightCheckboxes}
                                    idToSelectedMap={checkboxIdToSelectedMap}
                                    onChange={(id) => onRangeChange(id)}
                                />
                            </EuiPanel>
                        </EuiFlexItem>
                    </EuiFlexGroup>
                </EuiFlexItem>
                <EuiFlexItem grow={true}>
                    <EuiText>Comments</EuiText>
                    <EuiTextArea
                        placeholder="Placeholder text"
                        value={value}
                        fullWidth={true}
                    />
                </EuiFlexItem>
            </EuiFlexGroup>
        </>
    );
};
