const VALIDATOR_TYPE_EMAIL = 'EMAIL';
const VALIDATOR_TYPE_MINLENGTH = 'MINLENGTH';

export const VALIDATOR_MINLENGTH = val => ({
    type: VALIDATOR_TYPE_MINLENGTH,
    val: val
});

export const VALIDATOR_EMAIL = () => ({ type: VALIDATOR_TYPE_EMAIL});

export const validate = (value, validators) => {
    let isValid = true;
    for(const validator of validators) {
        if(validator.type === VALIDATOR_TYPE_MINLENGTH) {
            isValid = isValid && value.trim().length >= validator.val
        }
        if(validator.type === VALIDATOR_TYPE_EMAIL) {
            isValid = isValid && /^\S+@\S+\.\S+$/.test(value);
        }
        return isValid;
    }
}