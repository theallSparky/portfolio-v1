import React from 'react'
import ProjectItem from './ProjectItem'
import sparkysmoviesImg from '../assets/sparkysmovies.png'
import sparkysboxgameImg from '../assets/sparkysboxgame.png'
import StopwatchImg from '../assets/Stopwatch.png'
import SparkyscalculatorImg from '../assets/sparkyscalculator.png'
import PongImg from '../assets/Pong.png'
import yumyumgoodImg from '../assets/yum-yum-good.png'

const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-5xl font-bold text-center text-[#001b5e]'>Projects</h1>
        <div className='grid sm:grid-cols-2 gap-12'>
            <a href="https://yumyumgood.vercel.app/" ><ProjectItem img={yumyumgoodImg} title='YumYumGood App' /></a>            
            <a href="https://sparkysmovies.vercel.app" ><ProjectItem img={sparkysmoviesImg} title='Movie App' /></a>
            <a href="https://sparkysstopwatch.vercel.app/"><ProjectItem img={StopwatchImg} title='Stopwatch App' /></a>
            <a href="https://sparkyscalculator.vercel.app/"><ProjectItem img={SparkyscalculatorImg} title='Calculator App' /></a>
            <a href=""><ProjectItem img={PongImg} title='Pong App' /></a>
            <a href="https://theallsparky.github.io/ninjahex/"><ProjectItem img={sparkysboxgameImg} title='sparkysboxgame App' /></a>
        </div>
    </div>
  )
}

export default Projects