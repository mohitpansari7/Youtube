import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeSidebar } from '../util/appSlice';
import { useSearchParams } from 'react-router-dom';

const WatchVideo = () => {

    const [searchParams] = useSearchParams();
    console.log(searchParams.get("v"));
    const videoId = searchParams.get("v");

    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(closeSidebar())
    })

    return (
        <div className='m-2 p-2'>
            <iframe
                width="1200" 
                height="600" 
                src={"https://www.youtube.com/embed/"+videoId}
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen>
            </iframe>
        </div>
    )
}

export default WatchVideo