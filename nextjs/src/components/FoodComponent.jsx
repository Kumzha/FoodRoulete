import React, { Component } from 'react'
import { MdDirectionsBike } from "react-icons/md";

// "1x": "https://images.bolt.eu/store/2023/2023-04-26/61edc43a-5a15-4695-a86c-3a1710db3d12.jpeg",
// "2x": "https://images.bolt.eu/store/2023/2023-04-26/3d5286fe-f08b-4972-a48e-0bb554614285.jpeg",
// "3x": "https://images.bolt.eu/store/2023/2023-04-26/3d5286fe-f08b-4972-a48e-0bb554614285.jpeg"

const FoodComponent = ( props ) => {


    return (
        <div className='m-1 rounded-lg w-64'>
            <div className='w-full h-36 relative overflow-hidden'>
                <img src={props.deliveryInfo.image} 
                alt= "Food Provider Image" 
                className='rounded-t-lg absolute inset-0 w-full h-full object-cover clip-path'/>
            </div>
            <div className='a border-t-0 border-solid border-grey border rounded-b-lg'>
                <div></div>
                <div className='font-bold text-ellipsis overflow-hidden'>{props.deliveryInfo.name}</div>
                {/* <div className='text-sm'>{props.deliveryInfo.address}</div> */}
                <div className='text-xs flex'>
                    <div className='mr-3'>{props.provider}</div>
                    <div className='mr-3'>{props.deliveryInfo.estimated_delivery_time}</div>
                    <div className='flex items-center mr-3'>
                        <MdDirectionsBike className='mr-1'/>
                        <div>{props.deliveryInfo.delivery_price}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodComponent