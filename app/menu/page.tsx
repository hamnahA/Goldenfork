import Link from "next/link"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Flame, Leaf } from "lucide-react"

const menuCategories = [
  {
    name: "Gourmet Burgers",
    description: "Hand-crafted patties with premium toppings",
    items: [
      { name: "Classic Golden Burger", description: "Angus beef, cheddar, lettuce, tomato, special sauce", price: "$14.99", popular: true },
      { name: "Smoky BBQ Burger", description: "Bacon, onion rings, BBQ sauce, pepper jack", price: "$16.99", spicy: false },
      { name: "Mushroom Swiss", description: "Sautéed mushrooms, Swiss cheese, garlic aioli", price: "$15.99", popular: false },
      { name: "Spicy Jalapeño", description: "Jalapeños, pepper jack, chipotle mayo, pickled onions", price: "$15.99", spicy: true },
      { name: "Veggie Delight", description: "House-made black bean patty, avocado, sprouts", price: "$13.99", veggie: true },
      { name: "Double Stack", description: "Two patties, double cheese, special sauce", price: "$19.99", popular: true },
    ]
  },
  {
    name: "Chicken Wings",
    description: "Crispy wings with signature sauces",
    items: [
      { name: "Buffalo Classic", description: "Traditional hot buffalo sauce, celery, blue cheese dip", price: "$12.99", spicy: true },
      { name: "Honey Garlic", description: "Sweet honey glaze with roasted garlic", price: "$12.99", popular: true },
      { name: "Lemon Pepper", description: "Zesty lemon pepper seasoning, ranch dip", price: "$11.99", popular: false },
      { name: "BBQ Glazed", description: "Tangy BBQ sauce with a hint of smoke", price: "$12.99", popular: false },
      { name: "Korean Gochujang", description: "Sweet and spicy Korean sauce, sesame seeds", price: "$13.99", spicy: true },
      { name: "Garlic Parmesan", description: "Buttery garlic sauce, shaved parmesan", price: "$12.99", popular: true },
    ]
  },
  {
    name: "Sides & Starters",
    description: "Perfect additions to your meal",
    items: [
      { name: "Golden Fries", description: "Crispy seasoned fries with dipping sauce", price: "$5.99", popular: true },
      { name: "Onion Rings", description: "Beer-battered, served with ranch", price: "$6.99", popular: false },
      { name: "Loaded Nachos", description: "Cheese, jalapeños, sour cream, guacamole", price: "$10.99", spicy: true },
      { name: "Mozzarella Sticks", description: "Served with marinara sauce", price: "$8.99", popular: false },
      { name: "Garden Salad", description: "Mixed greens, cherry tomatoes, cucumber", price: "$7.99", veggie: true },
      { name: "Sweet Potato Fries", description: "With honey mustard dip", price: "$6.99", veggie: true },
    ]
  },
  {
    name: "Thirst Quenchers",
    description: "Refreshing drinks for every occasion",
    items: [
      { name: "Fresh Lemonade", description: "House-made with real lemons", price: "$4.99", popular: true },
      { name: "Iced Tea", description: "Sweet or unsweetened, free refills", price: "$3.99", popular: false },
      { name: "Craft Root Beer", description: "Small-batch artisan root beer", price: "$4.99", popular: false },
      { name: "Tropical Smoothie", description: "Mango, pineapple, coconut blend", price: "$6.99", popular: true },
      { name: "Golden Milkshake", description: "Vanilla, chocolate, or strawberry", price: "$5.99", popular: true },
      { name: "Sparkling Water", description: "Lemon, lime, or plain", price: "$2.99", popular: false },
    ]
  },
  {
    name: "Coffee & Hot Drinks",
    description: "Your morning pick-me-up",
    items: [
      { name: "House Blend Coffee", description: "Medium roast, smooth and rich", price: "$3.99", popular: true },
      { name: "Espresso", description: "Single or double shot", price: "$3.49", popular: false },
      { name: "Cappuccino", description: "Espresso with steamed milk foam", price: "$4.99", popular: true },
      { name: "Caramel Latte", description: "Espresso, steamed milk, caramel drizzle", price: "$5.49", popular: false },
      { name: "Hot Chocolate", description: "Rich cocoa with whipped cream", price: "$4.49", popular: false },
      { name: "Chai Tea Latte", description: "Spiced chai with steamed milk", price: "$4.99", popular: false },
    ]
  },
  {
    name: "Evening Cocktails",
    description: "Crafted drinks for winding down",
    items: [
      { name: "Golden Hour Margarita", description: "Tequila, lime, agave, salted rim", price: "$10.99", popular: true },
      { name: "Sunset Sangria", description: "Red wine, fresh fruits, brandy", price: "$9.99", popular: true },
      { name: "Mojito Classic", description: "Rum, mint, lime, soda water", price: "$10.99", popular: false },
      { name: "Old Fashioned", description: "Bourbon, bitters, orange zest", price: "$11.99", popular: false },
      { name: "Espresso Martini", description: "Vodka, coffee liqueur, fresh espresso", price: "$12.99", popular: true },
      { name: "Virgin Piña Colada", description: "Coconut, pineapple, no alcohol", price: "$7.99", popular: false },
    ]
  },
]

export default function MenuPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-20 bg-gradient-to-br from-primary/20 via-background to-accent/10">
        <div className="container mx-auto px-4">
          <Button asChild variant="ghost" className="mb-6 hover:bg-foreground/5">
            <Link href="/">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Home
            </Link>
          </Button>
          <div className="max-w-2xl">
            <span className="text-accent font-semibold uppercase tracking-wider text-sm">Our Offerings</span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-2 mb-4 text-balance">
              Full Menu
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              From sun-up coffee to sundown cocktails, we&apos;ve got something delicious for every hour. Browse our carefully crafted menu below.
            </p>
          </div>
        </div>
      </section>

      {/* Legend */}
      <section className="py-6 bg-secondary/50 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center gap-6 text-sm">
            <span className="font-medium text-foreground">Menu Guide:</span>
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground text-xs font-bold">★</span>
              </span>
              <span className="text-muted-foreground">Popular</span>
            </div>
            <div className="flex items-center gap-2">
              <Flame className="w-5 h-5 text-red-500" />
              <span className="text-muted-foreground">Spicy</span>
            </div>
            <div className="flex items-center gap-2">
              <Leaf className="w-5 h-5 text-green-500" />
              <span className="text-muted-foreground">Vegetarian</span>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Sections */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {menuCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div className="mb-8">
                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground">{category.name}</h2>
                  <p className="text-muted-foreground mt-1">{category.description}</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.items.map((item, itemIndex) => (
                    <Card key={itemIndex} className="border-border/50 hover:shadow-lg transition-shadow bg-background">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start gap-4 mb-2">
                          <h3 className="font-semibold text-foreground flex items-center gap-2 flex-wrap">
                            {item.name}
                            {item.popular && (
                              <span className="w-5 h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                                <span className="text-primary-foreground text-xs font-bold">★</span>
                              </span>
                            )}
                            {item.spicy && <Flame className="w-4 h-4 text-red-500 flex-shrink-0" />}
                            {item.veggie && <Leaf className="w-4 h-4 text-green-500 flex-shrink-0" />}
                          </h3>
                          <span className="font-bold text-accent whitespace-nowrap">{item.price}</span>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary-foreground mb-4 text-balance">
            Ready to dig in?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">
            Visit us today and taste why our community keeps coming back for more!
          </p>
          <Button asChild size="lg" className="bg-foreground hover:bg-foreground/90 text-background font-semibold px-8">
            <Link href="/contact">
              Find Our Location
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
