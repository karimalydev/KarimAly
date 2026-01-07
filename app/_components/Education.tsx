'use client';
import SectionTitle from '@/components/SectionTitle';
import { EDUCATION } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Education = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 60%',
                    end: 'bottom 50%',
                    toggleActions: 'restart none none reverse',
                    scrub: 1,
                },
            });

            tl.from('.education-item', {
                y: 50,
                opacity: 0,
                stagger: 0.3,
            });
        },
        { scope: containerRef },
    );

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'bottom 50%',
                    end: 'bottom 20%',
                    scrub: 1,
                },
            });

            tl.to(containerRef.current, {
                y: -150,
                opacity: 0,
            });
        },
        { scope: containerRef },
    );

    return (
        <section className="py-section" id="education">
            <div className="container" ref={containerRef}>
                <SectionTitle title="Education" />

                <div className="grid gap-14">
                    {EDUCATION.map((item, index) => {
                        const accentColors = [
                            'text-bright-pink dark:text-bright-pink',
                            'text-bright-yellow dark:text-bright-yellow',
                            'text-bright-orange dark:text-bright-orange',
                        ];
                        return (
                            <div key={item.degree} className="education-item group">
                                <p className="text-xl text-muted-foreground">
                                    {item.university}
                                </p>
                                <p className={`text-5xl font-anton leading-none mt-3.5 mb-2.5 ${accentColors[index % accentColors.length]} transition-colors`}>
                                    {item.degree}
                                </p>
                                <p className="text-lg text-muted-foreground">
                                    {item.duration}
                                    {item.location && ` • ${item.location}`}
                                </p>
                                {item.achievement && (
                                    <p className="text-base text-primary mt-2">
                                        {item.achievement}
                                    </p>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Education;

