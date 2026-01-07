'use client';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { GENERAL_INFO, SOCIAL_LINKS } from '@/lib/data';

const MENU_LINKS = [
    {
        name: 'Home',
        href: '#banner',
    },
    {
        name: 'About',
        href: '#about-me',
    },
    {
        name: 'Skills',
        href: '#my-stack',
    },
    {
        name: 'Experience',
        href: '#my-experience',
    },
    {
        name: 'Education',
        href: '#education',
    },
    {
        name: 'Hobbies',
        href: '#hobbies',
    },
    {
        name: 'Contact',
        href: '#contact',
    },
];

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
            
            const sections = MENU_LINKS.map(link => link.href.substring(1));
            const scrollPosition = window.scrollY + 100;

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = document.getElementById(sections[i]);
                if (section) {
                    const offsetTop = section.offsetTop;
                    if (scrollPosition >= offsetTop) {
                        setActiveSection(sections[i]);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        setIsMenuOpen(false);
        const element = document.querySelector(href);
        if (element) {
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
            });
        }
    };

    return (
        <>
            <nav
                className={cn(
                    'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
                    scrolled
                        ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-lg'
                        : 'bg-transparent',
                )}
            >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 md:h-20">
                        <a
                            href="#banner"
                            onClick={(e) => handleNavClick(e, '#banner')}
                            className="text-xl md:text-2xl font-anton text-primary hover:text-bright-blue dark:hover:text-bright-blue transition-colors"
                        >
                            Karim Aly
                        </a>

                        <div className="hidden md:flex items-center gap-1 lg:gap-2">
                            {MENU_LINKS.map((link) => {
                                const isActive = activeSection === link.href.substring(1);
                                return (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        onClick={(e) => handleNavClick(e, link.href)}
                                        className={cn(
                                            'px-3 lg:px-4 py-2 rounded-lg text-sm lg:text-base font-medium transition-all duration-300 relative',
                                            isActive
                                                ? 'text-primary bg-primary/10'
                                                : 'text-muted-foreground hover:text-foreground hover:bg-background-light',
                                        )}
                                    >
                                        {link.name}
                                        {isActive && (
                                            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary" />
                                        )}
                                    </a>
                                );
                            })}
                        </div>

                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden p-2 rounded-lg hover:bg-background-light transition-colors"
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? (
                                <X size={24} className="text-foreground" />
                            ) : (
                                <Menu size={24} className="text-foreground" />
                            )}
                        </button>
                    </div>
                </div>
            </nav>

            <div
                className={cn(
                    'fixed inset-0 z-40 bg-black/70 backdrop-blur-sm transition-all duration-300 md:hidden',
                    {
                        'opacity-0 invisible pointer-events-none': !isMenuOpen,
                        'opacity-100 visible': isMenuOpen,
                    },
                )}
                onClick={() => setIsMenuOpen(false)}
            />

            <div
                className={cn(
                    'fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-background-light border-l border-border z-50 transform transition-transform duration-300 md:hidden',
                    {
                        'translate-x-0': isMenuOpen,
                        'translate-x-full': !isMenuOpen,
                    },
                )}
            >
                <div className="flex flex-col h-full p-6">
                    <div className="flex items-center justify-between mb-8">
                        <span className="text-xl font-anton text-primary">Menu</span>
                        <button
                            onClick={() => setIsMenuOpen(false)}
                            className="p-2 rounded-lg hover:bg-background transition-colors"
                        >
                            <X size={24} />
                        </button>
                    </div>

                    <nav className="flex-1">
                        <ul className="space-y-2">
                            {MENU_LINKS.map((link) => {
                                const isActive = activeSection === link.href.substring(1);
                                return (
                                    <li key={link.name}>
                                        <a
                                            href={link.href}
                                            onClick={(e) => handleNavClick(e, link.href)}
                                            className={cn(
                                                'block px-4 py-3 rounded-lg text-lg font-medium transition-all duration-300',
                                                isActive
                                                    ? 'text-primary bg-primary/10 border-l-4 border-primary'
                                                    : 'text-muted-foreground hover:text-foreground hover:bg-background',
                                            )}
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>

                    <div className="mt-auto pt-6 border-t border-border">
                        <p className="text-sm text-muted-foreground mb-4">Social Links</p>
                        <div className="flex flex-col gap-2">
                            {SOCIAL_LINKS.map((link, idx) => {
                                const hoverColors = [
                                    'hover:text-bright-blue dark:hover:text-bright-blue',
                                    'hover:text-bright-pink dark:hover:text-bright-pink',
                                ];
                                return (
                                    <a
                                        key={link.name}
                                        href={link.url}
                                        target="_blank"
                                        rel="noreferrer"
                                        className={`text-base capitalize hover:underline transition-colors ${hoverColors[idx % hoverColors.length]}`}
                                    >
                                        {link.name}
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
