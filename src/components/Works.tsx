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
    <section className="fade-up">
      <h2 className="font-outfit text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white tracking-wide mb-8">Works</h2>

      <div className="space-y-4">
        {works.map((work) => (
          <Link key={work.id} href={`/works/${work.id}`} className="work-card card block overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-60 lg:w-64 shrink-0 aspect-video md:aspect-auto relative bg-zinc-100 dark:bg-zinc-800">
                <Image
                  src={work.thumbnail.url}
                  alt={work.title}
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="flex-1 px-7 py-7 md:px-8 md:py-8 flex flex-col justify-center min-h-60">
                <span className="block text-[10px] font-bold tracking-widest uppercase text-zinc-400 dark:text-zinc-500 mb-2">
                  {work.category}
                </span>
                <h3 className="text-lg md:text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-3">
                  {work.title}
                </h3>
                {work.description && (
                  <p className="text-sm md:text-base leading-[1.8] text-zinc-500 dark:text-zinc-400 mb-5">
                    {work.description}
                  </p>
                )}
                {work.tags && work.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {work.tags.map((tag, i) => (
                      <span key={i} className="tag">
                        {tag.name}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}