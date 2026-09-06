import { useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Check,
  Instagram,
  Menu,
  MessageCircle,
  ShieldCheck,
  Star,
  X,
} from "lucide-react";

import heroImage from "@/assets/italo-hero-iphone.jpg";
import productBlue from "@/assets/italo-product-blue.jpg";
import productOrange from "@/assets/italo-product-orange.jpg";
import teamImage from "@/assets/italo-team.jpg";
import { Button } from "@/components/ui/button";

const WHATSAPP_NUMBER = "5579999999999";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Oi! Quero escolher meu próximo iPhone.")}`;

type Product = {
  name: string;
  description: string;
  price: string;
  tag: string;
  category: "Novos" | "Seminovos";
  image: string;
  imageWidth: number;
  imageHeight: number;
};

const products: Product[] = [
  {
    name: "iPhone 16 Pro Max",
    description: "Titânio natural · 256 GB",
    price: "Consulte condições",
    tag: "O mais desejado",
    category: "Novos",
    image: heroImage,
    imageWidth: 1536,
    imageHeight: 1280,
  },
  {
    name: "iPhone 15 Pro",
    description: "Azul · 128 GB",
    price: "A partir de R$ 5.999",
    tag: "Pronta entrega",
    category: "Seminovos",
    image: productBlue,
    imageWidth: 1280,
    imageHeight: 1440,
  },
  {
    name: "iPhone 16",
    description: "Ultramarino · 128 GB",
    price: "A partir de R$ 6.499",
    tag: "Novo lacrado",
    category: "Novos",
    image: productOrange,
    imageWidth: 1280,
    imageHeight: 1440,
  },
];

const testimonials = [
  {
    quote:
      "Atendimento muito acima da média. Tiraram todas as dúvidas, me ajudaram a escolher e entregaram tudo certinho.",
    name: "Mariana Santos",
    detail: "Cliente verificada · Aracaju",
  },
  {
    quote:
      "Já é o terceiro iPhone da família com eles. Negociação transparente, aparelho impecável e suporte de verdade.",
    name: "Rafael Oliveira",
    detail: "Cliente verificado · Maceió",
  },
  {
    quote:
      "Comprei pelo WhatsApp e me senti segura do início ao fim. Atendimento rápido, humano e sem enrolação.",
    name: "Camila Andrade",
    detail: "Cliente verificada · Salvador",
  },
];

