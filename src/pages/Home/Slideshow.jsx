import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './Slideshow.css';

const slideImages = [
  {
    url: 'https://dogily.vn/wp-content/uploads/2022/05/golden-vang-duc-1-600x400.png',
    caption: 'Slide 1'
  },
  {
    url: 'https://dogily.vn/wp-content/uploads/2022/05/golden-vang-duc-1-600x400.png',
    caption: 'Slide 2'
  },
  {
    url: 'https://dogily.vn/wp-content/uploads/2022/05/golden-vang-duc-1-600x400.png',
    caption: 'Slide 3'
  },
];

const Slideshow = () => {
    return (
      <div className="slide-container" >
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div className="each-slide" key={index}>
              <div style={{'backgroundImage': `url(${slideImage.url})`}}>
                <span>{slideImage.caption}</span>
              </div>
            </div>
          ))}
        </Slide>
      </div>
    )
}
export default Slideshow;