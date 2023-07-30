import HorizontalList from '../components/HorizontalList';

import * as basics from './Basics.module.css';

function Basics({ data }) {
  const { location, email, phone, url, profiles } = data;

  return (
    <section id="basics" className={basics.container}>
      <Contact email={email} phone={phone} url={url} profiles={profiles} />

      {location && <Address location={location} />}
    </section>
  );
}

function Address({ location }) {
  const { city, region, countryCode: country } = location;

  return (
    <div id="address">
      {[city, region, country].filter((item) => item !== undefined).join(', ')}
    </div>
  );
}

function Contact(props) {
  const { email, phone, url, profiles } = props;

  const contactItems = [
    email && <a href={`mailto:${email}`}>{email}</a>,
    phone,
  ].filter((item) => item !== undefined);

  const profileItems = [url, ...profiles?.map((profile) => profile.url)]
    .filter((url) => Boolean(url))
    .map((url) => <a href={url}>{url}</a>);

  return (
    <HorizontalList
      items={[
        <HorizontalList items={contactItems} />,
        <HorizontalList items={profileItems} />,
      ]}
    />
  );
}

export default Basics;
