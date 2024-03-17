import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import Swal from "sweetalert2";

const Form = () => {

    const firstInputClass ="border-b-2 border-[#949392] flex items-center   mt-5 lg:mt-10   gap-3"
    const secondInputClass ="border-b-2 border-[#949392] flex items-start flex-col-reverse   mt-5 lg:mt-10 px-2"
    const checkboxClass ="flex items-start gap-2"
    const [formInfo, setFormInfo]  =useState({}) 

    const formSubmit = (e)=>{
        e.preventDefault()
        const form = e.target
        const first = form.firstName.value
        const last = form.lastName.value
        const mail = form.mail.value
        const number = form.number.value
        const course = form.course.value
        const time = form.time.value
        const sgoffice = form.sgoffice.value
        const fund = form.fund.value
        const level = form.level.value
       setFormInfo({first, last, mail, number, course, time, sgoffice, fund, level})
    }
    return (
        <div className={`${window.innerWidth < 1024 ? 'mx-10' :'mx-0' } rounded-2xl overflow-hidden bg-[#E5E5E3] `}>
            <div className="text-white p-5 bg-[#1C66D7]">
                <h1 className="font-bold">Interested in studying UX?</h1>
                <p className="font-light">SG can help – fill in your details <br /> and we’ll call you back.</p>
            </div>
            <form onSubmit={formSubmit} className="mx-5">
                <div className={firstInputClass}>  <input name="firstName" className="py-2 placeholder:text-[#949392] bg-[#E5E5E3] focus:outline-none"  placeholder="First Name*" type="text" /></div>
                <div className={firstInputClass}>  <input name="lastName" className="py-2 placeholder:text-[#949392] bg-[#E5E5E3] focus:outline-none"  placeholder="Last Name*" type="text" /></div>
                <div className={firstInputClass}>  <input name="mail" className="py-2 placeholder:text-[#949392] bg-[#E5E5E3] focus:outline-none"  placeholder="Email Address*" type="text" /></div>
                <div className={firstInputClass}>   +880 <input name="number" className="py-2 placeholder:text-[#949392] bg-[#E5E5E3] focus:outline-none"  placeholder="Phone Number*" type="text" /><FaChevronDown /></div>
                <div className={secondInputClass}> <p>Please Select</p><div className="flex items-center gap-14"><input name="course" className="py-2 placeholder:text-[#949392] bg-[#E5E5E3] focus:outline-none"  placeholder="Your Preferred Study Course*" type="text" /><FaChevronDown /></div></div>
                <div className={secondInputClass}> <p>Please Select</p><div className="flex items-center gap-14"><input name="time" className="py-2 placeholder:text-[#949392] bg-[#E5E5E3] focus:outline-none"  placeholder="When do You Plan to Study?*" type="text" /><FaChevronDown /></div></div>
                <div className={secondInputClass}> <p>Please Select</p><div className="flex items-center gap-14"><input name="sgoffice" className="py-2 placeholder:text-[#949392] bg-[#E5E5E3] focus:outline-none"  placeholder="Nearest SG Office*" type="text" /><FaChevronDown /></div></div>
                <div className={secondInputClass}> <p>Please Select</p><div className="flex items-center gap-14"><input name="fund" className="py-2 placeholder:text-[#949392] bg-[#E5E5E3] focus:outline-none"  placeholder="How Would You Fund  Your Course?*" type="text" /><FaChevronDown /></div></div>
                <div className={secondInputClass}> <p>Please Select</p><div className="flex items-center gap-14"><input name="level" className="py-2 placeholder:text-[#949392] bg-[#E5E5E3] focus:outline-none"  placeholder="Preferred Study Level*" type="text" /><FaChevronDown /></div></div>
                <p   className="my-10">SG will not share your details with others without your permission:</p>
                <div className="space-y-5">
                    <p className={checkboxClass}><input type="checkbox" defaultChecked className="checkbox checkbox-sm" /> I agree to SG Terms and Privacy Policy</p>
                    <p className={checkboxClass}><input type="checkbox" defaultChecked className="checkbox checkbox-sm" /> Please contact me by phone, email or SMS to assist with my enquiry</p>
                    <p className={checkboxClass}><input type="checkbox" defaultChecked className="checkbox checkbox-sm" /> I would like to receive updates and offers from IDP</p>
                </div>
                <button onClick={()=>document.getElementById('my_modall').showModal()} className="bg-[#FF3D00] text-white w-full p-5 rounded-lg my-5">Help Me Study UX</button>
                <dialog id="my_modall" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg">First Name:{formInfo.first}</h3>
                    <h3 className="font-bold text-lg">Last Name:{formInfo.last}</h3>
                    <h3 className="font-bold text-lg">Email: {formInfo.mail}</h3>
                    <h3 className="font-bold text-lg">Phone: {formInfo.number}</h3>
                    <h3 className="font-bold text-lg">Course: {formInfo.course}</h3>
                    <h3 className="font-bold text-lg">Time: {formInfo.time}</h3>
                    <h3 className="font-bold text-lg">Nearest Office: {formInfo.sgoffice}</h3>
                    <h3 className="font-bold text-lg">Fund source: {formInfo.fund}</h3>
                    <h3 className="font-bold text-lg">Level of course: {formInfo.level}</h3>
                </div>
                </dialog>
            </form>
        </div>
    );
};

export default Form;