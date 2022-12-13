import { createContext, useState, useEffect } from "react"
// import {v4 as uuidv4} from 'uuid'

const FeedbackContext = createContext()

// this is a wrapper so we are exporting all of it's children
export const FeedbackProvider = ({children}) => {
    const [feedback,setFeedback] = useState([])
    const [isLoading,setIsLoading] = useState([true])
    const [feedbackEdit, setFeedbackEdit] = useState({
        item:{},
        edit: false
    })

    useEffect(()=>{
       fetchFeedback()    
    },[])

    //Fetch Feedback with JSON Server
    const fetchFeedback = async () => {
        /* Set Proxy to packge.json and removed http://localhost:5000 */        
        const response = await fetch(`https://salty-agate-street.glitch.me/feedback?_sort=id&_order=desc`)
        const data = await response.json()
        // console.log(data)
        setFeedback(data)
        setIsLoading(false)
    }

    

/****  UI requests  ****/
    // Add feedback
    /*   
        const addFeedback = (newFeedback) => {  
        newFeedback.id = uuidv4()
        console.log(newFeedback);
        use Spread operator to update the state value with the newFeedback
        setFeedback([newFeedback,...feedback])
        }
    */

    // Delete Feedback
    /* 
        const deleteFeedback = (id) => {
        // console.log('App',id)
        if (window.confirm('Are you sure you want to delete ?')){  
            //used filter to loop through the data on FeedBackData 
          setFeedback(feedback.filter((item)=> item.id !== id))
          }  
        } 
    
    */

     // Update Feedback
     /*
     
        const updateFeedback = (id, updItem) => {
            // console.log(id,updItem);
            // update the array with the newly updated Item
            setFeedback(
                feedback.map( (item)=> item.id === id ? {...item,...updItem} : item)
                )
        }
     */     


        /* JSON Server requests */

        //add feedback item  
        const addFeedback = async (newFeedback) => {
            const response = await fetch('https://salty-agate-street.glitch.me/feedback', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(newFeedback),
                })
                const data = await response.json()
                //use Spread operator to update the state value with the newFeedback
                setFeedback([data,...feedback])
            }
        
        //delete feedback item    
        const deleteFeedback = async (id) => {
        
        if (window.confirm('Are you sure you want to delete ?')){
            await fetch(`https://salty-agate-street.glitch.me/feedback/${id}`,{method:'DELETE'}) 
            //used filter to loop through the data on FeedBackData 
          setFeedback(feedback.filter((item)=> item.id !== id))
          }  
        } 
      

        //update feedback item
        const updateFeedback = async (id, updItem) => {
        const response = await fetch (`https://salty-agate-street.glitch.me/feedback/${id}`, {
                method:'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updItem)
                }
                
            )
            const data = await response.json()
            // update the array with the newly updated Item
            setFeedback(
                feedback.map( (item)=> item.id === id ? {...item,...data} : item)
                )
            }

        // Set item to be updated
        const editFeedback = (item) => {
            setFeedbackEdit({
                item,
                edit:true
            })
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