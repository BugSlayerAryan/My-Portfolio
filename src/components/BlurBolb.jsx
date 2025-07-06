import React from 'react'
import PropTypes from 'prop-types'
const BlurBolb = ({position,size}) => {
    const{top,left} = position;
    const{height,width} = size;
  return (
    <div className='absolute'
    style={{
        top: top,
        left: left,
        height: height,
        width: width,
        transform: 'translate(-50%,-50%)'
    }}
    >
        <div className='w-full h-full bg-purple-500 opacity-20 blur-3xl animate-blob'></div>
    </div>
  )
}

//Define prop type
BlurBolb.prototype = {
    position: PropTypes.shape({
        top: PropTypes.string,
        left: PropTypes.string,
    }),
    size: PropTypes.shape({
        height:PropTypes.string,
        width:PropTypes.string,
    }),
};
export default BlurBolb