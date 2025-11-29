import { notFound } from 'next/navigation';

import { DUMMY_NEWS } from '@/dummy-news'; 
import Link from 'next/link';

export default function NewsDetailPage({ params }) {
  const newsSlug = params.id;
  const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === newsSlug);

  if (!newsItem) {
    notFound();
  }

  return (
    null
  );
}