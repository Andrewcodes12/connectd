import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'

import {createEvent} from '../../store/event'



function AddEvent() {
  const user = useSelector(state => state.session)
  const dispatch = useDispatch()
  const history = useHistory()

  const [event_imgs, setImgs] = useState('')
  const [title, setTitle] = useState('')
  const [event_description, setDescription] = useState('')
  const [event_date, setDate] = useState('')
  const [event_city, setCity] = useState('')
  const [event_state, setState] = useState('')
  const [event_zipcode, setZip] = useState('')
  const [category, setCategory] = useState('')
  const [errors, setErrors] = useState([])


  const resetFields = () => {
    setImgs('')
    setTitle('')
    setDescription('')
    setDate('')
    setCity('')
    setState('')
    setZip('')
    setCategory('')
  }

  const validateEvent = () => {
    const errors = []

    if (!event_imgs) errors.push('Please provide a photo')
    if (!title) errors.push('Please provide a title')
    if (!event_description) errors.push('Please provide a description')
    if (!event_date) errors.push('Please provide a date')
    if (!event_city) errors.push('Please provide a city')
    if (!event_state) errors.push('Please provide a state')
    if (!event_zipcode) errors.push('Please provide a zip code')
    if (!category) errors.push('Please provide a category')

    setErrors(errors)
    return errors
  }

  const handleSubmit = (e) =>  {
    e.preventDefault()

    const errors = validateEvent()

    if(!errors.length){
    const event = {
      event_imgs,
      title,
      event_description,
      event_date,
      event_city,
      event_state,
      event_zipcode,
      category,
      // user_id: user.id,
      user_id:1
    }

    dispatch(createEvent(event))
    resetFields()
    history.push('/')

    }  else {
      setErrors(['Failed to create event. Please try again.'])
    }
  }


  return (
    <>
      <h1>Post a new Event</h1>
      <form onSubmit={handleSubmit}>
        <ul>
          {errors.map((error, idx) => <li key={idx}>{error}</li>)}
        </ul>
        <div>
          <label>Photo Url</label>
          <input
            type='text'
            value={event_imgs}
            onChange={(e) => setImgs(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Title</label>
          <input
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Description</label>
          <input
            type='text'
            value={event_description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Date</label>
          <input
            type="date"
            format="YYYY-MM-DD"
            value={event_date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div>
          <label>City</label>
          <input
            type='text'
            value={event_city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </div>
        <div>
          <label>State</label>
          <input
            type='text'
            value={event_state}
            onChange={(e) => setState(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Zip</label>
          <input
            type='text'
            value={event_zipcode}
            onChange={(e) => setZip(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value=''>--Please choose an option--</option>
            <option selected value='Sports'>Sports</option>
            <option value='VideoGames'>Video Games</option>
            <option value='Clubbing'>Clubbing</option>
            <option value='Boating'>Boating</option>
            <option value='BoardGames'>Board Games</option>
            <option value='StudyGroups'>Study Groups</option>
            <option value='Other'>Other</option>
          </select>
        </div>
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default AddEvent
