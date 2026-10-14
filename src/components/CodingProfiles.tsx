import { useState } from 'react';
import { codingProfiles, type CodingProfile } from '../data/portfolio';
import Section from './SectionHeading';

function ProfileItem({ p }: { p: CodingProfile }) {
  const [show, setShow] = useState(false);
  return (
    <li className="profile">
      <h3>{p.platform}</h3>
      <p className="muted">{p.handle}</p>
      {p.note && <p>{p.note}</p>}
      <a className="link" href={p.href} target="_blank" rel="noopener noreferrer">Open profile</a>
      {p.image && <img className="profile-img" src={p.image} alt={`${p.platform} profile stats`} loading="lazy" />}
      {p.embed && (show ? (
        <>
          <button className="preview-btn" onClick={() => setShow(false)}>Close preview</button>
          <iframe className="embed" src={p.embed} title={`${p.platform} profile preview`} loading="lazy" sandbox="allow-scripts allow-same-origin allow-forms allow-popups" />
        </>
      ) : (
        <button className="preview-btn" onClick={() => setShow(true)}>Load live preview</button>
      ))}
    </li>
  );
}

export default function CodingProfiles() {
  return (
    <Section id="coding" title="Coding profiles">
      <ul className="profiles">{codingProfiles.map(p => <ProfileItem key={p.href} p={p} />)}</ul>
    </Section>
  );
}