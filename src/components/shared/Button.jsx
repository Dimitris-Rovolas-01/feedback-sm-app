import React from 'react'
import PropTypes from 'prop-types'
function Button ({children, version, type, isDisabled, onPress}) {
    //Added onPress to have onClick functionality to the component **Used in post component
    
  return (
    <button type={type} disabled={isDisabled} onClick={onPress} className={`btn btn-${version}`}>
        {children}
    </button>
    )
}

Button.defaultProps={
    version:'primary',
    type:'button',
    isDisabled: false,
    onPress:null,
}


Button.propTypes = {
    children:PropTypes.node.isRequired,
    version:PropTypes.string,
    type:PropTypes.string,
    isDisabled:PropTypes.bool,
    onPress:PropTypes.func,
}

export default Button