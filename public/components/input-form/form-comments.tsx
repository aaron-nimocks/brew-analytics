import React, { useState } from 'react';

import {
    EuiTextArea,
    EuiText,
} from '@elastic/eui';

interface ICoffeeCommentForm {
    coffeeType?: any;
    onAddForm: (key: string, value: string) => void;
}

export const CoffeeCommentForm: React.FC<ICoffeeCommentForm> = (props: ICoffeeCommentForm) => {

    const onChangeComment = (event: any) => {
        setCommentValue(event.target.value);
        props.onAddForm("comments", event.target.value);
    };


    const [ commentValue, setCommentValue] = useState("");

    return (
        <>
            <EuiText>Comments</EuiText>
            <EuiTextArea
                placeholder="Placeholder text"
                value={commentValue}
                fullWidth={true}
                onChange={onChangeComment}
                id="dsfds"
            />
        </>
    );
};
