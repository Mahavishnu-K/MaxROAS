import React, { memo } from 'react';
import Spline from '@splinetool/react-spline';

const BlackSphere = () => {
  return (
    <div className="w-full h-full">
      <Spline 
        // 1. Remove pointerEvents: 'none' so you can hover
        className="w-full h-full"
        scene="https://prod.spline.design/ooNcrvLKez0PVbM4/scene.splinecode" 
      />
    </div>
  );
}

// 2. Wrap in memo. This prevents the 3D scene from refreshing 
//    when the parent component (Contact.jsx) re-renders.
export default memo(BlackSphere);