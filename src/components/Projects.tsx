import { projects } from '../data/portfolio';
import Section from './SectionHeading';
import { TimelineList } from './Timeline';

const items = projects.map(p => ({
  title: p.title,
  subtitle: p.kind,
  summary: p.problem,
  bullets: [p.approach, p.impact],
  tags: p.tags,
  links: p.links,
  embed: p.embed,
    media: p.media,
}));
export default function Projects() {
  return (
    <Section id="projects" title="Projects" >
     <TimelineList items={items} plain />
    </Section>
  );
}