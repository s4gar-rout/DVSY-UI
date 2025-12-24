
import React from 'react'
import Navbar from './components/navbar'
import Card from './components/Card'
import Hero from './components/Hero'
import Number from './components/Number'
import Section1 from './components/Section1'
import Section2 from './components/Section2'
import Advantage from './components/Advantage'
import About from './components/About'
const App = () => {
  return (
    <div className='h-screen w-full bg-black'>
      <Navbar></Navbar>
      <Hero></Hero>
      <Card></Card>
      <Number></Number>
      <About></About>
      <Advantage></Advantage>
      <Section1></Section1>
      <Section2></Section2>
    </div>
  )
}

export default App

