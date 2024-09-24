import React from 'react'
import ProfilePhoto from '../../../../photos/profilePhoto.jpg'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ["latin"] });
function AboutMe() {
  return (
    <div className={`  bg-[#111827] px-[10px] sm:px-[30px] md:px-[30px] lg:px-[120px] flex flex-col items-center gap-[50px] justify-center py-[100px] `}>
        <div className='bg-[#374151] text-[25px] px-5 py-2 rounded-[25px] text-gray-400'>About me</div>
        <div className='flex flex-row items-start justify-between w-full'>
            <div className='bg-[#374151] h-[480px] w-[400px] relative'>
                <img src={ProfilePhoto.src} alt=""  className='absolute -right-6 -top-6 h-[480px] w-[400px] border-b-[6px] border-l-[6px] border-[#111827] '/> 
            </div>
            <div className='max-w-[584px] w-full'>
                <div className={`${inter.className} text-[30px] font-semibold leading-[36px] text-[#F9FAFB]`}>Curious about me? Here you have it:</div>
                <p>I'm a passionate, self-proclaimed designer who specializes in full stack development (React.js & Node.js). I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me.</p>
                <p>I began my journey as a web developer in 2015, and since then, I've continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. Now, in my early thirties, 7 years after starting my web development journey, I'm building cutting-edge web applications using modern technologies such as Next.js, TypeScript, Nestjs, Tailwindcss, Supabase and much more.</p>
                <p>I am very much a progressive thinker and enjoy working on products end to end, from ideation all the way to development.</p>
                <p>When I'm not in full-on developer mode, you can find me hovering around on twitter or on indie hacker, witnessing the journey of early startups or enjoying some free time. You can follow me on Twitter where I share tech-related bites and build in public, or you can follow me on GitHub.</p>
            </div>

        </div>
    </div>
  )
}

export default AboutMe