import './styles/paper.css';
import './styles/App.css';

import Basics from './pages/Basics';
import Certificates from './pages/Certificates';
import Education from './pages/Education';
import Experience from './pages/Experience';
import Interests from './pages/Interests';
import Languages from './pages/Languages';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Work from './pages/Work';

import resume from './assets/resume.json';

if (resume.basics.name) {
  document.title += ` | ${resume.basics.name}`;
}

function App() {
  return (
    <main className="paper">
      <h1>{resume.basics.name}</h1>
      <h2>{resume.basics.label}</h2>

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
  );
}

export default App;
