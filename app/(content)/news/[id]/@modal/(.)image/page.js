import { DUMMY_NEWS } from '@/dummy-news'
import Link from 'next/link';
import React from 'react'

const Image = ({params}) => {
     const newsSlug = params.id;
  const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === newsSlug);

    const img = DUMMY_NEWS.find(n => n.slug === params?.id)?.image
    if (!img) {
        return <div>No image found</div>
    }
    return (
        <>
            <div className='modal-backdrop' />
                <dialog className='modal' open>
            <div className='fullscreen-image'>
                    <img 
                        src={`/images/news/${img}`} 
                        alt={DUMMY_NEWS.find(n => n.slug === params?.id)?.title || 'News Image'}
                        />
            </div>
                </dialog>

        </>
    )
}

export default Image