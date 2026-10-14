import type { Media } from '../data/portfolio';

export default function MediaGallery({ items }: { items?: Media[] }) {
  if (!items?.length) return null;
  return (
    <div className="media">
      {items.map(m => (
        <figure key={m.src}>
          <img src={m.src} alt={m.alt} loading="lazy" decoding="async" />
          {m.caption && <figcaption>{m.caption}</figcaption>}
        </figure>
      ))}
    </div>
  );
}