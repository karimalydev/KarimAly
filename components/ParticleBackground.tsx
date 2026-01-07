'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef, useEffect, useState } from 'react';

gsap.registerPlugin(useGSAP);

const PARTICLE_COLORS = [
    { class: 'bg-bright-orange', var: 'bright-orange' },
    { class: 'bg-bright-yellow', var: 'bright-yellow' },
    { class: 'bg-bright-blue', var: 'bright-blue' },
    { class: 'bg-bright-pink', var: 'bright-pink' },
    { class: 'bg-primary', var: 'primary' },
];

const getParticleColor = (index: number) => {
    return PARTICLE_COLORS[index % PARTICLE_COLORS.length];
};

const ParticleBackground = () => {
    const particlesRef = useRef<HTMLDivElement[]>([]);
    const containerRef = useRef<HTMLDivElement>(null);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useGSAP(() => {
        if (!isMounted) return;

        particlesRef.current.forEach((particle, index) => {
            const seed = index * 0.618033988749;
            const random1 = (seed * 1000) % 1;
            const random2 = ((seed * 2000) % 1);
            const random3 = ((seed * 3000) % 1);
            const random4 = ((seed * 4000) % 1);

            const size = random1 * 8 + 6;
            const startX = random2 * window.innerWidth;
            const startY = random3 * (window.innerHeight + 1);
            const duration = random1 * 15 + 15;
            const baseOpacity = random2 * 0.4 + 0.4;

            gsap.set(particle, {
                width: size,
                height: size,
                opacity: baseOpacity,
                left: startX,
                top: startY,
            });

            gsap.to(particle, {
                y: window.innerHeight + 100,
                duration: duration,
                opacity: 0,
                repeat: -1,
                ease: 'none',
                delay: random4 * 5,
            });

            gsap.to(particle, {
                x: `+=${(random3 - 0.5) * 120}`,
                duration: random2 * 4 + 3,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut',
            });

            gsap.to(particle, {
                opacity: baseOpacity * 0.5,
                duration: random1 * 2 + 2,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut',
            });
        });
    }, [isMounted]);

    useEffect(() => {
        let animationFrame: number;
        const mousePosition = { x: 0, y: 0 };
        const targetPosition = { x: 0, y: 0 };

        const handleMouseMove = (e: MouseEvent) => {
            targetPosition.x = e.clientX;
            targetPosition.y = e.clientY;
        };

        const animate = () => {
            mousePosition.x += (targetPosition.x - mousePosition.x) * 0.1;
            mousePosition.y += (targetPosition.y - mousePosition.y) * 0.1;

            particlesRef.current.forEach((particle, index) => {
                if (!particle) return;

                const rect = particle.getBoundingClientRect();
                const particleX = rect.left + rect.width / 2;
                const particleY = rect.top + rect.height / 2;

                const dx = mousePosition.x - particleX;
                const dy = mousePosition.y - particleY;
                const distance = Math.sqrt(dx * dx + dy * dy);
                const maxDistance = 200;

                if (distance < maxDistance) {
                    const force = (maxDistance - distance) / maxDistance;
                    const angle = Math.atan2(dy, dx);
                    const moveX = Math.cos(angle) * force * 40;
                    const moveY = Math.sin(angle) * force * 40;

                    gsap.to(particle, {
                        x: `+=${moveX}`,
                        y: `+=${moveY}`,
                        scale: 1 + force * 0.8,
                        duration: 0.8,
                        ease: 'power1.out',
                    });
                } else {
                    gsap.to(particle, {
                        scale: 1,
                        duration: 0.6,
                        ease: 'power1.out',
                    });
                }
            });

            animationFrame = requestAnimationFrame(animate);
        };

        window.addEventListener('mousemove', handleMouseMove);
        animate();

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrame);
        };
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
        >
            {[...Array(80)].map((_, i) => {
                const color = getParticleColor(i);
                return (
                    <div
                        key={i}
                        ref={(el) => {
                            if (el) particlesRef.current[i] = el;
                        }}
                        className="absolute rounded-full"
                        style={{
                            background: `radial-gradient(circle, hsl(var(--${color.var}) / 0.8) 0%, hsl(var(--${color.var}) / 0.4) 50%, transparent 100%)`,
                            filter: 'blur(1px)',
                            boxShadow: `0 0 8px hsl(var(--${color.var}) / 0.3)`,
                        }}
                    />
                );
            })}
        </div>
    );
};

export default ParticleBackground;
