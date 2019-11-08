import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'

export default function RouterWeb() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/about" exact component={About} />
    </BrowserRouter>
  )
}