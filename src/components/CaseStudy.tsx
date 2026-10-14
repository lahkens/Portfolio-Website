import { caseStudy as c } from '../data/portfolio';
import Section from './SectionHeading';

export default function CaseStudy() {
  return (
    <Section id="case-study" title="Case study" lead={c.title} band>
      <div className="cs">
        <div className="cs-col"><h3>Problem</h3><p className="muted">{c.problem}</p></div>
        <div className="cs-col"><h3>Approach</h3><ul className="bullets">{c.approach.map(a => <li key={a}>{a}</li>)}</ul></div>
        <div className="cs-col">
          <h3>Results</h3>
          <dl className="stats">{c.stats.map(s => <div className="stat" key={s.value}><dt>{s.value}</dt><dd>{s.label}</dd></div>)}</dl>
        </div>
      </div>
      <ol className="flow" aria-label="Simplified architecture">
        {c.flow.map(f => <li key={f.t}><b>{f.t}</b><span>{f.d}</span></li>)}
      </ol>
    </Section>
  );
}
