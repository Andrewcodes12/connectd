import React, {useState} from 'react'



function Maps({event}) {

    const [event_city, setEvent_city] = useState(event.event_city)
    const [event_state, setEvent_state] = useState(event.event_state);


    let cities =`https://maps.google.com/maps?q=${event_city.trim()},${event_state.trim()}&t=&z=13&ie=UTF8&iwloc=&output=embed`

  return (
    <>
    <div class="mapouter"><div class="gmap_canvas"><iframe width="600" height="500" id="gmap_canvas" src={cities} frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
    </div>
    </div>
    </>
  )
}

export default Maps
