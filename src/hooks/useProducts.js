import { useInfiniteQuery } from '@tanstack/react-query';
import { GetProducts } from '../api/ProductService';


export const useProducts = ({ sortBy = '', order = 'asc' } = {}) => {
    const query = useInfiniteQuery({
        queryKey: ['products', { sortBy, order }],
        queryFn: () => GetProducts({sortBy, order}),
         initialPageParam: 0,
        getNextPageParam: (lastPage, allPages) => {
        const loaded = allPages.flatMap((p) => p.products).length;
        return loaded < lastPage.total ? loaded : undefined;
        },
        select: (data) => ({
        ...data,
        products: data.pages.flatMap((page) => page.products),
        }),
    });

     return {
        products: query.data?.products ?? [],
        total: query.data?.pages[0]?.total ?? 0,
        loading: query.isLoading,
        loadingMore: query.isFetchingNextPage,
        error: query.error,
        hasMore: query.hasNextPage,
        loadMore: query.fetchNextPage,
        refetch: query.refetch,
    };
}   