import { useState } from 'react';

const useInput = (validateValue) => {
    const [enteredvalue, setEnteredValue] = useState('');
    const [isTouchInput, setIsTouchInput] = useState(false);

    const valueIsValid = validateValue(enteredvalue);

    const hasError = !valueIsValid && isTouchInput;

    const changeInputHanler = (e) => {
        setEnteredValue(e.target.value);
    };

    const touchInputHanler = () => {
        setIsTouchInput(true);
    };
    const clickInputHanler = () => {
        setIsTouchInput(false);
    };
    const resetInput = () => {
        setIsTouchInput(false);
        setEnteredValue('');
    };
    return {
        value: enteredvalue,
        valueIsValid,
        hasError,
        changeInputHanler,
        touchInputHanler,
        resetInput,
        clickInputHanler,
    };
};

export default useInput;
