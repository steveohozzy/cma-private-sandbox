const brands = [
  "Blocktastic",
  "CuddleCo",
  "SpeedZoom",
  "Wonderplay",
  "Tiny Tots",
  "GameHive",
  "Craftly",
  "SkyHigh",
]

export function BrandStrip() {
  return (
    <section id="brands" className="border-y border-border py-10">
      <div className="mx-auto max-w-7xl px-4">
        <p className="mb-6 text-center text-sm font-bold uppercase tracking-widest text-muted-foreground">
          Home to the brands kids love
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {brands.map((brand) => (
            <span
              key={brand}
              className="rounded-full border border-border bg-card px-6 py-3 font-heading text-lg font-bold text-foreground/70 transition hover:border-primary hover:text-primary"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
