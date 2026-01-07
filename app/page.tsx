import AboutMe from './_components/AboutMe';
import Banner from './_components/Banner';
import Experiences from './_components/Experiences';
import Skills from './_components/Skills';
import Education from './_components/Education';
import Hobbies from './_components/Hobbies';

export default function Home() {
    return (
        <div>
            <Banner />
            <AboutMe />
            <Skills />
            <Experiences />
            <Education />
            <Hobbies />
        </div>
    );
}
