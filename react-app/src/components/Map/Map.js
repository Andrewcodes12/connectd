import React, {useState} from 'react'



function Maps({event}) {

    const [event_city, setEvent_city] = useState(event.event_city)
    const [event_state, setEvent_state] = useState(event.event_state);


    let cities =`https://maps.google.com/maps?q=${event_city.trim()},${event_state.trim()}&t=&z=13&ie=UTF8&iwloc=&output=embed`

  return (
    <>
    <div className="mapouter"><div className="gmap_canvas"><iframe width="100%" height="500" id="gmap_canvas" src={cities} frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
    </div>
    </div>
    </>
  )
}

export default Maps
