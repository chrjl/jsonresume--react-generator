import { useState, useEffect } from 'react';

import './styles/paper.css';
import './styles/App.css';

import '@fontsource/arimo/latin-400.css';
import '@fontsource/arimo/latin-400-italic.css';
import '@fontsource/arimo/latin-700.css';
import '@fontsource/cousine/latin-400.css';
import '@fontsource/cousine/latin-700.css';

import NavBar from './components/NavBar';
import SideBar from './components/SideBar';

import Basics from './pages/Basics';
import Certificates from './pages/Certificates';
import Education from './pages/Education';
import Experience from './pages/Experience';
import Interests from './pages/Interests';
import Languages from './pages/Languages';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Work from './pages/Work';

let didInit = false;
const defaultUrl = 'resume.json';

const sections = {
  basics: true,
  skills: true,
  languages: true,
  projects: true,
  experience: true,
  education: true,
  certificates: true,
  work: true,
  interests: true,
};

export default function App() {
  const [resume, setResume] = useState({});
  const [showSideBar, setShowSideBar] = useState(false);
  const [showSections, setShowSections] = useState(sections);

  // initialize app by fetching a sample
  useEffect(() => {
    if (didInit) return;

    fetch(defaultUrl)
      .then((res) => res.json(res))
      .then((result) => setResume(result))
      .then(() => {
        didInit = true;
      });
  }, []);

  if (resume?.basics?.name) {
    document.title = `Resume | ${resume.basics.name}`;
  } else {
    document.title = 'Resume';
  }

  return (
    <>
      <NavBar
        defaultUrl={defaultUrl}
        setResume={setResume}
        setShowSideBar={setShowSideBar}
      />
      {showSideBar && (
        <SideBar sections={showSections} setSections={setShowSections} />
      )}

      <main className="paper">
        {resume.basics && (
          <>
            <h1>{resume.basics.name}</h1>
            {resume.basics.label && <h2>{resume.basics.label}</h2>}
          </>
        )}

        <hr className="paper-size" />

        {resume.basics && showSections.basics && (
          <Basics data={resume.basics} />
        )}
        {resume.skills && showSections.skills && (
          <Skills data={resume.skills} />
        )}
        {resume.languages && showSections.languages && (
          <Languages data={resume.languages} />
        )}
        {resume.projects && showSections.projects && (
          <Projects data={resume.projects} />
        )}
        {resume.experience && showSections.experience && (
          <Experience data={resume.experience} />
        )}
        {resume.education && showSections.education && (
          <Education data={resume.education} />
        )}
        {resume.certificates && showSections.certificates && (
          <Certificates data={resume.certificates} />
        )}
        {resume.work && showSections.work && <Work data={resume.work} />}
        {resume.interests && showSections.interests && (
          <Interests data={resume.interests} />
        )}
      </main>
    </>
  );
}
