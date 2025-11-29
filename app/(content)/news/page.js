import NewList from '@/components/NewList'
import { getAllNews } from '@/lib/news'
import React from 'react'

const page = async () => {
  const news = await getAllNews();
  return (
     <>
      <h1>News Page</h1>
      <NewList news={news}/>
    </>
  )
}

export default page