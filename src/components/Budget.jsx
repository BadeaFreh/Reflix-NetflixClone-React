import React from 'react'

const Budget = ({ userBudget }) => {
  return (
    <div className='budget-container'>
      <p className='budget'>Budget: {userBudget}$</p>
    </div>
  )
}

export default Budget
