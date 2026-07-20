import {
  Truck,
  Zap,
  Store,
  CreditCard,
} from "lucide-react"

type Props = {
  delivery?: string
}

export function DeliveryCards({
  delivery = "FREE Standard Delivery",
}: Props) {

  const cards = [
    {
      icon: Truck,
      title: "Standard Delivery",
      text: delivery,
    },
    {
      icon: Zap,
      title: "Express Delivery",
      text: "Get your order faster with Express Delivery options.",
    },
    {
      icon: Store,
      title: "Click & Collect",
      text: "Collect from your local store when convenient.",
    },
    {
      icon: CreditCard,
      title: "Flexible Payments",
      text: "Pay securely with flexible payment options.",
    },
  ]


  return (
    <div
      className="
        grid
        gap-5

        sm:grid-cols-2

        xl:grid-cols-4
      "
    >

      {cards.map((card) => {

        const Icon = card.icon

        return (
          <div
            key={card.title}
            className="
              group
              relative
              overflow-hidden

              rounded-[2rem]

              border
              border-white/20

              bg-white/60

              backdrop-blur-2xl

              p-6

              shadow-[0_15px_40px_rgba(0,0,0,.08)]

              transition-all
              duration-300

              hover:-translate-y-1

              hover:shadow-[0_20px_50px_rgba(0,0,0,.12)]
            "
          >

            {/* glass glow */}
            <div
              className="
                absolute
                -right-10
                -top-10

                h-32
                w-32

                rounded-full

                bg-primary/10

                blur-3xl

                transition

                group-hover:scale-125
              "
            />


            <div
              className="
                relative
              "
            >

              <div
                className="
                  mb-5

                  flex
                  h-14
                  w-14
                  items-center
                  justify-center

                  rounded-2xl

                  bg-muted-foreground

                  text-white

                  shadow-lg
                "
              >
                <Icon className="size-6" />
              </div>


              <h3
                className="
                  text-lg
                  font-black
                "
              >
                {card.title}
              </h3>


              <p
                className="
                  mt-2

                  text-sm

                  leading-relaxed

                  text-muted-foreground
                "
              >
                {card.text}
              </p>

            </div>

          </div>
        )
      })}

    </div>
  )
}