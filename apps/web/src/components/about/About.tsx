import AboutHeader from "./AboutHeader";
import AboutContent from "./AboutContent";
import AboutHighlights from "./AboutHighlights";
import { ABOUT_HIGHLIGHTS } from "./data";

export default function About() {
  return (
    <section id="about" className="px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        <AboutHeader
          badge="WHY CODEVERSE"
          title="LEARN. BUILD. SUCCEED."
          description="A MODERN PLATFORM DESIGNED TO HELP DEVELOPERS MASTER SKILLS, BUILD REAL PROJECTS, AND PREPARE FOR TOP TECH CAREERS."
        />

        <div className="mt-20 grid items-center gap-16 lg:grid-cols-2">
          <AboutContent
            heading="YOUR COMPLETE AI LEARNING COMPANION."
            description="CodeVerse combines AI-powered learning, real-world projects, structured roadmaps, and interview preparation into one seamless platform. Everything you need to grow as a developer lives here."
            buttonText="EXPLORE PLATFORM"
          />

          <AboutHighlights highlights={ABOUT_HIGHLIGHTS} />
        </div>
      </div>
    </section>
  );
}
