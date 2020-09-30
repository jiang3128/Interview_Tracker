export const Action=Object.freeze({
    loadMeetings:'loadMeetings',
    loadUser:'loadUser',
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

const host='http://138.68.20.45:8080';
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
            dispatch(loadUser(data));
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