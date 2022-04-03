import React from 'react'

import { Footer, Possibility, Blog, Features, WhatGPT3, Header} from './containers'
import { CTA, Brand, Navbar} from './components'
const App = () => {
  return (
    <div classname="App">
        <div className ="gradient__bg">
          <Navbar/>
          <Header/>
        </div>
        <div>
          <Brand/>
          <WhatGPT3/>
          <Features/>
          <Possibility/>
          <CTA/>
          <Footer/>
        </div>
    </div>
  )
}

export default App