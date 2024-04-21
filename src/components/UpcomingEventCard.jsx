import React from 'react'

const UpcomingEventCard = ({event}) => {
    const driveUrl = event.imgUrl;
    const fileID = driveUrl.split('/')[5];
    const image = `https://drive.google.com/thumbnail?id=${fileID}&sz=w1000`;
  return (
    <div className="bg-white rounded-md shadow-md relative">
    <img src={image} alt={event.eventName}  />
    <div className=' rounded-b-lg absolute bottom-16 p-2 left-3 lg:left-4 text-white backdrop-blur-md width'>March 23, 2024</div>
    <div className=' px-4 font-bold'>After note nearly</div>
    <div className=' px-4 pb-4 text-sm flex justify-between text-gray-600'>
        <div>West Douglas</div>
        <div>Snowy, 26&#8451; | 42 km</div>
    </div>
</div>
  )
}

export default UpcomingEventCard