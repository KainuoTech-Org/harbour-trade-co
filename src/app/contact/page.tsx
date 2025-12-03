import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <section className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-heading">Contact Us</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Ready to start your trading journey? Get in touch with our team today.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                
                {/* Contact Form */}
                <div>
                    <div className="mb-8">
                        <h2 className="text-3xl font-bold mb-2 text-primary font-heading">Send us a Message</h2>
                        <p className="text-muted-foreground">Fill out the form below and we'll get back to you within 24 hours.</p>
                    </div>
                    
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label htmlFor="firstName">First name</Label>
                                <Input id="firstName" placeholder="John" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="lastName">Last name</Label>
                                <Input id="lastName" placeholder="Doe" />
                            </div>
                        </div>
                        
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" placeholder="john@example.com" />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="company">Company Name</Label>
                            <Input id="company" placeholder="Your Company Ltd." />
                        </div>
                        
                        <div className="space-y-2">
                            <Label htmlFor="message">Message</Label>
                            <Textarea 
                                id="message" 
                                placeholder="Tell us about your sourcing needs..." 
                                className="min-h-[150px]"
                            />
                        </div>
                        
                        <Button type="submit" className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 text-lg h-12 font-bold cursor-pointer">
                            Send Message
                        </Button>
                    </form>
                </div>

                {/* Contact Info & Map */}
                <div className="space-y-8">
                    <div>
                        <h2 className="text-3xl font-bold mb-6 text-primary font-heading">Contact Information</h2>
                        <div className="space-y-6">
                            <Card className="border-l-4 border-l-secondary shadow-sm">
                                <CardContent className="flex items-start gap-4 p-6">
                                    <MapPin className="w-6 h-6 text-primary mt-1" />
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">Hong Kong Headquarters</h3>
                                        <p className="text-muted-foreground">
                                            Unit 1205, 12/F, Trading Tower<br />
                                            123 Enterprise Road, Kowloon Bay<br />
                                            Hong Kong
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="border-l-4 border-l-secondary shadow-sm">
                                <CardContent className="flex items-start gap-4 p-6">
                                    <Mail className="w-6 h-6 text-primary mt-1" />
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">Email Us</h3>
                                        <p className="text-muted-foreground mb-1">General Inquiries: info@harbourtrade.hk</p>
                                        <p className="text-muted-foreground">Sales Team: sales@harbourtrade.hk</p>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="border-l-4 border-l-secondary shadow-sm">
                                <CardContent className="flex items-start gap-4 p-6">
                                    <Phone className="w-6 h-6 text-primary mt-1" />
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">Call Us</h3>
                                        <p className="text-muted-foreground">
                                            +852 2345 6789 (Mon-Fri, 9am - 6pm HKT)
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    {/* Map Placeholder */}
                    <div className="w-full h-[300px] bg-slate-100 rounded-xl overflow-hidden border border-slate-200 relative group">
                         <div 
                            className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-500"
                            style={{ backgroundImage: 'url("/images/contact-map.jpg")' }}
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-transparent transition-colors">
                             <div className="bg-white/90 backdrop-blur px-4 py-2 rounded-full text-xs font-bold text-primary shadow-lg flex items-center gap-2">
                                <MapPin className="w-3 h-3" /> Kowloon Bay, HK
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
}
