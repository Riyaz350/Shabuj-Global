import { useEffect, useState } from 'react';
import articles from '../../../public/articles.json'
const ReadMore = ({setBlogTitle}) => {

    const articlesPerPage = 4
    const length=articles?.length
    const [current, setCurrent] =useState(0)

    const pageCount = Math.ceil(length/articlesPerPage)
    const pages = [...Array(pageCount).keys()]
    const [filtered, setFiltered] = useState(articles.slice(0,4))

    useEffect(()=> {
        const startIndex = parseInt(current * articlesPerPage);
        const endIndex = parseInt(startIndex + articlesPerPage);
        const currentArticles = articles.slice(startIndex, endIndex);
        setFiltered(currentArticles);
      },[current])

    // useEffect(()=>{
    //     setLength(articles?.length)
    // } ,[])
        
       const handlePrev = () =>{
        if(current>0){
            setCurrent(current -1)
        }
        }
        const handleNext = () =>{
            if(current < pages.length-1){
                
                setCurrent(current +1)
            }
        }

    return (
        <div className=' p-5 lg:p-0'>
            <h1 className='font-bold text text-3xl my-10 '>Read Next</h1>
            <div className='grid grid-cols-2 md:grid-cols-3  lg:grid-cols-4 justify-between font-bold   gap-4'>
                {
                    filtered.map((article, index)=>
                    <div onClick={()=>setBlogTitle(article?.title)} className='flex flex-col cursor-pointer justify-between' key={index}>
                        <img className='w-full h-40 my-2 rounded-2xl' src={article?.imgUrl} alt="" />
                        <h1 className='text-lg'>{article?.title}</h1>
                        <p className='text-xs hidden lg:block lg:text-base font-normal pr-2 my-4'>{article.content[0].slice(0, 200)}...</p>
                        <p className='text-base font-normal pr-2 my-4'>By {article.writer}</p>
                    </div>
                    )
                }
            </div>
            <div className='flex justify-between max-w-xs mx-auto my-10 lg:my-20'>
                <button className="  text-black   h-fit p-1 lg:p-2 btnLandLord border-2 border-white flex gap-5" onClick={handlePrev}><span>{'<'}</span>Previous</button>
                <div className='space-x-5 h-fit lg:h-full'>
                {
                        pages.map(page => <button
                            className={current === page ? 'rounded-none bg-[#A6C8FF]  hover:bg-[#A6C8FF] hover:border-2 hover:border-[#A6C8FF] font-bold border-2 border-transparent btnLandLord btn' : undefined}
                            onClick={() => setCurrent(page)}
                            key={page}
                        >{page}</button>)
                }            
                </div>
                <button className="  text-black   h-fit p-1 lg:p-2 btnLandLord border-2 border-white flex gap-5" onClick={handleNext}>Next<span>{'>'}</span></button>

            </div>
        </div>
    );
};

export default ReadMore;