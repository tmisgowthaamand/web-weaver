import { useRouter } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { SiteLayout } from "./SiteLayout";

export function PolicyPage({ title, children }: { title: string; children: React.ReactNode }) {
  const router = useRouter();
  return (
    <SiteLayout>
      <div className="mx-auto max-w-3xl px-4 py-12">
        <button
          onClick={() => {
            if (window.history.length > 1) router.history.back();
            else router.navigate({ to: "/" });
          }}
          className="inline-flex items-center gap-2 text-sm text-primary hover:underline mb-6"
        >
          <ArrowLeft className="h-4 w-4" /> Back
        </button>
        <h1 className="text-4xl font-bold text-foreground mb-2">{title}</h1>
        <p className="text-sm text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>
        <article className="prose prose-sm max-w-none text-foreground/90 space-y-4 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:mt-6 [&_h2]:text-foreground">
          {children}
        </article>
      </div>
    </SiteLayout>
  );
}
