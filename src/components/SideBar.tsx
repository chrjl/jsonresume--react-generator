import StateToggler from './controllers/StateToggler';
import DataSourceController from './controllers/DataSourceController';

import * as styles from './AppBars.module.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import InfoIcon from '@mui/icons-material/Info';

interface SideBarProps {
  sections: object;
  setSections: React.Dispatch<React.SetStateAction<object>>;
  defaultUrl: string;
  setResume: React.Dispatch<React.SetStateAction<string>>;
}

export default function SideBar({
  sections,
  setSections,
  defaultUrl,
  setResume,
}: SideBarProps) {
  return (
    <aside id="aside" className={styles.sidebar}>
      <div className={styles.controllerContainer}>
        <details>
          <summary>Data source</summary>
          <div className={styles.controller}>
            <DataSourceController
              defaultUrl={defaultUrl}
              setResume={setResume}
            />
          </div>
        </details>

        <details>
          <summary>Sections</summary>
          <div className={styles.controllers}>
            <StateToggler state={sections} setState={setSections} />
          </div>
        </details>
      </div>

      <footer>
        <a
          href="https://github.com/chrjl/jsonresume--react-generator/wiki"
          target="_blank"
          rel="noreferrer"
        >
          <InfoIcon sx={{ color: 'white' }} />
        </a>
        <a
          href="https://github.com/chrjl/jsonresume--react-generator"
          target="_blank"
          rel="noreferrer"
        >
          <GitHubIcon sx={{ color: 'white' }} />
        </a>
      </footer>
    </aside>
  );
}
