import * as styles from './Text.module.css';
import ReactMarkdown from 'react-markdown';

interface TextProps {
  body: string;
}

export default function Text({ body }: TextProps) {
  return (
    <section id="text" className={styles.container}>
      <ReactMarkdown>{body}</ReactMarkdown>
    </section>
  );
}
