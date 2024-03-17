import { useState } from "react";
import Blog from "./Blog";
import ReadMore from "./ReadMore";
import Form from "./Form";

const Article = () => {
    const [blogTitle, setBlogTitle] = useState('')
    return (
        <div className="max-w-7xl mx-auto">
            <div className="lg:grid lg:grid-cols-7 flex flex-col justify-center gap-10 lg:gap-0  my-10 lg:my-20 ">
                {/* Content */}
                <div className='col-span-5'>
                {
                    blogTitle &&
                    <Blog  blogTitle={blogTitle}/>
                }
                </div>

                {/* form */}
                <div className="col-span-2 ">
                    <Form/>
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