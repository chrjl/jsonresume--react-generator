import * as styles from './NavBar.module.css';

export default function SideBar({ sections, setSections }: SideBarProps) {
  return (
    <aside id="aside" className={styles.container}>
      <strong>SECTIONS:</strong>

      {Object.keys(sections).map((section) => (
        <label key={section}>
          <input
            type="checkbox"
            name={section}
            checked={sections[section]}
            onChange={(event) =>
              setSections((sections) => ({
                ...sections,
                [section]: !sections[section],
              }))
            }
          />
          {section}
        </label>
      ))}
    </aside>
  );
}

interface SideBarProps {
  sections: object;
  setSections: React.Dispatch<React.SetStateAction<object>>;
}
