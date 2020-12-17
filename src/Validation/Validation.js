import React from 'react';

const validation = (props) => {
    // let validationMessage = "text to short";

    // if (props.inputLength > 5) {
    //     validationMessage = "text to short";
    // }
    // <p>{validationMessage}</p>
    return (
        <div>
        {
            props.inputLength > 5 ?
            <p>text long enough</p> :
            <p>text to short</p>
        }
        </div>
    );
};

export default validation;