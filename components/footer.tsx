import Link from "next/link"
import { UtensilsCrossed, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <UtensilsCrossed className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-serif text-xl font-bold">The Golden Fork</span>
            </Link>
            <p className="text-background/70 text-sm leading-relaxed">
              Serving irresistible comfort food since 2011. Your happy place for every mood.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-primary">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-background/70 hover:text-background transition-colors">Home</Link></li>
              <li><Link href="/menu" className="text-background/70 hover:text-background transition-colors">Menu</Link></li>
              <li><Link href="/about" className="text-background/70 hover:text-background transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-background/70 hover:text-background transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-semibold mb-4 text-primary">Opening Hours</h4>
            <ul className="space-y-2 text-background/70 text-sm">
              <li>Mon - Fri: 7:00 AM - 10:00 PM</li>
              <li>Saturday: 8:00 AM - 11:00 PM</li>
              <li>Sunday: 9:00 AM - 9:00 PM</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-primary">Contact Us</h4>
            <ul className="space-y-3 text-background/70 text-sm">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                123 Anywhere St., Any City, 12345
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                hello@goldenfork.com
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                (123) 456-7890
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 text-center text-background/50 text-sm">
          <p>&copy; {new Date().getFullYear()} The Golden Fork. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
