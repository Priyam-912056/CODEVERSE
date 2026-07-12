import { useState } from "react";
import ROADMAP_FAQ from "../../../data/roadmapFaq";
import FAQHeader from "./FAQHeader";
import FAQItem from "./FAQItem";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="relative w-full bg-black py-20 lg:py-28 overflow-hidden">
      {/* Dynamic Background Blur Effect */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 -z-10 pointer-events-none opacity-20 flex justify-center" aria-hidden="true">
        <div className="h-100 w-200 rounded-full bg-violet-600/10 blur-[130px]" />
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <FAQHeader />

        <div className="mt-14 space-y-3.5 w-full">
          {ROADMAP_FAQ.map((faq, index) => (
            <FAQItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
              open={activeIndex === index}
              onToggle={() =>
                setActiveIndex(
                  activeIndex === index ? null : index
                )
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}