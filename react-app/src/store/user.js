const LOAD_USER = 'session/LOAD_USER';


const loadUsers = (user) => ({
    type: LOAD_USER,
    user
})


export const loadUserInfo = () => async (dispatch) => {
    const response = await fetch('/api/users/');

    if (response.ok) {
        const user = await response.json();
        dispatch(loadUsers(user));
    }
}


export default function UserReducer(state = [], action){
    switch (action.type) {
        case LOAD_USER:
            return action.user;
        default:
            return state;
    }
}
