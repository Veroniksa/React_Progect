export const TOOGLE_SHOW_NAME = 'PROFILE::TOGGLE_SHOW_NAME';
export const CHANGE_NAME = 'PROFILE::CHANGE_NAME';

export const toggleShowName = {
    type: TOOGLE_SHOW_NAME,
};

export const CHECK_BOX = 'PROFILE//CHECK_BOX';

export const checkBoxOff = {
    type: CHECK_BOX,
};

export const changeName = (name) => ({
    type: CHANGE_NAME,
    payload: name,
});