import { CiSearch } from "react-icons/ci";

const SearchModal = () => {
    return (
        <div>
            <div onClick={()=>document.getElementById('my_modal_3').showModal()} className='flex bg-white items-center rounded-2xl p-1 gap-2'><CiSearch /><input className='focus:outline-none rounded-r-2xl' type="text" /></div>
            <dialog id="my_modal_3" className="modal bg-transparent">
                <div className="modal-box bg-transparent shadow-none">
                    <form className="p-5" method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn border-2 border-white text-white btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <div className="bg-white p-2 lg:p-5">
                        <h3 className="font-bold text-lg">Hello!</h3>
                        <p className="py-4">Press ESC key or click on ✕ button to close</p>
                    </div>
                </div>
            </dialog>
                {/* <div className='flex bg-white items-center rounded-2xl p-1 gap-2'><CiSearch /><input className='focus:outline-none rounded-r-2xl' type="text" /></div> */}
        </div>
    );
};

export default SearchModal;