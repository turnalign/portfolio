import { client, Work } from "@/lib/microcms";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

async function getWork(id: string): Promise<Work> {
  try {
    const work = await client.get<Work>({
      endpoint: "works",
      contentId: id,
    });
    return work;
  } catch {
    notFound();
  }
}

export default async function WorkDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const work = await getWork(id);

  return (
    <main>
      <div className="wrap">
        <div className="work-detail">
          <Link href="/#works" className="work-detail__back">
            ← 一覧に戻る
          </Link>
          <h1 className="work-detail__title">{work.title}</h1>
          <span className="work-detail__category">{work.category}</span>
          <div className="work-detail__thumb">
            <Image
              src={work.thumbnail.url}
              alt={work.title}
              width={work.thumbnail.width}
              height={work.thumbnail.height}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className="work-detail__body">
            {work.body.split("\n").map((line, i) =>
              line === "" ? <br key={i} /> : <p key={i}>{line}</p>
            )}
          </div>
          {work.url && (
            <a
              href={work.url}
              target="_blank"
              rel="noopener noreferrer"
              className="work-detail__link"
            >
              サイトを見る →
            </a>
          )}
        </div>
      </div>
    </main>
  );
}