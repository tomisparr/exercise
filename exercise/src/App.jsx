import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Component/Header'
import Content from './Component/Content'
import Footer from './Component/Footer'

function App() { 
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <>
    <Header course= { course } />

    <Content parts = {parts}/>
    
    
    
    <Footer parts = {parts}/>    

     
    </>
  )
}

export default App
