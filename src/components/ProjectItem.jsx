import React from 'react'

const ProjectItem = ({img, title}) => {
  return (
    <div className=''>
        <img src={img} alt={title} />
        <div>
            <h3>
                {title}
            </h3>
        </div>
    </div>
  )
}

export default ProjectItem