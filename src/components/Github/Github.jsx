import React from 'react'
// import { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'



const Github = () => {
  const data = useLoaderData()
  // const [data, setData] = useState([])
  // useEffect(() => {
  //   fetch('https://api.github.com/users/ADITYATHAKUR-21')
  //     .then(Response => Response.json())
  //     .then(data => {
  //       console.log(data);
  //       setData(data)
  //     })

  // }, [])
  return (
    <>
      <div className=' flex  gap-5 bg-gray-500 text-white text-center text-2xl p-2'>
        <div>
           <img src={data.avatar_url} alt="" className='rounded-3xl shadow-2xl' />
        </div>

        <div>
           <h1 className=' font-medium'>Name : {data.name}</h1>
           <h1 className=' font-medium'>Followers : {data.followers} </h1>
           <h1 className=' font-medium'>Following: {data.following} </h1>



        </div>

      </div>

    </>
  )
}

export default Github

 export const GithubInfo = async() => {
  const Response = await fetch('https://api.github.com/users/ADITYATHAKUR-21')
  return Response.json()

}
