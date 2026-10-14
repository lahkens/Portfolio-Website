import { education } from '../data/portfolio';
import Section from './SectionHeading';
import { TimelineList } from './Timeline';

export default function Education() {
  return (
    <Section id="education" title="Education">
      <TimelineList items={education} />
    </Section>
  );
}
