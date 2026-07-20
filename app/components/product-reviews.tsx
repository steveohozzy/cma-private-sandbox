"use client"

import { useState } from "react"
import { Star, ChevronDown } from "lucide-react"

type Props = {
  rating: number
  reviews: number
}

const reviewData = [
  {
    name: "Sarah",
    rating: 5,
    title: "Great LEGO set",
    text:
      "Bought this for my son's birthday and he absolutely loved it. Lots of details and kept him entertained for hours.",
  },
  {
    name: "James",
    rating: 5,
    title: "Excellent quality",
    text:
      "Fantastic build with great instructions. The figures and accessories make this set even better.",
  },
  {
    name: "Emma",
    rating: 4,
    title: "Really enjoyable build",
    text:
      "A great set. Took longer than expected to build but that was part of the fun.",
  },
]


export function ProductReviews({
  rating,
  reviews,
}: Props) {

  const [open, setOpen] = useState(false)


  return (

    <section
      className="
        rounded-[32px]

        border
        border-white/20

        bg-white/60

        backdrop-blur-2xl

        shadow-[0_20px_60px_rgba(0,0,0,.08)]

        overflow-hidden

        dark:bg-background/75
      "
    >


      {/* SUMMARY BAR */}

      <button
        onClick={() => setOpen(!open)}
        className="
          flex
          w-full

          flex-col
          gap-5

          p-6

          text-left

          md:flex-row
          md:items-center
          md:justify-between

          md:p-8
          cursor-pointer
        "
      >

        <div>

          <h2
            className="
              text-2xl
              font-black
            "
          >
            Customer Reviews
          </h2>


          <div
            className="
              mt-3

              flex
              items-center
              gap-3
            "
          >

            <div className="flex">

              {[1,2,3,4,5].map(star => (

                <Star
                  key={star}
                  className="
                    size-5

                    fill-yellow-400
                    text-yellow-400
                  "
                />

              ))}

            </div>


            <span className="font-bold">
              {rating} / 5
            </span>


            <span className="text-sm text-muted-foreground">
              ({reviews} reviews)
            </span>


          </div>


        </div>


        <div
          className="
            flex
            items-center
            gap-3

            font-bold
          "
        >

          {open ? "Hide reviews" : "Read reviews"}


          <ChevronDown
            className={`
              transition-transform
              ${
                open
                  ? "rotate-180"
                  : ""
              }
            `}
          />

        </div>


      </button>



      {/* EXPANDED REVIEWS */}

      <div
        className={`
          grid

          transition-all
          duration-500

          ${
            open
              ? "grid-rows-[1fr]"
              : "grid-rows-[0fr]"
          }
        `}
      >

        <div className="overflow-hidden">


          <div
            className="
              space-y-4

              border-t

              border-white/20

              p-6

              md:p-8
            "
          >


            {reviewData.map((review,index)=>(


              <article
                key={index}

                className="
                  rounded-3xl

                  bg-white/50

                  p-5

                  border
                  border-white/30

                  dark:bg-background/75
                  dark:border-white/30
                "
              >


                <div
                  className="
                    flex
                    justify-between
                    gap-4
                  "
                >

                  <div>

                    <p className="font-black">
                      {review.name}
                    </p>

                    <h3
                      className="
                        mt-2
                        font-bold
                      "
                    >
                      {review.title}
                    </h3>

                  </div>


                  <div className="flex">

                    {[1,2,3,4,5].map(star => (

                      <Star
                        key={star}

                        className={`
                          size-4

                          ${
                            star <= review.rating
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-gray-300"
                          }
                        `}
                      />

                    ))}

                  </div>


                </div>


                <p
                  className="
                    mt-3

                    text-sm

                    text-muted-foreground
                  "
                >
                  {review.text}
                </p>


              </article>


            ))}


          </div>


        </div>


      </div>


    </section>

  )
}