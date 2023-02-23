import React from 'react'
import propTypes from 'prop-types'


export default function Button(props) {

  return (
    <div>
      <button className='m-4 py-1 px-6 rounded bg-syellow hover:bg-yellow-400 active:bg-yellow-500 text-black font-bold tracking-wider cursor-pointer w-fit'>{props.btnText}</button>
    </div>
  )
}



Button.propTypes = {
  btnText: propTypes.string
}

// Specifies the default values for props:
Button.defaultProps = {
  btnText: 'Click me'
};