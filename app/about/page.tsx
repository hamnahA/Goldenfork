import Link from "next/link"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, ArrowRight, Heart, Users, Award, Clock } from "lucide-react"

const milestones = [
  { year: "2011", title: "The Beginning", description: "Opened our doors with just 5 tables and a dream" },
  { year: "2015", title: "First Expansion", description: "Doubled our seating capacity due to popular demand" },
  { year: "2018", title: "Award Winner", description: "Named 'Best Neighborhood Cafe' by Local Eats Magazine" },
  { year: "2021", title: "10 Years Strong", description: "Celebrated a decade of serving our community" },
  { year: "2024", title: "Growing Family", description: "Welcomed our 50,000th customer milestone" },
]

const values = [
  {
    icon: Heart,
    title: "Passion for Food",
    description: "Every dish is prepared with love and attention to detail. We believe great food brings people together.",
  },
  {
    icon: Users,
    title: "Community First",
    description: "We're more than a restaurant—we're a gathering place where neighbors become friends.",
  },
  {
    icon: Award,
    title: "Quality Ingredients",
    description: "We source locally whenever possible, supporting our farmers and ensuring the freshest flavors.",
  },
  {
    icon: Clock,
    title: "Consistency",
    description: "Whether it's your first visit or your hundredth, expect the same great taste every time.",
  },
]

const team = [
  { name: "Chef Marcus", role: "Head Chef", image: "/team-chef.jpg" },
  { name: "Sarah", role: "General Manager", image: "/team-manager.jpg" },
  { name: "Mike", role: "Lead Barista", image: "/team-barista.jpg" },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-20 bg-gradient-to-br from-accent/20 via-background to-primary/10">
        <div className="container mx-auto px-4">
          <Button asChild variant="ghost" className="mb-6 hover:bg-foreground/5">
            <Link href="/">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Home
            </Link>
          </Button>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-accent font-semibold uppercase tracking-wider text-sm">Our Story</span>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-2 mb-6 text-balance">
                A Matter of Taste Since 2011
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                What started as a small dream has grown into a beloved neighborhood institution. The Golden Fork began with a simple mission: serve delicious comfort food in a warm, welcoming atmosphere.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, we&apos;re proud to be the go-to spot for families, friends, and solo diners alike. Our regulars are like family, and new faces quickly become friends.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent rounded-2xl -z-10" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary rounded-2xl -z-10" />
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/about-hero.jpg"
                  alt="Restaurant interior with warm lighting"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-accent font-semibold uppercase tracking-wider text-sm">What We Stand For</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
              Our Values
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="border-none shadow-lg bg-background text-center">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-accent font-semibold uppercase tracking-wider text-sm">Our Journey</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
              Milestones
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-foreground font-bold text-sm">{milestone.year}</span>
                    </div>
                    {index < milestones.length - 1 && (
                      <div className="w-0.5 h-full bg-primary/30 mt-2" />
                    )}
                  </div>
                  <div className="pb-8">
                    <h3 className="font-serif text-xl font-bold text-foreground">{milestone.title}</h3>
                    <p className="text-muted-foreground mt-1">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-accent font-semibold uppercase tracking-wider text-sm">The People Behind the Food</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
              Meet Our Team
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="border-none shadow-lg overflow-hidden bg-background">
                <div className="aspect-square relative bg-secondary">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="font-serif text-xl font-bold text-foreground">{member.name}</h3>
                  <p className="text-accent font-medium">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-accent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-accent-foreground mb-4 text-balance">
            Come Be Part of Our Story
          </h2>
          <p className="text-accent-foreground/80 mb-8 max-w-lg mx-auto">
            We&apos;d love to welcome you to The Golden Fork family. Stop by for a meal and see what makes us special.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-foreground hover:bg-foreground/90 text-background font-semibold px-8">
              <Link href="/menu">
                View Our Menu
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-accent-foreground/30 text-accent-foreground hover:bg-accent-foreground/10 bg-transparent">
              <Link href="/contact">Visit Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
