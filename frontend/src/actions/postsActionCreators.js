import axios from 'axios';

export function fetchData(){
    return function(dispatch){
        axios.get("http://localhost:3004")
        .then((response) => {
            dispatch({type: "FETCH_DATA_RETRIEVED", payload: response.data})
            console.log(response.data)
        })
        .catch((err) => {
            dispatch({type: "FETCH_DATA_REJECTED", payload: err})
        })
    }
}