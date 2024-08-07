import React from 'react'
import Image from 'next/image'
import ToggleSwitch from './ToggleSwitch'


export default function ProviderSelection( props ) {

  const provider = props.provider

  return (
    <div className='ml-10'>
        <Image
            alt='Food provider logo'
            src={`/${provider}foodicon.png`}
            width={75}
            height={75}
            className='rounded-lg'
        />
        <ToggleSwitch isOnHandler={props.isOnHandler}/>
    </div>
  )
}
