import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <Fragment>
      <h1>home</h1>

      <Link to="/login">Login</Link>

    </Fragment>
  )
}
