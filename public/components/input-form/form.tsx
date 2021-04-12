import React, { useState } from 'react';
import { CoffeeDropDownForm } from './form-dropdown';
import { CoffeeDateForm } from './form-date'
import { CoffeeRangeForm } from './form-sliders'
import { CoffeeCommentForm } from './form-comments'
import { CoffeeCheckBoxForm } from './form-checkboxes'

import {
    EuiFlexGroup,
    EuiFlexItem,
    EuiText,
    EuiSpacer,
    EuiFormRow,
    EuiButton,
    EuiHorizontalRule
} from '@elastic/eui';
import moment from 'moment';
import { CoreStart } from 'kibana/public';

interface ICoffeeInputForm {
    coffeeType: String;
    formData?: {
        drinkType: string;
        roastName: string;
        roastDate: Date;
        brewTime: number;
        brewTemp: number;
        beanMass: number;
        waterMass: number;
        milkMass: number;
        comments: string;
        addOns: string[];
    }
    http: CoreStart['http'];
}

export const CoffeeInputForm: React.FC<ICoffeeInputForm> = ({ http, coffeeType }: ICoffeeInputForm) => {

    const [formData, setFormData] = useState({
        drinkType: '',
        roastName: '',
        roastDate: moment().format('MM-DD-YYYY'),
        brewTime: '',
        brewTemp: '',
        beanMass: '',
        waterMass: '',
        milkMass: '',
        comments: '',
        addOns: Array()
    });

    const onClickButton = (event: React.FormEvent) => {
        event.preventDefault();

        http.post('/api/brew_analytics/form_submit', {
            body: JSON.stringify(formData),
        })
            .then((res) => {
                console.log("success");
                console.log(res);
            })
            .catch((err) => {
                console.log("failed");
                console.log(err);
            });
    }

    const formAddHandler = (key: string, value: string) => {

        if (key == 'addOns') {

            const array: string[] = formData.addOns;
            if (array.indexOf(value) === -1) {
                array.push(value);
                setFormData({ ...formData, addOns: array });
            } else {
                const filtered = array.filter(item => item !== value);
                setFormData({ ...formData, addOns: filtered });
            }
        } else {
            setFormData({ ...formData, [key]: value });
        }
    }

    return (
        <>
            <EuiFlexGroup>
                <EuiFlexItem>
                    <CoffeeDropDownForm
                        coffeeType={coffeeType}
                        onAddForm={formAddHandler}
                    />
                    <CoffeeDateForm
                        coffeeType={coffeeType}
                        onAddForm={formAddHandler}
                    />
                    <EuiHorizontalRule margin="m" />
                    <EuiFormRow><EuiText>Add Ons</EuiText></EuiFormRow>
                    <EuiFlexGroup>
                        <EuiFlexItem>
                            <CoffeeCheckBoxForm
                                coffeeType={coffeeType}
                                checkId={"check-sugar"}
                                checkLabel={"Sugar"}
                                onAddForm={formAddHandler}
                            />
                            <CoffeeCheckBoxForm
                                coffeeType={coffeeType}
                                checkId={"check-salt"}
                                checkLabel={"Salt"}
                                onAddForm={formAddHandler}
                            />
                            <CoffeeCheckBoxForm
                                coffeeType={coffeeType}
                                checkId={"check-syrup"}
                                checkLabel={"Syrup"}
                                onAddForm={formAddHandler}
                            />
                            <CoffeeCheckBoxForm
                                coffeeType={coffeeType}
                                checkId={"check-cinnamon"}
                                checkLabel={"Cinnamon"}
                                onAddForm={formAddHandler}
                            /></EuiFlexItem>
                        <EuiFlexItem>
                            <CoffeeCheckBoxForm
                                coffeeType={coffeeType}
                                checkId={"check-chocolate"}
                                checkLabel={"Chocolate"}
                                onAddForm={formAddHandler}
                            />
                            <CoffeeCheckBoxForm
                                coffeeType={coffeeType}
                                checkId={"check-caramel"}
                                checkLabel={"Caramel"}
                                onAddForm={formAddHandler}
                            />
                            <CoffeeCheckBoxForm
                                coffeeType={coffeeType}
                                checkId={"check-whipped-cream"}
                                checkLabel={"Whipped Cream"}
                                onAddForm={formAddHandler}
                            />
                            <CoffeeCheckBoxForm
                                coffeeType={coffeeType}
                                checkId={"check-creamer"}
                                checkLabel={"Creamer"}
                                onAddForm={formAddHandler}
                            /></EuiFlexItem>
                    </EuiFlexGroup>
                </EuiFlexItem>
                <EuiFlexItem>
                    <CoffeeRangeForm
                        coffeeType={coffeeType}
                        rangeMin={0}
                        rangeMax={60}
                        rangeName={"brewTime"}
                        rangeLabel={"Brew Time (s)"}
                        onAddForm={formAddHandler}
                    />
                    <CoffeeRangeForm
                        coffeeType={coffeeType}
                        rangeMin={95}
                        rangeMax={210}
                        rangeName={"brewTemp"}
                        rangeLabel={"Brew Temp (f)"}
                        onAddForm={formAddHandler}
                    />
                    <CoffeeRangeForm
                        coffeeType={coffeeType}
                        rangeMin={0}
                        rangeMax={30}
                        rangeName={"beanMass"}
                        rangeLabel={"Bean Mass (g)"}
                        onAddForm={formAddHandler}
                    />
                    <CoffeeRangeForm
                        coffeeType={coffeeType}
                        rangeMin={0}
                        rangeMax={250}
                        rangeName={"waterMass"}
                        rangeLabel={"Water Mass (ml)"}
                        onAddForm={formAddHandler}
                    />
                    <CoffeeRangeForm
                        coffeeType={coffeeType}
                        rangeMin={0}
                        rangeMax={250}
                        rangeName={"milkMass"}
                        rangeLabel={"Milk Mass (ml)"}
                        onAddForm={formAddHandler}
                    />
                    <EuiHorizontalRule margin="m" />
                    <CoffeeCommentForm
                        coffeeType={coffeeType}
                        onAddForm={formAddHandler}
                    />
                </EuiFlexItem>
            </EuiFlexGroup>
            <EuiSpacer size="m" />
            <EuiButton
                iconType={"beaker"}
                fullWidth={true}
                fill
                color={"text"}
                id="brew-button"
                onClick={onClickButton}
            >Brew It</EuiButton>
        </>
    );
};
