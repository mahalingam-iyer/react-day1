export const addUserAction = (data) => ({
    type: 'ADD_USER_LIST',
    data: data
})

export const fetchUserList = (data) => {
    return (dispatch) => {
        dispatch({type:'REQUESTED'})
        fetch('https://my-json-server.typicode.com/mahalingam-iyer/demoapi/users')
            .then(response => response.json(),err=>dispatch('ERROR',err))
            .then(json => {
                dispatch({type:'ADD_USER_LIST',data:json})
            });
    }
}