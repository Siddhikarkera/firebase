import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import AddStudent from './components/AddStudent'
import StudentList from './components/StudentList'
import UpdateStudent from './components/UpdateStudent'

const myRouter = createBrowserRouter([
  {path:'',Component: Dashboard, children:[
    {path:'', Component:StudentList},
    {path:'addStudent', Component:AddStudent},
    {path:'studentList', Component:StudentList},
    {path:'updateStudent', Component:UpdateStudent}
  ]}
])

function App() {

  return (
    <>
    <RouterProvider router={myRouter}/>
    </>
  )
}

export default App
