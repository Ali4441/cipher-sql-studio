import React from "react";
import "./AssignmentsCard.scss";
import { useNavigate } from "react-router-dom";


const AssignmentsCard = ({ assignments }) => {
  const navigate = useNavigate();

  const goToAttempt = (id) => {
    navigate(`/Attempt/${id}`);

  };
  return (
    <div className="cards">

      {assignments.map((item) => (
        <div
          className="assignment-card"
          key={item.id}
          onClick={() => goToAttempt(item.id)}
        >

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
      ))}

    </div>
  );
};

export default AssignmentsCard;