import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Sidebar = () => {

  const isSidebarOpen = useSelector((store) => store.app.isSidebarOpen)

  if (!isSidebarOpen) return null;

  return (
    <div className='p-5 shadow-lg col-span-1 w-48'>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li>Shorts</li>
            <li>Videos</li>
            <li>Live</li>
        </ul>

        <h1>Subscriptions</h1>
            <ul>
                <li>Music</li>
                <li>Sports</li>
                <li>Gaming</li>
                <li>Movies</li>
            </ul>
        <h1>Watch Later</h1>
            <ul>
                <li>Music</li>
                <li>Sports</li>
                <li>Gaming</li>
                <li>Movies</li>
            </ul>
    </div>
  )
}

export default Sidebar