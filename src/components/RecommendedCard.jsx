import React from 'react'

const RecommendedCard = ({event}) => {
    const driveUrl = event.imgUrl;
    const fileID = driveUrl.split('/')[5];
    const image = `https://drive.google.com/thumbnail?id=${fileID}&sz=w1000`;
  return (
    <div className="rounded-md shadow-md m-2 mr-4 pt-80 px-2" style={{backgroundImage:`url(${image})`, backgroundSize:'320px 500px', backgroundRepeat:'no-repeat',backgroundPosition:'center',width:'250px',height:'370px'}}>
        <div className=' text-white flex justify-between'>
            <div className=' font-medium'>Make Agree</div>
            <div className=' text-xs pt-1'>March 23, 2024</div>
        </div>
        <div className=' text-white flex justify-between text-xs'>
            <div>West Douglas</div>
            <div>Snowy, 26&#8451; | 42 km</div>
        </div>
    </div>
  )
}

export default RecommendedCard