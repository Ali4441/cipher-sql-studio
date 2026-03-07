import React from "react";
import "./AssignmentsCard.scss";

const AssignmentsCard = ({ assignments }) => {
  return (
    <>
      {assignments.map((item) => {
        return (
          <div className="assignment-card" key={item.id}>
            <div className="card-header">
              <span className="card-id">#{item.id}</span>

              <span className={`difficulty ${item.difficulty}`}>
                {item.difficulty}
              </span>
            </div>

            <h3 className="card-title">{item.title}</h3>

            <p className="card-description">{item.description}</p>

            <div className="card-bottom">
              <div className="tags">
                {item.tags.map((tag, i) => (
                  <span key={i} className="tag">
                    {tag}
                  </span>
                ))}
              </div>

              <span className="tables">{item.tables} tables</span>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default AssignmentsCard;