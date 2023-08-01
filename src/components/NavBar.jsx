import PropTypes from 'prop-types';
import { useState } from 'react';

import * as navBar from './NavBar.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function NavBar(props) {
  const { defaultUrl, setResume } = props;
  const [sourceType, setSourceType] = useState('url');
  const [urlSource, setUrlSource] = useState(defaultUrl);

  return (
    <nav className={navBar.container}>
      <div className={navBar.content}>
        <select
          name="source-type"
          value={sourceType}
          onChange={(event) => {
            setSourceType(event.target.value);
          }}
        >
          <optgroup label="Source">
            <option value="url">URL</option>
            <option value="file">File</option>
          </optgroup>
        </select>

        <form
          name="source"
          onSubmit={handleSubmit}
          onReset={() => submitUrl(defaultUrl)}
        >
          {sourceType == 'url' && (
            <>
              <input name="url" type="text" defaultValue={urlSource}></input>
              <button type="submit">Fetch</button>
              <button type="reset">Default</button>
            </>
          )}

          {sourceType === 'file' && (
            <>
              <input
                type="file"
                name="file"
                accept="application/json"
                onChange={(event) => submitFile(event.target.files[0])}
              ></input>
            </>
          )}
        </form>

        <a
          href="https://github.com/chrjl/jsonresume--react-generator"
          target="_blank"
        >
          <FontAwesomeIcon icon={faGithub} style={{ color: '#ffffff' }} />
        </a>
      </div>
    </nav>
  );

  async function handleSubmit(event) {
    event.preventDefault();

    if (sourceType === 'url') {
      submitUrl(event.target.url.value);
    } else if (sourceType === 'file') {
      submitFile(event.target.file.files[0]);
    }
  }

  async function submitUrl(url) {
    try {
      const fetchResume = await fetch(url);

      if (fetchResume.status >= 400) {
        throw new Error(fetchResume.statusText);
      }

      setResume(await fetchResume.json());
      setUrlSource(url);
    } catch (error) {
      alert(error);
    }
  }

  async function submitFile(file) {
    const reader = new FileReader();

    reader.readAsText(file);
    reader.onload = () => {
      try {
        const { result } = reader;
        setResume(JSON.parse(result));
      } catch (err) {
        alert(err.message);
      }
    };
  }
}

NavBar.propTypes = {
  setResume: PropTypes.func,
};
export default NavBar;
