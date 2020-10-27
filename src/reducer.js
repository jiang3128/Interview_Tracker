import {Action} from './actions.js';

const intialState={
    currentPage:2,
    currentView:0,
    currentOption:0,
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
            //new
        case Action.finishingAddingRequest:
            return{
                ...state,
                candidate: [action.payload, ...state.candidate],
            }
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
        case Action.changeOption:
            return{
                 ...state,
                 currentOption:action.payload,
            };
        default:
            return state;
    }
}

export default reducer;