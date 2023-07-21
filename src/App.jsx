import { useState, useEffect } from 'react';

import './styles/paper.css';
import './styles/App.css';

import NavBar from './components/NavBar';
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

function App() {
  const [resume, setResume] = useState({});

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
      <NavBar defaultUrl={defaultUrl} setResume={setResume} />

      <main className="paper">
        {resume.basics && (
          <>
            <h1>{resume.basics.name}</h1>
            {resume.basics.label && <h2>{resume.basics.label}</h2>}
          </>
        )}

        <hr className="paper-size" />

        {resume.basics && <Basics data={resume.basics} />}
        {resume.skills && <Skills data={resume.skills} />}
        {resume.languages && <Languages data={resume.languages} />}
        {resume.projects && <Projects data={resume.projects} />}
        {resume.experience && <Experience data={resume.experience} />}
        {resume.education && <Education data={resume.education} />}
        {resume.certificates && <Certificates data={resume.certificates} />}
        {resume.work && <Work data={resume.work} />}
        {resume.interests && <Interests data={resume.interests} />}
      </main>
    </>
  );
}

export default App;
