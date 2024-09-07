import React from 'react'
import Image from 'next/image'
import ToggleSwitch from './ToggleSwitch'


export default function ProviderSelection( props ) {

  return (
    <div className='mr-10'>
        <Image
            alt='Food provider logo'
            src={`/${props.provider}foodicon.png`}
            width={65}
            height={65}
            className={`rounded-3xl transition-filter ${!props.isOn ? 'filter grayscale' : ''}`}
        />
        <ToggleSwitch isOnHandler={props.isOnHandler}/>
    </div>
  )
}
