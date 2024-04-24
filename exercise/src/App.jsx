import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Component/Header'
import Content from './Component/Content'
import Footer from './Component/Footer'

function App() { 
    const course = 'Half Stack application development';
    const part1 = 'Fundamentals of React'
    const exercises1 = 10
    const part2 = 'Using props to pass data'
    const exercises2 = 7
    const part3 = 'State of a component'
    const exercises3 = 14
    
  return (
    <>
    <Header course = {course}/>

    <Content part1 = {part1} part2 = {part2} part3 = {part3} exercises1 = {exercises1} exercises2 = {exercises2} exercises3 = {exercises3} />
    
    
    
    <Footer exercises = {exercises1 + exercises2 + exercises3}/>    

     
    </>
  )
}

export default App
