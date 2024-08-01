"use client"
import React, { useEffect, useRef, useState } from 'react'
import { useJsApiLoader } from "@react-google-maps/api"
import { IoSearchSharp } from "react-icons/io5";


const libs = ["places"];

export default function AutoComplete() {

    const inputStyle = {
        outline: 'none',
        boxShadow: 'none',
      };

    const [autoComplete, setAutoComplete] = useState(null);

    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY,
        libraries: libs
    });

    //limit boundaries for autocomplet


    const placeAutoCompleteRef = useRef(null);

    useEffect(() => {
        if (isLoaded && placeAutoCompleteRef.current) {
            const gAutoComplete = new google.maps.places.Autocomplete(placeAutoCompleteRef.current);

            const vilniusBounds = new google.maps.LatLngBounds(
                new google.maps.LatLng(54.574418, 25.011218), // Southwest coordinates
                new google.maps.LatLng(54.830789, 25.444960)  // Northeast coordinates
            );
            
            gAutoComplete.setBounds(vilniusBounds);
            gAutoComplete.setOptions({strictBounds: true});

            setAutoComplete(gAutoComplete);
        }
    }, [isLoaded]);

    useEffect(() => {
        if(autoComplete){
            autoComplete.addListener('place_changed', () =>{
                const place = autoComplete.getPlace()
                console.log(place)
            })
        }
    }, [autoComplete])

  return (
    <form className="">
        <div className='ml-10 w-1/2 p-1 pl-5 border-zinc-800 border-2 rounded-lg'>
            <IoSearchSharp className='inline'/>
            <input ref = {placeAutoCompleteRef} type="text" className="w-10/12 p-1 ml-5" placeholder='Enter your address: ' style={inputStyle}/>
        </div>
    </form>

  )
}
