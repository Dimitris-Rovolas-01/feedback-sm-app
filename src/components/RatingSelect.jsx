import React from 'react'
import { useState, useContext, useEffect } from 'react'
import FeedbackContext from '../context/FeedbackContext'

function RatingSelect({select}) {
  const [selected, setSelected] = useState(5)
  const {feedbackEdit} = useContext(FeedbackContext)

  useEffect( ()=> { setSelected(feedbackEdit.item.rating)}, [feedbackEdit])
  
  const handleChange = (e) => {
      // console.log(e.currentTarget.value);
      // console.log(typeof e.currentTarget.value);
    //change the the type from sting to number with + before e ==> +e.currentTarget.value
    setSelected(+e.currentTarget.value)
      //to send value to feedbackForm, and we need to use props
      // so we pass a function as props to RatingSelect as select and we call it below
      select(+e.currentTarget.value)
      
  }
  return (
    <ul className='rating'>
        <li>
          <input type='radio' id='num1' name='rating' 
            value='1' onChange={handleChange} checked={selected === 1} />
            {/* Checked is boolean so with css ex: if selected === 1  
            is true then the checked style is applied */}
            <label htmlFor="num1">1</label>
        </li>
        <li>
          <input type='radio' id='num2' name='rating' 
            value='2' onChange={handleChange} checked={selected === 2} />
            <label htmlFor="num2">2</label>
        </li>
        <li>
          <input type='radio' id='num3' name='rating' 
            value='3' onChange={handleChange} checked={selected === 3} />
            <label htmlFor="num3">3</label>
        </li>
        <li>
          <input type='radio' id='num4' name='rating' 
            value='4' onChange={handleChange} checked={selected === 4} />
            <label htmlFor="num3">4</label>
        </li>
        <li>
          <input type='radio' id='num5' name='rating' 
            value='5' onChange={handleChange} checked={selected === 5} />
            <label htmlFor="num5">5</label>
        </li>
        <li>
          <input type='radio' id='num6' name='rating' 
            value='6' onChange={handleChange} checked={selected === 6} />
            <label htmlFor="num6">6</label>
        </li>
        <li>
          <input type='radio' id='num7' name='rating' 
            value='7' onChange={handleChange} checked={selected === 7} />
            <label htmlFor="num7">7</label>
        </li>
        <li>
          <input type='radio' id='num8' name='rating' 
            value='8' onChange={handleChange} checked={selected === 8} />
            <label htmlFor="num8">8</label>
        </li>
        <li>
          <input type='radio' id='num9' name='rating' 
            value='9' onChange={handleChange} checked={selected === 9} />
            <label htmlFor="num9">9</label>
        </li>
        <li>
          <input type='radio' id='num10' name='rating' 
            value='10' onChange={handleChange} checked={selected === 10} />
            <label htmlFor="num10">10</label>
        </li>
    </ul>
  )
}

export default RatingSelect