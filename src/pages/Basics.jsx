import HorizontalList from '../components/HorizontalList';

import * as basics from './Basics.module.css';

function Basics({ data }) {
  const { location, email, phone, url, profiles } = data;
  const { city, region, countryCode: country } = location;

  const contactItems = [
    <a href={`mailto:${email}`}>{email}</a>,
    phone,
    <a href={url}>{url}</a>,
  ];

  const profileItems = profiles
    ? profiles
        .filter((profile) => profile.url)
        .map((profile) => <a href={profile.url}>{profile.url}</a>)
    : [];

  return (
    <section id="basics" className={basics.container}>
      <div id="contact">
        <HorizontalList items={[...contactItems, ...profileItems]} />
      </div>

      <div id="address">
        {[city, region, country]
          .filter((item) => item !== undefined)
          .join(', ')}
      </div>
    </section>
  );
}

export default Basics;