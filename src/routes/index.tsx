import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Phone,
  MapPin,
  Clock,
  Baby,
  Heart,
  UserRound,
  Stethoscope,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  Quote,
  Mail,
} from "lucide-react";

import { useReveal } from "@/hooks/use-reveal";
import consultation from "@/assets/consultation.jpg";
import elderlyCare from "@/assets/elderly-care.jpg";
import walkerCare from "@/assets/walker-care.jpg";
import wheelchair from "@/assets/wheelchair-care.jpg";
import community from "@/assets/community.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Shraddha Care Taker — Premium Nursing & Maid Services in Nagpur",
      },
      {
        name: "description",
        content:
          "Trusted 24-hour nursing, elderly care, baby care and maid services at home in Nagpur. Trained ANM/GNM sisters, ward boys, attendants and maids.",
      },
      {
        property: "og:title",
        content: "Shraddha Care Taker Nursing & Maid Services",
      },
      {
        property: "og:description",
        content: "Patient Care at Home — 24 Hours. Nagpur.",
      },
    ],
  }),
  component: Home,
});

const PHONE = "+91 90679 24183";
const PHONE_DIGITS = "919067924183";
const WHATSAPP_BASE = `https://wa.me/${PHONE_DIGITS}`;
const ADDRESS =
  "Pallavi Apartment 1, Shantiniketan Colony, Kotwal Nagar, Pratap Nagar, Nagpur 440022";

function Home() {
  useReveal();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen min-h-[100svh] bg-background text-foreground">
      <Nav scrolled={scrolled} />
      <Hero />
      <Marquee />
      <About />
      <Services />
      <Gallery />
      <Why />
      <Testimonials />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_BASE}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 group ios-safe-fab"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-60 animate-ping" />
      <span className="relative grid place-items-center h-14 w-14 rounded-full bg-[#25D366] text-white shadow-[0_15px_40px_-10px_rgba(37,211,102,0.7)] border-2 border-white/30 transition-transform group-hover:scale-110">
        <svg
          viewBox="0 0 24 24"
          className="h-7 w-7"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M20.52 3.48A11.85 11.85 0 0 0 12.06 0C5.5 0 .17 5.33.17 11.89c0 2.09.55 4.13 1.6 5.93L0 24l6.34-1.66a11.86 11.86 0 0 0 5.72 1.46h.01c6.55 0 11.88-5.33 11.88-11.89 0-3.17-1.23-6.16-3.43-8.43zM12.07 21.8h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.76.99 1-3.66-.23-.38a9.86 9.86 0 0 1-1.51-5.27c0-5.46 4.44-9.9 9.91-9.9 2.65 0 5.13 1.03 7 2.9a9.83 9.83 0 0 1 2.9 7c0 5.46-4.44 9.9-9.9 9.9zm5.43-7.41c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.67-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.06 2.87 1.21 3.07.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.41.25-.69.25-1.28.17-1.41-.07-.13-.27-.2-.57-.35z" />
        </svg>
      </span>
    </a>
  );
}

function Nav({ scrolled }: { scrolled: boolean }) {
  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 ios-safe-top transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-background/80 border-b border-border/60 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-luxe flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 group">
          <span className="h-10 w-10 rounded-full bg-primary text-primary-foreground grid place-items-center font-display text-xl border border-gold/40">
            S
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-lg text-primary">Shraddha</span>
            <span className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground">
              Care · Nagpur
            </span>
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-9 text-sm">
          {[
            ["About", "#about"],
            ["Services", "#services"],
            ["Gallery", "#gallery"],
            ["Why Us", "#why"],
            ["Contact", "#contact"],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="relative text-foreground/80 hover:text-foreground transition-colors after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all hover:after:w-full"
            >
              {label}
            </a>
          ))}
        </nav>
        <a
          href={`tel:${PHONE.replace(/\s/g, "")}`}
          className="inline-flex md:hidden items-center gap-1.5 rounded-full bg-primary text-primary-foreground px-3.5 py-2 text-xs border border-gold/30 hover:bg-primary/90 transition-colors"
        >
          <Phone className="h-3.5 w-3.5 text-gold" />
          Call
        </a>
        <a
          href={`tel:${PHONE.replace(/\s/g, "")}`}
          className="hidden md:inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm border border-gold/30 hover:bg-primary/90 transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-10px_var(--gold)]"
        >
          <Phone className="h-4 w-4 text-gold" />
          Call 24×7
        </a>
      </div>
    </header>
  );
}

