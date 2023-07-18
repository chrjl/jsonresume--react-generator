import './styles/paper.css';
import './styles/App.css';

import Basics from './components/Basics';
import Education from './components/Education';
import Projects from './components/Projects';
import Certificates from './components/Certificates';

import resume from './assets/resume.json';

if (resume.basics.name) {
  document.title += ` | ${resume.basics.name}`;
}

function App() {
  return (
    <main className="paper">
      <h1>{resume.basics.name}</h1>
      <h2>{resume.basics.label}</h2>

      <Basics data={resume.basics} />
      <Education data={resume.education} />
      <Projects data={resume.projects} />
      <Certificates data={resume.certificates} />
    </main>
  );
}

export default App;
