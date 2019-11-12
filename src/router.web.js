import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import PostDetail from './pages/Post-Detail'

export default function RouterWeb() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/about" exact component={About} />
      <Route path="/post/detail/:alias" exact component={PostDetail} />
    </BrowserRouter>
  )
}
