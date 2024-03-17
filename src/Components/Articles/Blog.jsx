import { useEffect, useState } from 'react';
import articles from '../../../public/articles.json'
const Blog = ({blogTitle}) => {
        const [selectedBlog, setSelectedBlog] = useState(articles[0])

        useEffect(()=>{
            setSelectedBlog(articles[0])
            {blogTitle &&
                setSelectedBlog(articles?.find(article=> article?.title == blogTitle ))
                
            }
        },[blogTitle])
        
    
    return (
        <div className='space-y-3 px-10'>
            <h1 className='text-[#FF3D00] text-base font-bold'>{selectedBlog?.category}</h1>
            <h1 className='text-3xl font-bold'>{selectedBlog?.title}</h1>
            <h1 className='text-xl font-bold'>{selectedBlog?.subTitle}</h1>
            <div className='flex items-center gap-4 text-lg text-[#414141]'>
                <img className='w-[48px] h-[48px] mr-2 box-content  rounded-full border-4 border-[#D9D9D9]' src={selectedBlog.writerImg} alt="" />
                <h1>By <span className='font-bold'>{selectedBlog.writer}</span></h1>
                <p>{selectedBlog.date}</p>
            </div>
            <img className='w-full' src={selectedBlog.imgUrl} alt="" />

            <div>
                <p>{selectedBlog?.content[0]}</p>

                <h1 className='text-2xl font-bold'>1. Atypical Typefaces</h1>
                <p>{selectedBlog?.content[1]}</p>
                <h1 className='text-2xl font-bold'>Conclusion</h1>
                <p>{selectedBlog?.content[2]}</p>

            </div>
        </div>
    );
};

export default Blog;