import React from 'react'

class NotFoundPage extends React.Component {
  componentWillMount() {
    switch (this.props.location.pathname) {
      case '/admin':
      case 'admin':
      case '/admin.html':
      case 'admin.html':
      case '/admin/':
      case 'admin/':
        window.location.replace('/admin/index.html')
    }

    console.log(this.props.location.pathname)
  }
  render() {
    return <h1> {this.props.location.pathname} not found </h1>
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
