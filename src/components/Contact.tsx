import { FileText, Linkedin, Mail } from 'lucide-react';
import { profile } from '../data/portfolio';
import Section from './SectionHeading';

export default function Contact() {
  return (
    <Section id="contact" title="Contact" band>
      <div className="contact-links">
        <a className="link" href={`mailto:${profile.email}`}><Mail size={16} aria-hidden /> {profile.email}</a>
        <a className="link" href={profile.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={16} aria-hidden /> LinkedIn</a>
        <a className="link" href={profile.resume} target="_blank" rel="noopener noreferrer"><FileText size={16} aria-hidden /> Resume (PDF)</a>
      </div>
    </Section>
  );
}

export function Footer() {
  return (
    <footer className="foot">
      <div className="container"><span>{profile.name}, {new Date().getFullYear()}</span><span>VibeCoded with React</span></div>
    </footer>
  );
}
