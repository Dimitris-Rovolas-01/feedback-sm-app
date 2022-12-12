import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
/* 
destructure the name of the props if you know what that name will be so you don't have to use .props
when passing props top down
apparently text is set at the default props array since it's a single value
but to apply the styles of background color and color
you need to set them to a const and use that with syngle brackets as styele
because they are reUsed
 */
function Header({text, bgColor, textColor}) {
const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
}
  return (
    <header style = {headerStyles}>
        <div className="container">
            <h2><Link className='text-none-header' to='/'>{text}</Link></h2>
        </div>
    </header>
  )
}

Header.defaultProps = {
    text:'Feedback UI',
    bgColor:'rgba(0,0,0,0.4)',
    textColor:'#ff6a95',
  }
  
  Header.propTypes = {
    text: PropTypes.string,
    bgColor: PropTypes.string,
    Color: PropTypes.string,
  }

export default Header