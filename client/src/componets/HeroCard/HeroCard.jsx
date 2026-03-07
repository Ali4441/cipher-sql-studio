import React from "react";
import "./HeroCard.scss";

const HeroCard = () => {
  return (
    <section className="hero">
      <div className="hero__eyebrow">SQL Learning Platform</div>

      <h1 className="hero__title">
        Write queries.<br />
        <span>Learn by doing.</span>
      </h1>

      <p className="hero__sub">
        Practice real SQL against live PostgreSQL databases.
        Get intelligent hints when stuck — not solutions.
      </p>

      <div className="hero__stats">
        <div>
          <div className="hero__stat-num" style={{ color: "var(--cyan)" }}>
            24
          </div>
          <div className="hero__stat-lbl">Assignments</div>
        </div>

        <div>
          <div className="hero__stat-num" style={{ color: "var(--easy)" }}>
            8
          </div>
          <div className="hero__stat-lbl">Easy</div>
        </div>

        <div>
          <div className="hero__stat-num" style={{ color: "var(--medium)" }}>
            10
          </div>
          <div className="hero__stat-lbl">Medium</div>
        </div>

        <div>
          <div className="hero__stat-num" style={{ color: "var(--hard)" }}>
            6
          </div>
          <div className="hero__stat-lbl">Hard</div>
        </div>
      </div>
    </section>
  );
};

export default HeroCard;