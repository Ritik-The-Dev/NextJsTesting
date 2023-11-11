import Image from "next/image"
export default  function Home() {

  return (
    <main className=" selection:text-blue-200 bg-black overflow-hidden h-screen" >
      <div className="">
      <div className="flex items-center text-center justify-evenly select-none overflow-hidden">
        <div className="bdy">
            <h1 className="text-6xl  font-extrabold text-white m-1 mb-10 mt-32">Hello,</h1>
            <h1 className="text-6xl font-extrabold text-white m-1 mb-10">I'm <span className="text-yellow-500">Ritik</span></h1>
            <h1 className=" text-white m-1 text-6xl font-extrabold mb-10">Front End Developer</h1>
            <p className="text-2xl font-semibold text-white m-1 mb-10">I am a Skilled and Passionate Web Developer with Experience in <br /> creating visually appealing and user-friendly Websites</p>
            <div className="flex items-center justify-center font-bold">    
            <li><button className="border-2 border-black rounded-2xl p-2 mt-5 bg-gray-400 text-white w-52 flex items-center justify-evenly text-2xl hover:bg-gray-200 hover:text-black"><Image src="/hire.png" className="flex items-center justify-center " alt='img' width={30} height={30}/>Movie</button></li></div>
        </div>
        <div className="img">
            <Image src="/bg-image.png" alt="" width={350} height={350}/>
        </div>
      </div>
    </div>

    </main>
  )
}
