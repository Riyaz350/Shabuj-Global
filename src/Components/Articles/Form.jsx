import { FaChevronDown } from "react-icons/fa";

const Form = () => {
    return (
        <div className={`${window.innerWidth < 1024 ? 'mx-10' :'mx-0' } rounded-2xl overflow-hidden bg-[#E5E5E3] `}>
            <div className="text-white p-5 bg-[#1C66D7]">
                <h1 className="font-bold">Interested in studying UX?</h1>
                <p className="font-light">SG can help – fill in your details <br /> and we’ll call you back.</p>
            </div>
            <div className="">
            <div className="border-b-2 border-[#949392] flex items-center mx-3  mt-5 lg:mt-10   gap-3">  <input className="py-2 placeholder:text-[#949392] bg-[#E5E5E3] focus:outline-none"  placeholder="First Name*" type="text" /></div>
            <div className="border-b-2 border-[#949392] flex items-center mx-3  mt-5 lg:mt-10   gap-3">  <input className="py-2 placeholder:text-[#949392] bg-[#E5E5E3] focus:outline-none"  placeholder="Last Name*" type="text" /></div>
            <div className="border-b-2 border-[#949392] flex items-center mx-3  mt-5 lg:mt-10   gap-3">  <input className="py-2 placeholder:text-[#949392] bg-[#E5E5E3] focus:outline-none"  placeholder="Email Address*" type="text" /></div>
            <div className="border-b-2 border-[#949392] flex items-center mx-3  mt-5 lg:mt-10   gap-3"> +880 <input className="py-2 placeholder:text-[#949392] bg-[#E5E5E3] focus:outline-none"  placeholder="Phone Number*" type="text" /><FaChevronDown /></div>
            <div className="border-b-2 border-[#949392] flex items-start flex-col-reverse mx-3   mt-5 lg:mt-10 px-2"> <p>Please Select</p><div className="flex items-center gap-14"><input className="py-2 placeholder:text-[#949392] bg-[#E5E5E3] focus:outline-none"  placeholder="Your Preferred Study Course*" type="text" /><FaChevronDown /></div></div>
            <div className="border-b-2 border-[#949392] flex items-start flex-col-reverse mx-3   mt-5 lg:mt-10 px-2"> <p>Please Select</p><div className="flex items-center gap-14"><input className="py-2 placeholder:text-[#949392] bg-[#E5E5E3] focus:outline-none"  placeholder="When do You Plan to Study?*" type="text" /><FaChevronDown /></div></div>
            <div className="border-b-2 border-[#949392] flex items-start flex-col-reverse mx-3   mt-5 lg:mt-10 px-2"> <p>Please Select</p><div className="flex items-center gap-14"><input className="py-2 placeholder:text-[#949392] bg-[#E5E5E3] focus:outline-none"  placeholder="Nearest SG Office*" type="text" /><FaChevronDown /></div></div>
            <div className="border-b-2 border-[#949392] flex items-start flex-col-reverse mx-3   mt-5 lg:mt-10 px-2"> <p>Please Select</p><div className="flex items-center gap-14"><input className="py-2 placeholder:text-[#949392] bg-[#E5E5E3] focus:outline-none"  placeholder="How Would You Fund  Your Course?*" type="text" /><FaChevronDown /></div></div>
            <div className="border-b-2 border-[#949392] flex items-start flex-col-reverse mx-3   mt-5 lg:mt-10 px-2"> <p>Please Select</p><div className="flex items-center gap-14"><input className="py-2 placeholder:text-[#949392] bg-[#E5E5E3] focus:outline-none"  placeholder="Preferred Study Level*" type="text" /><FaChevronDown /></div></div>

            </div>
        </div>
    );
};

export default Form;