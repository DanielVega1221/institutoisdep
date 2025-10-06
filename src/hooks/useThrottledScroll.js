import { useEffect, useRef, useCallback } from 'react';

const useThrottledScroll = (callback, delay = 16) => {
  const timeoutRef = useRef(null);
  const lastTimeRef = useRef(0);

  const throttledCallback = useCallback(() => {
    const now = Date.now();
    
    if (now - lastTimeRef.current >= delay) {
      callback();
      lastTimeRef.current = now;
    } else {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        callback();
        lastTimeRef.current = Date.now();
      }, delay - (now - lastTimeRef.current));
    }
  }, [callback, delay]);

  useEffect(() => {
    window.addEventListener('scroll', throttledCallback, { passive: true });
    return () => {
      window.removeEventListener('scroll', throttledCallback);
      clearTimeout(timeoutRef.current);
    };
  }, [throttledCallback]);
};

export default useThrottledScroll;
