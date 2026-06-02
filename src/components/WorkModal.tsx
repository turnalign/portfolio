"use client";
import { Work } from "@/lib/microcms";
import Image from "next/image";
import { useEffect } from "react";

type Props = {
  work: Work;
  onClose: () => void;
};

export default function WorkModal({ work, onClose }: Props) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="modal-overlay is-open" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal__close" onClick={onClose} aria-label="閉じる">
          &times;
        </button>
        <div className="modal__image">
          <Image
            src={work.thumbnail.url}
            alt={work.title}
            width={work.thumbnail.width}
            height={work.thumbnail.height}
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }}
          />
        </div>
        <div className="modal__body">
          <span className="wk__category">{work.category}</span>
          <h3 className="modal__title">{work.title}</h3>
          <div className="modal__desc">
            <p>{work.body}</p>
          </div>
          {work.url && (
            <a className="modal__link" href={work.url} target="_blank" rel="noopener">
              サイトを見る
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}