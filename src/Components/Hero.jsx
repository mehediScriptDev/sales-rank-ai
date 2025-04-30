import React from 'react';
import banner from './images/hero.png'

const Hero = () => {
    return (
        <section className='min-h-screen mt-10'>
            <div className='grid grid-cols-12 items-center justify-center'>
                <div className='col-span-7'> 
                    <h1 className='text-[80px]'>Your AI- <br /> Powered <br /> Sales Coach</h1>
                </div>
                <div className='col-span-5 h-96'>
                    <img src={banner} alt="" />
                </div>
            </div>
            
        </section>
    );
};

export default Hero;