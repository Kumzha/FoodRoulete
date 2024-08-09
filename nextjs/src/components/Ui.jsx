"use client"
import React, { Component } from 'react'
import ProviderSelection from './ProviderSelection'
import AutoComplete from './AutoComplete'
import StartButton from './StartButton'

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
                <div className="mt-32">
                    <AutoComplete addressHandler={this.setSelectedAddress}/>
                    <div className="flex mt-5">
                        <ProviderSelection provider="bolt" isOnHandler={this.setBolt}/>
                        <ProviderSelection provider="wolt" isOnHandler={this.setWolt}/>
                    </div>
                </div>
                <StartButton state={this.state}/>
            </div>  
     )
  }
}

export default Ui