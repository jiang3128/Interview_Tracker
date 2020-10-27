export const Action=Object.freeze({
    loadMeetings:'loadMeetings',
    loadUser:'loadUser',
    showLoginError:'showLoginError',
    finishingAddingRequest:'finishingAddingRequest',
    changeView:'changeView',
    userLogout:'userLogout',
    changeOption:'changeOption',
});

function loadMeetings(meetings){
    return{
        type:Action.loadMeetings,
        payload:meetings,
    };         
}

function loadUser(user){
    return{
        type:Action.loadUser,
        payload:user,
    };
}

function showLoginError(){
    return{
        type:Action.showLoginError,
    };
}
// new
export function finishingAddingRequest(candidate){
    return{
        type: Action.finishingAddingRequest,
        payload: candidate,
    };
}

export function changeView(id){
    return{
        type:Action.changeView,
        payload:id,
    };
}

export function userLogout(){
    return{
        type:Action.userLogout,
    };
}

export function changeOption(option){
    return{
        type:Action.changeOption,
        payload:option,
    };
}

const host='http://138.68.20.45:8080';
//const host='http://localhost:8080';
export function findAllMeetings(){
    return dispatch=>{
        fetch(`${host}/getAllMeetings`)
        .then(response=>response.json())
        .then(data=>{
            dispatch(loadMeetings(data));
        })
        .catch(error=>console.log(error));
    };
};

export function findUser(email,password){
    return dispatch=>{
        fetch(`${host}/getUser/${email}/${password}`)
        .then(response=>response.json())
        .then(data=>{
            if(password===data.upassword){
                dispatch(loadUser(data));
                dispatch(findMeetingsByUserId(data.uid));
            }
            else{
                dispatch(showLoginError());
            }
        })
        .catch(error=>console.log(error));
    };
};

export function findMeetingsByUserId(id){
    return dispatch=>{
        fetch(`${host}/getMeetingsByUserId/${id}`)
        .then(response=>response.json())
        .then(data=>{
            dispatch(loadMeetings(data));
        })
        .catch(error=>console.log(error));
    };
}
// new
export function startAddingRequest(candidate){
    const options ={
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
        },
    }
    return dispatch=>{
        fetch(`${host}/setMeeting/${candidate}`, options)
        .then(response=>response.json())
        .then(data=>{
            if(data.ok){
                candidate.id = data.id;
                dispatch(finishingAddingRequest(data));
            }
            
        })
        .catch(error=>console.log(error));
    };
}