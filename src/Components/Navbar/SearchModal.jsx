import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoMdArrowForward } from "react-icons/io";

const SearchModal = () => {
    const [isIndex, setIndex] = useState(0);
    const [suggestion, setSuggestion] = useState(false)
    const [suggested, setSuggested] = useState(' ')
    const navLinks = [
        {'link' : 'Search for Blogs'},
        {'link' : 'Find an University'},
        {'link' : 'Find an Scholarship'},
        {'link' : 'Events'}
    ]
    const suggestions = [
        "Exciting New Tools for Designers, March 2024",
        "Web Tech Trends to Watch in 2024 and Beyond",
        "6 Best AI Productivity Apps in 2024",
        "Exciting New Tools for Designers, March 2024"
    ]
    return (
        
        <div>
            <div onClick={()=>document.getElementById('my_modal_3').showModal()} className='flex bg-white items-center rounded-2xl p-1 gap-2 mx-2 my-5'><CiSearch /><input className='focus:outline-none rounded-r-2xl' type="text" /></div>
            <dialog id="my_modal_3" className="modal bg-transparent">
                <div className="modal-box bg-transparent shadow-none h-3/6">
                    <form className="p-5" method="dialog">
                    <button className="btn border-2 border-white text-white   btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <div className="bg-white rounded-lg  lg:rounded-2xl relative">

                        {/* tabs navs */}
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-0 m-1 lg:m-0 p-1 lg:p-0 rounded-t-2xl overflow-hidden justify-between ">
                            {navLinks.map((links, index)=>
                                <button  key={index} onClick={() => setIndex(index)}   className={`  ${isIndex == index && ' bg-white'} bg-[#D9D9D9] p-2 lg:p-5  rounded-lg lg:rounded-none`}>{links?.link}</button>
                            )}
                        </div>
                        
                        {/* Tab body */}

                        {isIndex == 0 &&
                        <div className="pb-10">
                        <div className="border-b-2 flex items-center mx-5  mt-5 lg:mt-10   gap-3"> <CiSearch/><input   onFocus={() => setSuggestion(true)} onBlur={() => setSuggestion(false)} className="py-2    focus:outline-none"  placeholder="Search keywords" type="text" /></div>
                        {suggestion &&
                            <div className=" space-y-2 text-[#999999] mt-2">
                                {suggestions.map((suggest, index)=>
                                    <h1 key={index} onClick={()=>console.log('alu')} className="cursor-pointer pl-10 hover:bg-gray-400 hover:text-white" >{suggest}</h1>
                                )}
                            </div>
                        }
                        </div>
                        }


                        {isIndex == 1 &&
                        <div className="pb-10">
                        <div className="border-b-2 flex items-center mx-5  mt-5 lg:mt-10   gap-3"> <CiSearch/><input className="py-2 focus:outline-none"  placeholder="University Name" type="text" /></div>
                        </div>
                        }
                        {isIndex == 2 &&
                        <div className="pb-10">
                        <div className="border-b-2 flex items-center mx-5  mt-5 lg:mt-10   gap-3">  <input className="py-2 focus:outline-none"  placeholder="Select Study Level" type="text" /></div>
                        <div className="border-b-2 flex items-center mx-5  mt-5 lg:mt-10   gap-3">  <input className="py-2 focus:outline-none"  placeholder="Select Destination Country" type="text" /></div>
                        </div>
                        }
                        {isIndex == 3 &&
                        <div className="pb-10">
                        <div className="border-b-2 flex items-center mx-5  mt-5 lg:mt-10   gap-3">  <input className="py-2 focus:outline-none"  placeholder="Select Events" type="text" /></div>
                        </div>
                        }

                        <div className="pt-5">
                            <button className="absolute border-2 p-1 rounded-full border-[#2D2D2D] bottom-2 right-8"><IoMdArrowForward /></button>
                        </div>
                    </div>
                </div>
            </dialog>
                {/* <div className='flex bg-white items-center rounded-2xl p-1 gap-2'><CiSearch /><input className='focus:outline-none rounded-r-2xl' type="text" /></div> */}
        </div>
    );
};

export default SearchModal;