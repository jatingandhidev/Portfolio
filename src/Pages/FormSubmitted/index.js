import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

const FormSubmitted = () => {
  return (
    <div className="form-submitted-container">
      <div className="content">
        <h1 className="title">Form Submitted</h1>
        <p className="subtitle">Thank you for submitting the form!</p>
        <Link to="/" className="link">
          Back to Home
        </Link>
      </div>
    </div>
  )
}

export default FormSubmitted
