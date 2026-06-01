"use client";

import { works, Work } from "@/data/works";
import Image from "next/image";
import { useEffect, useState } from "react";
import WorkModal from "./WorkModal";

export default function Works() {
  const [selected, setSelected] = useState<Work | null>(null);

  useEffect(() => {
    works.forEach((work) => {
      const img = new window.Image();
      img.src = `/_next/image?url=${encodeURIComponent(work.imagePng)}&w=828&q=75`;
    });
  }, []);

  return (
    <section className="sec">
      <div className="wrap">
        <div className="sec-head">
          <span className="sec-head__num">03</span>
          <h2 className="sec-head__title">制作実績</h2>
          <span className="sec-head__en">Works</span>
        </div>
        <p className="works-note">
          No.02〜12は業務委託案件です。クライアントの秘密保持のため、詳細は割愛しています。
        </p>
        <div className="works-grid">
          {works.map((work) => (
            <div key={work.id} className="wk">
              <div className="wk__inner" onClick={() => setSelected(work)}>
                <div className="wk__thumb">
                  <Image
                    src={work.thumbPng}
                    alt={work.title}
                    width={400}
                    height={225}
                    style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }}
                  />
                </div>
                <div className="wk__info">
                  <span className="wk__num">{work.num}</span>
                  <h3 className="wk__name">{work.title}</h3>
                  <div className="wk__tags">
                    {work.tags.map((tag, i) => (
                      <span key={i} className="t">{tag}</span>
                    ))}
                  </div>
                  <p className="wk__hint">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="12" height="12">
                      <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                    </svg>
                    クリックで詳細
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selected && (
        <WorkModal work={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}