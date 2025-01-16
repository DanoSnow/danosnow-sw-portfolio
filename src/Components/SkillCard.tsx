interface SkillProps {
  title: string
  imgUrl: string
  content: Array<string>
}

const SkillCard = ({ title, imgUrl, content }: SkillProps) => {
  return (
    <>
      <div className='flex flex-col items-start shadow-lg p-8 w-full text-white'>
        <div className='w-full flex items-center justify-center'>
          <div className='w-28 h-28 bg-white rounded-full flex items-center justify-center'>
            <img src={imgUrl} className='w-24' />
          </div>
        </div>
        <h4 className="font-bold text-2xl py-2 w-full text-center">{title}</h4>
        <div>
          {content.map(e => <p key={e}>• {e}</p>)}
        </div>
      </div>
    </>
  )
}

export default SkillCard

