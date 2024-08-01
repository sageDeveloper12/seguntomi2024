import React from 'react';
import {events} from '../data'

const Events = () => {
  return (
    <div className='event__container'>
        {
        events.map((event)=>(
            <ul key ={event.id}>
                <li className='event__item'>{event.text}</li>
            </ul>
        ))
        }
    </div>
  )
}

export default Events