import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import footerData from '../../../public/footer.json'
const Links = () => {
    return (
        <div className='text-white'>
            <div  className="bg-[#1E1E1E] py-20">
            <div className='hidden max-w-7xl mx-auto  lg:grid grid-cols-4 justify-between'>
                {footerData.map(data=>
                    <div key={data.sectionTitle}>
                        <h1 className='mb-4'>{data?.sectionTitle}</h1>
                        <div>   
                            {data?.links.map((link, index)=>
                                <h1 className='font-thin' key={index}>{link}</h1>
                            )}
                        </div>
                    </div>
                )}
            </div>

            <div className="block lg:hidden join join-vertical w-full ">
                
            {footerData.map(data=>
                    <div key={data.sectionTitle}>
                        <div className="collapse collapse-arrow  join-item border border-transparent">
                            <input type="radio" name="my-accordion-4" defaultChecked /> 
                            <div className="collapse-title text-xl font-medium bg-white text-black">
                            {data?.sectionTitle}
                            </div >
                            <div className="collapse-content"> 
                            <div className='grid grid-cols-1 md:grid-cols-2 '>   
                            {data?.links.map((link, index)=>
                                <h1 className='font-thin' key={index}>{link}</h1>
                            )}
                            </div>
                            </div>
                        </div>
                    </div>
                )}
                 
            </div>
            
        </div>

        <div className='bg-black py-10 font-light '>
            <div className='max-w-7xl mx-auto grid gap-5 lg:gap-0 text-center md:grid-cols-2 lg:flex justify-between items-center'>
            <h1>Copyright © 2024 SG Education</h1>
            <ul className='flex gap-2 pl-2'>
                <li className='border-r-2 pr-2'>Disclaimer</li>
                <li className='border-r-2 pr-2'>Privacy Policy</li>
                <li className='border-r-2 pr-2'>Terms Of Use</li>
                <li>Investors</li>
            </ul>
            <ul className='flex gap-2 justify-center'>
                <li><FaFacebookF /></li>
                <li  ><FaInstagram /></li>
                <li><FaLinkedinIn /></li>
                <li><FaYoutube /></li>
            </ul>
            </div>

        </div>
        </div>
    );
};

export default Links;