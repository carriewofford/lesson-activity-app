
import React, { useState } from "react";

// Type definitions
interface KeyConcept {
  title: string;
  definition: string;
  icon?: string;
  altText?: string;
  example?: string;
}

interface GuidanceItem {
  point: string;
  explanation: string;
}

interface ResourceItem {
  name: string;
  usage: string;
  benefit: string;
}

interface Option {
  label: string;
  text: string;
}

interface FeedbackItem {
  label: string;
  text: string;
}

interface Question {
  prompt: string;
  options: Option[];
  feedback: FeedbackItem[];
}

interface GlossaryItem {
  term: string;
  definition: string;
  context: string;
}

interface LessonData {
  title: string;
  metadataBadges: string[];
  scenarioHook: string;
  section1: {
    title: string;
    openingText: string;
    keyConcepts: KeyConcept[];
  };
  section2: {
    title: string;
    guidance: GuidanceItem[];
  };
  section3: {
    title: string;
    resources: ResourceItem[];
  };
  selfReflection: {
    questions: Question[];
  };
  glossary: GlossaryItem[];
  scoring: string;
}

// Fallback UI components
const Card = ({ children }: { children: React.ReactNode }) => <div className="border rounded p-4 bg-white shadow-sm mb-4">{children}</div>;
const CardContent = ({ children }: { children: React.ReactNode }) => <div>{children}</div>;
const Button = ({ children, onClick }: { children: React.ReactNode; onClick: () => void }) => <button className="bg-blue-500 text-white px-4 py-2 rounded mt-2" onClick={onClick}>{children}</button>;

const Accordion = ({ children }: { children: React.ReactNode }) => <div className="space-y-2">{children}</div>;
const AccordionItem = ({ title, children }: { title: string; children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border rounded p-2">
      <div className="font-semibold cursor-pointer" onClick={() => setOpen(!open)}>
        {title} {open ? "▲" : "▼"}
      </div>
      {open && <div className="mt-2">{children}</div>}
    </div>
  );
};

const LessonActivity = ({ data }: { data: LessonData }) => {
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: string }>({});
  const [revealed, setRevealed] = useState<{ [key: number]: boolean }>({});

  const handleSelect = (questionId: number, optionId: string) => {
    setSelectedAnswers((prev) => ({ ...prev, [questionId]: optionId }));
  };

  const handleReveal = (id: number) => {
    setRevealed((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <div className="p-6 space-y-8 font-sans max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold">{data.title}</h1>

      <div className="flex flex-wrap gap-2 text-sm">
        {data.metadataBadges.map((badge, index) => (
          <span key={index} className="bg-gray-200 px-3 py-1 rounded-full">
            {badge}
          </span>
        ))}
      </div>

      <section>
        <h2 className="text-2xl font-semibold">Scenario</h2>
        <p className="mt-1 text-gray-700">{data.scenarioHook}</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">{data.section1.title}</h2>
        <p className="text-gray-700 mt-1">{data.section1.openingText}</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          {data.section1.keyConcepts.map((concept, idx) => (
            <Card key={idx}>
              <CardContent>
                <div className="font-bold text-lg mb-2">{concept.title}</div>
                {concept.icon && <img src={concept.icon} alt={concept.altText} className="w-12 h-12 my-2" />}
                <p className="text-sm text-gray-800">{concept.definition}</p>
                {concept.example && <em className="text-xs block mt-1">Example: {concept.example}</em>}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">{data.section2.title}</h2>
        <ul className="list-disc ml-6 space-y-2 mt-2 text-gray-700">
          {data.section2.guidance.map((item, idx) => (
            <li key={idx}><strong>{item.point}</strong>: {item.explanation}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">{data.section3.title}</h2>
        <Accordion>
          {data.section3.resources.map((res, idx) => (
            <AccordionItem key={idx} title={res.name}>
              <p>{res.usage}</p>
              <em className="text-sm">{res.benefit}</em>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Self-Reflection</h2>
        {data.selfReflection.questions.map((q, idx) => (
          <div key={idx} className="mb-6">
            <p className="font-semibold mb-2">{q.prompt}</p>
            <div className="space-y-2">
              {q.options.map((opt, optIdx) => (
                <div key={optIdx} className="flex items-start">
                  <input
                    type="radio"
                    name={`question-${idx}`}
                    id={`q${idx}-opt${optIdx}`}
                    checked={selectedAnswers[idx] === opt.label}
                    onChange={() => handleSelect(idx, opt.label)}
                    className="mr-2 mt-1"
                  />
                  <label htmlFor={`q${idx}-opt${optIdx}`}>{opt.label}. {opt.text}</label>
                </div>
              ))}
              <Button onClick={() => handleReveal(idx)}>Reveal Feedback</Button>
              {revealed[idx] && selectedAnswers[idx] && (
                <div className="mt-2 text-sm italic bg-gray-100 p-2 rounded">
                  {q.feedback.find((f) => f.label === selectedAnswers[idx])?.text}
                </div>
              )}
            </div>
          </div>
        ))}
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Glossary</h2>
        <ul className="list-disc ml-6 space-y-1 text-gray-700">
          {data.glossary.map((term, idx) => (
            <li key={idx}><strong>{term.term}</strong>: {term.definition} <em>({term.context})</em></li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default LessonActivity;