function Logo() {
  return (
    <a href="#inicio" className="inline-flex items-center gap-3" aria-label="Ítalo iPhone — início">
      <span className="logo-mark">I</span>
      <span className="font-extrabold leading-none text-foreground">
        ÍTALO <span className="text-brand-yellow">IPHONE</span>
      </span>
    </a>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    ["Aparelhos", "#aparelhos"],
    ["Por que a gente?", "#sobre"],
    ["Avaliações", "#avaliacoes"],
  ];

  return (
    <header className="site-header">
      <div className="site-container flex h-20 items-center justify-between">
        <Logo />
        <nav className="hidden items-center gap-8 md:flex" aria-label="Navegação principal">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="nav-link">
              {label}
            </a>
          ))}
        </nav>
        <div className="hidden md:block">
          <Button asChild variant="brand" size="lg">
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
              Falar com a gente <MessageCircle />
            </a>
          </Button>
        </div>
        <Button
          variant="ghostDark"
          size="icon"
          className="md:hidden"
          onClick={() => setOpen((current) => !current)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <X /> : <Menu />}
        </Button>
      </div>
      {open && (
        <div className="mobile-nav md:hidden">
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)} className="mobile-nav-link">
              {label}
            </a>
          ))}
          <Button asChild variant="brand" size="lg" className="mt-2 w-full">
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
              Falar com a gente <MessageCircle />
            </a>
          </Button>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="inicio" className="hero-section">
      <div className="hero-media" aria-hidden="true">
        <img src={heroImage} alt="" width={1536} height={1280} className="hero-image" />
      </div>
      <div className="site-container relative z-10 flex min-h-[720px] items-center py-24 lg:min-h-[780px]">
        <div className="max-w-3xl">
          <div className="eyebrow"><span /> 10 anos realizando upgrades</div>
          <h1 className="mt-7 text-5xl font-extrabold leading-[0.98] tracking-normal text-foreground sm:text-7xl lg:text-8xl">
            Seu próximo iPhone.
            <span className="block text-muted-foreground">Do jeito certo.</span>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-copy sm:text-xl">
            Procedência, preço justo e atendimento que fala a sua língua. Sem enrolação. Sem surpresa.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="brand" size="xl">
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                Quero meu iPhone <ArrowUpRight />
              </a>
            </Button>
            <Button asChild variant="outlineDark" size="xl">
              <a href="#aparelhos">Ver aparelhos</a>
            </Button>
          </div>
          <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm font-semibold text-copy">
            <span className="inline-flex items-center gap-2"><Check className="text-brand-yellow" /> Garantia de verdade</span>
            <span className="inline-flex items-center gap-2"><Check className="text-brand-yellow" /> Suporte pós-venda</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function AuthorityStrip() {
  return (
    <section className="border-y border-border bg-surface-strong" aria-label="Números da Ítalo iPhone">
      <div className="site-container grid grid-cols-2 divide-x divide-border lg:grid-cols-4">
        {[
          ["10+", "anos no mercado"],
          ["12 mil+", "clientes atendidos"],
          ["4,9", "avaliação média"],
          ["169 mil", "seguidores"],
        ].map(([number, label]) => (
          <div key={label} className="px-5 py-8 text-center sm:py-10">
            <p className="text-3xl font-extrabold text-foreground sm:text-4xl">{number}</p>
            <p className="mt-2 text-xs font-bold uppercase text-muted-foreground">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Products() {
  const [filter, setFilter] = useState<"Todos" | Product["category"]>("Todos");
  const filtered = filter === "Todos" ? products : products.filter((product) => product.category === filter);

  return (
    <section id="aparelhos" className="section-space bg-background">
      <div className="site-container">
        <div className="section-heading-row">
          <div>
            <p className="section-kicker">Escolhidos a dedo</p>
            <h2 className="section-title">O upgrade que combina com você.</h2>
          </div>
          <div className="filter-tabs" role="group" aria-label="Filtrar aparelhos">
            {(["Todos", "Novos", "Seminovos"] as const).map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setFilter(item)}
                className={filter === item ? "filter-tab filter-tab-active" : "filter-tab"}
                aria-pressed={filter === item}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {filtered.map((product) => (
            <article key={product.name} className="product-card">
              <div className="product-image-wrap">
                <span className="product-tag">{product.tag}</span>
                <img
                  src={product.image}
                  alt={`${product.name} em destaque`}
                  loading="lazy"
                  width={product.imageWidth}
                  height={product.imageHeight}
                  className={product.name === "iPhone 16 Pro Max" ? "product-image product-image-hero" : "product-image"}
                />
              </div>
              <div className="p-6 sm:p-7">
                <p className="text-sm font-medium text-muted-foreground">{product.description}</p>
                <h3 className="mt-2 text-2xl font-extrabold text-foreground">{product.name}</h3>
                <div className="mt-7 flex items-end justify-between gap-4 border-t border-border pt-5">
                  <p className="text-sm font-bold text-copy">{product.price}</p>
                  <Button asChild variant="iconBrand" size="iconLg">
                    <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" aria-label={`Consultar ${product.name}`}>
                      <ArrowUpRight />
                    </a>
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function HumanService() {
  return (
    <section id="sobre" className="section-space bg-surface">
      <div className="site-container grid items-center gap-12 lg:grid-cols-[1.08fr_.92fr] lg:gap-20">
        <div className="team-photo-wrap">
          <img
            src={teamImage}
            alt="Equipe Ítalo iPhone atendendo uma cliente na loja"
            loading="lazy"
            width={1536}
            height={1024}
            className="h-full w-full object-cover"
          />
          <div className="team-caption">
            <span className="status-dot" /> Atendimento próximo. Sempre.
          </div>
        </div>
        <div>
          <p className="section-kicker">Gente falando com gente</p>
          <h2 className="section-title max-w-xl">Aqui você não compra no escuro.</h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-copy">
            A gente escuta, explica e indica o iPhone que faz sentido para sua rotina — não o mais caro da loja.
          </p>
          <div className="mt-9 space-y-5">
            {[
              [ShieldCheck, "Procedência verificada", "Cada aparelho passa por uma avaliação completa."],
              [MessageCircle, "Conversa sem roteiro", "Você fala com uma pessoa, não com um robô."],
              [BadgeCheck, "Pós-venda presente", "A relação continua depois que você leva o iPhone."],
            ].map(([Icon, title, text]) => {
              const FeatureIcon = Icon as typeof ShieldCheck;
              return (
                <div key={String(title)} className="feature-row">
                  <span className="feature-icon"><FeatureIcon /></span>
                  <div>
                    <h3 className="font-bold text-foreground">{String(title)}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{String(text)}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const [current, setCurrent] = useState(0);
  const item = testimonials[current] ?? testimonials[0];

  useEffect(() => {
    const advance = () => setCurrent((value) => (value + 1) % testimonials.length);
    const timer = window.setInterval(advance, 7000);
    return () => window.clearInterval(timer);
  }, []);

  if (!item) return null;

  return (
    <section id="avaliacoes" className="section-space bg-background">
      <div className="site-container">
        <div className="testimonial-shell" aria-live="polite">
          <div>
            <p className="section-kicker">Quem compra, recomenda</p>
            <div className="mt-6 flex gap-1 text-brand-yellow" aria-label="5 de 5 estrelas">
              {[0, 1, 2, 3, 4].map((star) => <Star key={star} fill="currentColor" />)}
            </div>
            <blockquote className="mt-7 max-w-4xl text-3xl font-bold leading-tight text-foreground sm:text-5xl">
              “{item.quote}”
            </blockquote>
          </div>
          <div className="mt-10 flex flex-col gap-7 border-t border-border pt-7 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-bold text-foreground">{item.name}</p>
              <p className="mt-1 text-sm text-muted-foreground">{item.detail}</p>
            </div>
            <div className="flex gap-2">
              <Button
                variant="outlineDark"
                size="iconLg"
                onClick={() => setCurrent((current - 1 + testimonials.length) % testimonials.length)}
                aria-label="Avaliação anterior"
              >
                <ArrowLeft />
              </Button>
              <Button
                variant="brand"
                size="iconLg"
                onClick={() => setCurrent((current + 1) % testimonials.length)}
                aria-label="Próxima avaliação"
              >
                <ArrowRight />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InstagramBand() {
  const photos = [productOrange, teamImage, productBlue, heroImage];
  return (
    <section className="overflow-hidden border-y border-border bg-surface-strong">
      <div className="site-container flex flex-col gap-6 py-9 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <span className="instagram-icon"><Instagram /></span>
          <div>
            <p className="font-extrabold text-foreground">@italophone_</p>
            <p className="text-sm text-muted-foreground">Bastidores, dicas e ofertas todo dia.</p>
          </div>
        </div>
        <Button asChild variant="outlineDark" size="lg">
          <a href="https://www.instagram.com/italophone_/" target="_blank" rel="noreferrer">
            Seguir no Instagram <ArrowUpRight />
          </a>
        </Button>
      </div>
      <div className="instagram-grid" aria-hidden="true">
        {photos.map((photo, index) => (
          <img key={`${photo}-${index}`} src={photo} alt="" loading="lazy" className="instagram-photo" />
        ))}
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="section-space bg-brand-blue">
      <div className="site-container text-center">
        <p className="text-sm font-extrabold uppercase text-primary-foreground/75">Seu upgrade começa aqui</p>
        <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-extrabold leading-tight text-primary-foreground sm:text-6xl">
          Bora encontrar o seu próximo iPhone?
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-primary-foreground/80">
          Chama no WhatsApp. A gente responde rápido e sem pressão.
        </p>
        <Button asChild variant="light" size="xl" className="mt-9">
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
            Conversar agora <MessageCircle />
          </a>
        </Button>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-background py-10">
      <div className="site-container flex flex-col gap-7 sm:flex-row sm:items-center sm:justify-between">
        <Logo />
        <p className="text-sm text-muted-foreground">© 2026 Ítalo iPhone. Feito para quem gosta de comprar bem.</p>
        <a href="https://www.instagram.com/italophone_/" target="_blank" rel="noreferrer" className="footer-social" aria-label="Instagram da Ítalo iPhone">
          <Instagram />
        </a>
      </div>
    </footer>
  );
}

export function ItaloHome() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <AuthorityStrip />
        <Products />
        <HumanService />
        <Testimonials />
        <InstagramBand />
        <FinalCta />
      </main>
      <Footer />
      <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="floating-whatsapp" aria-label="Conversar no WhatsApp">
        <MessageCircle />
      </a>
    </div>
  );
}