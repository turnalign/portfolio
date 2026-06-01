import { careers } from "@/data/career";

export default function Career() {
  return (
    <section className="sec">
      <div className="wrap">
        <div className="sec-head">
          <span className="sec-head__num">01</span>
          <h2 className="sec-head__title">経歴</h2>
          <span className="sec-head__en">Career</span>
        </div>
        <div className="career-list">
          {careers.map((item, index) => (
            <div key={index} className="career-row">
              <span className="career-row__year">{item.period}</span>
              <div className="career-row__content">
                <p className="career-row__text">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}