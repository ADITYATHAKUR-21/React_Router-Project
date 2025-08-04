import React from 'react'
import  { useParams } from 'react-router-dom'

function User() {
  const {id} = useParams()
  return (
    <div className=' text-center bg-gray-500 text-white text-3xl p-2'>User: {id} </div>
  )
}

export default User
