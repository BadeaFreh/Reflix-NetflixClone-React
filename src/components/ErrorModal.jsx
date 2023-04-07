import React from 'react'

const ErrorModal = ({title, message, onConfirm}) => {
  return (
    <div className='backdrop'>
        <div className='modal card'>
            <header className='error-header'>
                <h2>{title}</h2>
            </header>
            <div className='error-content'>
                <p>{message}</p>
            </div>
            <footer className='error-actions'>
                <button className='okay-button' type='button' onClick={onConfirm}>Okay</button>
            </footer>
        </div>
    </div>
  )
}

export default ErrorModal