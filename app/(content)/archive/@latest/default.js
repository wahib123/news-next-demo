import NewList from '@/components/NewList'
import { getLatestNews } from '@/lib/news'
import React from 'react'

const LatestDefault = () => {
    const latestNews = getLatestNews()
  return (
    <div>
        <h1>Latest News</h1>
        <NewList news={latestNews}/>
    </div>
  )
}

export default LatestDefault