import {Action} from './actions.js';

const intialState={
    currentPage:0,
    meetings:[],
    user:{},
    loginError:false,
    currentView:0,
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
        case Action.changeView:
            return{
                ...state,
                currentView:action.payload,
            };
        case Action.userLogout:
            return{
                 ...state,
                currentPage:0,
                user:{},
            };
        default:
            return state;
    }
}

export default reducer;