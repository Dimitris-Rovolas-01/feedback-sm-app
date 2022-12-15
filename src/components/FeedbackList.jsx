import React from 'react'
import {motion, AnimatePresence } from 'framer-motion'
import { useContext } from 'react'
// import PropTypes from 'prop-types'
import FeedbackItem from './FeedbackItem' 
import FeedbackContext from '../context/FeedbackContext'
import Spinner from './shared/Spinner'

function FeedbackList() {
    const {feedback, isLoading} = useContext(FeedbackContext)
    // console.log(feedback);
    if (isLoading && (!feedback || feedback.lenghth ===0)) {
        return <p>No Feedback yet</p>
    }

    return isLoading ? <Spinner /> : (
      <div className='feedback-list'>
        <AnimatePresence>
          {feedback.map(
            (item)=> (               
            <motion.div key={item.id}
            initial={{opacity:0}} 
            animate={{opacity:1}} 
            exit={{opacity:0}} > 
              <FeedbackItem key={item.id}  item={item}  />
            </motion.div>
              ))}
        </AnimatePresence>  
      </div>
    )
    
  // without animation
  // return (                
  //   <div className='feedback-list'>
  //       {feedback.map(
  //           (item)=> (   
  //             //   Problem with deleting onClick the FeedbackItem, 
  //             // as it lives a level above in the App.js in the feedback State
  //             // We pass handleDelete as props and to forward 
  //             // it a level upwards where the FeedbackItem is 
  //           <FeedbackItem key={item.id}  item={item}  handleDelete={handleDelete} />
  //           )
  //       )}
  //   </div>
  // )
}
// FeedbackList.propTypes = {
//   feedback: PropTypes.array,
//   //or specify the exact properties of feedback item
//   // feedback: PropTypes.arrayOf(
//   //   PropTypes.shape({
//   //     id:PropTypes.number.isRequired,
//   //     rating:PropTypes.number.isRequired,
//   //     text: PropTypes.string.isRequired,
//   //   })
//   // ),
  
// }
export default FeedbackList