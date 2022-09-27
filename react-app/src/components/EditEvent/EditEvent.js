import React, {useState} from 'react';
import { useDispatch} from 'react-redux';


import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

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
            <label htmlFor="title" className="modal-label">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
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
            <label htmlFor="event_city" className="modal-label">Event City</label>
            <input
              type="text"
              value={event_city}
              onChange={(e) => setEventCity(e.target.value)}
              className="edit-event-input"
              required
            />
            <label htmlFor="event_state" className="modal-label">Event State</label>
            <input
              type="text"
              value={event_state}
              onChange={(e) => setEventState(e.target.value)}
              className="edit-event-input"
              required
            />
            <label htmlFor="event_zipcode" className="modal-label">Event Zipcode</label>
            <input
              type="text"
              value={event_zipcode}
              onChange={(e) => setEventZip(e.target.value)}
              className="edit-event-input"
              required
            />
            <label htmlFor="category" className="modal-label">Category</label>
            <input
              type="text"
              value={category}
              onChange={(e) => setEventCategory(e.target.value)}
              className="edit-event-input"
              required
            />
            <button type="submit" className="modal-submit">Submit</button>
          </form>
          </>
          </Typography>
        </Box>
      </Modal>
    </div>
  )
}

export default EditEvent
