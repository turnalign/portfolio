export default function Skills() {
  return (
    <section className="sec">
      <div className="wrap">
        <div className="sec-head">
          <h2 className="sec-head__title">できること</h2>
          <span className="sec-head__en">Skills</span>
        </div>
        <div className="skill-body">
          <p className="skill-body__lead">
            要件がはっきり決まっていない状態から、必要なものを整理し、運用まで考えてWebサイトを形にしてきました。
          </p>
          <p className="skill-body__lead">
            テキストだけ支給された案件では、競合を調べ、ワイヤーフレームを起こし、デザインから実装まで一通り担当します。素材が揃わない現場でも、後から差し込める形で先に組んでおくなど、作業が止まらない進め方をしてきました。納品後に運用担当者が迷わず更新できるよう、管理画面の作りにも気を配っています。
          </p>
        </div>
        <div className="skill-list">
          <div className="skill-row">
            <h3 className="skill-row__name">これまで使ってきた技術</h3>
            <p className="skill-row__desc">
              WordPressでのコーポレートサイト・LP制作が中心です。オリジナルテーマを一から作り、functions.phpの記述、カスタム投稿、ACFなどで、案件ごとに必要な構成を組んできました。
            </p>
            <p className="skill-row__desc">
              HTML・CSS・JavaScriptでのコーディングのほか、フレームワークを使わず素のJavaScriptでWebアプリのフロントエンド（ユーザー画面・管理画面）を実装した経験もあります。デザインはFigmaで行います。
            </p>
          </div>
          <div className="skill-row">
            <h3 className="skill-row__name">いま取り組んでいる技術</h3>
            <p className="skill-row__desc">
              React・Next.js・TypeScriptを使った開発に取り組んでいます。このポートフォリオサイト自体をNext.js・TypeScriptで構築し、microCMSと組み合わせたヘッドレス構成へ進めているところです。
            </p>
            <p className="skill-row__desc">
              あわせて、AIを仕様の整理や実装・デバッグに活用し、制作の各工程に組み込んでいます。
            </p>
          </div>
          <div className="skill-row">
            <h3 className="skill-row__name">これから</h3>
            <p className="skill-row__desc">
              これまでは一人で制作のすべてを担ってきました。今後はチームの中で、Webを理解するメンバーと協力しながら、作れる領域を広げていきたいと考えています。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}