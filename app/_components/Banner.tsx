'use client';
import ArrowAnimation from '@/components/ArrowAnimation';
import Button from '@/components/Button';
import { GENERAL_INFO, SOCIAL_LINKS } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { Github, Linkedin } from 'lucide-react';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Banner = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'bottom 70%',
                    end: 'bottom 10%',
                    scrub: 1,
                },
            });

            tl.fromTo(
                '.slide-up-and-fade',
                { y: 0 },
                { y: -150, opacity: 0, stagger: 0.02 },
            );
        },
        { scope: containerRef },
    );

    return (
        <section className="relative overflow-hidden pt-16 md:pt-20" id="banner">
            <ArrowAnimation />
            <div
                className="container h-[100svh] min-h-[530px] max-md:pb-10 flex justify-between items-center max-md:flex-col"
                ref={containerRef}
            >
                <div className="max-md:grow max-md:flex flex-col justify-center items-start max-w-[544px]">
                    <h1 className="banner-title slide-up-and-fade leading-[.95] text-6xl sm:text-[80px] font-anton">
                        <span className="text-primary">FRONTEND</span>
                        <br /> <span className="ml-4">ENGINEER</span>
                    </h1>
                    <p className="banner-description slide-up-and-fade mt-6 text-lg text-muted-foreground">
                        Hi! I&apos;m{' '}
                        <span className="font-medium text-foreground">
                            Karim Aly
                        </span>
                        . A Software Engineer with 3+ years of experience in building high-performance, scalable, and responsive web solutions.
                    </p>
                    <div className="flex items-center gap-4 mt-9">
                        <Button
                            as="link"
                            target="_blank"
                            rel="noopener noreferrer"
                            href="/SoftwareEngineer.pdf"
                            variant="primary"
                            className="banner-button slide-up-and-fade"
                        >
                            Download CV
                        </Button>
                        <div className="flex items-center gap-3 slide-up-and-fade">
                            <a
                                href={SOCIAL_LINKS.find(link => link.name === 'github')?.url || '#'}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-full bg-background-light border border-border hover:bg-bright-blue hover:border-bright-blue dark:hover:bg-bright-blue dark:hover:border-bright-blue transition-all duration-300 group"
                                aria-label="GitHub"
                            >
                                <Github 
                                    size={28} 
                                    className="text-foreground group-hover:text-dark-charcoal dark:group-hover:text-dark-charcoal transition-colors" 
                                />
                            </a>
                            <a
                                href={SOCIAL_LINKS.find(link => link.name === 'linkedin')?.url || '#'}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-full bg-background-light border border-border hover:bg-bright-pink hover:border-bright-pink dark:hover:bg-bright-pink dark:hover:border-bright-pink transition-all duration-300 group"
                                aria-label="LinkedIn"
                            >
                                <Linkedin 
                                    size={28} 
                                    className="text-foreground group-hover:text-dark-charcoal dark:group-hover:text-dark-charcoal transition-colors" 
                                />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="md:absolute bottom-[10%] right-[4%] flex md:flex-col gap-4 md:gap-8 text-center md:text-right">
                    <div className="slide-up-and-fade">
                        <h5 className="text-3xl sm:text-4xl font-anton text-bright-yellow dark:text-bright-yellow mb-1.5">
                            3+
                        </h5>
                        <p className="text-muted-foreground">
                            Years of Experience
                        </p>
                    </div>
                    <div className="slide-up-and-fade">
                        <h5 className="text-3xl sm:text-4xl font-anton text-bright-blue dark:text-bright-blue mb-1.5">
                            MSc
                        </h5>
                        <p className="text-muted-foreground">
                            Advanced Computer Science
                        </p>
                    </div>
                    <div className="slide-up-and-fade">
                        <h5 className="text-3xl sm:text-4xl font-anton text-bright-pink dark:text-bright-pink mb-1.5">
                            10K+
                        </h5>
                        <p className="text-muted-foreground">Hours Worked</p>
                    </div>
                    <div className="slide-up-and-fade">
                        <h5 className="text-3xl sm:text-4xl font-anton text-bright-orange dark:text-bright-orange mb-1.5">
                            1000+
                        </h5>
                        <p className="text-muted-foreground">Leetcode Champion</p>
                    </div>
                    <div className="slide-up-and-fade">
                        <h5 className="text-3xl sm:text-4xl font-anton text-primary dark:text-primary mb-1.5">
                            80+
                        </h5>
                        <p className="text-muted-foreground">3D Models Designed</p>
                    </div>
                    <div className="slide-up-and-fade">
                        <h5 className="text-3xl sm:text-4xl font-anton text-bright-yellow dark:text-bright-yellow mb-1.5">
                            400+
                        </h5>
                        <p className="text-muted-foreground">Git Contributions 2025-2026</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
