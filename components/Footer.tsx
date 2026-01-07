import { GENERAL_INFO } from '@/lib/data';
import { GitFork, Star } from 'lucide-react';

interface RepoStats {
    stargazers_count: number;
    forks_count: number;
}

const Footer = async () => {
    const githubRepo = process.env.NEXT_PUBLIC_GITHUB_REPO || 'karimalydev/portfolio';
    
    let stargazers_count = 0;
    let forks_count = 0;
    
    try {
        const repoStats = await fetch(
            `https://api.github.com/repos/${githubRepo}`,
            {
                next: {
                    revalidate: 60 * 60, // 1 hour
                },
            },
        );

        if (repoStats.ok) {
            const data = (await repoStats.json()) as RepoStats;
            stargazers_count = data.stargazers_count;
            forks_count = data.forks_count;
        }
    } catch (error) {
        console.error('Failed to fetch GitHub stats:', error);
    }

    return (
        <footer className="text-center pb-5" id="contact">
            <div className="container">
                <p className="text-lg">Have a project in mind?</p>
                <a
                    href={`mailto:${GENERAL_INFO.email}`}
                    className="text-3xl sm:text-4xl font-anton inline-block mt-5 mb-10 hover:underline hover:text-bright-pink dark:hover:text-bright-pink transition-colors"
                >
                    {GENERAL_INFO.email}
                </a>

                <div className="">
                    <a
                        href={`https://github.com/${githubRepo}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="leading-none text-muted-foreground hover:underline hover:text-bright-blue dark:hover:text-bright-blue transition-colors"
                    >
                        Design & built by Karim Aly
                        {(stargazers_count > 0 || forks_count > 0) && (
                            <div className="flex items-center justify-center gap-5 pt-1">
                                <span className="flex items-center gap-2 text-bright-yellow dark:text-bright-yellow">
                                    <Star size={18} /> {stargazers_count}
                                </span>
                                <span className="flex items-center gap-2 text-bright-orange dark:text-bright-orange">
                                    <GitFork size={18} /> {forks_count}
                                </span>
                            </div>
                        )}
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
