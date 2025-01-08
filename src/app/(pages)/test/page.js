



const fetchPosts = async () => {
  const res = await fetch('http://localhost:3000/api/check');
  if (!res.ok) {
    console.log('res is not ok');
  }
  const response = await res.json();
  // console.log('check response', response);
  return response;
};



import React from 'react'

const page = async () => {

  const res = await fetchPosts();

  return (
    <>

      {res?.map((item, index) => (

        <h1 key={index}>{item.name}</h1>

      ))

      }

    </>
  )
}

export default page