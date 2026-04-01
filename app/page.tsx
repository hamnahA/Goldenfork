import Link from "next/link"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Leaf, Star, Coffee, Quote } from "lucide-react"

const features = [
  {
    icon: Leaf,
    title: "Fresh, Seasonal Ingredients",
    description: "Our menu follows the seasons, featuring the best local produce available",
  },
  {
    icon: Star,
    title: "Comfort Food, Elevated",
    description: "We have simple crowd-favorites on the menu - but we do them well. Our flavors stand out, guaranteed.",
  },
  {
    icon: Coffee,
    title: "Better Beverages",
    description: "We're your cafe and barista in one, serving your favorite cuppa by sun-up, and your cocktail-of-choice by sundown.",
  },
]

const menuHighlights = [
  {
    title: "Gourmet Burgers",
    description: "Packed with flavor and cooked to perfection",
    image: "/menu-burger.jpg",
    color: "bg-primary",
  },
  {
    title: "Chicken Wings",
    description: "Paired with dipping sauces that are too good to pass up",
    image: "/menu-wings.jpg",
    color: "bg-accent",
  },
  {
    title: "Thirst Quenchers",
    description: "Choose from classic blends and unique concoctions",
    image: "/menu-drinks.jpg",
    color: "bg-secondary",
  },
]

const testimonials = [
  {
    quote: "The Golden Fork is a huge part of my life. The staff feels like family, and they know just how I like my coffee - and my gourmet burger fix!",
    name: "Mara",
    detail: "Regular since 2015",
  },
  {
    quote: "I stumbled upon this place when I was exploring my new neighborhood. Everyone was so friendly, and the food was delish! Will be back.",
    name: "Brock",
    detail: "New in town",
  },
  {
    quote: "So glad to have a neighborhood cafe, hangout spot, and bar all in one and nearby! Comfort food in a comforting atmosphere - need I say more?",
    name: "Steffi",
    detail: "Lives around the corner",
  },
]

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-primary/20 via-background to-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-primary/20 rounded-full">
                <span className="text-sm font-medium text-foreground">Serving happiness since 2011</span>
              </div>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                Flavors That <span className="text-accent">Fork-et</span> You Not
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                Delicious food for every mood. Experience comfort food elevated to perfection at The Golden Fork.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8">
                  <Link href="/menu">
                    View Menu
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-foreground/20 hover:bg-foreground/5 bg-transparent">
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary rounded-2xl -z-10" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent rounded-2xl -z-10" />
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/hero-food.jpg"
                  alt="Delicious gourmet burger with fries"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-primary/20">
                    <Image
                      src="/about-1.jpg"
                      alt="Restaurant interior"
                      width={300}
                      height={375}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="bg-primary rounded-2xl p-6 text-center">
                    <p className="font-serif text-4xl font-bold text-primary-foreground">14+</p>
                    <p className="text-primary-foreground/80 text-sm">Years of Service</p>
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="bg-accent rounded-2xl p-6 text-center">
                    <p className="font-serif text-4xl font-bold text-accent-foreground">50K+</p>
                    <p className="text-accent-foreground/80 text-sm">Happy Customers</p>
                  </div>
                  <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-secondary">
                    <Image
                      src="/about-2.jpg"
                      alt="Chef preparing food"
                      width={300}
                      height={375}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <span className="text-accent font-semibold uppercase tracking-wider text-sm">About Us</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground text-balance">
                A Matter of Taste
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We have been serving irresistible comfort food since 2011. Our mission is to keep you smiling with every bite. Treat yourself to a feel-good meal today!
              </p>
              <p className="text-muted-foreground leading-relaxed">
                There&apos;s a reason our regulars have been coming back for more. Word of mouth has been our only advertisement - but happy mouths are the best ambassadors!
              </p>
              <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                <Link href="/about">
                  Our Story
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-accent font-semibold uppercase tracking-wider text-sm">Why Choose Us</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
              What Sets Us Apart
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow bg-card">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Preview Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <div>
              <span className="text-accent font-semibold uppercase tracking-wider text-sm">Our Offerings</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
                On the Menu
              </h2>
            </div>
            <Button asChild variant="outline" className="w-fit border-foreground/20 hover:bg-foreground/5 bg-transparent">
              <Link href="/menu">
                View Full Menu
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {menuHighlights.map((item, index) => (
              <Link key={index} href="/menu" className="group">
                <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                  <div className={`${item.color} aspect-[4/3] relative overflow-hidden`}>
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-serif text-xl font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-foreground text-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">Testimonials</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mt-2 text-balance">
              From Our Community
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-background/10 border-background/20 backdrop-blur">
                <CardContent className="p-8">
                  <Quote className="w-10 h-10 text-primary mb-4" />
                  <p className="text-background/90 leading-relaxed mb-6">{testimonial.quote}</p>
                  <div>
                    <p className="font-semibold text-background">{testimonial.name}</p>
                    <p className="text-background/60 text-sm">{testimonial.detail}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-4 text-balance">
            Swing by soon!
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">
            We can&apos;t wait to serve you. Visit us today and experience the taste that keeps our community coming back.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-foreground hover:bg-foreground/90 text-background font-semibold px-8">
              <Link href="/menu">
                Explore Menu
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent">
              <Link href="/contact">Get Directions</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
