import "@/styles/index.css"
import "@/app/globals.css"
import { Suspense } from "react";
import HomeWelcome from "@/components/custom/home-welcome";
import GitHubButton from "@/components/custom/home-header";
import { Spinner } from "@/components/ui/spinner";

export default function Home() {
  return (
    <>
      <header className="flex items-center justify-center">
        <Suspense fallback={<Spinner />}>
          <GitHubButton /> {/* SSR */}
        </Suspense>
      </header>
      
      <main className="flex flex-col items-center justify-center">
        <HomeWelcome /> {/* SSR */}
      </main>
    </>
  );
}
