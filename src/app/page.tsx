import ExplanationPanel from "@/components/layouts/ExplanationPanel";
import FeatureList from "@/components/layouts/FeatureList";
import Header from "@/components/layouts/Header";
import Hero from "@/components/layouts/Hero";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="min-h-screen flex flex-col items-center">
        <Hero />
        <div className="flext flex-col mb-10">
          <ExplanationPanel />
          <FeatureList />
        </div>
      </div>
    </div>
  );
}
