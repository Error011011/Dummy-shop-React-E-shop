import React from 'react'
import ProductGrid from '../components/ProductGrid'
import { GetProducts } from '../api/ProductService'
import { useQuery } from '@tanstack/react-query'
import Loader from '../components/Loader'
import { useProducts } from '../hooks/useProducts'
import { useCallback } from 'react'
import { useInfiniteScroll } from '../hooks/useInfiniteScroll'
import { useState } from 'react'
import { useSearchParams } from 'react-router'

const SORT_OPTIONS = [
  { value: '',            label: 'Default' },
  { value: 'title-asc',   label: 'Name (A → Z)' },
  { value: 'title-desc',  label: 'Name (Z → A)' },
  { value: 'price-asc',   label: 'Price ASC' },
  { value: 'price-desc',  label: 'Price DESC' },
];


const Catalog = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  
  const sortValue = searchParams.get('sort') ?? '';
  const [sortBy, order] = sortValue ? sortValue.split('-') : ['', 'asc'];

   
  // const {data, isLoading, isError} = useQuery({
  //   queryKey: ['products'],
  //   queryFn: GetProducts
  // })

  const {products, total, loading, loadingMore, error, hasMore, loadMore} = useProducts({ sortBy, order });

  const handleLoadMore = useCallback(() => {
  if (hasMore && !loadingMore) {
    loadMore();
  }
  }, [hasMore, loadingMore, loadMore]);

   const sentinelRef = useInfiniteScroll(handleLoadMore);

   const handleSortChange = (e) => {
    const value = e.target.value;
    // replace: true — чтобы каждый выбор не плодил запись в истории браузера
    setSearchParams(
      value ? { sort: value } : {},
      { replace: true }
    );
  }

  return (
    <>
      <section className='py-5 md:py-7 lg:py-9'>
        <div className="container">
          <div className='flex justify-center items-center gap-3'>
            <p>Sort by:</p>
           <select
            value={sortValue}
            onChange={handleSortChange}
            className="py-3 px-7 p[] border border-gray-400 rounded-full appearance-none"
          >
            {SORT_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
          </div>

        </div>
      </section>

      {loading && <Loader/>}
      {products && <ProductGrid products={products}/>}
      {error && <div className='py-5 md:py-7 lg:py-9 text-center'>Ошибка загрузки товаров...</div>}

       {/* Триггер подгрузки */}
      <div ref={sentinelRef} className="sentinel">
        </div>

    </>
  )
}

export default Catalog