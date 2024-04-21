import React from 'react'
import { logo } from '../assets'


const Hero = () => {
    return (
        <header className='w-full flex justify-center items-center flex-col'>
            <nav className='flex justify-between items-center w-full pt-2'>
                <a href="/">
                <img src={logo} alt="logo" className='w-32 object-contain' />
                </a>


                <button type='button' onClick={() => window.open('https://github.com/')}
                    className='black_btn'>
                    Github
                </button>

                

            </nav>

            <h1 className='head_text font-["Poppins"]'>
                Summarize Articles with <br className='max-md:hidden' />
                <span className='purple_gradient '>OpenAI GPT-4</span>
            </h1>
            <h2 className='desc font-["Anek Odia"]'>
                Streamline your reading experience with summaize, an open-source tool that condenses lengthy articles into concise, clear summaries.
            </h2>


        </header>
    )
}

export default Hero