import articles from '../../../public/articles.json'
const Blog = ({blogTitle}) => {
        const selectedBlog = articles?.find(article=> article?.title == blogTitle )
        
    
    return (
        <div className='space-y-3 px-10'>
            <h1 className='text-[#FF3D00] text-base font-bold'>{selectedBlog?.category}</h1>
            <h1 className='text-3xl font-bold'>{selectedBlog?.title}</h1>
            <h1 className='text-xl font-bold'>{selectedBlog?.subTitle}</h1>
            <div className='flex items-center gap-4 text-lg text-[#414141]'>
                <img className='w-[58px] mr-2 box-content h-[58px] rounded-full border-8 border-[#D9D9D9]' src={selectedBlog.writerImg} alt="" />
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