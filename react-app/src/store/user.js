const LOAD_USER = 'session/LOAD_USER';
const EDIT_USER = 'session/EDIT_USER';

const loadUsers = (user) => ({
    type: LOAD_USER,
    user
})

const editUser = (user) => ({
    type: EDIT_USER,
    user
})


export const loadUserInfo = () => async (dispatch) => {
    const response = await fetch('/api/users/');

    if (response.ok) {
        const user = await response.json();
        dispatch(loadUsers(user));
    }
}

export const editUserInfo = (user) => async (dispatch) => {
    const response = await fetch(`/api/users/${user.id}/edit`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });

    if (response.ok) {
        const user = await response.json();
        console.log(user)
        dispatch(editUser(user));
    }
}

export const userProfile = (user) => async (dispatch) => {
    const response = await fetch(`/api/users/${user.id}/profile`);

    if (response.ok) {
        const user = await response.json();
        dispatch(loadUsers(user));
    }
}




export default function UserReducer(state = [], action){
    switch (action.type) {
        case LOAD_USER:
            return action.user;
        case EDIT_USER:
            return action.user;
        default:
            return state;
    }
}
