import React from 'react';
import img1 from '../../../Assets/wed-image/wed-image 01.jpg';
import img2 from '../../../Assets/wed-image/wed-image 02.jpg';
import img3 from '../../../Assets/wed-image/wed-image 03.jpg';
import img4 from '../../../Assets/wed-image/wed-image 04.jpg';
import wedlogo from '../../../Assets/wed-image/wed-logo.jpg';

const Banner = () => {
    return (
        <div className="carousel w-full mt-12 rounded-xl">
            {/* slide 1 */}
        <div id="slide1" className="carousel-item relative w-full">
            <img src={img1} alt='' className="w-full" />
            <div>
            <p className='font-bold bg-orange-600 text-white text-2xl'>L O N D O N<br/>_E D I T O R I A L<br/>_W E D D I N G<br/>_P H O T O G R A P H E R</p>
            <img className='w-64 h-full' src={wedlogo} alt=''/>
            </div>
           <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            
            <a href="#slide4" className="btn btn-circle">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
            </div> 
            {/* slide 2 */}
        <div id="slide2" className="carousel-item relative w-full">
          <img src={img2} alt='' className="w-full" />
          <div>
            <p className='font-bold bg-orange-600 text-white text-2xl'>L O N D O N<br/>_E D I T O R I A L<br/>_W E D D I N G<br/>_P H O T O G R A P H E R</p>
            <img className='w-64 h-full' src={wedlogo} alt=''/>
            </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full">
          <img src={img3} alt='' className="w-full" />
          <div>
            <p className='font-bold bg-orange-600 text-white text-2xl'>L O N D O N<br/>_E D I T O R I A L<br/>_W E D D I N G<br/>_P H O T O G R A P H E R</p>
            <img className='w-64 h-full' src={wedlogo} alt=''/>
            </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a> 
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide4" className="carousel-item relative w-full">
          <img src={img4} alt='' className="w-full" />
          <div>
            <p className='font-bold bg-orange-600 text-white text-2xl'>L O N D O N<br/>_E D I T O R I A L<br/>_W E D D I N G<br/>_P H O T O G R A P H E R</p>
            <img className='w-64 h-full' src={wedlogo} alt=''/>
            </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
    );
};

export default Banner;