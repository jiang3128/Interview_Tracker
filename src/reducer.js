import {Action} from './actions.js';

const intialState={
    currentPage:0,
    userType:1,
    meetings:[],
};

function reducer(state=intialState,action){
    switch(action.type){
        case Action.loadAllMeetings:
            return{
                ...state,
                meetings:action.payload,
            }
        default:
            return state;
    }
}

export default reducer;