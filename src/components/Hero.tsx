import { FileText, Linkedin } from 'lucide-react';
import { profile } from '../data/portfolio';

export default function Hero() {
  return (
    <section id="top" className="hero" aria-labelledby="hero-h">
      <div className="container">
        <h1 id="hero-h">{profile.name}</h1>
        <p className="lead">{profile.intro}</p>
        <div className="cta">
          <a className="btn" href="#contact">Contact Me</a>
        </div>
        <div className="links">
          <a className="link" href={profile.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={16} aria-hidden /> LinkedIn</a>
          <a className="link" href={profile.resume} target="_blank" rel="noopener noreferrer"><FileText size={16} aria-hidden /> Resume (PDF)</a>
        </div>
      </div>
    </section>
  );
}
