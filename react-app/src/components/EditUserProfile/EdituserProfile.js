import React, {useState} from 'react';
import { useDispatch} from 'react-redux';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


import { editUserInfo } from '../../store/user';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};



function EdituserProfile({user}) {
    const [userId] = useState(user.id);
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
    const [open, setOpen] = useState(false);


    const dispatch = useDispatch();


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
        window.location.reload();
    }


    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

  return (
    <div>
      <button onClick={handleOpen}>Edit Profile</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit your info
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>

        <form onSubmit={handleSubmit}>
            <label htmlFor="username" className="modal-label">Username</label>
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="edit-event-input"
                required
            />
            <label htmlFor="email" className="modal-label">Email</label>
            <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="edit-event-input"
                required
            />
            <label htmlFor="first_name" className="modal-label">FirstName</label>
            <input
                type="text"
                value={first_name}
                onChange={(e) => setFirstName(e.target.value)}
                className="edit-event-input"
                required
            />
            <label htmlFor="last_name" className="modal-label">LastName</label>
            <input
                type="text"
                value={last_name}
                onChange={(e) => setLastName(e.target.value)}
                className="edit-event-input"
                required
            />
            <label htmlFor="city" className="modal-label">City</label>
            <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="edit-event-input"
                required
            />
            <label htmlFor="state" className="modal-label">State</label>
            <input
                type="text"
                value={state}
                onChange={(e) => setState(e.target.value)}
                className="edit-event-input"
                required
            />
            <label htmlFor="zipcode" className="modal-label">Zipcode</label>
            <input
                type="text"
                value={zipcode}
                onChange={(e) => setZipcode(e.target.value)}
                className="edit-event-input"
                required
            />
            <label htmlFor="user_image" className="modal-label">ProfileImage</label>
            <input
                type="text"
                value={user_image}
                onChange={(e) => setUserImage(e.target.value)}
                className="edit-event-input"
                required
            />
            <label htmlFor="user_bio" className="modal-label">Bio</label>
            <input
                type="text"
                value={user_bio}
                onChange={(e) => setUserBio(e.target.value)}
                className="edit-event-input"
                required
            />
            <button type="submit" className="modal-submit">Submit</button>
        </form>

          </Typography>
        </Box>
      </Modal>
    </div>
  )
}

export default EdituserProfile


/*

*/
