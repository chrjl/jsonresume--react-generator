import { useState, useEffect } from 'react';

import './styles/paper.css';
import './styles/App.css';

import '@fontsource/arimo/latin-400.css';
import '@fontsource/arimo/latin-400-italic.css';
import '@fontsource/arimo/latin-700.css';
import '@fontsource/arimo/latin-700-italic.css';
import '@fontsource/cousine/latin-400.css';
import '@fontsource/cousine/latin-700.css';
import '@fontsource/inter/latin-400.css';
import '@fontsource/inter/latin-600.css';
import '@fontsource/inter/latin-700.css';
import '@fontsource/work-sans/latin-600.css';

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

const initialSections = {
  label: true,
  basics: true,
  skills: true,
  languages: true,
  experience: true,
  education: true,
  certificates: true,
  projects: true,
  work: true,
  interests: true,
};

export default function App() {
  const [resume, setResume] = useState({});
  const [sections, setSections] = useState(initialSections);

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
      <SideBar
        sections={sections}
        setSections={setSections}
        defaultUrl={defaultUrl}
        setResume={setResume}
      />

      <main className="paper">
        {resume.basics && (
          <>
            <h1>{resume.basics.name}</h1>
          </>
        )}

        <hr className="paper-size" />

        {resume.basics && sections.label && <h2>{resume.basics.label}</h2>}
        {resume.basics && sections.basics && <Basics data={resume.basics} />}
        {resume.skills && sections.skills && <Skills data={resume.skills} />}
        {resume.languages && sections.languages && (
          <Languages data={resume.languages} />
        )}
        {resume.experience && sections.experience && (
          <Experience data={resume.experience} />
        )}
        {resume.education && sections.education && (
          <Education data={resume.education} />
        )}
        {resume.certificates && sections.certificates && (
          <Certificates data={resume.certificates} />
        )}
        {resume.projects && sections.projects && (
          <Projects data={resume.projects} />
        )}
        {resume.work && sections.work && <Work data={resume.work} />}
        {resume.interests && sections.interests && (
          <Interests data={resume.interests} />
        )}
      </main>
    </>
  );
}
