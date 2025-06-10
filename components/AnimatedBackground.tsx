'use client'
import React, { useEffect } from 'react';

const AnimatedBackground: React.FC = () => {
  useEffect(() => {
    // Enhanced sparkles on mouse move
    const handleMouseMove = (e: MouseEvent) => {
      if (Math.random() > 0.8) {
        createSparkle(e.clientX, e.clientY);
      }
    };

    const createSparkle = (x: number, y: number) => {
      const sparkle = document.createElement('div');
      sparkle.className = 'enhanced-sparkle';
      sparkle.style.left = (x + Math.random() * 20 - 10) + 'px';
      sparkle.style.top = (y + Math.random() * 20 - 10) + 'px';
      sparkle.style.animationDelay = Math.random() * 1 + 's';
      
      document.body.appendChild(sparkle);
      
      setTimeout(() => {
        sparkle.remove();
      }, 3000);
    };

    // Enhanced parallax with more dramatic movement
    let ticking = false;
    
    const updateShapes = () => {
      const scrollTop = window.pageYOffset;
      const shapes = document.querySelectorAll('.floating-shape') as NodeListOf<HTMLElement>;
      const orbs = document.querySelectorAll('.floating-orb') as NodeListOf<HTMLElement>;
      
      shapes.forEach((shape, index) => {
        const speed = (index + 1) * 0.8;
        const rotation = scrollTop * 0.1 * (index + 1);
        shape.style.transform = `translateY(${scrollTop * speed * 0.15}px) rotate(${rotation}deg)`;
      });

      orbs.forEach((orb, index) => {
        const speed = (index + 1) * 0.4;
        const sway = Math.sin(Date.now() * 0.001 + index) * 20;
        orb.style.transform = `translateY(${scrollTop * speed * 0.1}px) translateX(${sway}px)`;
      });
      
      ticking = false;
    };
    
    const requestTick = () => {
      if (!ticking) {
        requestAnimationFrame(updateShapes);
        ticking = true;
      }
    };

    // Continuous animation updates
    const animateOrbs = () => {
      const orbs = document.querySelectorAll('.floating-orb') as NodeListOf<HTMLElement>;
      orbs.forEach((orb, index) => {
        const time = Date.now() * 0.001;
        const floatY = Math.sin(time + index * 2) * 10;
        const floatX = Math.cos(time * 0.5 + index) * 15;
        const currentTransform = orb.style.transform || '';
        
        if (!currentTransform.includes('translateY')) {
          orb.style.transform = `translateX(${floatX}px) translateY(${floatY}px)`;
        }
      });
      requestAnimationFrame(animateOrbs);
    };

    document.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', requestTick);
    animateOrbs();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', requestTick);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-animated"></div>
      
      {/* Floating geometric shapes */}
      <div className="absolute inset-0">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
        <div className="floating-shape shape-4"></div>
        <div className="floating-shape shape-5"></div>
        <div className="floating-shape shape-6"></div>
        <div className="floating-shape shape-7"></div>
        <div className="floating-shape shape-8"></div>
      </div>

      {/* Glowing orbs */}
      <div className="absolute inset-0">
        <div className="floating-orb orb-1"></div>
        <div className="floating-orb orb-2"></div>
        <div className="floating-orb orb-3"></div>
        <div className="floating-orb orb-4"></div>
        <div className="floating-orb orb-5"></div>
      </div>

      {/* Particle system */}
      <div className="absolute inset-0">
        <div className="particle-system">
          {[...Array(15)].map((_, i) => (
            <div key={i} className={`particle particle-${i + 1}`}></div>
          ))}
        </div>
      </div>

      {/* Mesh gradient overlay */}
      <div className="absolute inset-0 mesh-gradient"></div>
    </div>
  );
};

export default AnimatedBackground;