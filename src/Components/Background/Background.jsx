import './Background.css'
import video1 from '../../assets/video1.mp4'


function Background() {
  return (
    <video className='background' autoPlay loop muted>
        <source src={video1} type='video/mp4'/>
    </video>
  )
}

export default Background
