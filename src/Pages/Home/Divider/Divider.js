import React from 'react';
 import div1 from '../../../Assets/Images/london-editorial 01.jpg';
 import div2 from '../../../Assets/Images/london-editorial 02.jpg';
const Divider = () => {
    return (

<div className="flex flex-col w-full">
    <h1 className='text-6xl text-center mt-16'>OUR CLIENT's THOUGTH's</h1>
    <p className='text-bold text-center text-orange-600 text-2xl'>The moments of love, silliness and those moments of complete and utter euphoria.. The missed moments and the love shared between two families.</p>
  <div className="grid h-50 p-12 card bg-base-300 rounded-box place-items-center mt-12">
    <img className='w-64 rounded-lg' src={div1} alt=''/>
  <p className='text-2xl font-bold'>"You did an amazing job and I can't thank you enough! All of guests commented on what a lovely photographer you were and we got so many compliments about yourself. You made Nich and I feel so comfortable on the day and we really appreciate it. We couldn't have asked for anything better they're perfect!"</p>
    </div> 
  <div className="divider"></div> 
  <div className="grid h-30 p-12 card bg-base-300 rounded-box place-items-center">
  <img className='w-64 rounded-lg' src={div2} alt=''/>
  <p className='text-2xl font-bold'>"I wanted to email to say thank you so much for our photos! We are absolutely in love with them and so is our family. We have download and print all of them! Thank you so much for capturing such a beautiful day of ours.

Kind regards"</p>
  </div>
</div>


    );
};

export default Divider;