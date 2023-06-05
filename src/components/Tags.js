import React from 'react'
import Button from './Button'

const list = ["All", "Live", "Gaming", "Music", "Scenes", "Mixes"]

const Tags = () => {
  return (
    <div className='flex'>
        {list.map(item => <Button name={item} key={item}/>)}
        {list.map(item => <Button name={item} key={item}/>)}
    </div>
  )
}

export default Tags