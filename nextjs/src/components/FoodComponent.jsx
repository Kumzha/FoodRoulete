import React, { useState, useEffect } from 'react';
import { MdDirectionsBike } from "react-icons/md";
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

const FoodComponent = (props) => {
    const [selected, setSelected] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    
    const { ref, inView } = useInView({
        threshold: 0.005,    // The percentage of the component that needs to be in view before triggering
    });

    const handleClick = () => {
        setSelected(!selected);
    };

    useEffect(() => {
        setIsVisible(inView);
    }, [inView]);

    return (
        <div ref={ref}>
            {inView && (
                <div className={`m-1 rounded-lg w-64 border-2
                    ${selected ? 'border-blue-500' : 'border-transparent'}`
                } onClick={handleClick}>
                    <div className='w-full h-36 relative overflow-hidden'>
                        <img src={props.deliveryInfo.image} 
                            alt="Food Provider Image" 
                            className='rounded-t-lg absolute inset-0 w-full h-full object-cover clip-path'/>
                    </div>
                    <div className='a border-t-0 border-solid border-grey border rounded-b-lg pl-1'>
                        <div className='font-bold text-ellipsis overflow-hidden whitespace-nowrap'>
                            {props.deliveryInfo.name}
                        </div>
                        <div className='text-xs flex'>
                            <div className='mr-3 ml-1 items-center flex'>
                                <Image
                                    alt='Food provider logo'
                            // | How it should be but we need both providers images to be same aspect ratio to make it look nice
                            // V
                            // src={`/${props.provider}logofoodcomp.png`}                                    
                            src={`/woltlogofoodcomp.png`}                                    width={40}
                                    height={20}
                                    className='rounded-lg'
                                />
                            </div>
                            <div className='mr-3'>{props.deliveryInfo.estimated_delivery_time}</div>
                            <div className='flex items-center mr-3'>
                                <MdDirectionsBike className='mr-1'/>
                                <div>{props.deliveryInfo.delivery_price}</div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FoodComponent;