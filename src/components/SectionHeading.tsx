import type { ReactNode } from 'react';
interface Props { id: string; title: string; lead?: string; band?: boolean; children: ReactNode }
export default function Section({ id, title, lead, band, children }: Props) {
  return (
    <section id={id} className={'sec' + (band ? ' band' : '')} aria-labelledby={`${id}-h`}>
      <div className="container">
        <h2 id={`${id}-h`}>{title}</h2>
        {lead && <p className="sec-lead">{lead}</p>}
        {children}
      </div>
    </section>
  );
}
