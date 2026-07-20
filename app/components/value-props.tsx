import { Truck, RotateCcw, Gift, ShieldCheck } from "lucide-react"

const items = [
  { icon: Truck, title: "Free click & collect", desc: "From 170+ stores near you" },
  { icon: RotateCcw, title: "Easy 35-day returns", desc: "Hassle-free, in store or post" },
  { icon: Gift, title: "Free gift wrapping", desc: "Make every present magical" },
  { icon: ShieldCheck, title: "Play-tested & safe", desc: "Toys we'd give our own kids" },
]

export function ValueProps() {
  return (
    <section className="bg-accent text-accent-foreground">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 py-7 lg:grid-cols-4">
        {items.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="flex items-center gap-3">
            <span className="grid size-11 shrink-0 place-items-center rounded-full bg-secondary text-secondary-foreground">
              <Icon className="size-5" aria-hidden="true" />
            </span>
            <div className="leading-tight">
              <p className="font-heading text-sm font-bold">{title}</p>
              <p className="text-xs text-accent-foreground/80">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
