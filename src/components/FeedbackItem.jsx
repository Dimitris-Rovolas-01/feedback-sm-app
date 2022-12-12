import React from 'react'
// import { useState } from 'react'
import Card from './shared/Card'
import {FaTimes, FaEdit} from 'react-icons/fa'
import {useContext} from 'react'
import FeedbackContext from '../context/FeedbackContext'
import PropTypes from 'prop-types'


function FeedbackItem({item}) {
const {deleteFeedback, editFeedback} = useContext(FeedbackContext)
// PropDrilling
// const [rating, setRating] = useState(7)
// const [text, setText] = useState('This is an example of feedback Item')
// Accessing state and return previous by giving handleClick a function inside which return prev
// const handleClick = () =>{
//   setRating((prev)=> {
//     console.log(prev);
//     return prev + 1 
//   })
// }


//Passing the argument with handleClick
// const handleClick = (id) => {
//       console.log(id);
// }


  return (
    <Card>
      <div className="num-display">{item.rating}</div>
          {/* log with a direct return inline function in onClick event */}
          {/* <button className='close' onClick={()=> console.log(123)}><FaTimes color='purple' /></button>*/}
          {/* log the item.id while accessing items with direct return on onClick event */}
          {/* <button className='close' onClick={()=> console.log(item.id)}><FaTimes color='purple' /></button> */}
          {/* function handleClick and pass arguments in  */}      
      <button className='close' onClick={ ()=>deleteFeedback(item.id) }>
        <FaTimes color='purple' />
      </button>
      <button onClick={() => editFeedback(item)} className="edit">
        <FaEdit color='purple' />
      </button>
      <div className="text-display">
        {item.text}
      </div>     
    </Card>
  )
}


FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
}

export default FeedbackItem