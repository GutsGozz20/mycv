import React from 'react'
import { myProfile } from '../../data/myProfile';

type TExpertise = {
    name: string,
    rank: number
}

const SingleItem = ({name, rank}: TExpertise) => {
    const dots = [1, 2, 3, 4, 5];
    return (
        <li className='flex justify-between items-center mb-3 text-white'>
            <span className='name'>{name}</span>   
            <span className='rank flex space-x-1'>
                {
                    dots.map((dot)=>{
                        if(dot <= rank){
                            return (
                                <span key={dot} className='w-[10px] h-[10px] rounded-full bg-amber-500 block'></span>
                            );
                        }
                        return (
                            <span key={dot} className='w-[10px] h-[10px] rounded-full bg-white block'></span>
                        )
                    })
                }
            </span> 
        </li>
    );
};

const CVExpertise = () => {
  return (
    <div>
      <ul className="w-full">
        {
            myProfile.expertise.map((item) =>{
                return <SingleItem key={item.id} name={item.name} rank={item.rank}/>
            })
        }
      </ul>
    </div>
  )
}

export default CVExpertise;

