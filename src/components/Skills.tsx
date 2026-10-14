import { skills } from '../data/portfolio';
import Section from './SectionHeading';

export default function Skills() {
  return (
    <Section id="skills" title="Skills and technologies" band>
      <div className="skills">
        {skills.map(g => (
          <div key={g.group}>
            <h3>{g.group}</h3>
            <ul className="tags">{g.items.map(i => <li key={i}>{i}</li>)}</ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
