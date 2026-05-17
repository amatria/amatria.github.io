import { useState } from "preact/hooks";

import { questions } from "@data/yonunca.ts";

function sample(array: string[], size: number): string[] {
  const indices = new Set<number>();
  while (indices.size < size) {
    indices.add(Math.floor(Math.random() * array.length));
  }
  return [...indices].map(i => array[i]);
}

export default function YoNuncaIsland() {
  const [queue, setQueue] = useState<string[]>([]);
  const [current, setCurrent] = useState<string | null>(null);
  const [started, setStarted] = useState(false);

  function next() {
    let q = queue;
    if (!q.length) {
      q = sample(questions, 50);
    }
    const [first, ...rest] = q;
    setCurrent(first);
    setQueue(rest);
    setStarted(true);
  }

  return (
    <div class="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 w-full max-w-xl">
      <h1 class="text-3xl font-normal mb-6 text-zinc-900">
        Yo nunca
      </h1>
      <hr class="border-gray-200 mb-6" />
      <p class="text-lg text-zinc-600 font-light leading-relaxed min-h-32 mb-6">
        {current ?? "Prepara la bebida, avisa a tus amigxs y pulsa el botón para empezar."}
      </p>
      <hr class="border-gray-200 mb-6" />
      <button
        onClick={next}
        class="w-full py-4 rounded-2xl text-white font-medium text-lg cursor-pointer transition-all duration-200 active:scale-95"
        style="background-color: rgba(228, 160, 183, 0.9);"
      >
        {started ? "Siguiente" : "Jugar"}
      </button>
    </div>
  );
}
