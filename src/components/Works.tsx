import { client, Work } from "@/lib/microcms";
import Image from "next/image";
import Link from "next/link";

async function getWorks(): Promise<Work[]> {
  const data = await client.getList<Work>({
    endpoint: "works",
  });
  return data.contents;
}

export default async function Works() {
  const works = await getWorks();

  return (
    <section className="sec">
      <div className="wrap">
        <div className="sec-head">
          <h2 className="sec-head__title">制作実績</h2>
          <span className="sec-head__en">Works</span>
        </div>
        <div className="works-grid">
          {works.map((work) => (
            <Link key={work.id} href={`/works/${work.id}`} className="wk">
              <div className="wk__inner">
                <div className="wk__thumb">
                  <Image
                    src={work.thumbnail.url}
                    alt={work.title}
                    width={work.thumbnail.width}
                    height={work.thumbnail.height}
                    style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }}
                  />
                </div>
                <div className="wk__info">
                  <span className="wk__category">{work.category}</span>
                  <h3 className="wk__name">{work.title}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}