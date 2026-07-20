"use client"

import { X, MapPin, Search } from "lucide-react"
import { useMemo, useState } from "react"

export type Store = {
  id: number
  name: string
  stock: string
  qty: number
}

const stores: Store[] = [
  {
    id: 1,
    name: "Milton Keynes",
    stock: "In Stock",
    qty: 12,
  },
  {
    id: 2,
    name: "Watford",
    stock: "In Stock",
    qty: 5,
  },
  {
    id: 3,
    name: "Reading",
    stock: "Limited Stock",
    qty: 2,
  },
  {
    id: 4,
    name: "Oxford",
    stock: "Out of Stock",
    qty: 0,
  },
  {
    id: 5,
    name: "Cambridge",
    stock: "In Stock",
    qty: 9,
  },
]

type Props = {
  open: boolean
  onClose: () => void
  selectedStore: Store | null
  onSelect: (store: Store) => void
}

export function StoreDrawer({
  open,
  onClose,
  selectedStore,
  onSelect,
}: Props) {
  const [search, setSearch] = useState("")
  const [current, setCurrent] = useState<Store | null>(selectedStore)

  const filtered = useMemo(() => {
    return stores.filter((store) =>
      store.name.toLowerCase().includes(search.toLowerCase())
    )
  }, [search])

  return (
    <>
      {/* Backdrop */}

      <div
        onClick={onClose}
        className={`
          fixed inset-0 z-40
          bg-black/40
          backdrop-blur-sm
          transition-opacity duration-300
          ${
            open
              ? "opacity-100 h-full"
              : "pointer-events-none opacity-0"
          }
        `}
      />

      {/* Drawer */}

      <aside
        className={`
          fixed
          top-0
          right-0
          z-50
          h-screen
          w-full
          max-w-md
          bg-white
          shadow-2xl
          transition-transform
          duration-300
          flex
          flex-col
          ${
            open
              ? "translate-x-0"
              : "translate-x-full"
          }
        `}
      >
        {/* Header */}

        <div className="flex items-center justify-between border-b p-6">

          <div>

            <h2 className="text-2xl font-black">
              Check Store Stock
            </h2>

            <p className="text-sm text-muted-foreground">
              Choose a store
            </p>

          </div>

          <button
            onClick={onClose}
            className="rounded-full p-2 hover:bg-muted cursor-pointer"
          >
            <X />
          </button>

        </div>

        {/* Search */}

        <div className="p-6">

          <div className="relative">

            <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-muted-foreground" />

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search stores..."
              className="
                w-full
                rounded-full
                border
                py-3
                pl-12
                pr-4
                outline-none
                focus:border-primary
              "
            />

          </div>

        </div>

        {/* Stores */}

        <div className="flex-1 overflow-y-auto px-6 space-y-3">

          {filtered.map((store) => (

            <button
              key={store.id}
              onClick={() => setCurrent(store)}
              className={`
                w-full
                rounded-2xl
                border
                p-5
                text-left
                transition
                cursor-pointer

                ${
                  current?.id === store.id
                    ? "border-primary bg-primary/5"
                    : "hover:border-primary"
                }
              `}
            >

              <div className="flex justify-between items-start">

                <div>

                  <div className="flex items-center gap-2">

                    <MapPin className="size-4 text-primary" />

                    <span className="font-bold">
                      {store.name}
                    </span>

                  </div>

                  <p className="mt-2 text-sm text-muted-foreground">
                    {store.stock}
                  </p>

                </div>

                <div
                  className={`
                    rounded-full
                    px-3
                    py-1
                    text-xs
                    font-bold

                    ${
                      store.qty > 5
                        ? "bg-green-100 text-green-700"
                        : store.qty > 0
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                    }
                  `}
                >
                  {store.qty > 0
                    ? `${store.qty} available`
                    : "None"}
                </div>

              </div>

            </button>

          ))}

        </div>

        {/* Footer */}

        <div className="border-t p-6">

          <button
            disabled={!current}
            onClick={() => {
              if (current) {
                onSelect(current)
                onClose()
              }
            }}
            className="
              w-full
              rounded-full
              bg-primary
              py-4
              font-black
              text-primary-foreground
              transition
              hover:scale-[1.02]
              disabled:opacity-40
              disabled:pointer-events-none
              cursor-pointer
            "
          >
            Confirm Store
          </button>

        </div>

      </aside>
    </>
  )
}