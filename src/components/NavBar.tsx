import DataSourceController from './controllers/DataSourceController';

import * as styles from './AppBars.module.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import MenuIcon from '@mui/icons-material/Menu';

export default function NavBar({
  defaultUrl,
  setResume,
  setShowSideBar,
}: NavBarProps) {
  return (
    <nav className={styles.container}>
      <div>
        <button
          type="button"
          onClick={() => setShowSideBar((showSideBar) => !showSideBar)}
        >
          <MenuIcon sx={{height: '0.5em'}} />
        </button>
        <DataSourceController defaultUrl={defaultUrl} setResume={setResume} />
      </div>

      <div className={styles.icons}>
        <a
          href="https://github.com/chrjl/jsonresume--react-generator"
          target="_blank"
          rel="noreferrer"
        >
          <GitHubIcon />
        </a>
      </div>
    </nav>
  );
}

interface NavBarProps {
  defaultUrl: string;
  setResume: React.Dispatch<React.SetStateAction<string>>;
  setShowSideBar: React.Dispatch<React.SetStateAction<boolean>>;
}
