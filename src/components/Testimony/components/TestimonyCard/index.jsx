import React from "react";

import "./styles.css";

const TestimonyCard = ({
  clientFeedbackSummary,
  clientFeedback,
  clientName,
  clientJob,
  clientImg,
}) => {
  return (
    <div className="testimony-card-container">
      <div className="content">
        <div className="header">
          <p>{clientFeedbackSummary}</p>
        </div>
        <div className="body">
          <p className="text">{clientFeedback}</p>

          <div className="identity">
            <div className="content">
              <div className="client-img-container">
                <img src={clientImg} alt={clientName} />
              </div>
              <div className="details">
                <div className="name">{clientName}</div>
                <div className="job">{clientJob}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonyCard;
