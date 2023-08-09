import { useState } from 'react';
import fm, { FrontMatterResult } from 'front-matter';

const defaultUrl = 'coverletter.md';

export default function MarkdownSourceController(props: DataSourcePickerProps) {
  // const { defaultUrl, setResume } = props;
  const { setResume } = props;

  const [sourceType, setSourceType] = useState('url');
  const [urlSource, setUrlSource] = useState(defaultUrl);

  return (
    <>
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

      {sourceType == 'url' && (
        <form
          name="source"
          onSubmit={(event) => {
            event.preventDefault();

            const url = (event.target as HTMLFormElement).url.value;
            submitUrl(url);
          }}
          onReset={() => submitUrl(defaultUrl)}
        >
          <input name="url" type="text" defaultValue={urlSource}></input>
          <button type="submit">Fetch</button>
          <button type="reset">Default</button>
        </form>
      )}

      {sourceType === 'file' && (
        <input
          type="file"
          name="file"
          onChange={(event) => {
            event.preventDefault();

            if (event.target.files === null) return;
            const file = event.target.files[0];
            console.log(file);

            submitFile(file);
          }}
        ></input>
      )}
    </>
  );

  async function submitUrl(url: string) {
    try {
      const fetchUrl = await fetch(url);

      if (fetchUrl.status >= 400) {
        throw new Error(fetchUrl.statusText);
      }

      const mdText = await fetchUrl.text();
      const { attributes, body }: FrontMatterResult<object> = fm(mdText);

      setResume({ ...attributes, text: body });
    } catch (error) {
      alert(error);
    }
  }

  async function submitFile(file: File) {
    const reader = new FileReader();

    reader.readAsText(file, 'utf8');
    reader.onload = () => {
      try {
        const { result } = reader;

        if (typeof result != 'string') {
          throw new Error('invalid file');
        }

        const { attributes, body }: FrontMatterResult<object> = fm(result);
        setResume({ ...attributes, text: body });
      } catch (err) {
        alert(err.message);
      }
    };
  }
}

interface DataSourcePickerProps {
  defaultUrl: string;
  setResume: React.Dispatch<React.SetStateAction<string>>;
}
