import { useEffect, useState } from "react";
import Blog from "./Blog";
import ReadMore from "./ReadMore";
import Form from "./Form";

const Article = () => {
    const [blogTitle, setBlogTitle] = useState('')
    const [showTheModal , setShowTheModal] = useState(false)

    

    useEffect(()=>{
        if(window.innerWidth > 1024){
            setShowTheModal(true)
        }
    },[])
    return (
        <div className="max-w-7xl mx-auto">
            <div className="lg:grid lg:grid-cols-7 flex flex-col justify-center gap-10 lg:gap-0  my-10 lg:my-20 ">
                {/* Content */}
                <div id='blog' className='col-span-5'>
                {
                    blogTitle &&
                    <Blog   blogTitle={blogTitle}/>
                }
                </div>

                 
                {/* form for small & medium device */}
                <button className="  lg:hidden  btn w-fit mx-auto bg-blue-500 text-white" onClick={()=>setShowTheModal(!showTheModal)}>Interested in studying UX?</button>
                <div className="col-span-2">
                {showTheModal && <Form />}
                </div>
            </div>

            {/* suggestions */}
            <div>
                <ReadMore setBlogTitle={setBlogTitle}/>
            </div>
        </div>
    );
};

export default Article;