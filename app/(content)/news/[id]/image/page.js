import { DUMMY_NEWS } from '@/dummy-news'
import React from 'react'

const Image = ({params}) => {
    console.log("params", params)
    const img = DUMMY_NEWS.find(n => n.slug === params?.id)?.image
    if (!img) {
        return <div>No image found</div>
    }
    return (
        <div className='fillscreen-image'>
            <img 
                src={`/images/news/${img}`} 
                alt={DUMMY_NEWS.find(n => n.slug === params?.id)?.title || 'News Image'} 
            />

        </div>
    )
}

export default Image