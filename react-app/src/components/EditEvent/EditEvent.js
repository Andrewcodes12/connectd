import React, {useState} from 'react';
import { useDispatch} from 'react-redux';


import { updateEvent } from '../../store/event';



function EditEvent({event}) {
  const [eventID, setEventID] = useState(event.id);
  const [title, setTitle] = useState(event.title);
  const [event_imgs, setEventImgs] = useState(event.event_imgs);
  const [event_description, setEventDescription] = useState(event.event_description);
  const [event_date, setEventDate] = useState(event.event_date);
  const [event_city, setEventCity] = useState(event.event_city);
  const [event_state, setEventState] = useState(event.event_state);
  const [event_zipcode, setEventZip] = useState(event.event_zipcode);
  const [category, setEventCategory] = useState(event.category);
  const [user_id, setEventUserId] = useState(event.user_id);
  const [isClicked, setIsClicked] = useState(false);

  const dispatch = useDispatch();


  const handleSubmit =  (e) => {
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





  return (
    <>
    <button onClick={() => setIsClicked(true)}>Edit Event</button>
    {isClicked ? (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          value={event_imgs}
          onChange={(e) => setEventImgs(e.target.value)}
          required
        />
        <input
          type="text"
          value={event_description}
          onChange={(e) => setEventDescription(e.target.value)}
          required
        />
        <input
          type="text"
          value={event_date}
          onChange={(e) => setEventDate(e.target.value)}
          required
        />
        <input
          type="text"
          value={event_city}
          onChange={(e) => setEventCity(e.target.value)}
          required
        />
        <input
          type="text"
          value={event_state}
          onChange={(e) => setEventState(e.target.value)}
          required
        />
        <input
          type="text"
          value={event_zipcode}
          onChange={(e) => setEventZip(e.target.value)}
          required
        />
        <input
          type="text"
          value={category}
          onChange={(e) => setEventCategory(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
    ) : null}
    </>
  )
}

export default EditEvent
