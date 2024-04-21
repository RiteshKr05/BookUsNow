import React, { useEffect, useState } from 'react'
import RecommendedCard from './RecommendedCard';

const Events = () => {
    const [recommendedEvents, setRecommendedEvents] = useState([]);
    

    const fetchRecommendedEvents = async () => {
        try {
            const response = await fetch(
                // 'https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&type=reco'
            );
            const data = await response.json();

            setRecommendedEvents(data.events);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        fetchRecommendedEvents();
    },[])

 


  return (
    <>
    <div  className="flex flex-nowrap justify-evenly overflow-x-scroll pl-32" >
        <div className='flex '>
            {recommendedEvents.map(event =>(
                <RecommendedCard key={event.eventName} event={event} />
            ))}
        </div>
    </div>
</>
  )
}

export default Events