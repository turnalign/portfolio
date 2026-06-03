export default function Skills() {
  return (
    <section className="card px-8 py-10 md:px-12 md:py-12 fade-up">
      <h2 className="font-outfit text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white tracking-wide mb-8">Skills</h2>

      <div>
        <div className="skill-block">
          <h3 className="text-xs font-bold tracking-widest uppercase text-zinc-400 dark:text-zinc-500 mb-4">これまで使ってきた技術</h3>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="tag">WordPress</span>
            <span className="tag">PHP</span>
            <span className="tag">HTML / CSS</span>
            <span className="tag">JavaScript</span>
            <span className="tag">jQuery</span>
            <span className="tag">Figma</span>
          </div>
          <p className="text-base md:text-lg leading-[1.85] text-zinc-600 dark:text-zinc-400">
            WordPressでのコーポレートサイト・LP制作を中心に、オリジナルテーマの制作やACFを使った更新しやすい構成づくりを行ってきました。デザインはFigmaで行います。
          </p>
        </div>

        <div className="skill-block">
          <h3 className="text-xs font-bold tracking-widest uppercase text-zinc-400 dark:text-zinc-500 mb-4">いま取り組んでいる技術</h3>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="tag">React</span>
            <span className="tag">Next.js</span>
            <span className="tag">TypeScript</span>
            <span className="tag">microCMS</span>
          </div>
          <p className="text-base md:text-lg leading-[1.85] text-zinc-600 dark:text-zinc-400">
            このポートフォリオサイト自体をNext.js・TypeScriptで構築し、microCMSと組み合わせたヘッドレス構成にしています。あわせて、AIを仕様の整理や実装・デバッグに活用しています。
          </p>
        </div>

        <div className="skill-block">
          <h3 className="text-xs font-bold tracking-widest uppercase text-zinc-400 dark:text-zinc-500 mb-4">チーム開発</h3>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="tag">Git</span>
            <span className="tag">GitHub</span>
            <span className="tag">Pull Request</span>
          </div>
          <p className="text-base md:text-lg leading-[1.85] text-zinc-600 dark:text-zinc-400">
            サイト制作が中心だったこともあり、これまではチーム開発でのバージョン管理に深く関わる機会がありませんでした。現在は、ブランチ運用やPull Requestをベースとした進め方を、個人開発の中でも取り入れています。
          </p>
        </div>
      </div>
    </section>
  );
}