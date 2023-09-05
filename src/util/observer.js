import { useRef } from "react";

export default function useIntersectionObserver(callback) {
    const observer = useRef(
      new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return
                callback(entry,observer)
          });
        },
        { 
          root: null,
          rootMargin: '300px 0px',
          threshold: 0
        }
      )
    );
  
    const observe = (element) => {
      observer.current.observe(element)
    };
  
    const unobserve = (element) => {
      observer.current.unobserve(element);
    };
  
    return [observe, unobserve];
}