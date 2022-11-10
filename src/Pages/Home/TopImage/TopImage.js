import React from 'react';
import topImage from '../../../Assets/Images/london 09.jpg';

const TopImage = () => {
  return (
    <div>
      <h1 className='text-9xl font-bold mt-16'>YOUR STORY<br/> STARTS HERE...</h1>
      <div>
      <p className='font-bold'>M Y_F A V O U R I T E_M O M E N T S_A R E_T H E_  O N E S_T H A T_M A K E_Y O U R_ H E A R T_B E A T_A_L I T T L E_F A S T E R...</p> 
      <img className='w-full h-2/4 rounded-lg' src={topImage} alt='' />
      </div>
      
    </div>
  );
};

export default TopImage;