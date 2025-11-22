import { useEffect, useRef, useState } from 'react';

export const ScrollStack = ({ children, className = '' }) => {
  const stackRef = useRef(null);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!stackRef.current) return;

      const windowHeight = window.innerHeight;
      const itemElements = stackRef.current.querySelectorAll('[data-stack-item]');

      itemElements.forEach((item, index) => {
        const itemTop = item.getBoundingClientRect().top;
        const distanceFromTop = itemTop - windowHeight * 0.15;

        // Calculate progress (0 to 1) - more gradual
        const progress = Math.max(0, Math.min(1, 1 - distanceFromTop / (windowHeight * 0.7)));

        // Smoother scale - less dramatic
        const scale = 0.95 + progress * 0.05;
        
        // Better opacity - no blur effect
        const opacity = Math.max(0.6, progress);

        // Calculate if this item should stick
        const stickyTop = 80 + index * 30;
        const isSticky = itemTop <= stickyTop;
        const nextItem = itemElements[index + 1];
        const shouldUnstick = nextItem && nextItem.getBoundingClientRect().top <= stickyTop + 30;

        if (isSticky && !shouldUnstick) {
          // Sticky state - fully visible
          item.style.position = 'sticky';
          item.style.top = `${stickyTop}px`;
          item.style.transform = `scale(1) translateY(0)`;
          item.style.opacity = '1';
          item.style.zIndex = `${items.length - index}`;
        } else if (shouldUnstick) {
          // Being pushed up - smooth transition
          item.style.position = 'relative';
          item.style.top = '0';
          item.style.transform = `scale(0.95) translateY(-10px)`;
          item.style.opacity = '0.8';
          item.style.zIndex = `${items.length - index}`;
        } else {
          // Approaching - smooth entrance
          item.style.position = 'relative';
          item.style.top = '0';
          item.style.transform = `scale(${scale}) translateY(${(1 - progress) * 20}px)`;
          item.style.opacity = `${opacity}`;
          item.style.zIndex = `${items.length - index}`;
        }
      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [items.length]);

  useEffect(() => {
    if (stackRef.current) {
      const itemElements = stackRef.current.querySelectorAll('[data-stack-item]');
      setItems(Array.from(itemElements));
    }
  }, [children]);

  return (
    <div ref={stackRef} className={`relative ${className}`} style={{ paddingBottom: '40vh' }}>
      {children}
    </div>
  );
};

export const ScrollStackItem = ({ children, className = '' }) => {
  return (
    <div
      data-stack-item
      className={`transition-all duration-500 ease-out ${className}`}
      style={{
        marginBottom: '3rem',
        transformOrigin: 'center top',
        willChange: 'transform, opacity',
      }}
    >
      {children}
    </div>
  );
};
