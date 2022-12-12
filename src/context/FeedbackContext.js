import { createContext, useState } from "react"
import {v4 as uuidv4} from 'uuid'

const FeedbackContext = createContext()

// this is a wrapper so we are exporting all of it's children
export const FeedbackProvider = ({children}) => {
    const [feedback,setFeedback] = useState([
        {
            id:1,
            text:'This item is from context 1',
            rating:7
        },
        {
            id:2,
            text:'This item is from context 2',
            rating:9
        },
        {
            id:3,
            text:'This item is from context 3',
            rating:10
        },
        {
            id:4,
            text:'This item is from context 4',
            rating:10
        },
    ])

    const [feedbackEdit, setFeedbackEdit] = useState({
        item:{},
        edit: false
    })

    //update feedback item
    const updateFeedback = (id, updItem) => {
        // console.log(id,updItem);
        // update the array with the newly updated Item
        setFeedback(
            feedback.map( (item)=> item.id === id ? {...item,...updItem} : item)
            )
    }

    // Set item to be updated
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit:true
        })
    }

    // Delete Feedback
    const deleteFeedback = (id) => {
        // console.log('App',id)
        if (window.confirm('Are you sure you want to delete ?')){  
            //used filter to loop through the data on FeedBackData 
          setFeedback(feedback.filter((item)=> item.id !== id))
          }  
        } 
        const addFeedback = (newFeedback) => {
            newFeedback.id = uuidv4()
            // console.log(newFeedback);
            //use Spread operator to update the state value with the newFeedback
            setFeedback([newFeedback,...feedback])
          }
    //To use function from app.js we have to pass it in the context provider value    
    return <FeedbackContext.Provider
    value={{
        feedback, deleteFeedback, addFeedback, editFeedback, feedbackEdit,
        updateFeedback,
    }}
    >
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext