import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

const PageNotFound = () => {
  return (
    <div className="page-not-found-container">
      <div className="content">
        <h1 className="title">404</h1>
        <p className="subtitle">Page Not Found</p>
        <Link to="/" className="link">
          Back to Home
        </Link>
      </div>
    </div>
  )
}

export default PageNotFound
