export default function ColorChallengeVotingWebsite() {
  const contestants = [
    {
      name: 'BLACK',
      tagline: 'Bold. Elegant. Timeless.',
      description:
        'A celebration of mystery, shadows, luxury, depth, and powerful storytelling through black-themed photography.',
      gradient: 'from-zinc-900 to-zinc-700',
      text: 'text-white',
      options: [
        '/images/black-1.jpg',
        '/images/black-2.jpg',
      ],
    },
    {
      name: 'RED',
      tagline: 'Passion in Every Frame.',
      description:
        'A fiery collection capturing energy, love, intensity, confidence, and moments impossible to ignore.',
      gradient: 'from-red-700 to-rose-500',
      text: 'text-white',
      options: [
        '/images/red-1.jpg',
        '/images/red-2.jpg',
      ],
    },
    {
      name: 'BLUE',
      tagline: 'Cool. Calm. Creative.',
      description:
        'Photography inspired by the skies, oceans, calm moods, dreams, and peaceful everyday beauty.',
      gradient: 'from-blue-700 to-cyan-500',
      text: 'text-white',
      options: [
        '/images/blue-1.jpeg',
        '/images/blue-2.jpeg',
      ],
    },
    {
      name: 'YELLOW',
      tagline: 'Bright Moments Only.',
      description:
        'A vibrant showcase of happiness, sunshine, warmth, optimism, and unforgettable yellow scenes.',
      gradient: 'from-yellow-400 to-amber-600',
      text: 'text-black',
      options: [
        '/images/yellow-1.png',
        '/images/yellow-2.png',
      ],
    },
    {
      name: 'GREEN',
      tagline: 'Nature Meets Creativity.',
      description:
        'From plants to city life, this collage series explores growth, freshness, life, and natural beauty.',
      gradient: 'from-green-700 to-emerald-400',
      text: 'text-white',
      options: [
        '/images/green-1.jpg',
        '/images/green-2.jpg',
      ],
    },
    {
      name: 'BROWN',
      tagline: 'Earthy. Rich. Authentic.',
      description:
        'A grounded collection inspired by wood, coffee, soil, architecture, fashion, and warm tones.',
      gradient: 'from-amber-900 to-orange-700',
      text: 'text-white',
      options: [
        '/images/brown-1.jpg',
        '/images/brown-2.jpg',
      ],
    },
    {
      name: 'PINK',
      tagline: 'Soft. Playful. Vibrant.',
      description:
        'An expressive collection blending fashion, lifestyle, creativity, personality, and energetic pink aesthetics.',
      gradient: 'from-pink-500 to-fuchsia-700',
      text: 'text-white',
      options: [
        '/images/pink-1.jpeg',
        '/images/pink-2.jpeg',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <section className="relative overflow-hidden border-b border-zinc-800">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-900 to-black opacity-95" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="mb-4 inline-flex items-center rounded-full border border-zinc-700 bg-zinc-900/70 px-4 py-2 text-sm text-zinc-300 backdrop-blur">
                🎨 THE ULTIMATE COLOUR CHALLENGE
              </div>

              <h1 className="text-5xl font-black leading-tight md:text-7xl">
                Vote For The
                <span className="block bg-gradient-to-r from-white to-zinc-500 bg-clip-text text-transparent">
                  Best Colour Story
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
                Seven colours. One challenge. A full week of creativity.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
              {contestants.map((item) => (
                <div
                  key={item.name}
                  className={`flex aspect-square items-end rounded-3xl bg-gradient-to-br ${item.gradient} p-5 shadow-2xl`}
                >
                  <div>
                    <h3 className={`text-2xl font-black ${item.text}`}>
                      {item.name}
                    </h3>
                    <p className={`mt-1 text-sm ${item.text} opacity-90`}>
                      {item.tagline}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-zinc-800 bg-zinc-950/60">
        <div className="mx-auto max-w-7xl px-6 py-20">
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
                className="overflow-hidden rounded-[32px] border border-zinc-800 bg-zinc-900/50 backdrop-blur"
              >
                <div
                  className={`grid h-auto grid-cols-1 gap-4 bg-gradient-to-br ${item.gradient} p-4 md:grid-cols-2`}
                >
                  {item.options.map((option, index) => (
                    <div
                      key={index}
                      className="overflow-hidden rounded-2xl border border-white/10 bg-black/20"
                    >
                      <img
                        src={option}
                        alt={`${item.name} collage ${index + 1}`}
                        className="h-72 w-full object-cover"
                      />
                    </div>
                  ))}
                </div>

                <div className="p-7">
                  <h3 className="text-2xl font-black">{item.name}</h3>
                  <p className="mt-3 text-zinc-400">{item.description}</p>

                  <div className="mt-8">
                    <button className="w-full rounded-2xl bg-white px-5 py-4 font-semibold text-black">
                      Vote for {item.name}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
