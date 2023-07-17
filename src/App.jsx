import './styles/paper.css';
import './styles/App.css';

import Basics from './components/Basics';

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
    </main>
  );
}

export default App;
