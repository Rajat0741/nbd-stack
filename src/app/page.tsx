import { headers } from "next/headers";
import Link from "next/link";
import { DocsLinks } from "@/layout/docs-links";
import { buttonVariants } from "@/components/ui/button";
import { auth } from "@/lib/auth";

export default async function Home() {
  const session = await auth.api.getSession({ headers: await headers() });

  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <div className="mx-auto max-w-2xl space-y-8">
        <div className="space-y-4">
          <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
            Project Scaffolding <br />
            <span className="text-muted-foreground">made simple.</span>
          </h1>
          <p className="text-lg leading-8 text-muted-foreground">
            A production-ready template with Better Auth, Drizzle ORM, and
            Next.js. Clean code, simple UI, and server-side route protection.
          </p>
        </div>

        <div className="flex flex-col items-center gap-6">
          {session ? (
            <Link href="/profile" className={buttonVariants({ size: "lg" })}>
              Go to Profile
            </Link>
          ) : (
            <Link href="/login" className={buttonVariants({ size: "lg" })}>
              Sign In
            </Link>
          )}
          <DocsLinks />
        </div>
      </div>
    </main>
  );
}
