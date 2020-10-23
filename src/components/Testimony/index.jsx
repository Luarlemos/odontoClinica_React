import React from "react";
import "./styles.css";

import useTestimony from "../../hooks/useTestimonyHook";

import TestimonyCard from "./components/TestimonyCard";

const Testimony = () => {
  const testimonies = useTestimony();

  return (
    <section className="testimony-container">
      <div className="testimony-header">
        <h2>TESTEMUNHOS</h2>
      </div>
      <span className="testimony-separator"></span>
      <div className="testimony-cards-container">
        {testimonies.map(
          (
            { client, feedback, feedback_summary, clientJob, clientImg },
            index
          ) => {
            return (
              <TestimonyCard
                key={index}
                clientFeedbackSummary={`"${feedback_summary}"`}
                clientFeedback={`"${feedback}"`}
                clientName={client}
                clientJob={clientJob}
                clientImg={clientImg}
              />
            );
          }
        )}
      </div>
    </section>
  );
};

export default Testimony;
