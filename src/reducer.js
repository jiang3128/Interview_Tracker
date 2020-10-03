import {Action} from './actions.js';

const intialState={
    currentPage:0,
    userType:0,
    meetings:[],
    user:{},
    loginError:false,
};

function reducer(state=intialState,action){
    switch(action.type){
        case Action.loadMeetings:
            return{
                ...state,
                meetings:action.payload,
            };
        case Action.loadUser:
            return{
                ...state,
                user:action.payload,
                currentPage:1,
            };
        case Action.showLoginError:
            return{
                ...state,
                loginError:true,
            };
        default:
            return state;
    }
}

export default reducer;