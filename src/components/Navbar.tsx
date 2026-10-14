import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { nav, profile } from '../data/portfolio';

const ids = ['top', ...nav.map(n => n.id)];

function useActive() {
  const [active, setActive] = useState('top');
  useEffect(() => {
    const io = new IntersectionObserver(
      es => es.forEach(e => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-40% 0px -55% 0px' });
    ids.forEach(id => { const el = document.getElementById(id); if (el) io.observe(el); });
    return () => io.disconnect();
  }, []);
  return active;
}

export default function Navbar() {
  const active = useActive();
  const [open, setOpen] = useState(false);
  return (
    <header className="nav">
      <div className="container nav-in">
        <a className="logo" href="#top">{profile.name}</a>
        <button className="menu" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="nav-links" onClick={() => setOpen(!open)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
        <nav aria-label="Primary">
          <ul id="nav-links" className={open ? 'open' : ''}>
            {nav.map(n => (
              <li key={n.id}>
                <a href={`#${n.id}`} aria-current={active === n.id ? 'true' : undefined} onClick={() => setOpen(false)}>{n.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
