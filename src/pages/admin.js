import React from 'react'
import Link from 'gatsby-link'

import './admin.css'
import './admin-cms.js'
const AdminPage = () => (
  <div>
    <h1>Hi admin</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default AdminPage
