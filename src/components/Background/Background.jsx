import React from 'react';
import './Background.css';
import video1 from '../../assets/video1.mp4';
import header1 from '../../assets/header1.jpg';
import header2 from '../../assets/header2.jpg';
import header3 from '../../assets/header3.jpg';
import header4 from '../../assets/header4.jpg';

const Background = ({playStatus, heroCount}) => {
    if(playStatus){
  return (
      <video className='background fade-in' autoPlay loop method>
        <source src={video1} type='video/mp4'/>
        </video>
  );
} else if (heroCount === 0){
    return <img src={header1} className='background ' alt='' />;
}  else if (heroCount === 1){
    return <img src={header2} className='background ' alt=''/>;
}    else if (heroCount === 2){
    return <img src={header3} className='background ' alt=''/>
}  else if (heroCount === 3){
    return <img src={header4} className='background ' alt=''/>
} else {
    return null;
  }
};
export default Background;





