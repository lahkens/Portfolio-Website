import MediaGallery from './MediaGallery';
import { useState } from 'react';
import { experience, type Entry } from '../data/portfolio';
import Section from './SectionHeading';

export function TimelineItem({ e, current }: { e: Entry; current?: boolean }) {
  const [show, setShow] = useState(false);
  return (
    <li className={'tl' + (current ? ' current' : '')}>
      <div className="tl-head">
        <h3>{e.title}</h3>
        {e.dates && <span className="dates">{e.dates}</span>}
      </div>
      <p className="role">{e.subtitle}</p>
      {e.summary && <p className="summary">{e.summary}</p>}
      <ul className="bullets">{e.bullets.map(b => <li key={b}>{b}</li>)}</ul>
            {e.tags && <ul className="tags" aria-label="Technologies">{e.tags.map(t => <li key={t}>{t}</li>)}</ul>}
            <MediaGallery items={e.media} />
      {e.links && (
        <p className="proj-links">
          {e.links.map(l => <a key={l.href} className="link" href={l.href} target="_blank" rel="noopener noreferrer">{l.label}</a>)}
        </p>
      )}
                  {e.embed && (show ? (
        <>
          <button className="preview-btn" onClick={() => setShow(false)}>Close preview</button>
          <iframe className="embed" src={e.embed} title={`${e.title} live preview`} loading="lazy" sandbox="allow-scripts allow-same-origin allow-forms allow-popups" />
        </>
      ) : (
        <button className="preview-btn" onClick={() => setShow(true)}>Load live preview</button>
      ))}
    </li>
  );
}

export function TimelineList({ items, highlightFirst, plain }: { items: Entry[]; highlightFirst?: boolean; plain?: boolean }) {
  return (
    <ol className={'timeline' + (plain ? ' plain' : '')}>
      {items.map((e, i) => <TimelineItem key={e.title + (e.dates ?? '')} e={e} current={highlightFirst && i === 0} />)}
    </ol>
  );
}

export default function Timeline() {
  return (
    <Section id="experience" title="Experience" >
      <TimelineList items={experience} highlightFirst />
    </Section>
  );
}
