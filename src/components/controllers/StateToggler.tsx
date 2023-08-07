import * as styles from './StateToggler.module.css';

interface StateTogglerProps {
  state: BooleanStateObject;
  setState: React.Dispatch<React.SetStateAction<BooleanStateObject>>;
}

interface BooleanStateObject {
  [key: string]: boolean;
}

export default function StateToggler(props: StateTogglerProps) {
  const { state, setState } = props;

  function handleChange(event: React.ChangeEvent<HTMLFormElement>) {
    const { name, checked } = event.target;
    setState((state) => ({ ...state, [name]: checked }));
  }

  return (
    <form onChange={handleChange} className={styles.verticalForm}>
      {Object.keys(state).map((key) => (
        <label key={key}>
          <input type="checkbox" name={key} checked={state[key]} />
          {key}
        </label>
      ))}
    </form>
  );
}
