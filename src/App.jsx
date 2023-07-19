import './styles/paper.css';
import './styles/App.css';

import Basics from './components/Basics';
import Skills from './components/Skills';
import Languages from './components/Languages';
import Education from './components/Education';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Interests from './components/Interests';

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

      <Basics data={resume.basics} />
      <Skills data={resume.skills} />
      <Education data={resume.education} />
      <Projects data={resume.projects} />
      <Certificates data={resume.certificates} />
      <Languages data={resume.languages} />
      <Interests data={resume.interests} />
    </main>
  );
}

export default App;
