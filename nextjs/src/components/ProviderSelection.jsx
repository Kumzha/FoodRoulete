import React from 'react'
import Image from 'next/image'
import ToggleSwitch from './ToggleSwitch'


export default function ProviderSelection( props ) {

  return (
    <div className='mr-10'>
        <Image
            alt='Food provider logo'
            src={`/${props.provider}foodicon.png`}
            width={75}
            height={75}
            className='rounded-lg'
        />
        <ToggleSwitch isOnHandler={props.isOnHandler}/>
    </div>
  )
}
