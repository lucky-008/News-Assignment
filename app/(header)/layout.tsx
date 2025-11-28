import Hero from '@/components/Hero';
import React from 'react';

const layout = ({children}:{
  children: React.ReactNode}) => {
  return (
    <div>
      {children}
    </div>
  );
}

export default layout;
