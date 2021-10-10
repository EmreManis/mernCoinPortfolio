const VALIDATOR_TYPE_EMAIL = 'EMAIL';
const VALIDATOR_TYPE_MINLENGTH = 'MINLENGTH';
const VALIDATOR_TYPE_REQUIRE ='REQUIRE';
const VALIDATOR_TYPE_OPTIONAL = 'OPTIONAL';

export const VALIDATOR_MINLENGTH = val => ({
    type: VALIDATOR_TYPE_MINLENGTH,
    val: val
});

export const VALIDATOR_REQUIRE = () => ({type: VALIDATOR_TYPE_REQUIRE});

export const VALIDATOR_EMAIL = () => ({ type: VALIDATOR_TYPE_EMAIL});

export const VALIDATOR_OPTIONAL = () => ({type: VALIDATOR_TYPE_OPTIONAL});

export const validate = (value, validators) => {
    let isValid = true;
        for(const validator of validators) {
            if (validator.type === VALIDATOR_REQUIRE) {
                isValid = isValid && value.trim().length > 0
            }
            if(validator.type === VALIDATOR_TYPE_MINLENGTH) {
                isValid = isValid && value.trim().length >= validator.val
            }
            if(validator.type === VALIDATOR_TYPE_EMAIL) {
                isValid = isValid && /^\S+@\S+\.\S+$/.test(value);
            }
            if(validator.type === VALIDATOR_TYPE_OPTIONAL) {
                return isValid;
            }
            return isValid;
        }
}