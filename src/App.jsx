import React from 'react'
//import ColorChanger from './components/ColorChanger'
import ContactCard from './components/ContactCard/ContactCard'
//import ColorChanger from './components/ColorChanger'
//import ColorChanger from './components/ColorChanger'
//import ColorChanger from './components/ColorChanger'
//import ColorChanger from './components/ColorChanger'
//import ColorChanger from './components/ColorChanger'
import Form from './components/Form'
import TodoList from './components/Todolist'
import StopWatch from './components/StopWatch'
import Counter from './components/counter/Counter'
import StopWatchBySumit from './components/StopwatchBySumit/StopWatchBySumit'
const style= {
  body :{
    margin: "0",
    display: "flex",
    placeItems: "center",
    minWidth: "320px",
    minHeight: "100vh"
  }
}
export default function App() {
  return (
    <div style={style.body}>
  
      <ContactCard/>
      <Form/>
      <TodoList></TodoList>
      <StopWatch></StopWatch>
      <StopWatchBySumit></StopWatchBySumit>
      <Counter></Counter>
    </div>
  )
}
