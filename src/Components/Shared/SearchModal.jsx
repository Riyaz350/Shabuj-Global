import { useState } from "react";
import { CiSearch } from "react-icons/ci";

const SearchModal = () => {
    const [isIndex, setIndex] = useState(null);
    const navLinks = [
        {'link' : 'Search for Blogs'},
        {'link' : 'Find an University'},
        {'link' : 'Find an Scholarship'},
        {'link' : 'Events'}
    ]
    return (
        
        <div>
            <div onClick={()=>document.getElementById('my_modal_3').showModal()} className='flex bg-white items-center rounded-2xl p-1 gap-2'><CiSearch /><input className='focus:outline-none rounded-r-2xl' type="text" /></div>
            <dialog id="my_modal_3" className="modal bg-transparent">
                <div className="modal-box bg-transparent shadow-none">
                    <form className="p-5" method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn border-2 border-white text-white   btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <div className="bg-white   rounded-2xl">
                        <div className="grid grid-cols-2 lg:grid-cols-4  rounded-2xl overflow-hidden justify-between bg-[#D9D9D9]">
                            {navLinks.map((links, index)=>
                                <button key={index} onClick={() => setIndex(index)}   className={`  ${isIndex == index && ' bg-[#E0561B]'} p-2 lg:p-5  `}>Search for <br /> Blogs</button>
                            )}
                        </div>
                    </div>
                </div>
            </dialog>
                {/* <div className='flex bg-white items-center rounded-2xl p-1 gap-2'><CiSearch /><input className='focus:outline-none rounded-r-2xl' type="text" /></div> */}
        </div>
    );
};

export default SearchModal;