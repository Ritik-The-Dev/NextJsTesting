import React from 'react'

const page = async({params}) => {

    const id = params.id

        const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;
        const options = {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': '5b8f9d5b07mshddc83ff4d24a766p15a905jsnb8319fde6ee9',
            'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
          }
        };
          const response = await fetch(url, options);
          const result = await response.json();
        //   console.log(result);
        //   const data = result[0].details;

  return (
    <div className='flex text-center w-screen items-center justify-center mt-10 text-5xl font-bold hover:text-yellow-400 hover:cursor-pointer selection:text-blue-200'>
        <h1>Id is -: {id}</h1>
      {/* <h1>`Netflix \ ${data.type}`</h1>
        <Image src={data.backgroundImage.url} width = {600} height={300}/>
        <h1>${data.title}</h1>
        <p>${data.synopsis}</p> */}
    </div>
  )
}

export default page
