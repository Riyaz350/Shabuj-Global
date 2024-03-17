import { useState } from "react";
import Blog from "./Blog";
import ReadMore from "./ReadMore";

const Article = () => {
    const [blogTitle, setBlogTitle] = useState('')
    return (
        <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-5  my-10 lg:my-20 ">
                {/* Content */}
                <div className='col-span-3'>
                {
                    blogTitle &&
                    <Blog  blogTitle={blogTitle}/>
                }
                </div>

                {/* form */}
                <div className="col-span-2">
                    <h1>hell</h1>
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