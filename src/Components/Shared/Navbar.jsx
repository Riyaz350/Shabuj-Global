import logo from '../../assets/logo.png'
import img1 from '../../assets/hoverModal/img1.png'
import img2 from '../../assets/hoverModal/img2.png'
import img3 from '../../assets/hoverModal/img3.png'
import navData from '../../../public/navData.json'
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineEvent } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { useState } from 'react';

const Navbar = () => {
    const iconClass = 'flex items-center text-lg gap-2'
    const navClass = 'text-lg text-white hover:bg-[#E0561B]   px-4 py-2 lg:py-5'
    const [isHovered, setIsHovered] = useState(false);
    const [isIndex, setIndex] = useState(null);
    console.log(navData)
     
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
            
            

            <div className=' bg-black flex  justify-center flex-wrap  lg:flex-row  '>
                <button onMouseEnter={() => setIndex(1)}   className={navClass}>Study Abroad</button>
                <button onMouseEnter={() => setIndex(2)}   className={navClass}>What we do?</button>
                <button onMouseEnter={() => setIndex(3)}   className={navClass}>Destination</button>
                <button onMouseEnter={() => setIndex(4)}   className={navClass}>Find a course</button>
                <button onMouseEnter={() => setIndex(5)}   className={navClass}>Student essential service</button>
                <button onMouseEnter={() => setIndex(6)}   className={navClass}>IELTS</button>
            </div>

             

            {navData.map(data =>
                <div  onMouseLeave={() => setIndex(null)} key={data.id} className='flex justify-center'>
                <div   className={`bg-white ${isIndex == data.id? 'absolute':'hidden'}`}>
                <div className='max-w-7xl m-5 lg:mx-auto rounded-2xl shadow-xl p-20 py-10'>
                    <h1 className='font-bold text-2xl mb-5'>{data.title}</h1>
                    <div className='grid grid-cols-2  lg:flex lg:flex-row justify-between gap-5'>
                        {
                            data?.images.map((imgs, index) =>
                                <div key={index}>
                                    <img src={imgs.url} alt="" />
                                    <h1 className='mt-5'>{imgs.title}</h1>
                                </div>
                                )
                        }
                       
                        <div className='flex flex-col justify-between pb-7'>
                            <p>Study UX In SG</p>
                            <p>Study UX In SG</p>
                            <p>Study Nothing</p>
                            <p>Study Something </p>
                            <p>Faking Study</p>
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