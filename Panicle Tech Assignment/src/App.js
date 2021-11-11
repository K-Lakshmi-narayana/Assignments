import {Switch, Route} from 'react-router-dom'

import Home from './components/Home'
import NotFound from './components/NotFound'
import Post from './components/Post'

import './App.css'

const App = () => (
  <div>
    <Switch>
      <Route exact path="/posts" component={Home} />
      <Route exact path="/posts/:id" component={Post} />
      <Route component={NotFound} />
    </Switch>
  </div>
)

export default App
