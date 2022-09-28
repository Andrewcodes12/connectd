import React, {useState} from 'react';
import { useDispatch} from 'react-redux';


import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import NativeSelect from '@mui/material/NativeSelect';

import './editEvent.css';

import { updateEvent } from '../../store/event';

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

function EditEvent({event}) {
  const [eventID] = useState(event.id);
  const [title, setTitle] = useState(event.title);
  const [event_imgs, setEventImgs] = useState(event.event_imgs);
  const [event_description, setEventDescription] = useState(event.event_description);
  const [event_date, setEventDate] = useState(event.event_date);
  const [event_city, setEventCity] = useState(event.event_city);
  const [event_state, setEventState] = useState(event.event_state);
  const [event_zipcode, setEventZip] = useState(event.event_zipcode);
  const [category, setEventCategory] = useState(event.category);
  const [user_id] = useState(event.user_id);
  const [isClicked, setIsClicked] = useState(false);
  const [open, setOpen] = useState(false);
  const [errors, setErrors] = useState([]);


  let today = new Date().toISOString().substring(0, 10);


  const dispatch = useDispatch();


  const handleSubmit = (e) => {
    e.preventDefault();

    const event = {
      id: eventID,
      title,
      event_imgs,
      event_description,
      event_date,
      event_city,
      event_state,
      event_zipcode,
      category,
      user_id
    }

    dispatch(updateEvent(event));
    setIsClicked(false);
  }


  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const updateZip = async  (e) =>  {

    const zip = e.target.value
    setEventZip(zip)

    if(zip.length === 5){
    const res = await fetch(`https://api.zippopotam.us/us/${zip}`)
    const data = await res.json()

    if(Object.keys(data).length === 0){
      setErrors(["Invalid Zipcode"])
      setEventZip("")
    } else {
    const city = data.places[0]['place name']
    const state = data.places[0]["state abbreviation"]

    setEventState(state)
    setEventCity(city)
    setErrors([])
    }


    } else if(zip.length === 0){
      setEventState("")
      setEventCity("")
    } else {
      setEventState("")
      setEventCity("")
      setErrors(["Zipcode must be at least 5 digits"])
    }

  }

  function handleTitleErrors(){
    if(title.length <= 5){
        setErrors(["Title must be at least 5 characters"])
    } else if(title.length > 50){
        setErrors(["Title must be less than 50 characters"])
    } else if(title.length > 5 && title.length < 50 && event_description.length > 15 && event_description.length < 500){
        setErrors([])
    }
}

function handleDescriptionErrors(){
    if(event_description.length <= 15){
        setErrors(["Description must be at least 15 characters"])
    } else if(event_description.length > 500){
        setErrors(["Description must be less than 500 characters"])
    } else if(title.length > 5 && title.length < 50 && event_description.length > 15 && event_description.length < 500){
        setErrors([])
    }
}



  return (
  <div>
      <button onClick={handleOpen}>Edit Event</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" className="modal-title">
            Edit this event
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        <>
          <form onSubmit={handleSubmit}>

            {errors.map((error) => (
              <div>{error}</div>

            ))}
            <label htmlFor="title" className="modal-label">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              onBlur={handleTitleErrors}
              className="edit-event-input"
              required
            />
            <label htmlFor="event_imgs" className="modal-label">Event Images</label>
            <input
              type="text"
              value={event_imgs}
              onChange={(e) => setEventImgs(e.target.value)}
              className="edit-event-input"
              required
            />
            <label htmlFor="event_description" className="modal-label">Event Description</label>
            <input
              type="text"
              value={event_description}
              onChange={(e) => setEventDescription(e.target.value)}
              onBlur={handleDescriptionErrors}
              className="edit-event-input"
              required
            />
            <label htmlFor="event_date" className="modal-label">Event Date</label>
            <input
              type="date"
              value={event_date}
              min={today}
              onChange={(e) => setEventDate(e.target.value)}
              className="edit-event-input"
              required
            />
            <label htmlFor="event_zipcode" className="modal-label">Event Zipcode</label>
            <input
              type="text"
              value={event_zipcode}
              onChange={(e) => updateZip(e)}
              className="edit-event-input"
              required
            />
            <label htmlFor="event_city" className="modal-label">Event City</label>
            <input
              type="text"
              value={event_city}
              onChange={event_city}
              className="edit-event-input"
              required
            />
            <label htmlFor="event_state" className="modal-label">Event State</label>
            <input
              type="text"
              value={event_state}
              onChange={event_state}
              className="edit-event-input"
              required
            />
         <div>
           <label>Category</label>
           <select
             value={category}
             onChange={(e) => setEventCategory(e.target.value)}
             className="modal-select"
             required
           >
             <option value=''>--Please choose an option--</option>
             <option value='Sports'>Sports</option>
             <option value='VideoGames'>Video Games</option>
             <option value='Clubbing'>Clubbing</option>
             <option value='Boating'>Boating</option>
             <option value='BoardGames'>Board Games</option>
             <option value='StudyGroups'>Study Groups</option>
             <option value='Other'>Other</option>
           </select>
         </div>
         {errors.length > 0 ? null : <button className="modal-submit">Create Event</button>}
          </form>
          </>
          </Typography>
        </Box>
      </Modal>
    </div>
  )
}

export default EditEvent
