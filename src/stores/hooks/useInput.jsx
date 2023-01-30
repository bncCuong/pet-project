import { useState } from 'react';

const useInput = (validateValue) => {
    const [enteredvalue, setEnteredValue] = useState(false);
    const [isTouchInput, setIsTouchInput] = useState(false);

    const valueIsValid = validateValue(enteredvalue);

    const hasError = !valueIsValid && isTouchInput;

    const changeInputHanler = (e) => {
        setEnteredValue(e.target.value);
    };

    const touchInputHanler = () => {
        setIsTouchInput(true);
    };

    const resetInput = () => {
        setIsTouchInput(false);
        setEnteredValue('');
    };
    return { value: enteredvalue, valueIsValid, hasError, changeInputHanler, touchInputHanler, resetInput };
};

export default useInput;
