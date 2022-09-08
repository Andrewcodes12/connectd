import React, {useState} from 'react';
import { useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';

import { editUserInfo } from '../../store/user';

function EdituserProfile({user}) {
    const [userId, setUserId] = useState(user.id);
    const [username, setUsername] = useState(user.username);
    const [email, setEmail] = useState(user.email);
    const [hashedPassword, setHashedPassword] = useState(user.hashedPassword);
    const [first_name, setFirstName] = useState(user.first_name);
    const [last_name, setLastName] = useState(user.last_name);
    const [city, setCity] = useState(user.city);
    const [state, setState] = useState(user.state);
    const [zipcode, setZipcode] = useState(user.zipcode);
    const [user_image, setUserImage] = useState(user.user_image);
    const [user_bio, setUserBio] = useState(user.user_bio);
    const [isClicked, setIsClicked] = useState(false);

    const dispatch = useDispatch();
    const history = useHistory();


    const handleSubmit =  (e) => {
        e.preventDefault();

        const user = {
            id: userId,
            username,
            email,
            hashedPassword,
            first_name,
            last_name,
            city,
            state,
            zipcode,
            user_image,
            user_bio
        }

        dispatch(editUserInfo(user));
        setIsClicked(false);
        history.push(`/users/${user.id}`)
    }




  return (
    <>
    <button onClick={() => setIsClicked(true)}>Edit Profile</button>
    {isClicked ? (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
            />
            <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <input
                type="text"
                value={hashedPassword}
                onChange={(e) => setHashedPassword(e.target.value)}
                required
            />
            <input
                type="text"
                value={first_name}
                onChange={(e) => setFirstName(e.target.value)}
                required
            />
            <input
                type="text"
                value={last_name}
                onChange={(e) => setLastName(e.target.value)}
                required
            />
            <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
            />
            <input
                type="text"
                value={state}
                onChange={(e) => setState(e.target.value)}
                required
            />
            <input
                type="text"
                value={zipcode}
                onChange={(e) => setZipcode(e.target.value)}
                required
            />
            <input
                type="text"
                value={user_image}
                onChange={(e) => setUserImage(e.target.value)}
                required
            />
            <input
                type="text"
                value={user_bio}
                onChange={(e) => setUserBio(e.target.value)}
                required
            />
            <button type="submit">Submit</button>
        </form>
    ) : null}
    </>
  )
}

export default EdituserProfile
