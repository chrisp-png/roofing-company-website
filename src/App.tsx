import React from "react";

const stats = [
  { label: "Roofs Completed", value: "2,500+" },
  { label: "Years in HVHZ", value: "15+" },
  { label: "Avg. Rating", value: "4.9★" },
];

const services = [
  {
    title: "Metal Roofing (HVHZ Ready)",
    description:
      "Mechanically seamed and standing seam metal systems designed for South Florida’s High Velocity Hurricane Zone.",
  },
  {
    title: "Tile Roofing",
    description:
      "Concrete and clay tile installations with code-compliant underlayment, flashing, and uplift resistance.",
  },
  {
    title: "Shingle Roofing",
    description:
      "Architectural shingles installed with enhanced fastening patterns and upgraded underlayment systems.",
  },
  {
    title: "Flat & Low-Slope Systems",
    description:
      "TPO, PVC, modified bitumen, and coating systems for condos, commercial plazas, and multifamily buildings.",
  },
  {
    title: "Structural & Hurricane Straps",
    description:
      "As a dual-licensed General Contractor, we can address structural tie-ins, hurricane straps, and engineering.",
  },
  {
    title: "Repairs & Maintenance",
    description:
      "Targeted leak repairs, condition reports, and maintenance plans that extend the life of your roof.",
  },
];

const processSteps = [
  "On-site inspection, photos, and condition report.",
  "Scope of work and transparent, itemized proposal.",
  "Permit submission, associations/board coordination.",
  "Roof installation with daily cleanup and updates.",
  "Final inspection, documentation, and warranty.",
];

const testimonials = [
  {
    name: "Condo Association – Broward County",
    quote:
      "They handled the roofing, structural work, and all the paperwork with the city and our insurance. Smooth from start to finish.",
  },
  {
    name: "Single-Family Homeowner – Palm Beach County",
    quote:
      "We passed inspection the first time and our insurance premium dropped after the wind-mit report. Highly recommend.",
  },
];

