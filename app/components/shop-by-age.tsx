const ages = [
  { label: "0–18 mths", note: "Sensory & first toys", tone: "from-chart-3/20 to-chart-3/5" },
  { label: "18 mths–3 yrs", note: "Toddler play", tone: "from-chart-2/25 to-chart-2/5" },
  { label: "3–5 yrs", note: "Imaginative fun", tone: "from-chart-1/20 to-chart-1/5" },
  { label: "5–8 yrs", note: "Games & building", tone: "from-chart-4/20 to-chart-4/5" },
  { label: "8+ yrs", note: "Big kid adventures", tone: "from-chart-5/20 to-chart-5/5" },
]

export function ShopByAge() {
  return (
    <section id="ages" className="relative overflow-hidden py-14 lg:py-20">

      <div className="mx-auto max-w-7xl px-4 relative">

        {/* header */}
        <div className="mb-10 text-center">
          <p className="font-heading text-sm font-bold uppercase tracking-widest text-primary">
            The right toy, every stage
          </p>
          <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Shop by age
          </h2>
        </div>

        {/* grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">

          {ages.map((age) => (
            <a
              key={age.label}
              href="#ages"
              className="
                group relative overflow-hidden rounded-3xl p-6 text-center
                border border-white/15

                bg-gradient-to-br
                backdrop-blur-2xl

                shadow-[0_10px_20px_rgba(0,0,0,0.12)]

                transition-all duration-500
                hover:-translate-y-2 hover:shadow-[0_15px_84px_rgba(0,0,0,0.18)]
              "
            >

              {/* tinted glass base layer */}
              <div className={`
                absolute inset-0 bg-gradient-to-br ${age.tone}
                opacity-70
              `} />

              {/* glossy highlight sweep */}
              <div className="
                absolute inset-0 opacity-0 group-hover:opacity-100
                transition duration-700
                bg-gradient-to-tr from-white/20 via-transparent to-transparent
              " />

              {/* top-left light reflection */}
              <div className="
                absolute -top-10 -left-10 h-24 w-24
                rounded-full bg-white/20 blur-2xl
                opacity-40 group-hover:scale-125 transition
              " />

              {/* subtle inner border shine */}
              <div className="
                absolute inset-0 rounded-3xl
                ring-1 ring-white/10
                shadow-inner
              " />

              {/* content */}
              <div className="relative z-10">
                <span className="font-heading text-xl font-bold text-foreground">
                  {age.label}
                </span>

                <span className="mt-2 block text-sm font-semibold text-muted-foreground">
                  {age.note}
                </span>
              </div>

            </a>
          ))}

        </div>
      </div>
    </section>
  )
}