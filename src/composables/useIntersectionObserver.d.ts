// src/composables/useIntersectionObserver.d.ts
declare module '@/composables/useIntersectionObserver' {
    const useIntersectionObserver: () => {
        observe: (el: Element) => void;
        unobserve: (el: Element) => void;
        isShown: () => boolean;
    };
    export default useIntersectionObserver;
}
