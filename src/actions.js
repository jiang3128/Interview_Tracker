export const Action=Object.freeze({
    loadMeetings:'loadMeetings',
    loadUser:'loadUser',
    showLoginError:'showLoginError',
    changeView:'changeView',
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

export function changeView(id){
    return{
        type:Action.changeView,
        payload:id,
    };
}

//const host='http://138.68.20.45:8080';
const host='http://localhost:8080';
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