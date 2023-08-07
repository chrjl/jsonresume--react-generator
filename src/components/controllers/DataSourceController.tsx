import { useState } from 'react';

export default function DataSourceController({
  defaultUrl,
  setResume,
}: DataSourcePickerProps) {
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
          accept="application/json"
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

  async function submitFile(file: File) {
    const reader = new FileReader();

    reader.readAsText(file, 'utf8');
    reader.onload = () => {
      try {
        const { result } = reader;

        setResume(JSON.parse(result as string));
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
