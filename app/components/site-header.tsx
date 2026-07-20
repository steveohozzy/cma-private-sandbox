"use client"

import { useEffect, useState } from "react"
import {
  Search,
  Heart,
  ShoppingBag,
  User,
  Menu,
  X,
  Truck,
  ChevronRight,
  ChevronLeft,
  Sun,
  Moon,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { MiniCart } from "./mini-cart"
import { useCart } from "./cart-provider"

const navLinks = [
  {
    label: "Toys",
    href: "#categories",
    children: ["Action Figures", "LEGO", "Outdoor", "Arts & Crafts", "Games"],
  },
  {
    label: "Shop by Age",
    href: "#ages",
    children: ["0–2", "3–5", "6–8", "9–12", "12+"],
  },
  {
    label: "Deals",
    href: "#deals",
    children: ["Sale", "Bundles", "Clearance", "Pre-orders"],
  },
  {
    label: "Brands",
    href: "#brands",
    children: ["LEGO", "Barbie", "Hot Wheels", "Pokemon"],
  },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [mobileLevel, setMobileLevel] = useState<string | null>(null)

  const activeMobile = navLinks.find((x) => x.label === mobileLevel)

  // Extract both setOpenMiniCart and the cart items from your provider context
  const { setOpenMiniCart, items = [] } = useCart()

  // Dynamically calculate the true sum of all item quantities in the basket
  const totalItemsCount = items.reduce((acc, item) => acc + (item.quantity || 1), 0)

  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window === "undefined") {
      return "light"
    }

    const saved = localStorage.getItem("theme")

    if (saved === "light" || saved === "dark") {
      return saved
    }

    const sunsetByMonth = [16, 17, 18, 20, 21, 21, 21, 20, 19, 18, 16, 16]
    const now = new Date()

    return now.getHours() >= sunsetByMonth[now.getMonth()]
      ? "dark"
      : "light"
  })

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark")
    document.documentElement.classList.add(theme)
  }, [theme])

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark"

    localStorage.setItem("theme", next)
    setTheme(next)
  }

  return (
    <header className="sticky top-0 z-50 w-full overflow-x-clip">

      {/* top bar */}
      <div className="bg-foreground text-background dark:bg-background dark:text-foreground">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-2 px-4 py-2 text-xs font-semibold">
          <Truck className="size-4" />
          Free click & collect · Free delivery over £30
        </div>
      </div>

      {/* MAIN HEADER */}
      <div
        className="
          relative
          border-b
          border-white/15
          bg-foreground/75
          backdrop-blur-3xl
          shadow-[0_20px_60px_rgba(0,0,0,.35)]
          overflow-visible
          dark:bg-background/75
          dark:shadow-[0_20px_60px_rgba(0,0,0,.35)]
        "
      >
        <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3">

          {/* mobile burger */}
          <button
            onClick={() => setOpen(true)}
            className="lg:hidden rounded-full bg-white/10 p-3 text-white backdrop-blur-xl cursor-pointer"
          >
            <Menu />
            <span className="sr-only">Menu</span>
          </button>

          {/* logo */}
          <Link href="/" className="shrink-0">
            <Image
              src="https://www.thetoyshop.com/medias/entertainer-logo-secondary-BTS-1-.png?context=bWFzdGVyfGltYWdlc3wxNjcxNDN8aW1hZ2UvcG5nfGFHSmxMMmhoWXk4eE1qWTNPRGt6TkRJd01ETTFNQzlsYm5SbGNuUmhhVzVsY2kxc2IyZHZMWE5sWTI5dVpHRnllUzFDVkZNdE1TMHVjRzVufDIyOWZjZDk5YmZlZWNmYWI2ZTU0NGJhMjhlMTcyMmNjYzdhNDdlMGJkODBiOWIyODlmMWQ5MzFjNjgxZTc2YTU"
              width={180}
              height={40}
              alt="Logo"
            />
          </Link>

          {/* search */}
          <div className="relative hidden flex-1 md:block">
            <div className="relative">
              
              {/* ICON */}
              <Search
                className="
                  pointer-events-none
                  absolute left-4 top-1/2
                  z-20
                  size-5 -translate-y-1/2
                  text-white
                "
              />

              {/* INPUT */}
              <input
                className="
                  relative z-10
                  w-full
                  rounded-full
                  border border-white/20
                  bg-white/10
                  backdrop-blur-xl
                  py-3 pl-12 pr-4
                  text-white
                  outline-none
                "
                placeholder="Search toys..."
              />
            </div>
          </div>

          {/* icons */}
          <div className="ml-auto flex items-center gap-2 text-white">

            <button
                onClick={toggleTheme}
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  bg-white/10
                  backdrop-blur-xl
                  transition
                  hover:bg-white/20
                  cursor-pointer
                "
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Sun className="size-5" />
                ) : (
                  <Moon className="size-5" />
                )}
              </button>
            
            <User className="hidden sm:block cursor-pointer" />
            <Heart className="cursor-pointer" />

            <div className="relative" onMouseEnter={() => setOpenMiniCart(true)}>

              {/* Wrapped Link with an onClick escape hatch to drop the mini-cart visibility state immediately */}
              <Link href="/cart" onClick={() => setOpenMiniCart(false)}>
                <button
                  className="
                    flex
                    items-center
                    gap-2
                    rounded-full
                    bg-foreground
                    px-4
                    py-2
                    font-bold
                    transition-opacity
                    hover:opacity-90
                    cursor-pointer
                    dark:bg-background
                  "
                >
                  <ShoppingBag className="size-5" />
                  {/* Dynamic count live badge */}
                  <span>{totalItemsCount}</span>
                </button>
              </Link>

              <MiniCart />

            </div>

          </div>

        </div>

        {/* NAV */}
        <nav className="mx-auto hidden max-w-7xl px-4 pb-3 lg:flex">

          {navLinks.map((item) => (

            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => setActiveMenu(item.label)}
              onMouseLeave={() => setActiveMenu(null)}
            >

              <Link href="/category" className="rounded-full px-5 py-2 font-bold text-white hover:bg-white/10 cursor-pointer">
                {item.label}
              </Link>

              <div className="absolute left-0 top-full h-6 w-full" />

              {activeMenu === item.label && (

                <div
                  className="
                    absolute
                    left-0
                    top-full
                    mt-2
                    w-[780px]
                    rounded-[28px]
                    border
                    border-white/15
                    bg-[rgba(8,16,32,.9)]
                    backdrop-blur-3xl
                    shadow-[0_40px_120px_rgba(0,0,0,.5)]
                    overflow-hidden
                    z-50
                  "
                >

                  <div className="grid grid-cols-2 gap-8 p-8">

                    <div>
                      <h3 className="mb-4 text-xl font-black text-white">
                        {item.label}
                      </h3>

                      <div className="space-y-2">
                        {item.children.map((c) => (
                          <a
                            key={c}
                            href="/category"
                            className="
                              block
                              rounded-xl
                              px-4 py-3
                              text-white/80
                              hover:bg-white/10
                              hover:text-white
                              transition
                            "
                          >
                            {c}
                          </a>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-3xl bg-white/10 p-6 backdrop-blur-xl">
                      <p className="text-white font-bold">
                        Trending now
                      </p>
                      <p className="mt-2 text-sm text-white/70">
                        Discover top toys and new arrivals
                      </p>
                    </div>

                  </div>

                </div>

              )}

            </div>

          ))}

        </nav>

      </div>

      {/* MOBILE */}
      {open && (

        <div className="fixed inset-0 z-[100] lg:hidden overflow-hidden">

          {/* overlay */}
          <div
            onClick={() => {
              setOpen(false)
              setMobileLevel(null)
            }}
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
          />

          {/* drawer */}
          <div
            className="
              absolute
              left-0
              top-0
              h-full
              w-full
              max-w-[420px]
              bg-[rgba(10,20,40,.96)]
              backdrop-blur-3xl
              border-r
              border-white/10
              shadow-[0_30px_90px_rgba(0,0,0,.55)]
              overflow-hidden
            "
          >

            {/* HEADER */}
            <div className="flex items-center justify-between p-6 text-white">
              <h2 className="text-xl font-black">Menu</h2>
              <button onClick={() => setOpen(false)} className="cursor-pointer">
                <X />
              </button>
            </div>

            {/* PANELS (ANIMATED LAYER SYSTEM) */}
            <div className="relative h-full">

              {/* MAIN */}
              <div
                className={`
                  absolute inset-0 px-4 space-y-2
                  transition-all duration-300
                  ${mobileLevel ? "-translate-x-full opacity-0" : "translate-x-0 opacity-100"}
                `}
              >
                {navLinks.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => setMobileLevel(item.label)}
                    className="
                      flex w-full justify-between
                      rounded-2xl
                      bg-white/10
                      px-5 py-4
                      text-white font-bold
                      backdrop-blur-xl
                      cursor-pointer
                    "
                  >
                    {item.label}
                    <ChevronRight />
                  </button>
                ))}
              </div>

              {/* SUB */}
              <div
                className={`
                  absolute inset-0 px-4
                  transition-all duration-300
                  ${mobileLevel ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}
                `}
              >
                <button
                  onClick={() => setMobileLevel(null)}
                  className="mb-4 flex items-center gap-2 text-white font-bold cursor-pointer"
                >
                  <ChevronLeft /> Back
                </button>

                <div className="space-y-2">
                  {activeMobile?.children.map((c) => (
                    <a
                      key={c}
                      href="/category"
                      className="
                        block
                        rounded-2xl
                        bg-white/10
                        px-5 py-4
                        text-white
                        backdrop-blur-xl
                      "
                    >
                      {c}
                    </a>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>

      )}

    </header>
  )
}