const blogPosts = [
  {
    title: "Metal vs. Tile Roofs in South Florida (HVHZ Guide)",
    slug: "metal-vs-tile-roofs-south-florida",
    description:
      "Compare lifespan, wind performance, and insurance impact of metal and tile roofs in the High Velocity Hurricane Zone.",
    date: "November 2025",
    readTime: "7 min read",
    url: "/blog/metal-vs-tile-roofs-south-florida.html",
  },
  {
    title: "How Condo & HOA Boards Should Plan a Re-Roof in the HVHZ",
    slug: "hoa-condo-reroof-planning-hvhz",
    description:
      "A step-by-step roadmap for boards and property managers: bids, engineering, permits, phasing, and resident communication.",
    date: "November 2025",
    readTime: "9 min read",
    url: "/blog/hoa-condo-reroof-planning-hvhz.html",
  },
  {
    title: "My Safe Florida Home & Condo – Roofing Upgrades and Grants",
    slug: "my-safe-florida-home-condo-roof-upgrades",
    description:
      "Understand how state programs, inspections, and roof upgrades can reduce risk and improve insurance outcomes.",
    date: "November 2025",
    readTime: "6 min read",
    url: "/blog/my-safe-florida-home-condo-roof-upgrades.html",
  },
];

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* NAVBAR */}
      <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-red-600 text-xl font-black leading-none">
              A
            </div>
            <div>
              <div className="text-sm font-semibold tracking-wide uppercase">
                All Phase Construction USA
              </div>
              <div className="text-xs text-slate-400">
                Roofing &amp; General Contractor – FL
              </div>
            </div>
          </div>
          <nav className="hidden gap-6 text-sm md:flex">
            <a href="#residential" className="hover:text-red-400">Residential</a>
            <a href="#commercial" className="hover:text-red-400">Commercial</a>
            <a href="#roof-types" className="hover:text-red-400">Roof Types</a>
            <a href="#hvhn" className="hover:text-red-400">HVHZ / Code</a>
            <a href="#grants" className="hover:text-red-400">Condo Grants</a>
            <a href="#projects" className="hover:text-red-400">Projects</a>
            <a href="#blog" className="hover:text-red-400">Blog</a>
            <a href="#contact" className="hover:text-red-400">Contact</a>
          </nav>
          <a
            href="#contact"
            className="hidden rounded-full bg-red-600 px-4 py-2 text-xs font-semibold uppercase tracking-wide hover:bg-red-500 md:inline-block"
          >
            Request Roof Assessment
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="border-b border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-black">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-12 lg:flex-row lg:items-center lg:py-20">
          <div className="flex-1 space-y-6">
            <p className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-300">
              Dual Licensed &nbsp;•&nbsp; Roofing + General Contractor
            </p>
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-50 sm:text-4xl lg:text-5xl">
              Hurricane-Ready Roofing for{" "}
              <span className="text-red-500">Broward &amp; Palm Beach</span>.
            </h1>
            <p className="max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
              All Phase Construction USA installs code-compliant roofing systems
              built for Florida&apos;s High Velocity Hurricane Zone. From
              tile and metal to flat and commercial roofs, we handle the
              entire process—from engineering and permitting to final
              inspection.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#contact"
                className="rounded-full bg-red-600 px-5 py-2.5 text-sm font-semibold uppercase tracking-wide hover:bg-red-500"
              >
                Schedule a roof assessment
              </a>
              <a
                href="#services"
                className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold uppercase tracking-wide text-slate-200 hover:border-red-500 hover:text-red-400"
              >
                View services
              </a>
            </div>
            <div className="mt-4 flex flex-wrap gap-6 text-xs text-slate-400">
              <div>Serving: Deerfield Beach • Boca Raton • Surrounding HVHZ</div>
              <div>License: CGC / Roofing Contractor – Insured &amp; Bonded</div>
            </div>
          </div>

          <div className="flex-1">
            <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/60 p-4 shadow-xl">
              <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_#ef44441a,_transparent_55%)]" />
              <div className="mb-4 flex items-center justify-between text-xs text-slate-400">
                <span className="font-semibold uppercase tracking-wide">
                  Recent Project Snapshot
                </span>
                <span>Metal &amp; Tile • Condo &amp; Residential</span>
              </div>
              <div className="h-44 rounded-2xl bg-slate-800/80 backdrop-blur-sm" />
              <div className="mt-4 grid gap-4 text-xs sm:grid-cols-3">
                {stats.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-slate-800 bg-slate-900/80 p-3"
                  >
                    <div className="text-sm font-bold text-slate-50">
                      {item.value}
                    </div>
                    <div className="mt-1 text-[11px] uppercase tracking-wide text-slate-400">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RESIDENTIAL */}
      <section
        id="residential"
        className="border-b border-slate-800 bg-slate-950"
      >
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-3xl font-bold text-slate-50">Residential Roofing</h2>
          <p className="mt-3 max-w-2xl text-sm text-slate-300">
            We install hurricane-ready roofing systems for single-family homes, duplexes,
            townhomes, and custom properties throughout Broward and Palm Beach Counties.
            Every residential project includes photos, inspections, permit handling, and
            full documentation for insurance.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
              <h3 className="text-sm font-semibold text-slate-50">Tile Roofing</h3>
              <p className="mt-2 text-xs text-slate-300">
                Concrete and clay tile systems designed for aesthetics, durability, and
                South Florida's HVHZ requirements.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
              <h3 className="text-sm font-semibold text-slate-50">Metal Roofing</h3>
              <p className="mt-2 text-xs text-slate-300">
                Mechanically seamed metal roofs engineered for top wind performance and
                insurance-driven savings.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
              <h3 className="text-sm font-semibold text-slate-50">Shingle Roofing</h3>
              <p className="mt-2 text-xs text-slate-300">
                Architectural shingles with upgraded underlayments and HVHZ fastening
                patterns to meet code.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COMMERCIAL */}
      <section
        id="commercial"
        className="border-b border-slate-800 bg-slate-950"
      >
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-3xl font-bold text-slate-50">Commercial Roofing</h2>
          <p className="mt-3 max-w-2xl text-sm text-slate-300">
            All Phase Construction USA handles commercial plazas, industrial buildings,
            multi-family structures, warehouses, restaurants, and office buildings. We are
            dual-licensed, enabling us to perform structural upgrades, hurricane straps,
            and engineering as required in the HVHZ.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
              <h3 className="text-sm font-semibold text-slate-50">TPO / PVC Roofing</h3>
              <p className="mt-2 text-xs text-slate-300">
                Energy-efficient membranes for commercial flat roofs that meet Florida
                building code and insurance requirements.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
              <h3 className="text-sm font-semibold text-slate-50">Modified Bitumen</h3>
              <p className="mt-2 text-xs text-slate-300">
                Torch, mop, or cold-applied systems for low-slope roofs needing enhanced
                durability and long-term waterproofing.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
              <h3 className="text-sm font-semibold text-slate-50">
                Commercial Metal Roofing
              </h3>
              <p className="mt-2 text-xs text-slate-300">
                Standing seam, R-panel, and engineered metal solutions optimized for
                hurricane-force conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="border-b border-slate-800 bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <h2 className="text-2xl font-bold text-slate-50 sm:text-3xl">
                Roofing Services
              </h2>
              <p className="mt-2 max-w-xl text-sm text-slate-300">
                From high-end residential to complex condo and commercial
                projects, we design and install roofing systems tailored to your
                building, budget, and insurance requirements.
              </p>
            </div>
            <p className="max-w-sm text-xs text-slate-400">
              Every project includes photo documentation, permit handling,
              inspections, and final close-out package for your records and
              insurance.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="group flex flex-col rounded-3xl border border-slate-800 bg-slate-900/60 p-5 shadow-sm transition hover:-translate-y-1 hover:border-red-500/80 hover:shadow-red-900/20"
              >
                <h3 className="text-sm font-semibold text-slate-50">
                  {service.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-300">
                  {service.description}
                </p>
                <span className="mt-4 text-[11px] font-semibold uppercase tracking-wide text-red-400/90">
                  HVHZ • Florida Building Code Compliant
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HVHZ / PROCESS */}
      <section
        id="hvhn"
        className="border-b border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
      >
        <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-slate-50 sm:text-3xl">
                Built for the High Velocity Hurricane Zone
              </h2>
              <p className="mt-3 text-sm text-slate-300">
                South Florida&apos;s HVHZ requires more than just &quot;any
                roof.&quot; Systems must be engineered, permitted, and
                installed to meet strict uplift and fastening requirements. As a
                dual-licensed GC and Roofing Contractor, we understand the
                structural side as well as the roofing side.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-200">
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                  Engineered fastening patterns, decks, and attachments.
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                  Hurricane straps, structural tie-ins, and framing upgrades
                  where required.
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                  Assistance with wind-mitigation reports and insurance
                  documentation.
                </li>
              </ul>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-5">
              <h3 className="text-sm font-semibold text-slate-50">
                Our Process
              </h3>
              <ol className="mt-4 space-y-3 text-xs text-slate-200">
                {processSteps.map((step, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-600 text-[11px] font-bold">
                      {idx + 1}
                    </span>
                    <span className="pt-0.5">{step}</span>
                  </li>
                ))}
              </ol>
              <p className="mt-4 text-xs text-slate-400">
                Communication is constant. You&apos;ll always know what phase
                your roof is in and what comes next.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GRANTS / PROGRAMS */}
      <section
        id="grants"
        className="border-b border-slate-800 bg-slate-950/95"
      >
        <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-slate-50 sm:text-3xl">
                My Safe Florida Condo &amp; Insurance Savings
              </h2>
              <p className="mt-3 text-sm text-slate-300">
                Eligible condominium associations can access grant programs that
                help offset roofing and hurricane-hardening costs—often up to a
                significant portion of the contract value.
              </p>
              <p className="mt-3 text-sm text-slate-300">
                We stay current on available programs and can coordinate with
                boards, managers, and engineers to help you take advantage of
                them where applicable.
              </p>
            </div>
            <div className="rounded-3xl border border-amber-500/40 bg-amber-950/20 p-5">
              <h3 className="text-sm font-semibold text-amber-300">
                Talk to us about:
              </h3>
              <ul className="mt-3 space-y-2 text-xs text-amber-100/90">
                <li>• Grant and rebate opportunities tied to roofing upgrades</li>
                <li>• Wind-mitigation reports and premium reduction strategies</li>
                <li>• Phased projects for multi-building associations</li>
              </ul>
              <p className="mt-4 text-[11px] text-amber-200/80">
                Program availability and rules change. We&apos;ll review your
                specific property and timeline, then coordinate with your board,
                manager, and insurance team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section
        id="blog"
        className="border-b border-slate-800 bg-slate-950"
      >
        <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16 lg:py-20">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-bold text-slate-50 sm:text-3xl">
                Roofing Education &amp; Insurance Insights
              </h2>
              <p className="mt-3 max-w-xl text-sm text-slate-300">
                Articles written for South Florida homeowners, HOAs, and condo
                boards on roofing systems, hurricane code, and insurance savings.
              </p>
            </div>
            <p className="text-xs text-slate-400">
              New posts are added as programs and Florida Building Code updates change.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="flex flex-col rounded-3xl border border-slate-800 bg-slate-900/70 p-5 hover:border-red-500/80 hover:shadow-lg hover:shadow-red-900/20"
              >
                <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                  {post.date} • {post.readTime}
                </p>
                <h3 className="mt-2 text-sm font-semibold leading-snug text-slate-50">
                  {post.title}
                </h3>
                <p className="mt-2 flex-1 text-xs leading-relaxed text-slate-300">
                  {post.description}
                </p>
                <a
                  href={post.url}
                  className="mt-4 text-xs font-semibold uppercase tracking-wide text-red-400 hover:text-red-300"
                >
                  Read article →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS & PROJECTS */}
      <section
        id="projects"
        className="border-b border-slate-800 bg-slate-950/90"
      >
        <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-slate-50 sm:text-3xl">
                Recent Projects
              </h2>
              <p className="mt-3 text-sm text-slate-300">
                From single-family homes to multi-building associations, we
                manage roofing projects with minimal disruption and clear
                communication.
              </p>
              <div className="mt-5 grid gap-4 text-xs text-slate-200">
                <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
                  <div className="font-semibold">
                    Condo Re-Roof – Palm Beach County
                  </div>
                  <div className="mt-1 text-slate-300">
                    Multiple buildings re-roofed with upgraded underlayment,
                    metal flashings, and wind-mit reports for insurance.
                  </div>
                </div>
                <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
                  <div className="font-semibold">
                    Single-Family Metal Conversion – Broward
                  </div>
                  <div className="mt-1 text-slate-300">
                    Tile tear-off replaced with mechanically seamed metal roof
                    for maximum uplift resistance and long-term durability.
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-slate-50">
                What Our Clients Say
              </h3>
              <div className="mt-4 grid gap-4">
                {testimonials.map((t) => (
                  <figure
                    key={t.name}
                    className="rounded-3xl border border-slate-800 bg-slate-900/70 p-4"
                  >
                    <p className="text-xs leading-relaxed text-slate-200">
                      “{t.quote}”
                    </p>
                    <figcaption className="mt-3 text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                      {t.name}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="border-b border-slate-800 bg-gradient-to-tr from-black via-slate-950 to-slate-900"
      >
        <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
            <div>
              <h2 className="text-2xl font-bold text-slate-50 sm:text-3xl">
                Request a Roof Assessment
              </h2>
              <p className="mt-3 text-sm text-slate-300">
                Tell us about your property and we&apos;ll follow up to schedule
                an inspection, review options, and provide a detailed,
                itemized proposal.
              </p>
              <form className="mt-6 grid gap-4 text-sm">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-300">
                      Name
                    </label>
                    <input
                      className="w-full rounded-xl border border-slate-700 bg-slate-900/70 px-3 py-2 text-sm text-slate-50 outline-none focus:border-red-500"
                      placeholder="Full name"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-300">
                      Phone
                    </label>
                    <input
                      className="w-full rounded-xl border border-slate-700 bg-slate-900/70 px-3 py-2 text-sm text-slate-50 outline-none focus:border-red-500"
                      placeholder="(xxx) xxx-xxxx"
                    />
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-300">
                      Email
                    </label>
                    <input
                      className="w-full rounded-xl border border-slate-700 bg-slate-900/70 px-3 py-2 text-sm text-slate-50 outline-none focus:border-red-500"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-300">
                      Property Address
                    </label>
                    <input
                      className="w-full rounded-xl border border-slate-700 bg-slate-900/70 px-3 py-2 text-sm text-slate-50 outline-none focus:border-red-500"
                      placeholder="Street, City, ZIP"
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-300">
                    Tell us about your roof
                  </label>
                  <textarea
                    rows={4}
                    className="w-full rounded-xl border border-slate-700 bg-slate-900/70 px-3 py-2 text-sm text-slate-50 outline-none focus:border-red-500"
                    placeholder="Age of roof, leaks, association or commercial details, timeline, etc."
                  />
                </div>
                <button
                  type="button"
                  className="mt-2 inline-flex items-center justify-center rounded-full bg-red-600 px-6 py-2.5 text-xs font-semibold uppercase tracking-wide hover:bg-red-500"
                >
                  Submit Request
                </button>
              </form>
            </div>

            <div className="space-y-4 rounded-3xl border border-slate-800 bg-slate-900/70 p-5 text-sm text-slate-200">
              <h3 className="text-sm font-semibold text-slate-50">
                All Phase Construction USA
              </h3>
              <p className="text-xs text-slate-300">
                590 Goolsby Blvd<br />
                Deerfield Beach, FL 33442
              </p>
              <p className="text-xs text-slate-300">
                Phone: <span className="font-semibold">754-227-5605</span>
              </p>
              <p className="text-xs text-slate-300">
                Website:{" "}
                <span className="font-semibold">www.AllPhaseUSA.com</span>
              </p>
              <p className="text-[11px] text-slate-400">
                Serving Broward and Palm Beach Counties with full roofing and general contracting
                services, including HOA and condo associations, metal conversions, and insurance-driven
                upgrades in South Florida's High Velocity Hurricane Zone.
              </p>

              <div className="pt-3 border-t border-slate-800 space-y-3">
                <p className="text-xs text-slate-300 font-semibold">
                  Find us on the map
                </p>

                <div className="h-40 w-full overflow-hidden rounded-2xl border border-slate-800">
                  <iframe
                    title="All Phase Construction USA - Google Maps"
                    src="https://www.google.com/maps/dir//590+Goolsby+Blvd,+Deerfield+Beach,+FL+33442/@26.3027445,-80.131692,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x88d91d982b569be1:0xc298661959b65cbf!2m2!1d-80.1251381!2d26.3107856?entry=ttu&g_ep=EgoyMDI1MTEyMy4xIKXMDSoASAFQAw%3D%3D"
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    className="h-full w-full border-0"
                  ></iframe>
                </div>

                <a
                  href="https://maps.apple.com/?address=590%20Goolsby%20Blvd,%20Deerfield%20Beach,%20FL%2033442"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-slate-700 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-slate-200 hover:border-red-500 hover:text-red-300"
                >
                  Open in Apple Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 text-[11px] text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <div>
            © {new Date().getFullYear()} All Phase Construction USA, LLC. All
            rights reserved.
          </div>
          <div className="flex flex-wrap gap-3">
            <span>Roofing &amp; General Contractor • HVHZ</span>
            <span className="hidden sm:inline">•</span>
            <span>Licensed • Insured • Bonded</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;

