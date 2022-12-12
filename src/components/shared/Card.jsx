import React from 'react'
import FeedbackItem from '../FeedbackItem'
import PropTypes from 'prop-types'

// Props children brings all the children of the component
// since in the FeedbackItem it card has divs..It's gonna print those divs

function Card({children, reverse}) {
  return (
    // conditional class! Put the className in {``} and set turnary in custom class 
        <div className={`card ${reverse && 'reverse'}`}>{ children }</div>
    // instead of conditional Class you can do conditional Styling with {} 
        // <div className="card" style={{
        //     backgroundColor: reverse ?  'rgba(0,0,0,0.4)' : '#fff',
        //     color: reverse ? '#fff' : '#000',
        // }}>
        //     { children }
        // </div>

  )
}
Card.defaultProps = {
    reverse:false,
}

//camel Case for .propTypes when declared Pascal Case to access from React PropTypes
Card.propTypes = {
children: PropTypes.node.isRequired,
reverse: PropTypes.bool,

}
export default Card