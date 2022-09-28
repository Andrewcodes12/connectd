import * as React from 'react';
import { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'


import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import NativeSelect from '@mui/material/NativeSelect';


import './addEvent.css'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid black',
  boxShadow: 24,
  p: 4,

  input:{
    width: '100%',
    height: '30px',
    marginBottom: '10px',
    borderRadius: '5px',
    border: '1px solid black',
    padding: '5px',
},
  label:{
    display: 'flex',
    marginBottom: '5px',
    fontSize: '14px',
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Roboto',
},

}


export default function AddEvent() {
  let today = new Date().toISOString().substring(0, 10);

  const [open, setOpen] = useState(false);
  const [event_imgs, setImage] = useState("");
  const [imageLoading, setImageLoading] = useState(false);
  const [title, setTitle] = useState("")
  const [event_description, setDescription] = useState("")
  const [event_date, setDate] = useState("")
  const [event_city, setCity] = useState("")
  const [event_state, setState] = useState("")
  const [event_zipcode, setZip] = useState("")
  const [category, setCategory] = useState("")
  const [errors, setErrors] = useState([])

  const history = useHistory();
  const user = useSelector(state => state.session)
  const dispatch = useDispatch()

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("event_imgs", event_imgs);
    formData.append("title", title);
    formData.append("event_description", event_description);
    formData.append("event_date", event_date);
    formData.append("event_city", event_city);
    formData.append("event_state", event_state);
    formData.append("event_zipcode", event_zipcode);
    formData.append("category", category);
    formData.append("user_id", user.id);


    // aws uploads can be a bit slow—displaying
    // some sort of loading message is a good idea

    setImageLoading(true);
    const res = await fetch('/api/events/new', {
        method: "POST",
        body: formData,
    });
    if (res.ok) {
        await res.json();
        setImageLoading(false);
        history.push("/feed");
    }
    else {
        setImageLoading(false);
        console.log("error")
    }

    window.location.reload();
}




  const updateImage = (e) => {
      const file = e.target.files[0];
      setImage(file);
  }


  const updateZip = async  (e) =>  {

    const zip = e.target.value
    setZip(zip)

    if(zip.length === 5){
    const res = await fetch(`https://api.zippopotam.us/us/${zip}`)
    const data = await res.json()

    if(Object.keys(data).length === 0){
      setErrors(["Invalid Zipcode"])
      setZip("")
    } else {
    const city = data.places[0]['place name']
    const state = data.places[0]["state abbreviation"]

    setState(state)
    setCity(city)
    }


    } else if(zip.length === 0){
      setState("")
      setCity("")
    } else {
      setState("")
      setCity("")
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
      <i className="fas fa-upload"  onClick={handleOpen}></i>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Create an Event
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>

          <form onSubmit={handleSubmit} id="event-form">
            {errors.map((error) => (
              <div className="event-errors">{error}</div>
            ))}

          <label className="modal-label">Add a photo</label>
            <input
              type="file"
              accept="image/*"
              onChange={updateImage}
              required
            />
            <div>
              <label className="modal-label">Title</label>
              <input
                type='text'
                value={title}
                onBlur={handleTitleErrors}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="modal-label">Description</label>
              <input
                type='text'
                value={event_description}
                onBlur={handleDescriptionErrors}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="modal-label">Date</label>
              <input
                type="date"
                format="YYYY-MM-DD"
                value={event_date}
                onChange={(e) => setDate(e.target.value)}
                min={today}
                required
              />
            </div>
            <div>
              <label className="modal-label">Zip Code</label>
              <input
                type='text'
                value={event_zipcode}
                onChange={(e) => updateZip(e)}
                name="zipcode"
                required
              />
            </div>
            <div>
              <label className="modal-label">City</label>
              <input
                type='text'
                value={event_city}
                id="auto_event_city"
                required
              />
            </div>
            <div>
              <label className="modal-label">State</label>
              <input
                type='text'
                value={event_state}
                id="auto_event_state"
                required
              />
            </div>
            <div>
             <label>Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="modal-select"
                required
              >
                <option value='' className="select-options">--Please choose an option--</option>
                <option value='Sports' className="select-options">Sports</option>
                <option value='VideoGames' className="select-options">Video Games</option>
                <option value='Clubbing' className="select-options">Clubbing</option>
                <option value='Boating' className="select-options">Boating</option>
                <option value='BoardGames' className="select-options">Board Games</option>
                <option value='StudyGroups' className="select-options">Study Groups</option>
                <option value='Other' className="select-options">Other</option>
              </select>
          </div>
          {errors.length > 0 ? null : <button className="modal-button">Create Event</button>}
            {(imageLoading)&& <p>Loading...</p>}
        </form>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

// import React, {useState} from 'react'
// import {useDispatch, useSelector} from 'react-redux'
// import {useHistory} from 'react-router-dom'

// import NavBar from '../Navbar/Navbar';

// const AddEvent = () => {
//     const history = useHistory(); // so that we can redirect after the image upload is successful
//     const user = useSelector(state => state.session)
//     const dispatch = useDispatch()

//     let today = new Date().toISOString().substring(0, 10);

//     const [event_imgs, setImage] = useState("");
//     const [imageLoading, setImageLoading] = useState(false);
//     const [title, setTitle] = useState("")
//     const [event_description, setDescription] = useState("")
//     const [event_date, setDate] = useState("")
//     const [event_city, setCity] = useState("")
//     const [event_state, setState] = useState("")
//     const [event_zipcode, setZip] = useState("")
//     const [category, setCategory] = useState("")
//     const [errors, setErrors] = useState([])


//     const handleSubmit = async (e) => {
//       e.preventDefault();
//       const formData = new FormData();
//       formData.append("event_imgs", event_imgs);
//       formData.append("title", title);
//       formData.append("event_description", event_description);
//       formData.append("event_date", event_date);
//       formData.append("event_city", event_city);
//       formData.append("event_state", event_state);
//       formData.append("event_zipcode", event_zipcode);
//       formData.append("category", category);
//       formData.append("user_id", user.id);


//       // aws uploads can be a bit slow—displaying
//       // some sort of loading message is a good idea

//       setImageLoading(true);
//       const res = await fetch('/api/events/new', {
//           method: "POST",
//           body: formData,
//       });
//       if (res.ok) {
//           await res.json();
//           setImageLoading(false);
//           history.push("/feed");
//       }
//       else {
//           setImageLoading(false);
//           console.log("error")
//       }
//   }




//     const updateImage = (e) => {
//         const file = e.target.files[0];
//         setImage(file);
//     }

//     return (
//       <>
//       <NavBar />
//         <h1>Post a new Event</h1>
//         <form onSubmit={handleSubmit}>
//           <label>Add a photo</label>
//             <input
//               type="file"
//               accept="image/*"
//               onChange={updateImage}
//             />
//             <div>
//               <label>Title</label>
//               <input
//                 type='text'
//                 value={title}
//                 onChange={(e) => setTitle(e.target.value)}
//                 required
//               />
//             </div>
//             <div>
//               <label>Description</label>
//               <input
//                 type='text'
//                 value={event_description}
//                 onChange={(e) => setDescription(e.target.value)}
//                 required
//               />
//             </div>
//             <div>
//               <label>Date</label>
//               <input
//                 type="date"
//                 format="YYYY-MM-DD"
//                 value={event_date}
//                 onChange={(e) => setDate(e.target.value)}
//                 min={today}
//                 required
//               />
//             </div>
//             <div>
//               <label>City</label>
//               <input
//                 type='text'
//                 value={event_city}
//                 onChange={(e) => setCity(e.target.value)}
//                 required
//               />
//             </div>
//             <div>
//               <label>State</label>
//               <input
//                 type='text'
//                 value={event_state}
//                 onChange={(e) => setState(e.target.value)}
//                 required
//               />
//             </div>
//             <div>
//               <label>Zip Code</label>
//               <input
//                 type='text'
//                 value={event_zipcode}
//                 onChange={(e) => setZip(e.target.value)}
//                 required
//               />
//             </div>
//             <div>
//               <label>Category</label>
//               <select
//                 value={category}
//                 onChange={(e) => setCategory(e.target.value)}
//                 required
//               >
//                 <option value=''>--Please choose an option--</option>
//                 <option value='Sports'>Sports</option>
//                 <option value='VideoGames'>Video Games</option>
//                 <option value='Clubbing'>Clubbing</option>
//                 <option value='Boating'>Boating</option>
//                 <option value='BoardGames'>Board Games</option>
//                 <option value='StudyGroups'>Study Groups</option>
//                 <option value='Other'>Other</option>
//               </select>
//             </div>
//             <button type="submit">Submit</button>
//             {(imageLoading)&& <p>Loading...</p>}
//         </form>
//         </>
//     )
// }

// export default AddEvent;
