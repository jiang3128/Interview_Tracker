import {Action} from './actions.js';

const intialState={
    currentPage:0,
    currentView:0,
    currentOption:0,
    meetings:[],
    user:{},
    loginError:false,
    candidate:[],
    participant:[],
    location:[],
    message:[],
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
        case Action.changeOption:
            return{
                ...state,
                currentOption:action.payload,
            };
        case Action.changePage:
            return{
                ...state,
                currentPage:action.payload,
            };
        case Action.loadCandidate:
            return{
                ...state,
                candidate:action.payload,
            };
        case Action.loadParticipant:
            return{
                ...state,
                participant:action.payload,
            };
        case Action.loadLocation:
            return{
                ...state,
                location:action.payload,
            };
        case Action.loadMessage:
            return{
                ...state,
                message:action.payload,
            };
        default:
            return state;
    }
}

export default reducer;