import type { ReactNode } from 'react';
export function SectionHeading({ eyebrow, title, description, action, centered = false }: { eyebrow: string; title: ReactNode; description?: string; action?: ReactNode; centered?: boolean }) {
 return <div className={`section-heading ${centered ? 'centered' : ''}`}><div><p className="eyebrow"><span />{eyebrow}</p><h2>{title}</h2>{description && <p className="section-description">{description}</p>}</div>{action}</div>;
}
