"use client"
import React, { Component } from 'react'
import ProviderSelection from './ProviderSelection'
import AutoComplete from './AutoComplete'
import StartButton from './StartButton'
import Image from 'next/image'

export class Ui extends Component {

    constructor(props){
        super(props)
        
        this.state = {
            lat: 0,
            lng: 0,
            wolt: true,
            bolt: true,
            selectedAddress: null
        }

        this.setSelectedAddress = this.setSelectedAddress.bind(this)
        this.setWolt = this.setWolt.bind(this)
        this.setBolt = this.setBolt.bind(this)
    }

    setSelectedAddress = (address) => {
      
        this.setState({
            selectedAddress: address,
            lat: address.geometry.location.lat(),
            lng: address.geometry.location.lng()
        })
    }

    setWolt = (isOn) => {
        this.setState({
            wolt: isOn
        })
    } 

    setBolt = (isOn) => {
        this.setState({
            bolt: isOn
        })
    }   


    render() {
      return (
        <div>
          <div className="mx-auto grid grid-cols-1 lg:grid-cols-5 mt-32 items-center">
            <div className="lg:col-span-3">
              <h1 className="text-xl md:text-3xl lg:text-5xl font-bold">Can’t pick a meal?</h1>
              <h1 className="text-xl md:text-3xl lg:text-5xl font-bold">
                Make choosing <span className="text-red-600">exciting!</span>
              </h1>
              <h2 className="text-md mt-4 pr-2">
                We are gamifying the process of food ordering - give it a try!
              </h2>
              <div className="mt-10">
                <AutoComplete addressHandler={this.setSelectedAddress} />
                <div className="flex mt-5">
                  <ProviderSelection provider="bolt" isOnHandler={this.setBolt} isOn={this.state.bolt} />
                  <ProviderSelection provider="wolt" isOnHandler={this.setWolt} isOn={this.state.wolt} />
                  <Image src='/ChooseYourCourier.png' alt='<--- choose-your-courier' width={200} height={100} className='hidden lg:block'/>
                </div>
              </div>
            </div>
            <div className="hidden lg:block lg:col-span-2 justify-center lg:justify-end">
              <Image
                src="/Hero Image.png"
                alt="Main-Page_visual"
                width={400}
                height={400}
                className="object-contain"
              />
            </div>
          </div>
  
          <StartButton state={this.state} />
        </div>
      );
      } 
    }

export default Ui