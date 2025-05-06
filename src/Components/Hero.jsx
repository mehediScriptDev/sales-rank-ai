import React from 'react';
import banner from './images/hero.png'
import minirobo from './images/minirobo.png'

const Hero = () => {
    return (
        <section className='min-h-screen mt-10 w-11/12 mx-auto'>
            <div className='grid grid-cols-12 items-center justify-center'>
                <div className='col-span-7'> 
                    <h1 className='text-7xl pb-3 font-manrope'>Your AI- <br /> Powered <br /> Sales Coach</h1>
                    <div className='flex gap-5 items-center max-w-2xl'>
                        <img className='border-dashed border-2' src={minirobo} alt="" />
                        <p className='text-sm font-manrope'>Get real-time coaching, script <br /> suggestions, and deal-closing <br /> strategies powered by advanced AI <br /> technology.</p>
                    </div>
                </div>
                <div className='col-span-5 h-96'>
                    <img src={banner} alt="" />
                </div>
                <div>
                    <div>
                        <span></span>
                    </div>
                </div>
            </div>
            
        </section>
    );
};

export default Hero;