import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
  const {userid} = useParams()
  return (
    <div className='bg-gray-600 text-xl text-white p-2 text-center'>
      <h6>Parameter read from URL :{userid}</h6>
    </div>
  )
}

export default User
