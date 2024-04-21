import React, { useEffect, useState, useRef } from 'react';
import UpcomingEventCard from './UpcomingEventCard';

const Events = () => {
    const [upcomingEvents, setUpcomingEvents] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const loadingRef = useRef(null);

    const fetchUpcomingEvents = async () => {
        if(page>5){
            return;
        }
        setLoading(true);
        try {
            const response = await fetch(
                // `https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&page=${page}&type=upcoming`
            );
            const data = await response.json();
            if (data.events.length > 0) {
                setUpcomingEvents(prevEvents => [...prevEvents, ...data.events]);
                setPage(prevPage => prevPage + 1);
            } 
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    fetchUpcomingEvents();
                }
            },
            { threshold: 1.0 }
        );

        if (loadingRef.current) {
            observer.observe(loadingRef.current);
        }

        return () => {
            if (loadingRef.current) {
                observer.unobserve(loadingRef.current);
            }
        };
    }, [page]);

    useEffect(() => {
        fetchUpcomingEvents();
    }, []);

    return (
        <>
            <div className='px-6 lg:px-32'>
                <div className='grid lg:grid-cols-3 gap-16'>
                    {upcomingEvents.map((event, index) => (
                        <UpcomingEventCard key={index} event={event} />
                    ))}
                </div>
                {loading && <div className="text-center mt-4 font-bold text-3xl">Loading...</div>}
                <div ref={loadingRef} className="h-1 w-100%"></div>
            </div>
        </>
    );
};

export default Events;
