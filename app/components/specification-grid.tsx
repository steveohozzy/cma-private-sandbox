type Props = {
  specifications?: {
    label: string
    value: string
  }[]
}

export function SpecificationGrid({
  specifications = [
    {
      label: "Brand",
      value: "LEGO",
    },
    {
      label: "Age Range",
      value: "6+ years",
    },
    {
      label: "Pieces",
      value: "668 pieces",
    },
    {
      label: "Product Code",
      value: "582561",
    },
    {
      label: "Assembly Required",
      value: "Yes",
    },
    {
      label: "Batteries Required",
      value: "No",
    },
  ],
}: Props) {


  return (
    <section>

      <h2
        className="
          mb-6
          font-heading
          text-3xl
          font-black
        "
      >
        Product Information
      </h2>


      <div
        className="
          grid
          gap-4

          sm:grid-cols-2
          lg:grid-cols-3
        "
      >

        {specifications.map((item) => (

          <div
            key={item.label}
            className="
              relative
              overflow-hidden

              rounded-[1.75rem]

              border
              border-white/20

              bg-white/60

              backdrop-blur-2xl

              p-5

              shadow-[0_10px_30px_rgba(0,0,0,.08)]

              transition

              hover:-translate-y-1

              dark:bg-background/75
            "
          >

            {/* glass shine */}
            <div
              className="
                absolute
                inset-0

                bg-gradient-to-br
                from-white/40
                via-transparent
                to-primary/5
              "
            />


            <div
              className="
                relative
                z-10
              "
            >

              <p
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-wider
                  text-primary
                "
              >
                {item.label}
              </p>


              <p
                className="
                  mt-2
                  text-lg
                  font-black
                "
              >
                {item.value}
              </p>

            </div>

          </div>

        ))}

      </div>

    </section>
  )
}