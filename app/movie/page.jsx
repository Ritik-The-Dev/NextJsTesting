import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
const page =  async() => {
  const url = 'https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '5b8f9d5b07mshddc83ff4d24a766p15a905jsnb8319fde6ee9',
      'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
    }
  };
    const response = await fetch(url, options);
    const result = await response.json();
    const data = result.titles;
    console.log(data)
  return (
    <div><div className='flex justify-center bg-gray-200 h-full p-2 mt-5'>
      <h1 className="text-5xl font-bold">Movie Page</h1>
    </div>
<section>
  {data.map((elem)=>{
    const {id,type,title,synopsis} = elem.jawSummary
    return(
      <div className='flex items-center justify-center mt-10 h-74'>
      <div className="movie-card w-1/2   p-10 mb-5 flex items-center flex-col justify-center bg-blue-100 rounded-2xl">
        <div className="card-details flex items-center justify-center">
        <div className="movie-card-details">
          <div className="title text-2xl">
            <h1>{title}</h1>
          </div>
          <div className="description w-1/2 mt-5">
            <p>{synopsis}</p>
          </div>
          </div>
          <div className="movie-card-image">
            <Image src={elem.jawSummary.backgroundImage.url} width={350} height={200} alt='Image-Section'/>
          </div>
          </div>
          <div className="movie-card-button mt-5">
            <Link href={`/moviedes/${id}`}><button className="border-2 border-black rounded-2xl p-2 mt-5 hover:bg-gray-400 hover:text-white w-52">Read More...</button></Link>
          </div>
      </div>
      </div> 
    )
  })}
</section>
</div>
  )
}

export default page
