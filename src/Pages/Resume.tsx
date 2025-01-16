import Graduation from '../assets/Graduation.png'
import University from '../assets/University.png'
import Server from '../assets/Server.png'
import Chart from '../assets/DataChart.png'
import Frontend from '../assets/Web.png'

const Resume = () => {
  return (
    <div className="hero bg-slate-700 min-h-screen -z-10">
      <div className="hero-content flex flex-col space-y-4 md:grid md:grid-cols-2 md:space-y-0 w-full h-full pt-20 gap-4 items-start">
        {/* Formation */}
        <div className='flex flex-col items-center justify-center'>
          <div>
            <h3 className="text-3xl text-white">Formation</h3>
            <hr className="h-px border-t-0 bg-red-500 w-36" />
          </div>
          <ul className="timeline timeline-vertical timeline-snap-icon text-white">
            <li>
              <div className="timeline-start text-end mb-10">
                <span className="font-mono italic">Sep. 2016 - Jan. 2022</span>
                <div className="text-lg font-black">Automation Engineering career</div>
                <p>Technological University of Havana CUJAE</p>
              </div>
              <div className="timeline-middle w-12 h-12"><img src={Graduation} alt="" /></div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle w-12 h-12">
                <img src={University} alt="" />
              </div>
              <div className="timeline-end text-start mb-10">
                <span className="font-mono italic">Oct. 2022 - Dec. 2022</span>
                <div className="text-lg font-black">Postgraduate degree in Data Analysis and Machine Learning with Python</div>
                <p>University of Havana</p>
              </div>
            </li>
          </ul>
        </div>
        {/* Experience */}
        <div className='flex flex-col items-center justify-center'>
          <div>
            <h3 className="text-3xl text-white">Experience</h3>
            <hr className="h-px border-t-0 bg-red-500 w-40" />
          </div>
          <ul className="timeline timeline-vertical timeline-snap-icon text-white">
            <li>
              <div className="timeline-start text-end mb-10">
                <span className="font-mono italic">Aug. 2023 - Present day</span>
                <div className="text-lg font-black">Advanced computing specialist (full time)</div>
                <p>Center for Advanced Studies of Cuba (CEA)</p>
              </div>
              <div className="timeline-middle w-12 h-12">
                <img src={Server} alt="" />
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle w-12 h-12">
                <img src={Chart} alt="" />
              </div>
              <div className="timeline-end text-start mb-10">
                <span className="font-mono italic">Feb. 2024 - May. 2024</span>
                <div className="text-lg font-black">Python Data Scientist (part time)</div>
                <p>National Radar Center of Cuba (LADETEC)</p>
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle w-12 h-12">
                <img src={Frontend} alt="" />
              </div>
              <div className="timeline-end text-start mb-10">
                <span className="font-mono italic">May. 2024 - Nov. 2024</span>
                <div className="text-lg font-black">Frontend developer (part time)</div>
                <p>Reserva Inc</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Resume
