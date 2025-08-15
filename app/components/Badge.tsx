import React from 'react'
// import Typical from 'react-typical'

const Badge = () => {
  return (
    <span className='badge badge-base text-base-content p-5 m-2'>
       Days Happy 
       <strong className='bg-base-200 text-base-200-content p-2 rounded-xl'>
          {/* <Typical
             steps={[
		             'Cakes',
                  10000,
                  'Pies',
                  10000,
                  'Biscuits',
                  10000,
                  'Scones',
                  10000,
                ]}
                wrapper="p"
                loop={Infinity}
        />  */}
      </strong>
    </span>
  )
}

export default Badge