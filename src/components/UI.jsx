import { atom, useAtom } from "jotai";
import { useEffect } from "react";

export const pageAtom = atom(0);

// Simplified book structure: Cover + Page 1 spread only
export const pages = [
  {
    front: "book-cover",        // Front cover (Copertina Anteriore)
    back: "page-1-left",        // Left page of spread 1
  },
  {
    front: "page-1-right",      // Right page of spread 1
    back: "book-back",          // Back cover (Copertina Posteriore)
  },
];

export const UI = () => {
  const [page, setPage] = useAtom(pageAtom);

  useEffect(() => {
    const audio = new Audio("/audios/page-flip-01a.mp3");
    audio.play();
  }, [page]);

  return (
    <>
      <main className=" pointer-events-none select-none z-10 fixed  inset-0  flex justify-between flex-col">
        <a
          className="pointer-events-auto mt-10 ml-10"
          href="/"
        >
          <span className="text-white font-bold text-2xl">
            <span className="text-[#d4af37]">DIGESTO</span> <span className="text-sm">Volume I</span>
          </span>
        </a>
        <div className="w-full overflow-auto pointer-events-auto flex justify-center">
          <div className="overflow-auto flex items-center gap-4 max-w-full p-10">
            <button
              className={`border-transparent hover:border-white transition-all duration-300 px-6 py-3 rounded-full text-lg uppercase shrink-0 border ${
                page === 0
                  ? "bg-white/90 text-black"
                  : "bg-black/30 text-white"
              }`}
              onClick={() => setPage(0)}
            >
              Copertina
            </button>
            <button
              className={`border-transparent hover:border-white transition-all duration-300 px-6 py-3 rounded-full text-lg uppercase shrink-0 border ${
                page === 1
                  ? "bg-white/90 text-black"
                  : "bg-black/30 text-white"
              }`}
              onClick={() => setPage(1)}
            >
              Pagina 1
            </button>
            <button
              className={`border-transparent hover:border-white transition-all duration-300 px-6 py-3 rounded-full text-lg uppercase shrink-0 border ${
                page === 2
                  ? "bg-white/90 text-black"
                  : "bg-black/30 text-white"
              }`}
              onClick={() => setPage(2)}
            >
              Retro
            </button>
          </div>
        </div>
      </main>

      <div className="fixed inset-0 flex items-center -rotate-2 select-none hidden">
        <div className="relative">
          <div className="bg-white/0  animate-horizontal-scroll flex items-center gap-8 w-max px-8">
            <h1 className="shrink-0 text-white text-10xl font-black ">
              &#123;SJCODES&#125;
            </h1>
            <h2 className="shrink-0 text-transparent text-12xl font-bold italic outline-text">
              3D Book Slider
            </h2>
            <h2 className="shrink-0 text-white text-8xl italic font-light">
              made with React Three Fiber
            </h2>
            <h2 className="shrink-0 text-white text-12xl font-bold">
              &amp; Three.js
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};