function Hero() {
  const stats = [
    ["7+", "Years of Experience"],
    ["24×7", "Service"],
    ["ANM/GNM", "Sisters"],
    ["Nagpur", "Citywide"],
  ];

  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center pt-28 overflow-hidden hero-aura"
    >
      <div className="absolute inset-0 noise-bg" />
      <div
        className="absolute -top-32 -right-32 h-[42rem] w-[42rem] rounded-full opacity-30 blur-3xl animate-float-soft"
        style={{
          background:
            "radial-gradient(circle, var(--gold) 0%, transparent 60%)",
        }}
      />
      <div className="container-luxe relative grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 space-y-7 reveal reveal-slide-right">
          <span className="inline-flex items-center gap-2 text-xs tracking-[0.3em] uppercase text-muted-foreground">
            <span className="h-px w-10 bg-gold" />
            Patient Care at Home · 7 Years of Trust
          </span>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-medium leading-[1.02] text-primary">
            Compassionate care, <br />
            crafted with{" "}
            <span className="text-gradient-gold italic">grace</span>.
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
            Shraddha Care Taker Nursing &amp; Maid Services delivers 24-hour
            trained nursing, elderly assistance, baby care and household help —
            with the warmth of family and the discipline of a hospital.
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-3.5 text-sm tracking-wide border border-gold/30 transition-all hover:-translate-y-0.5 hover:shadow-[0_15px_40px_-15px_var(--gold)]"
            >
              Book a Caregiver
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={`tel:${PHONE.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2 text-sm text-primary hover:text-gold transition-colors"
            >
              <Phone className="h-4 w-4" />
              {PHONE}
            </a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-6 pt-8 max-w-2xl">
            {stats.map(([a, b], i) => (
              <div
                key={a}
                className="reveal reveal-scale hero-stat group/stat"
                style={{ transitionDelay: `${220 + i * 90}ms` }}
              >
                <div className="font-display text-2xl text-primary leading-tight">
                  {a}
                </div>
                <div className="text-[11px] tracking-[0.15em] uppercase text-muted-foreground mt-1 leading-snug">
                  {b}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 relative reveal reveal-slide-left pb-12 lg:pb-16">
          <div className="hero-visual-card group/image relative aspect-[4/5] rounded-3xl overflow-hidden border border-gold/30 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.35)]">
            <img
              src={wheelchair}
              alt="Trained caregiver assisting a senior at home"
              className="h-full w-full object-cover transition-transform duration-[1500ms] group-hover/image:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
          </div>
          <div className="absolute bottom-0 left-4 sm:left-6 z-10 hidden sm:flex items-center gap-3 rounded-2xl bg-card/95 backdrop-blur px-5 py-4 border border-gold/40 shadow-xl animate-float-soft hover-lift">
            <ShieldCheck className="h-8 w-8 text-gold shrink-0" />
            <div>
              <div className="text-sm font-medium text-primary">
                Verified Caregivers
              </div>
              <div className="text-xs text-muted-foreground">
                Background-checked & trained
              </div>
            </div>
          </div>
          <div className="absolute -top-4 right-2 sm:right-4 z-10 hidden sm:flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-4 py-2 text-xs border border-gold/40 shadow-lg hover-lift">
            <Clock className="h-4 w-4 text-gold" />
            24 Hours
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = [
    "Nursing Services",
    "Baby Care",
    "Baby Sitting",
    "Old Age Care",
    "Sr. Citizen Care",
    "ANM Sister",
    "GNM Sister",
    "Ward Boy",
    "Attendant",
    "Maid Available",
  ];
  return (
    <div className="border-y border-border/60 bg-primary text-primary-foreground overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap py-5">
        {[...items, ...items].map((it, i) => (
          <span
            key={i}
            className="mx-10 inline-flex items-center gap-4 font-display text-xl"
          >
            {it}
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
          </span>
        ))}
      </div>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="py-28 lg:py-36">
      <div className="container-luxe grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative reveal">
          <img
            src={consultation}
            alt="Caregiver in consultation with patient"
            className="rounded-3xl w-full aspect-[4/3] object-cover border border-border/60"
          />
          <img
            src={elderlyCare}
            alt="Caregiver with elderly woman"
            className="hidden sm:block absolute -bottom-12 -right-6 w-56 aspect-[3/4] object-cover rounded-2xl border-4 border-background shadow-xl"
          />
        </div>
        <div className="reveal space-y-6">
          <span className="text-xs tracking-[0.3em] uppercase text-gold">
            About Us
          </span>
          <h2 className="text-4xl lg:text-5xl text-primary leading-tight">
            Twenty-four hours of{" "}
            <em className="text-gradient-gold not-italic">unwavering</em> care,
            at your doorstep.
          </h2>
          <div className="gold-line w-24" />
          <p className="text-muted-foreground leading-relaxed">
            For over <span className="text-primary font-medium">7 years</span>,
            Shraddha Care Taker Nursing &amp; Maid Services has been Nagpur's
            trusted home-care studio — built on a simple belief that every
            patient deserves the dignity of being cared for at home. Our trained
            sisters, attendants and maids bring clinical precision and personal
            warmth into the place that matters most.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            From new-born baby sitting to senior-citizen companionship and
            post-surgery recovery, we tailor each placement around the family —
            never the other way around.
          </p>
          <div className="grid grid-cols-2 gap-6 pt-4">
            {[
              { icon: ShieldCheck, t: "Trained & Verified" },
              { icon: Clock, t: "24×7 Availability" },
              { icon: Heart, t: "Patient-First Approach" },
              { icon: Sparkles, t: "Discreet & Hygienic" },
            ].map(({ icon: Icon, t }) => (
              <div key={t} className="flex items-center gap-3">
                <span className="h-10 w-10 grid place-items-center rounded-full bg-secondary border border-gold/30">
                  <Icon className="h-5 w-5 text-gold" />
                </span>
                <span className="text-sm text-primary">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const SERVICES = [
  {
    icon: Stethoscope,
    title: "Nursing Services",
    desc: "Trained ANM & GNM sisters for medications, wound dressing, vitals monitoring, post-operative care and chronic-illness support.",
  },
  {
    icon: Heart,
    title: "Old Age & Sr. Citizen Care",
    desc: "Patient, gentle companionship plus daily-living assistance — bathing, feeding, mobility and medication reminders.",
  },
  {
    icon: Baby,
    title: "Baby Care & Baby Sitting",
    desc: "Loving, hygienic care for infants and toddlers by experienced caregivers — day, night or full-time.",
  },
  {
    icon: UserRound,
    title: "Ward Boys & Attendants",
    desc: "Reliable hospital and home attendants for lifting, shifting, hygiene and continuous bedside support.",
  },
  {
    icon: Sparkles,
    title: "Maid Services",
    desc: "Trustworthy, background-checked maids for cooking, cleaning and household management.",
  },
  {
    icon: ShieldCheck,
    title: "Post-Surgery Recovery",
    desc: "Structured at-home recovery plans with periodic check-ins, physiotherapy coordination and family briefings.",
  },
];

function Services() {
  return (
    <section
      id="services"
      className="py-28 lg:py-36 bg-secondary/40 relative overflow-hidden"
    >
      <div className="absolute inset-x-0 top-0 h-px gold-line" />
      <div className="container-luxe">
        <div className="max-w-2xl mb-16 reveal">
          <span className="text-xs tracking-[0.3em] uppercase text-gold">
            Our Services
          </span>
          <h2 className="mt-3 text-4xl lg:text-5xl text-primary leading-tight">
            Every form of care,{" "}
            <em className="text-gradient-gold not-italic">under one roof</em>.
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map(({ icon: Icon, title, desc }, i) => (
            <article
              key={title}
              className="reveal group relative rounded-2xl bg-card border border-border p-8 transition-all duration-500 hover:-translate-y-2 hover:border-gold/60 hover:shadow-[0_30px_60px_-30px_rgba(0,0,0,0.25)]"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="inline-grid h-14 w-14 place-items-center rounded-xl bg-primary text-primary-foreground border border-gold/40 mb-6 transition-transform group-hover:scale-110 group-hover:rotate-3">
                <Icon className="h-6 w-6 text-gold" />
              </span>
              <h3 className="text-2xl text-primary mb-3">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {desc}
              </p>
              <div className="mt-6 inline-flex items-center gap-2 text-xs tracking-widest uppercase text-gold opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                Enquire <ArrowRight className="h-3.5 w-3.5" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const items = [
    {
      src: walkerCare,
      alt: "Caregiver helping senior with walker",
      span: "lg:col-span-2 lg:row-span-2",
    },
    {
      src: elderlyCare,
      alt: "Caregiver smiling with elderly woman",
      span: "",
    },
    { src: community, alt: "Senior community gathering", span: "" },
    {
      src: consultation,
      alt: "Caregiver consulting patient",
      span: "lg:col-span-2",
    },
  ];
  return (
    <section id="gallery" className="py-28 lg:py-36">
      <div className="container-luxe">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-14 reveal">
          <div className="max-w-xl">
            <span className="text-xs tracking-[0.3em] uppercase text-gold">
              Moments of Care
            </span>
            <h2 className="mt-3 text-4xl lg:text-5xl text-primary leading-tight">
              Quiet dignity,{" "}
              <em className="text-gradient-gold not-italic">captured daily</em>.
            </h2>
          </div>
          <div className="gold-line w-32" />
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 auto-rows-[14rem] gap-4">
          {items.map((it, i) => (
            <figure
              key={i}
              className={`reveal reveal-scale gallery-card relative overflow-hidden rounded-2xl border border-border group ${it.span}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <img
                src={it.src}
                alt={it.alt}
                className="h-full w-full object-cover transition-transform duration-[1500ms] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/75 via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-5">
                <span className="gallery-caption text-xs tracking-widest uppercase text-primary-foreground">
                  {it.alt}
                </span>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Why() {
  const items = [
    {
      n: "01",
      t: "Hand-picked caregivers",
      d: "Every sister, attendant and maid is interviewed, verified and trained before placement.",
    },
    {
      n: "02",
      t: "Round-the-clock support",
      d: "Our coordinators are reachable 24 hours a day for replacements, escalations or guidance.",
    },
    {
      n: "03",
      t: "Tailored to your family",
      d: "Care plans are built around the patient's routine, diet, faith and personal preferences.",
    },
    {
      n: "04",
      t: "Transparent & local",
      d: "Proudly based in Nagpur with clear pricing and no hidden fees — ever.",
    },
  ];
  return (
    <section
      id="why"
      className="py-28 lg:py-36 bg-primary text-primary-foreground relative overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, var(--gold) 0, transparent 35%), radial-gradient(circle at 80% 80%, var(--gold) 0, transparent 35%)",
        }}
      />
      <div className="container-luxe relative">
        <div className="max-w-2xl mb-16 reveal">
          <span className="text-xs tracking-[0.3em] uppercase text-gold">
            Why Shraddha
          </span>
          <h2 className="mt-3 text-4xl lg:text-5xl leading-tight">
            A standard of care families{" "}
            <em className="text-gradient-gold not-italic">remember</em>.
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
          {items.map(({ n, t, d }, i) => (
            <div
              key={n}
              className="reveal flex gap-6 border-t border-gold/30 pt-8"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <span className="font-display text-3xl text-gold">{n}</span>
              <div>
                <h3 className="text-xl mb-2">{t}</h3>
                <p className="text-sm text-primary-foreground/70 leading-relaxed">
                  {d}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const quotes = [
    {
      q: "The sister Shraddha sent for my father was punctual, gentle and remarkably skilled. We finally slept peacefully.",
      a: "— Mrs. Deshpande, Dharampeth",
    },
    {
      q: "From the very first call, everything felt organised and warm. Their maid has become part of our home.",
      a: "— Kulkarni Family, Pratap Nagar",
    },
    {
      q: "Post-operative care for my mother was handled with such dignity. Truly grateful for the team.",
      a: "— Dr. Sharma, Civil Lines",
    },
  ];
  return (
    <section className="py-28 lg:py-36">
      <div className="container-luxe">
        <div className="max-w-2xl mb-14 reveal">
          <span className="text-xs tracking-[0.3em] uppercase text-gold">
            Kind Words
          </span>
          <h2 className="mt-3 text-4xl lg:text-5xl text-primary leading-tight">
            Stories from the families{" "}
            <em className="text-gradient-gold not-italic">we serve</em>.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {quotes.map((t, i) => (
            <blockquote
              key={i}
              className="reveal relative rounded-2xl border border-border bg-card p-8 hover:border-gold/50 transition-colors"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <Quote className="h-8 w-8 text-gold mb-4" />
              <p className="text-primary leading-relaxed font-display text-lg">
                "{t.q}"
              </p>
              <footer className="mt-6 text-xs tracking-widest uppercase text-muted-foreground">
                {t.a}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-28 lg:py-36 bg-secondary/50 relative">
      <div className="container-luxe grid lg:grid-cols-2 gap-16">
        <div className="reveal space-y-7">
          <span className="text-xs tracking-[0.3em] uppercase text-gold">
            Get in Touch
          </span>
          <h2 className="text-4xl lg:text-5xl text-primary leading-tight">
            Speak with us,{" "}
            <em className="text-gradient-gold not-italic">any hour</em>.
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-md">
            Tell us about your loved one and we'll match the right caregiver —
            usually within a few hours.
          </p>

          <div className="space-y-5 pt-2">
            <div className="flex items-start gap-4">
              <span className="h-11 w-11 grid place-items-center rounded-full bg-primary text-primary-foreground border border-gold/40">
                <Phone className="h-5 w-5 text-gold" />
              </span>
              <div>
                <div className="text-xs tracking-widest uppercase text-muted-foreground mb-1">
                  Call 24×7
                </div>
                <div className="flex flex-col">
                  <a
                    href={`tel:${PHONE.replace(/\s/g, "")}`}
                    className="text-primary hover:text-gold transition-colors font-display text-xl"
                  >
                    {PHONE}
                  </a>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="h-11 w-11 grid place-items-center rounded-full bg-primary text-primary-foreground border border-gold/40">
                <MapPin className="h-5 w-5 text-gold" />
              </span>
              <div>
                <div className="text-xs tracking-widest uppercase text-muted-foreground mb-1">
                  Visit
                </div>
                <p className="text-primary max-w-xs leading-relaxed">
                  {ADDRESS}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="h-11 w-11 grid place-items-center rounded-full bg-primary text-primary-foreground border border-gold/40">
                <Clock className="h-5 w-5 text-gold" />
              </span>
              <div>
                <div className="text-xs tracking-widest uppercase text-muted-foreground mb-1">
                  Hours
                </div>
                <p className="text-primary">Open 24 hours · 7 days a week</p>
              </div>
            </div>
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            const fd = new FormData(e.currentTarget);
            const name = fd.get("name");
            const phone = fd.get("phone");
            const forWhom = fd.get("for");
            const need = fd.get("need");
            const body = encodeURIComponent(
              `Hello Shraddha Care Taker,\n\nName: ${name}\nPhone: ${phone}\nCare for: ${forWhom}\nRequirement: ${need}`,
            );
            window.open(
              `${WHATSAPP_BASE}?text=${body}`,
              "_blank",
              "noopener,noreferrer",
            );
          }}
          className="reveal rounded-3xl bg-card border border-border p-8 lg:p-10 space-y-5 shadow-xl"
        >
          <h3 className="text-2xl text-primary font-display">
            Request a caregiver
          </h3>
          <div className="gold-line w-16" />
          <div className="grid sm:grid-cols-2 gap-4">
            <Field name="name" label="Your name" required />
            <Field name="phone" label="Phone" type="tel" required />
          </div>
          <Field name="for" label="Care needed for (e.g. mother, baby)" />
          <div>
            <label className="text-xs tracking-widest uppercase text-muted-foreground">
              What kind of help?
            </label>
            <textarea
              name="need"
              rows={4}
              required
              className="mt-2 w-full rounded-xl bg-background border border-input px-4 py-3 text-base sm:text-sm outline-none focus:border-gold transition-colors resize-none"
              placeholder="Tell us briefly about the requirement…"
            />
          </div>
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] text-white px-7 py-3.5 text-sm tracking-wide border border-[#25D366]/40 transition-all hover:-translate-y-0.5 hover:shadow-[0_15px_40px_-15px_#25D366]"
          >
            Send Request on WhatsApp
            <ArrowRight className="h-4 w-4" />
          </button>
          <p className="text-xs text-muted-foreground text-center">
            Opens WhatsApp chat with {PHONE}
          </p>
        </form>
      </div>
    </section>
  );
}

function Field({
  name,
  label,
  type = "text",
  required,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-xs tracking-widest uppercase text-muted-foreground">
        {label}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-xl bg-background border border-input px-4 py-3 text-base sm:text-sm outline-none focus:border-gold transition-colors"
      />
    </label>
  );
}

function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-14 border-t border-gold/30">
      <div className="container-luxe grid md:grid-cols-3 gap-10 items-start">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="h-10 w-10 rounded-full bg-background text-primary grid place-items-center font-display text-xl border border-gold/40">
              S
            </span>
            <span className="font-display text-lg">Shraddha Care Taker</span>
          </div>
          <p className="text-sm text-primary-foreground/70 max-w-xs leading-relaxed">
            Nursing &amp; Maid Services — patient care at home, 24 hours, across
            Nagpur.
          </p>
        </div>
        <div>
          <div className="text-xs tracking-widest uppercase text-gold mb-3">
            Contact
          </div>
          <ul className="space-y-1 text-sm">
            <li>
              <a
                href={`tel:${PHONE.replace(/\s/g, "")}`}
                className="hover:text-gold transition-colors"
              >
                {PHONE}
              </a>
            </li>
            <li>
              <a
                href={WHATSAPP_BASE}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold transition-colors"
              >
                WhatsApp · {PHONE}
              </a>
            </li>
          </ul>
        </div>
        <div>
          <div className="text-xs tracking-widest uppercase text-gold mb-3">
            Address
          </div>
          <p className="text-sm text-primary-foreground/70 leading-relaxed">
            {ADDRESS}
          </p>
        </div>
      </div>
      <div className="container-luxe mt-10 pt-6 border-t border-primary-foreground/10 flex flex-wrap items-center justify-between gap-4 text-xs text-primary-foreground/60">
        <span>
          © {new Date().getFullYear()} Shraddha Care Taker Nursing &amp; Maid
          Services.
        </span>
        <span className="inline-flex items-center gap-2">
          <Mail className="h-3.5 w-3.5 text-gold" />
          Made with care in Nagpur
        </span>
      </div>
    </footer>
  );
}
