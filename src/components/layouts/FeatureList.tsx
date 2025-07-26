import FeatureCard from "@/components/ui/FeatureCard";

const FeatureList = () => {
  return (
    <div className="w-4xl flex justify-between">
      <FeatureCard
        icon="icon_1.svg"
        iconAlt="icon 1"
        headline="AI-Powered Analysis"
        context="Our AI evaluates your portfolio's content, design, and overall effectiveness"
      />
      <FeatureCard
        icon="icon_2.svg"
        iconAlt="icon 2"
        headline="Detailed Scoring"
        context="Receive a score based on key metrics, helping you understand your portfoollio's strengths and weaknesses"
      />
      <FeatureCard
        icon="icon_3.svg"
        iconAlt="icon 3"
        headline="Actionable Suggestions"
        context="Get three specific suggestionns for improvement, tailored to your portfolio's unique needs."
      />
    </div>
  );
};

export default FeatureList;
