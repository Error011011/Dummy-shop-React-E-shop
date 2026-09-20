import { useEffect, useRef } from 'react';

export const useInfiniteScroll = (callback, options = {}) => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) callback();
      },
      { threshold: 0.1, rootMargin: '200px', ...options }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [callback, options]);

  return ref;
}