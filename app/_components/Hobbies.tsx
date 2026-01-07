'use client';
import SectionTitle from '@/components/SectionTitle';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Image from 'next/image';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const HOBBIES_IMAGES = [
    '/hobbies/IMG_5073.jpg',
    '/hobbies/GPTempDownload.jpg',
    '/hobbies/IMG_7339.jpg',
    '/hobbies/IMG_0613.jpg',
    '/hobbies/IMG_9457.jpg',
    '/hobbies/GPTempDownload (1).jpg',
    '/hobbies/IMG_1363.jpg',
    '/hobbies/IMG_8309.jpg',
    '/hobbies/IMG_8551.jpg',
    '/hobbies/IMG_8555.jpg',
];

const Hobbies = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const items = containerRef.current?.querySelectorAll('.hobby-item');
            
            if (!items?.length) return;

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 70%',
                    end: 'bottom 30%',
                    toggleActions: 'restart none none reverse',
                },
            });

            tl.from(items, {
                y: 60,
                opacity: 0,
                scale: 0.8,
                stagger: {
                    amount: 0.6,
                    from: 'random',
                },
                duration: 0.8,
                ease: 'power3.out',
            });
        },
        { scope: containerRef },
    );

    useGSAP(
        () => {
            const items = containerRef.current?.querySelectorAll('.hobby-item');
            
            if (!items?.length) return;

            items.forEach((item) => {
                gsap.to(item, {
                    scrollTrigger: {
                        trigger: item,
                        start: 'top 80%',
                        end: 'top 20%',
                        scrub: 1,
                    },
                    scale: 1.05,
                    duration: 0.3,
                });
            });
        },
        { scope: containerRef },
    );

    return (
        <section className="py-section" id="hobbies">
            <div className="container" ref={containerRef}>
                <SectionTitle title="Hobbies & Interests" />

                <div className="mt-10 max-w-4xl">
                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed slide-up-and-fade">
                        I'm a hobby collector! When I'm not coding, you'll find me 
                        <span className="text-bright-orange dark:text-bright-orange font-medium"> running marathons</span>, 
                        <span className="text-bright-blue dark:text-bright-blue font-medium"> climbing peaks</span>, 
                        <span className="text-bright-pink dark:text-bright-pink font-medium"> kitesurfing</span>, 
                        <span className="text-bright-yellow dark:text-bright-yellow font-medium"> wakeboarding</span>, 
                        <span className="text-primary dark:text-primary font-medium"> playing tennis</span>, 
                        <span className="text-bright-orange dark:text-bright-orange font-medium"> bouldering</span>, or 
                        <span className="text-bright-blue dark:text-bright-blue font-medium"> skydiving</span>. 
                        Each adventure teaches me something new: marathons build mental toughness for those late-night debugging sessions, mountain climbing sharpens my problem-solving skills, and extreme sports keep me adaptable to changing conditions (just like working with dynamic web technologies!). These experiences fuel my creativity, resilience, and collaborative spirit, making me a better engineer and teammate.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 mt-10">
                    <div className="hobby-item col-span-2 row-span-2">
                        <div className="relative w-full h-full min-h-[200px] md:min-h-[400px] rounded-lg overflow-hidden group cursor-pointer shadow-md">
                            <Image
                                src={HOBBIES_IMAGES[0]}
                                alt="Hobby"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-bright-orange/40 via-bright-pink/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                    </div>

                    <div className="hobby-item col-span-1 row-span-1">
                        <div className="relative w-full aspect-square rounded-lg overflow-hidden group cursor-pointer shadow-md">
                            <Image
                                src={HOBBIES_IMAGES[1]}
                                alt="Hobby"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                sizes="(max-width: 768px) 50vw, 25vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-bright-blue/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                    </div>

                    <div className="hobby-item col-span-1 row-span-1">
                        <div className="relative w-full aspect-square rounded-lg overflow-hidden group cursor-pointer shadow-md">
                            <Image
                                src={HOBBIES_IMAGES[2]}
                                alt="Hobby"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                sizes="(max-width: 768px) 50vw, 25vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-bright-pink/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                    </div>

                    <div className="hobby-item col-span-1 row-span-1">
                        <div className="relative w-full aspect-square rounded-lg overflow-hidden group cursor-pointer shadow-md">
                            <Image
                                src={HOBBIES_IMAGES[3]}
                                alt="Hobby"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                sizes="(max-width: 768px) 50vw, 25vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-bright-yellow/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                    </div>

                    <div className="hobby-item col-span-1 row-span-1">
                        <div className="relative w-full aspect-square rounded-lg overflow-hidden group cursor-pointer shadow-md">
                            <Image
                                src={HOBBIES_IMAGES[4]}
                                alt="Hobby"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                sizes="(max-width: 768px) 50vw, 25vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-bright-blue/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                    </div>

                    <div className="hobby-item col-span-2 row-span-2">
                        <div className="relative w-full h-full min-h-[200px] md:min-h-[400px] rounded-lg overflow-hidden group cursor-pointer shadow-md">
                            <Image
                                src={HOBBIES_IMAGES[5]}
                                alt="Hobby"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-bright-pink/40 via-bright-yellow/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                    </div>

                    <div className="hobby-item col-span-1 row-span-1">
                        <div className="relative w-full aspect-square rounded-lg overflow-hidden group cursor-pointer shadow-md">
                            <Image
                                src={HOBBIES_IMAGES[6]}
                                alt="Hobby"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                sizes="(max-width: 768px) 50vw, 25vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-bright-orange/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                    </div>

                    <div className="hobby-item col-span-1 row-span-1">
                        <div className="relative w-full aspect-square rounded-lg overflow-hidden group cursor-pointer shadow-md">
                            <Image
                                src={HOBBIES_IMAGES[7]}
                                alt="Hobby"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                sizes="(max-width: 768px) 50vw, 25vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-bright-blue/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                    </div>

                    <div className="hobby-item col-span-1 row-span-1">
                        <div className="relative w-full aspect-square rounded-lg overflow-hidden group cursor-pointer shadow-md">
                            <Image
                                src={HOBBIES_IMAGES[8]}
                                alt="Hobby"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                sizes="(max-width: 768px) 50vw, 25vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-bright-pink/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                    </div>

                    <div className="hobby-item col-span-1 row-span-1">
                        <div className="relative w-full aspect-square rounded-lg overflow-hidden group cursor-pointer shadow-md">
                            <Image
                                src={HOBBIES_IMAGES[9]}
                                alt="Hobby"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                sizes="(max-width: 768px) 50vw, 25vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-bright-yellow/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hobbies;

