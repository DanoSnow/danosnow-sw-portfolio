import SkillCard from "../Components/SkillCard"
import webDev from '../assets/braces.png'
import webDes from '../assets/code.png'
import backend from '../assets/brackets.png'
import dataAn from '../assets/chart-pie.png'

const Skills = () => {
  return (
    <div className="hero bg-slate-700 min-h-screen -z-10">
      <div className="hero-content flex flex-col w-full h-full pt-20 mb-10 space-y-2">
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
          <SkillCard title="Web Developing" imgUrl={webDev} content={["React", "Javascript", "jQuery"]} />
          <SkillCard title="Web Design" imgUrl={webDes} content={["Tailwind CSS", "DaisyUI", "Material UI", "Bootstrap", "HTML 5", "CSS 3"]} />
          <SkillCard title="Backend Developing" imgUrl={backend} content={["Python - FastAPI", "Python - SQLAlchemy"]} />
          <SkillCard title="Data Science" imgUrl={dataAn} content={["Python - Numpy", "Python - Pandas", "Python - Matplotlib", "Python - Seaborn", "Python - Plotly", "Python - Scikit-learn"]} />
        </div>
        <div className='h-full w-full flex items-center justify-center'>
          <div>
            <h3 className="text-3xl text-white">Languages</h3>
            <hr className="h-px border-t-0 bg-red-500 w-36 mb-1" />
            <div className='space-y-2'>
              <p className="text-white">Spanish - Native</p>
              <p className="text-white">English - Intermediate</p>
              <p className="text-white">Russian - Basic</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
