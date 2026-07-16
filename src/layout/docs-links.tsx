import { ArrowUpRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

export function DocsLinks() {
  const docs = [
    { name: "Next.js", href: "https://nextjs.org/docs" },
    { name: "Better Auth", href: "https://better-auth.com" },
    { name: "Drizzle ORM", href: "https://orm.drizzle.team" },
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      {docs.map((doc) => (
        <a
          key={doc.name}
          href={doc.href}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonVariants({ variant: "outline", size: "sm" })}
        >
          {doc.name}
          <ArrowUpRight className="size-3.5 opacity-65" />
        </a>
      ))}
    </div>
  );
}
