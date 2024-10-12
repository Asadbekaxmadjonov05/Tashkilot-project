import React from 'react'
import { Route, Routes } from 'react-router-dom'
import {Organization, Users} from '../pages'

function CustomRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Organization/>}/>
      <Route path='/users' element={<Users/>}/>
    </Routes>
  )
}

export default CustomRoutes
