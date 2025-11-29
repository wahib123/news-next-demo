import NewList from '@/components/NewList'
import { getAvailableNewsMonths, getAvailableNewsYears, getNewsForYear, getNewsForYearAndMonth } from '@/lib/news'
import Link from 'next/link'
import React from 'react'

const page = ({params}) => {
    const newsYear = params.filter?.[0]
    const newsMonth = params.filter?.[1]
    let news = getNewsForYear(newsYear)
    
    let links = getAvailableNewsYears()
    if(newsYear && !newsMonth){
        links = getAvailableNewsMonths(newsYear)
    }
    
    if(newsMonth){
      news = getNewsForYearAndMonth(newsYear, newsMonth)
    }
    
    if((newsYear && !getAvailableNewsYears().includes(+newsYear)) || (newsMonth && !getAvailableNewsMonths(newsYear).includes(+newsMonth))){
      throw new Error('No news found for the given filter')
    }
    // if((newsYear && !getAvailableNewsYears().includes(+newsYear)) || (newsMonth && !getAvailableNewsMonths(newsYear).includes(+newsMonth))){
    //   return <p>No news found for the year {newsYear} and month {newsMonth}</p>
    // }

    return (
      <div>
        <header id="archive-header">
              <nav>
                  <ul>
                      {links?.map(link => {
                        const href = newsYear && !newsMonth ? `/archive/${newsYear}/${link}` : `/archive/${link}`
                        return (
                          <li>
                          <Link href={href}>{link}</Link>
                      </li>
                        )
                      })}
                  </ul>
              </nav>
          </header>
          {news?.length === 0 && newsYear ? <p>No news found for the year {newsYear}</p> :<NewList news={news ?? []}/> }
      </div>
    )
}

export default page