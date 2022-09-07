import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'

import {createEvent} from '../../store/event'

import DatePicker from 'react-date-picker'

function AddEvent() {
  const dispatch = useDispatch()
  const history = useHistory()

  const [photoUrl, setPhotoUrl] = useState('')
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [date, setDate] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [zip, setZip] = useState('')
  const [category, setCategory] = useState('')
  const [errors, setErrors] = useState([])


  const resetFields = () => {
    setPhotoUrl('')
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

    if (!photoUrl) errors.push('Please provide a photo')
    if (!title) errors.push('Please provide a title')
    if (!description) errors.push('Please provide a description')
    if (!date) errors.push('Please provide a date')
    if (!city) errors.push('Please provide a city')
    if (!state) errors.push('Please provide a state')
    if (!zip) errors.push('Please provide a zip code')
    if (!category) errors.push('Please provide a category')

    setErrors(errors)
    return errors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const errors = validateEvent()

    if (!errors.length){
      const newEvent = {
        title: title,
        event_description:description,
        category,
        event_city:city,
        event_state:state,
        event_zip: zip,
        event_date:date,
        event_imgs: photoUrl,
        user_id:1
      }

      dispatch(createEvent(newEvent))
      resetFields()
      history.push('/')
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
            value={photoUrl}
            onChange={(e) => setPhotoUrl(e.target.value)}
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
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Date</label>
          <DatePicker
            value={date}
            onChange={setDate}
            format='y-MM-dd'
            required
          />
        </div>
        <div>
          <label>City</label>
          <input
            type='text'
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </div>
        <div>
          <label>State</label>
          <input
            type='text'
            value={state}
            onChange={(e) => setState(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Zip</label>
          <input
            type='text'
            value={zip}
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
            <option value='Video Games'>Video Games</option>
            <option value='Clubbing'>Clubbing</option>
            <option value='Boating'>Boating</option>
            <option value='Board Games'>Board Games</option>
            <option value='Study Groups'>Study Groups</option>
            <option value='Other'>Other</option>
          </select>
        </div>
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default AddEvent
