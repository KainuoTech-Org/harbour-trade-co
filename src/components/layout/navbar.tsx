import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, Globe } from "lucide-react";

export function Navbar() {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded bg-primary">
             <span className="text-xl font-bold text-primary-foreground">H</span>
          </div>
          <span className="text-xl font-bold tracking-tight text-primary font-heading">
            Harbour Trade Co.
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-all duration-300 hover:text-primary hover:scale-105 active:scale-95"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all duration-300 cursor-pointer">
            <Globe className="h-4 w-4" />
            <span>EN / 繁</span>
          </Button>
          <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 font-medium cursor-pointer">
            Get a Quote
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="flex items-center gap-2 md:hidden">
            <Button variant="ghost" size="icon" className="text-muted-foreground">
                 <Globe className="h-5 w-5" />
            </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="mt-6 flex flex-col gap-6">
                <Link href="/" className="text-lg font-bold text-primary font-heading">
                    Harbour Trade Co.
                </Link>
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="text-base font-medium text-muted-foreground hover:text-primary"
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>
                <div className="mt-4 flex flex-col gap-2">
                    <Button className="w-full bg-secondary text-secondary-foreground">
                        Get a Quote
                    </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
