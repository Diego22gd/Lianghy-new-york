import type { ReactNode } from "react";

type SectionShellProps = {
  eyebrow: string;
  title: string;
  intro: string;
  children: ReactNode;
};

export function SectionShell({ eyebrow, title, intro, children }: SectionShellProps) {
  return (
    <main className="inner-page">
      <section className="page-hero">
        <span className="page-eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{intro}</p>
      </section>
      <section className="page-content">{children}</section>
    </main>
  );
}