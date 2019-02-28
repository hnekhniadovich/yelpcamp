// Action creator
export const selectCamp = camp => {
    //return an action
    return {
        type: 'CAMP_SELECTED',
        payload: camp
    };
};