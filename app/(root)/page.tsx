import Image from "next/image";
import FurnitureGallery from "../components/gallery";

export default function Home() {
const featured = [
  {   name: "Bedroom Sets",
    desc: "Comfort-first seating with a clean silhouette for everyday living.",
    price: "$1,299+",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=2000&q=90",
  },
  {
    name: "Dining Collection",
    desc: "Warm wood finishes and durable seating for family gatherings.",
    price: "$899+",
    image:
      "https://images.unsplash.com/photo-1758977403403-c51ef509e788??auto=format&fit=crop&w=2000&q=90",
  },
  {
    name: "Living Room Sets",
    desc: "Simple, polished pieces designed to make your space feel complete.",
    price: "$1,499+",
    image:
      "https://images.unsplash.com/photo-1680503397671-caa25818d36f?auto=format&fit=crop&w=2000&q=90",
  },
];

  const benefits = [
    "Quality furniture for every room",
    "Delivery and assembly available",
    "Friendly local service in Warren, MI",
    "Flexible financing options",
  ];

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      <header className="sticky top-0 z-20 border-b border-stone-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <div className="text-2xl font-semibold tracking-wide">Balkan Furniture</div>
            <div className="text-sm text-stone-500">Warren, Michigan</div>
          </div>
          <nav className="hidden gap-8 text-sm md:flex">
            <a href="#shop" className="hover:text-stone-600">Shop</a>
            <a href="#about" className="hover:text-stone-600">About</a>
            <a href="#financing" className="hover:text-stone-600">Financing</a>
            <a href="#contact" className="hover:text-stone-600">Contact</a>
          </nav>
          <button className="rounded-2xl bg-stone-900 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:opacity-90">
            Visit Store
          </button>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
        <div className="flex flex-col justify-center">
          <span className="mb-4 inline-flex w-fit rounded-full border border-stone-300 bg-white px-4 py-1 text-sm text-stone-600">
            Stylish furniture. Local service. Easy delivery.
          </span>
          <h1 className="max-w-xl text-4xl font-semibold leading-tight md:text-6xl">
            Furniture that makes your home feel finished.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-stone-600 md:text-lg">
            Discover quality living room, bedroom, and dining furniture at Balkan
            Furniture in Warren, MI. Shop pieces that are modern, practical, and built
            for everyday comfort.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-2xl bg-stone-900 px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:opacity-90">
              Browse Collection
            </button>
            <button className="rounded-2xl border border-stone-300 bg-white px-6 py-3 text-sm font-medium text-stone-900 transition hover:bg-stone-100">
              Financing Options
            </button>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {benefits.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-stone-200 bg-white px-4 py-3 text-sm text-stone-700 shadow-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-4 -top-4 hidden h-24 w-24 rounded-3xl bg-stone-200 md:block" />
          <div className="absolute -bottom-4 -right-4 hidden h-32 w-32 rounded-3xl bg-amber-100 md:block" />
          <div className="overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-xl">
            <Image
              width={100}
              height={100}
              src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80"
              alt="Elegant furniture showroom"
              className="h-[520px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <FurnitureGallery featured={featured} />
      

      <section id="shop" className="mx-auto max-w-7xl px-6 py-8 md:py-12">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-stone-500">Featured</p>
            <h2 className="mt-2 text-3xl font-semibold">Popular categories</h2>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {featured.map((item, idx) => (
            <div
              key={idx}
              className="overflow-hidden rounded-[1.75rem] border border-stone-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <Image src={item.image} alt={item.name} className="h-64 w-full object-cover" width={100}
              height={100}/>
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-semibold">{item.name}</h3>
                  <span className="rounded-full bg-stone-100 px-3 py-1 text-xs font-medium text-stone-600">
                    {item.price}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-6 text-stone-600">{item.desc}</p>
                <button className="mt-5 rounded-xl border border-stone-300 px-4 py-2 text-sm font-medium transition hover:bg-stone-100">
                  View More
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="mx-auto grid max-w-7xl gap-8 px-6 py-16 md:grid-cols-[1.1fr,0.9fr]">
        <div className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm md:p-10">
          <p className="text-sm uppercase tracking-[0.2em] text-stone-500">About Us</p>
          <h2 className="mt-3 text-3xl font-semibold">A growing furniture store with a local touch</h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-stone-600">
            Balkan Furniture serves customers in Warren and the surrounding area with high-quality
            furniture, dependable delivery, and assembly support.
          </p>
        </div>
        <div id="financing" className="rounded-[2rem] bg-stone-900 p-8 text-white shadow-sm md:p-10">
          <p className="text-sm uppercase tracking-[0.2em] text-stone-400">Optional Highlight</p>
          <h3 className="mt-3 text-3xl font-semibold">Financing made simple</h3>
          <p className="mt-5 text-sm leading-7 text-stone-300">
            Add a dedicated section for financing information, promotions, or easy payment options.
          </p>
          <button className="mt-6 rounded-2xl bg-white px-5 py-3 text-sm font-medium text-stone-900 transition hover:opacity-90">
            Learn About Financing
          </button>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 pb-20 pt-4">
        <div className="grid gap-8 md:grid-cols-[0.95fr,1.05fr]">
          <div className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm md:p-10">
            <p className="text-sm uppercase tracking-[0.2em] text-stone-500">Visit Us</p>
            <h2 className="mt-3 text-3xl font-semibold">Contact and location section</h2>
            <div className="mt-6 space-y-4 text-sm leading-7 text-stone-600">
              <p><span className="font-medium text-stone-900">Address:</span> Warren, MI</p>
              <p><span className="font-medium text-stone-900">Phone:</span> (586) 205-8171</p>
              <p><span className="font-medium text-stone-900">Hours:</span> Sun-Sat, 11 AM – 8 PM</p>
            </div>
          </div>

          <div className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm md:p-10">
            <h3 className="text-2xl font-semibold">Send us a message</h3>
            <div className="mt-6 grid gap-4">
              <input
                className="rounded-2xl border border-stone-300 px-4 py-3 outline-none placeholder:text-stone-400 focus:border-stone-500"
                placeholder="Your name"
              />
              <input
                className="rounded-2xl border border-stone-300 px-4 py-3 outline-none placeholder:text-stone-400 focus:border-stone-500"
                placeholder="Phone or email"
              />
              <textarea
                className="min-h-[140px] rounded-2xl border border-stone-300 px-4 py-3 outline-none placeholder:text-stone-400 focus:border-stone-500"
                placeholder="Tell us what furniture you’re looking for"
              />
              <button className="w-fit rounded-2xl bg-stone-900 px-6 py-3 text-sm font-medium text-white transition hover:opacity-90">
                Submit Inquiry
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}