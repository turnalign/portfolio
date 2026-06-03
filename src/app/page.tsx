import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Works from "@/components/Works";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";
import ScrollObserver from "@/components/ScrollObserver";

export default function Home() {
  return (
    <>
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full bg-blue-200/30 blur-[130px] dark:bg-blue-900/20" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-slate-200/40 blur-[110px] dark:bg-slate-900/25" />
      </div>
      <ThemeToggle />
      <ScrollObserver />
      <main className="relative z-10 max-w-3xl mx-auto px-6 md:px-8 pb-40 space-y-20 md:space-y-28">
        <Hero />
        <About />
        <Skills />
        <Works />
        <Footer />
      </main>
    </>
  );
}