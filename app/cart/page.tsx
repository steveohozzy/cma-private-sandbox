"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, Trash2 } from "lucide-react";

const cartItems = [
  {
    id: "582561",
    name: "LEGO City Police Station",
    brand: "LEGO",
    img: "/product-rocket.webp",
    price: 49.99,
    wasPrice: 59.99,
    quantity: 1,
  },
  {
    id: "123456",
    name: "Pokemon Battle Figure Set",
    brand: "Pokemon",
    img: "/product-plush.webp",
    price: 24.99,
    quantity: 2,
  },
];

export default function CartPage() {
  const [delivery, setDelivery] = useState("standard");
  const [promo, setPromo] = useState("");
  const [promoOpen, setPromoOpen] = useState(false);

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const deliveryCost = delivery === "express" ? 5.99 : 0;
  const total = subtotal + deliveryCost;

  return (
    <main className="min-h-screen">
      {/* breadcrumb */}
      <section className="mx-auto max-w-7xl px-4 pt-8 text-sm text-muted-foreground">
        Home / Basket
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10">
        <h1 className="text-4xl font-black mb-10">
          Your basket
        </h1>

        <div className="grid gap-10 lg:grid-cols-[1fr_380px]">
          {/* ITEMS */}
          <div className="space-y-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="relative flex gap-6 rounded-[32px] border border-white/20 bg-white/60 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,.12)] p-6 dark:border-white/20 dark:bg-background/60"
              >
                <div className="pointer-events-none absolute inset-0 rounded-[32px] bg-gradient-to-br from-white/60 via-transparent to-primary/5 " />

                <div className="relative z-10 h-32 w-32 shrink-0">
                  <Image
                    src={item.img}
                    alt={item.name}
                    fill
                    className="object-contain"
                  />
                </div>

                <div className="relative z-10 flex flex-1 flex-col">
                  <span className="text-xs font-black uppercase tracking-widest text-primary">
                    {item.brand}
                  </span>

                  <h2 className="mt-2 text-xl font-black">
                    {item.name}
                  </h2>

                  <div className="mt-auto flex items-center justify-between">
                    <div>
                      {item.wasPrice && (
                        <p className="text-sm text-muted-foreground line-through">
                          £{item.wasPrice.toFixed(2)}
                        </p>
                      )}
                      <p className="text-2xl font-black">
                        £{item.price.toFixed(2)}
                      </p>
                    </div>

                    <div className="flex items-center gap-3 rounded-full bg-white/60 border border-white/30 px-3 py-2 dark:bg-background/60 dark:border-white/30">
                      <button className="cursor-pointer">
                        <Minus className="size-4" />
                      </button>
                      <span className="font-bold">{item.quantity}</span>
                      <button className="cursor-pointer">
                        <Plus className="size-4" />
                      </button>
                    </div>
                  </div>
                </div>

                <button className="absolute right-5 top-5 rounded-full bg-white/60 p-3 hover:bg-red-100 dark:bg-background/60 dark:border-white/30 dark:border cursor-pointer z-10">
                  <Trash2 className="size-5" />
                </button>
              </div>
            ))}
          </div>

          {/* SUMMARY */}
          <aside className="sticky top-28 h-fit overflow-hidden rounded-[32px] border border-white/15 bg-[rgba(8,16,32,.9)] p-8 text-white backdrop-blur-3xl shadow-[0_40px_120px_rgba(0,0,0,.5)] ">
            <div className="pointer-events-none absolute inset-0 rounded-[32px] bg-gradient-to-br from-white/10 via-transparent to-transparent " />

            <div className="relative z-10">
              <h2 className="text-2xl font-black">
                Order summary
              </h2>

              {/* DELIVERY */}
              <div className="rounded-2xl bg-white/10 py-5 backdrop-blur-xl dark:bg-background/10">
                <p className="font-black">Delivery</p>

                <label className="mt-4 flex cursor-pointer justify-between rounded-xl bg-white/10 p-4">
                  <div>
                    <p className="font-bold">Standard Delivery</p>
                    <p className="text-sm text-white/60">3-5 working days</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span>FREE</span>
                    <input
                      type="radio"
                      checked={delivery === "standard"}
                      onChange={() => setDelivery("standard")}
                    />
                  </div>
                </label>

                <label className="mt-3 flex cursor-pointer justify-between rounded-xl bg-white/10 p-4">
                  <div>
                    <p className="font-bold">Express Delivery</p>
                    <p className="text-sm text-white/60">Next working day</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span>£5.99</span>
                    <input
                      type="radio"
                      checked={delivery === "express"}
                      onChange={() => setDelivery("express")}
                    />
                  </div>
                </label>
              </div>

              {/* TOTALS */}
              <div className="mt-6 border-t border-white/20 pt-5">
                <div className="flex justify-between text-white/80">
                  <span>Subtotal</span>
                  <span>£{subtotal.toFixed(2)}</span>
                </div>

                <div className="mt-3 flex justify-between text-white/80">
                  <span>Delivery</span>
                  <span>
                    {deliveryCost === 0 ? "FREE" : `£${deliveryCost.toFixed(2)}`}
                  </span>
                </div>

                <div className="mt-5 flex justify-between text-xl font-black">
                  <span>Total</span>
                  <span>£{total.toFixed(2)}</span>
                </div>
              </div>

              {/* PROMO CODE */}
              <div className="mt-6 rounded-lg border border-white/10 px-5 backdrop-blur-xl w-full">
                <button
                  onClick={() => setPromoOpen(!promoOpen)}
                  className="flex w-full items-center justify-between py-5 font-black cursor-pointer"
                >
                  <span>Add promo code</span>
                  <span>{promoOpen ? "−" : "+"}</span>
                </button>

                {promoOpen && (
                  <div className="border-t border-white/20 py-5">
                    <div className="flex gap-2 w-full">
                      <input
                        value={promo}
                        onChange={(e) => setPromo(e.target.value)}
                        placeholder="Enter code"
                        className="min-w-0 flex-1 rounded-full bg-white/20 px-4 py-2 text-sm text-white placeholder:text-white/50 outline-none"
                      />
                      <button className="shrink-0 rounded-full bg-primary px-4 py-2 text-sm font-bold text-white cursor-pointer">
                        Apply
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/checkout"
                className="mt-8 block rounded-full bg-primary py-4 text-center font-black text-white transition hover:scale-[1.02]"
              >
                Secure checkout
              </Link>

              <p className="mt-5 text-center text-xs text-white/50">
                Pay in 3 interest-free payments with Klarna
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}