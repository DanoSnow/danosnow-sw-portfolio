import avatar from '../assets/DanoSnow.png'

const About = () => {
  return (
    <div className="hero bg-slate-700 min-h-screen -z-10">
      <div className="hero-content md:grid md:grid-cols-2 md:gap-2 flex">
        <div className='w-full space-y-16 h-full pt-16'>
          <div>
            <h3 className="text-3xl text-white">About me</h3>
            <hr className="h-px border-t-0 bg-red-500 w-36" />
            <p className="text-white">danosnow.sw@gmail.com</p>
          </div>
          <div className='w-auto h-auto md:hidden flex flex-col items-center'>
            <img src={avatar} className="rounded-lg w-64 h-64" />
          </div>
          <div className='flex items-center'>
            <p className="text-white">Developer with experience in Frontend and Backend developing, as well as in Data Analysis and Data Science. Outsanding skills in the main programming languages Python and Javascript, and solid knowledge in relational dabatase management. Passionate about finding innovative and efficient solutions to technological challenges. Oriented towards the development of quality software highly adaptable and with effective problem solving skills. Commited to learning new technologies and staying abreast of the latest trends in the industry.</p>
          </div>
          <div className='flex flex-col items-center'>
            <p className="text-white text-2xl italic">"If you can imagine it you can program it"</p>
            <p className="text-white">Alejandro Taboada. Rest in peace</p>
          </div>
          <div className='flex justify-center'>
            <p className="text-white">La Habana, Cuba</p>
          </div>
        </div>
        <div className='w-full h-full hidden md:block'>
          <img src={avatar} className="rounded-lg" />
        </div>
      </div>
    </div>
  )
}

export default About
