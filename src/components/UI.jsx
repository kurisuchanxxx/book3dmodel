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
      <main className="pointer-events-none select-none z-10 fixed inset-0 flex justify-between flex-col">
        {/* Logo removed as requested */}

        {/* Subtle instruction for users */}
        <div className="pointer-events-none fixed bottom-10 left-0 right-0 flex justify-center">
          <div className="bg-black/40 backdrop-blur-sm px-8 py-4 rounded-full">
            <p className="text-white/80 text-sm">
              {page === 0 ? "Clicca sulla copertina per aprire il libro" :
               page === 1 ? "Clicca sul bottone 'Accedi a Digesto AI' o sulla copertina per chiudere" :
               "Clicca sulla copertina per tornare all'inizio"}
            </p>
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
