import React from 'react'

class NotFoundPage extends React.Component {
  componentWillMount() {
    if (this.props.location.pathname === '/admin') {
      window.location.replace('/admin.html')
    }
    console.log(this.props.location.pathname)
  }
  render() {
    return <h1> not found</h1>
  }
}
// const NotFoundPage = () => (
//   <div>
//     <h1>NOT FOUND</h1>
//     {location.pathname}
//     <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
//   </div>
// )

export default NotFoundPage
