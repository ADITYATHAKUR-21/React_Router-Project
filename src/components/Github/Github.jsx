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
      <div className=' flex bg-gray-400 text-white text-center text-3xl p-4'>
        Name: {data.name}
        Github followers: {data.followers}
      </div>
      <img src={data.avatar_url} alt="" />
    </>
  )
}

export default Github

 export const GithubInfo = async() => {
  const Response = await fetch('https://api.github.com/users/ADITYATHAKUR-21')
  return Response.json()

}
