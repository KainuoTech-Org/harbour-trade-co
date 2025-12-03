import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
             <h3 className="text-xl font-bold mb-4 font-heading">Harbour Trade Co.</h3>
             <p className="text-primary-foreground/80 max-w-sm text-sm leading-relaxed">
               Connecting global markets with Hong Kong efficiency. Your trusted partner in import/export solutions since 2010.
             </p>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-secondary">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-secondary transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-secondary transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-secondary transition-colors">Services</Link></li>
              <li><Link href="/contact" className="hover:text-secondary transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
             <h4 className="font-bold mb-4 text-secondary">Contact</h4>
             <ul className="space-y-2 text-sm text-primary-foreground/80">
               <li>123 Trading Tower, Kowloon Bay</li>
               <li>Hong Kong</li>
               <li>+852 2345 6789</li>
               <li>info@harbourtrade.hk</li>
             </ul>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center text-sm text-primary-foreground/60">
          © {new Date().getFullYear()} Harbour Trade Co. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
