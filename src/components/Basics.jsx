import HorizontalList from './HorizontalList';

function Basics({ data }) {
  const { location, email, phone, url, profiles } = data;
  const { city, region, countryCode: country } = location;

  const contactItems = [
    <a href={`mailto:${email}`}>{email}</a>,
    phone,
    <a href={url}>{url}</a>,
  ];

  const profileItems = profiles
    ? profiles.map((profile) => <a href={profile.url}>{profile.url}</a>)
    : [];

  return (
    <section id="basics">
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
