import { useState } from "react";
import ROADMAP_FAQ from "../../../data/roadmapFaq";
import FAQHeader from "./FAQHeader";
import FAQItem from "./FAQItem";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <FAQHeader />

      <div className="mt-14 space-y-4">
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
    </section>
  );
}