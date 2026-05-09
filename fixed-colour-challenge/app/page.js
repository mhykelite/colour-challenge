
export default function Home() {
  const contestants = [
    {
      name: 'BLACK',
      gradient: 'from-zinc-900 to-zinc-700',
      images: ['/images/black-1.jpg','/images/black-2.jpg']
    },
    {
      name: 'RED',
      gradient: 'from-red-700 to-rose-500',
      images: ['/images/red-1.jpg','/images/red-2.jpg']
    },
    {
      name: 'BLUE',
      gradient: 'from-blue-700 to-cyan-500',
      images: ['/images/blue-1.jpeg','/images/blue-2.jpeg']
    },
    {
      name: 'YELLOW',
      gradient: 'from-yellow-400 to-amber-600',
      images: ['/images/yellow-1.png','/images/yellow-2.png']
    },
    {
      name: 'GREEN',
      gradient: 'from-green-700 to-emerald-400',
      images: ['/images/green-1.jpg','/images/green-2.jpg']
    },
    {
      name: 'BROWN',
      gradient: 'from-amber-900 to-orange-700',
      images: ['/images/brown-1.jpg','/images/brown-2.jpg']
    },
    {
      name: 'PINK',
      gradient: 'from-pink-500 to-fuchsia-700',
      images: ['/images/pink-1.jpeg','/images/pink-2.jpeg']
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <section className="border-b border-zinc-800 bg-gradient-to-br from-zinc-950 via-zinc-900 to-black">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mb-4 inline-flex rounded-full border border-zinc-700 bg-zinc-900/70 px-4 py-2 text-sm text-zinc-300">
            🎨 THE ULTIMATE COLOUR CHALLENGE
          </div>

          <h1 className="text-6xl font-black leading-tight md:text-7xl">
            Vote For The
            <span className="block bg-gradient-to-r from-white to-zinc-500 bg-clip-text text-transparent">
              Best Colour Story
            </span>
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
            Seven colours. One challenge. One vote per person.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
              THE FINALISTS
            </p>
            <h2 className="mt-4 text-4xl font-black">
              Vote For Your Favourite Colour
            </h2>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 px-5 py-3 text-sm text-zinc-400">
            Public voting is now open • One vote per person
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {contestants.map((item) => (
            <div
              key={item.name}
              className="overflow-hidden rounded-[32px] border border-zinc-800 bg-zinc-900/50"
            >
              <div className={`grid grid-cols-1 gap-4 bg-gradient-to-br ${item.gradient} p-4 md:grid-cols-2`}>
                {item.images.map((img, index) => (
                  <div key={index} className="overflow-hidden rounded-2xl">
                    <img
                      src={img}
                      alt={item.name}
                      className="h-72 w-full object-cover"
                    />
                  </div>
                ))}
              </div>

              <div className="p-7">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-black">{item.name}</h3>

                  <div className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-400">
                    LIVE ENTRY
                  </div>
                </div>

                <button
                  onClick={() => {
                    if (localStorage.getItem('voted')) {
                      alert('You have already voted.');
                      return;
                    }

                    localStorage.setItem('voted', item.name);
                    alert(`Vote recorded for ${item.name}`);
                    window.location.reload();
                  }}
                  disabled={typeof window !== 'undefined' && localStorage.getItem('voted')}
                  className="mt-8 w-full rounded-2xl bg-white px-5 py-4 font-semibold text-black disabled:opacity-50"
                >
                  Vote for {item.name}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="overflow-hidden rounded-[40px] border border-zinc-800 bg-gradient-to-br from-zinc-900 to-black p-10 shadow-2xl">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
                PRIVATE ACCESS
              </p>

              <h2 className="mt-4 text-4xl font-black leading-tight">
                Real-Time Results Dashboard
              </h2>

              <p className="mt-5 leading-8 text-zinc-400">
                Voting results are hidden from the public while voting is live.
              </p>
            </div>

            <div className="rounded-3xl border border-zinc-800 bg-zinc-950/70 p-8">
              <label className="mb-3 block text-sm font-semibold text-zinc-400">
                Enter Access Code
              </label>

              <input
                type="password"
                placeholder="Enter secret code"
                className="w-full rounded-2xl border border-zinc-700 bg-zinc-900 px-5 py-4 outline-none"
              />

              <button className="mt-5 w-full rounded-2xl bg-white px-6 py-4 font-semibold text-black">
                Check Results
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
