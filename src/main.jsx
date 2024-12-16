import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

//import App from './App.jsx'
import StopWatchBySumit from './components/StopwatchBySumit/StopWatchBySumit'
import Home from './components/Home/Home'
import ColorChanger from './components/ColorChanger/ColorChanger'
import ContactCard from './components/ContactCard/ContactCard'
import Counter from './components/counter/Counter'
import Slider from './components/Slider/Slider'
import Form from './components/Form/Form'
import Modal from './components/Modal/Modal'
import StopWatch from './components/StopWatch/StopWatch'
import TodoList from './components/Todolist/Todolist'







import {


  createBrowserRouter,

  RouterProvider,

} from "react-router-dom";


const router = createBrowserRouter([

  {

    path: "/",

    element: <Home/>,
    children: [
      {
        path: "/ColorChanger",
        element: <ColorChanger></ColorChanger>
      },
      {
        path: "/ContactCard",
        element: <ContactCard></ContactCard>,
      },
      {
        path: "/Counter",
        element: <Counter></Counter>
      },
      {
        path: "/Form",
        element: <Form></Form>,
      },
      {
        path: "/Modal",
        element: <Modal></Modal>
      },
      {
        path: "/StopWatch",
        element: <StopWatch></StopWatch>,
      },
      {
        path: "/StopWatchBySumit",
        element: <StopWatchBySumit></StopWatchBySumit>,
      },
            
      {
        path: "/Todolist",
        element: <TodoList></TodoList>
      },
      {
        path: "/Slider",
        element: <Slider></Slider>,
      },

    ]

  },

]);





createRoot(document.getElementById('root')).render(
  <StrictMode>
<RouterProvider router={router} /> 
  </StrictMode>,
)