import logo from '../../assets/logo.png'
import { IoMdCloseCircleOutline } from "react-icons/io";

import navData from '../../../public/navData.json'
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineEvent } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { useState } from 'react';
import SearchModal from './SearchModal';

const Navbar = () => {
    const iconClass = 'flex items-center text-lg gap-2'
    const navClass = 'text-lg text-white    px-4 py-2 lg:py-5'
    const [isIndex, setIndex] = useState(null);
     
    return (
        <div className="bg-[#D9D9D9]">
            <div className=' py-16 max-w-7xl mx-auto flex flex-col gap-10 lg:gap-0 lg:flex-row justify-between'>
                <img className='h-[30px] w-fit mx-auto lg:mx-0 ' src={logo} alt="" />
                <div className='flex gap-10 justify-center'>
                    <p className={iconClass}><MdOutlineEvent />Events</p>
                    <p className={iconClass}><CiLocationOn />Find Us</p>
                    <button className={`${iconClass}  border-2 border-[#949392] rounded-lg p-1`}><FaRegUser />Sign Up</button>
                </div>
            </div>
            
            

            <div className=' bg-black flex  justify-center items-center flex-wrap  lg:flex-row  '>
                {
                    navData.map(data=>
                        <button key={data.id} onMouseEnter={() => setIndex(data.id)}   className={`${navClass} ${isIndex == data.id && ' bg-[#E0561B]'}`}>{data?.title}</button>)
                }
                <SearchModal/>
            </div>

             

            {navData.map(data =>
                <div  onMouseLeave={() => setIndex(null)} key={data.id} className='flex justify-center'>
                <div   className={`bg-white lg:w-2/3 ${isIndex == data.id? 'absolute':'hidden'}`}>
                <div className='   m-5 lg:mx-auto rounded-2xl shadow-xl p-5 lg:p-20  '>
                    <div className='flex justify-between'>
                    <h1 className='font-bold text-2xl mb-5'>{data.title}</h1>
                    <p onClick={() => setIndex(null)} className='flex lg:hidden text-2xl'><IoMdCloseCircleOutline /></p>
                    </div>
                    <div className='grid grid-cols-2 lg:grid-cols-4    justify-between gap-5'>
                        {
                            data?.images.map((imgs, index) =>
                                <div className='' key={index}>
                                    <div>
                                    <img className='w-full' src={imgs.url} alt="" />
                                    <h1 className='mt-5'>{imgs.title}</h1>
                                    </div>
                                </div>
                                )
                        }
                       
                        <div className='flex flex-col justify-between pb-7 lg:w-[170px] gap-2'>
                            {data.links.map((data, index)=>
                                <p key={index}>{data}</p>
                                )}
                        </div>
                    </div>
                </div>
                </div>
                </div>
            )}

             <div>
                <h1>hello</h1>
             </div>
        </div>
    );
};

export default Navbar;