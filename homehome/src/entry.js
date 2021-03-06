// You may or may not need this depending on
// what JavaScript features you're using - e.x. async / await.
// Feel free to remove it and see what happens!
import '@babel/polyfill'

// Import our top-level sass file.
import './styles/styles.scss'

// Import React.
import React from 'react'
import ReactDOM from 'react-dom'

// Import our components.
import Home from 'components/Home'
import Page from 'components/Page'
import RegisterPage from 'components/RegisterPage'
import AdminPage from 'components/AdminPage'
import NotFound from 'components/NotFound'

// Import React Router things.
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


// Create a single element for our app to live.
document.body.innerHTML = '<div id="app"></div>'
// document.body.className = 'bg-black-80 fw4 white-80'

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path='/' component={Page} />
      <Route path='/register' component={RegisterPage} />
      <Route path='/admonistrashun' component={AdminPage} />
      <Route component={NotFound} />
    </Switch>
  </Router>,
  document.querySelector('#app')
)
