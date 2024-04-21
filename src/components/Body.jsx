import React from 'react'
import bgimage from "../images/Banner.jpg"
import RecommendedShows from './RecommendedShows'
import UpcomingEvents from './UpcomingEvents'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
function Body() {
  return (
    <>
        <div style={{backgroundImage:`url(${bgimage})`,backgroundSize:'cover',backgroundPosition:'center',width:'100%',height:'100vh'}} className='sm: w-auto'>
            <div className='text-white flex flex-col items-center pt-16 lg:pt-28 text-xl lg:text-6xl font-bold'>
                <div className='pb-6'>Discover Exciting Events Happening</div>
                <div>Near You - Stay Tuned for Updates!</div>
            </div>
            <p className='text-gray-300 text-center px-6 text-xs lg:text-base lg:px-72 pt-6 pb-28 lg:pb-44'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.</p>
            <div className='pl-12 lg:pl-32 flex justify-between'>
                <div className='text-sm lg:text-2xl font-semibold text-white pl-2'>Recommended shows <FontAwesomeIcon icon={faArrowRight} /></div>
                <div className=' underline text-white pr-5 lg:pr-20 text-xs lg:text-base'>See all</div>
            </div>
            <RecommendedShows/>
            <div className='pl-12 lg:pl-32 pt-10 ml-2 text-sm lg:text-2xl font-semibold'>Upcoming Events <FontAwesomeIcon icon={faArrowRight} /></div>
            <UpcomingEvents/>
        </div>
    </>
  )
}

export default Body