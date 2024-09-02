import React, { useState, useEffect, act } from 'react';
import { MdDirectionsBike } from "react-icons/md";
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

const FoodComponent = ({ deliveryInfo, handleList, activateOnHover}) => {
    const [selected, setSelected] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    
    const { ref, inView } = useInView({
        threshold: 0.005,    // The percentage of the component that needs to be in view before triggering
    });

    const handleClick = () => {

        if(!activateOnHover) {
            setSelected(!selected);
        }

        handleList(deliveryInfo);
    };

    useEffect(() => {
        setIsVisible(inView);
    }, [inView]);

    return (
        <div ref={ref} className={`m-1 rounded-lg w-64 border-2 
            ${selected ? 'border-transparent' : 'border-transparent'}`}
            onClick={handleClick}>
            
            <div className='w-full h-36 relative overflow-hidden'>
                <img src={deliveryInfo.image} 
                    alt="Food Provider Image" 
                    className='rounded-t-lg absolute inset-0 w-full h-full object-cover clip-path'/>
            </div>
            
            <div className='a border-t-0 border-solid border-grey border rounded-b-lg pl-1 bg-white'>
                <div className='font-bold text-ellipsis overflow-hidden whitespace-nowrap'>
                    {deliveryInfo.name}
                </div>
                <div className='text-xs flex'>
                    <div className='mr-3 ml-1 items-center flex'>
                        <Image
                            alt='Food provider logo'
                            src={`/woltlogofoodcomp.png`}
                            width={40}
                            height={20}
                            className='rounded-lg'
                        />
                    </div>
                    <div className='mr-3'>{deliveryInfo.estimated_delivery_time}</div>
                    <div className='flex items-center mr-3'>
                        <MdDirectionsBike className='mr-1'/>
                        <div>{deliveryInfo.delivery_price}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodComponent;