import React from 'react';
import RoulettePro from 'react-roulette-pro';
import 'react-roulette-pro/dist/index.css';

const removeLocation = (text) => text.replace(/\s*\(.*?\)\s*$/, '');

const renderPrizeItem = (item) => {
  return (
    <div className="hover:w-44 relative prize-card w-40 h-52 m-2 p-1 flex text-center shadow-lg rounded-lg">
      <div className="relative h-[75%]">
      <img src={item.image} alt={item.text} className="rounded-lg w-full h-full object-cover" />
        <div className=" absolute bottom-1 left-1 bg-white p-1 rounded-lg"  style={{ fontSize: '7px', lineHeight: 0.75 }}>
          {'⭐'.repeat(Math.floor(item.rating))} {/* Rendering stars based on rating */}
        </div>
        <div className="absolute bottom-[-15px] right-1 rounded-full">
            <img src={item.provider === "Wolt" ? "/WoltFoodLogo.png" : "/BoltFoodLogo.png"} alt={item.text} className="w-10 h-10 rounded-full p-1 bg-white" />
        </div>      
      </div>    
      <h3 className='text-black bottom-0 pb-1 font-bold h-[25%] truncate w-full pl-1 flex items-center'>{removeLocation(item.text)}</h3>
    </div>
  );
};



const MyRouletteComponent = ({prizeList, prizeIndex, start, handlePrizeDefined }) => {
  return (
    <div className='bg-slate-400 p-5 rounded-lg'>
    <RoulettePro
      prizes={prizeList}
      prizeIndex={prizeIndex}
      start={start}
      onPrizeDefined={handlePrizeDefined}
      prizeItemRenderFunction={renderPrizeItem}  
      style={{ width: '100%', height: 'auto' }}
      className="max-w-full"
    />
   </div> 
  );
};

export default MyRouletteComponent;