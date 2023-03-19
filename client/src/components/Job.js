import React from 'react'

const Job = ({data}) => {
    console.log("JOB",data);
  return (
    <div className='w-80 h-10 border'>
        <ul>
            <li>{data.company}</li>
            <li>{data.description}</li>
        </ul>
    </div>
  )
}

export default Job