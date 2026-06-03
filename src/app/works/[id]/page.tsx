import { client, Work } from "@/lib/microcms";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ThemeToggle from "@/components/ThemeToggle";

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
    <>
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full bg-blue-200/30 blur-[130px] dark:bg-blue-900/20" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-slate-200/40 blur-[110px] dark:bg-slate-900/25" />
      </div>
      <div className="absolute top-5 right-5 md:top-8 md:right-8 z-50">
        <ThemeToggle />
      </div>
      <main className="relative z-10 max-w-3xl mx-auto px-6 md:px-8 pt-16 pb-40">
        <div className="mb-10">
          <Link href="/#works" className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
            ← 一覧に戻る
          </Link>
        </div>

        <header className="mb-8">
          <span className="block text-xs font-bold tracking-widest uppercase text-zinc-400 dark:text-zinc-500 mb-3">
            {work.category}
          </span>
          <h1 className="font-outfit text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
            {work.title}
          </h1>
        </header>

        <div className="card aspect-video w-full mb-10 overflow-hidden relative">
          <Image
            src={work.thumbnail.url}
            alt={work.title}
            fill
            className="object-cover object-top"
          />
        </div>

        <div className="space-y-8">

          {work.description && (
            <section className="card px-8 py-8 md:px-10 md:py-10">
              <h2 className="font-outfit text-xl md:text-2xl font-bold text-zinc-900 dark:text-white mb-4">概要</h2>
              <p className="text-base leading-[1.85] text-zinc-600 dark:text-zinc-400">
                {work.description}
              </p>
            </section>
          )}

          {work.tags && work.tags.length > 0 && (
            <section className="card px-8 py-8 md:px-10 md:py-10">
              <h2 className="font-outfit text-xl md:text-2xl font-bold text-zinc-900 dark:text-white mb-5">使った技術</h2>
              <div className="flex flex-wrap gap-2">
                {work.tags.map((tag, i) => (
                  <span key={i} className="tag">
                    {tag.name}
                  </span>
                ))}
              </div>
            </section>
          )}

          {work.body && (
            <section className="card px-8 py-8 md:px-10 md:py-10">
              <h2 className="font-outfit text-xl md:text-2xl font-bold text-zinc-900 dark:text-white mb-6">制作の考え方</h2>
              <div
                className="body-content"
                dangerouslySetInnerHTML={{ __html: work.body }}
              />
            </section>
          )}

          <div className="flex items-center justify-between pt-2">
            {work.url && (
              <a
                href={work.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-zinc-900 dark:text-zinc-100 border border-zinc-200 dark:border-zinc-700 rounded-lg px-4 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
              >
                サイトを見る
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}
            <Link href="/#works" className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
              ← 一覧に戻る
            </Link>
          </div>

        </div>
      </main>
    </>
  );
}