import {
  Package,
  Users,
  Truck,
  ShieldCheck,
  Cake,
  Star,
} from "lucide-react"

type Props = {
  features: string[]
  age: string
}

export function FeatureChips({
  features,
  age,
}: Props) {
  const chips = [
    {
      icon: Package,
      text: features[0],
    },
    {
      icon: Users,
      text: features[1],
    },
    {
      icon: Truck,
      text: features[2],
    },
    {
      icon: Star,
      text: "Official Product",
    },
  ].filter((chip) => chip.text)

  return (
    <div className="grid gap-4 sm:grid-cols-2">

      {chips.map((chip, index) => {
        const Icon = chip.icon

        return (
          <div
            key={index}
            className="
              group
              relative
              overflow-hidden
              rounded-[1.75rem]

              border border-white/20

              bg-white/60
              backdrop-blur-2xl

              p-5

              shadow-[0_10px_30px_rgba(0,0,0,.08)]

              transition-all
              duration-300

              hover:-translate-y-1
              hover:shadow-[0_18px_40px_rgba(0,0,0,.12)]

              dark:bg-background/75
            "
          >

            {/* Glass tint */}
            <div
              className="
                absolute
                inset-0

                bg-gradient-to-br
                from-white/40
                via-white/10
                to-primary/5
              "
            />

            {/* Highlight */}
            <div
              className="
                absolute
                -right-10
                -top-10

                h-28
                w-28

                rounded-full

                bg-primary/10

                blur-3xl
              "
            />

            <div className="relative flex items-center gap-4">

              <div
                className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center

                  rounded-2xl

                  bg-chart-2

                  text-white

                  shadow-lg

                  transition-transform
                  duration-300

                  group-hover:scale-110
                "
              >
                <Icon className="size-6" />
              </div>

              <div>

                <p className="text-sm text-muted-foreground">
                  Feature
                </p>

                <h3 className="font-bold text-lg text-foreground">
                  {chip.text}
                </h3>

              </div>

            </div>

          </div>
        )
      })}
    </div>
  )
}