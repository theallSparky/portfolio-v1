import React from 'react'
import ProjectItem from './ProjectItem'
import sparkysmoviesImg from '../assets/sparkysmovies.png'
import sparkysboxgameImg from '../assets/sparkysboxgame.png'
import StopwatchImg from '../assets/Stopwatch.png'
import SparkyscalculatorImg from '../assets/sparkyscalculator.png'
import PongImg from '../assets/Pong.png'
import sparkyschatsImg from '../assets/Sparkychats.png'

const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xlfont-bold text-center text-[#001b5e]'>Projects</h1>
        <p>Desc.</p>
        <div className='grid sm:grid-cols-2 gap-12'>
            <ProjectItem img={sparkysmoviesImg} title='Movie App' />
            <ProjectItem img={StopwatchImg} title='Stopwatch App' />
            <ProjectItem img={SparkyscalculatorImg} title='Calculator App' />
            <ProjectItem img={PongImg} title='Pong App' />
            <ProjectItem img={sparkyschatsImg} title='Chat App' />
            <ProjectItem img={sparkysboxgameImg} title='sparkysboxgame App' />
        </div>
    </div>
  )
}

export default Projects