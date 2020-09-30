export const Action=Object.freeze({
    loadAllMeetings:'loadAllMeetings',
});

function loadAllMeetings(meetings){
    return{
        type:Action.loadAllMeetings,
        payload:meetings,
    };
}

const host='http://138.68.20.45:8080';
export function findAllMeetings(){
    return dispatch=>{
        fetch(`${host}/getAllMeetings`)
        .then(response=>response.json())
        .then(data=>{
            dispatch(loadAllMeetings(data));
        })
        .catch(error=>console.log(error));
    };
};