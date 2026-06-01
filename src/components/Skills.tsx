import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <section className="sec">
      <div className="wrap">
        <div className="sec-head">
          <span className="sec-head__num">02</span>
          <h2 className="sec-head__title">スキルセット</h2>
          <span className="sec-head__en">Skills</span>
        </div>
        <div className="skill-list">
          {skills.map((skill, index) => (
            <div key={index} className="skill-row">
              <h3 className="skill-row__name">{skill.name}</h3>
              <p className="skill-row__desc">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}