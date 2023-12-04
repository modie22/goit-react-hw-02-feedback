import React from 'react'
import css from './FeedbackOptions.module.css'

export const FeedbackOptions = ({options,handleClick}) => {
  return (
    <> 
    {options.map(option => (
        <button type="button" className={css.btn} name={option} onClick={handleClick}>
          {option}
        </button>
      ))}
      </>
  )
}
