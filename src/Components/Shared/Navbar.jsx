import logo from '../../assets/logo.png'
import img1 from '../../assets/hoverModal/img1.png'
import img2 from '../../assets/hoverModal/img2.png'
import img3 from '../../assets/hoverModal/img3.png'
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineEvent } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";

const Navbar = () => {
    const iconClass = 'flex items-center text-lg gap-2'
    const navClass = 'text-lg text-white hover:bg-[#E0561B]   px-4 py-2 lg:py-5'

    const navLinks = 
    <div className=' bg-black flex  justify-center flex-col lg:flex-row  '>
        <button className={navClass}>Study Abroad</button>
        <button className={navClass}>What we do?</button>
        <button className={navClass}>Destination</button>
        <button className={navClass}>Find a course</button>
        <button className={navClass}>Student essential service</button>
        <button className={navClass}>IELTS</button>
    </div>
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
            
            


            <div className="  p-0 h-fit bg-black flex lg:justify-center ">
                <div className="  ">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content  m-0 p-0 pl-2  shadow     w-52">
                        {navLinks}
                    </ul>
                    </div>
                </div>
                <div className="  hidden lg:flex ">
                    <ul className=" p-0">
                    {navLinks}
                    </ul>
                </div>
            </div>

            <div className='bg-white'>
            <div className='max-w-7xl mx-auto rounded-2xl shadow-xl p-20 py-10'>
                <h1 className='font-bold text-2xl mb-5'>Study UX in Abroad</h1>
                <div className='flex justify-between gap-5'>
                    <div>
                        <img src={img1} alt="" />
                        <h1 className='mt-5'>Study UI in SG</h1>
                    </div>
                    <div>
                        <img src={img2} alt="" />
                        <h1 className='mt-5'>Study UI in SG</h1>
                    </div>
                    <div>
                        <img src={img3} alt="" />
                        <h1 className='mt-5'>Study UI in SG</h1>
                    </div>
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
    );
};

export default Navbar;