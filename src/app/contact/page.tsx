import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";
import { BookingSheet } from "@/components/layout/booking-sheet";
import { FadeIn } from "@/components/ui/fade-in";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <section className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-heading">Contact Us</h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Ready to start your trading journey? Get in touch with our team today.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                
                {/* Contact Form */}
                <FadeIn direction="right" className="w-full">
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
                </FadeIn>

                {/* Contact Info */}
                <FadeIn direction="left" delay={0.2} className="w-full">
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
                    </div>
                </FadeIn>
            </div>

            {/* Booking & Map (Full-width) */}
            <div className="mt-12 space-y-8">
                <FadeIn>
                    <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 text-center shadow-sm max-w-2xl mx-auto">
                        <h3 className="font-bold text-lg mb-2 text-primary">Prefer a video call or office visit?</h3>
                        <p className="text-muted-foreground mb-4 text-sm">Schedule a dedicated time with our trade experts.</p>
                        <BookingSheet trigger={
                            <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white transition-all cursor-pointer">
                                Schedule Appointment
                            </Button>
                        } />
                    </div>
                </FadeIn>
                <FadeIn delay={0.2}>
                    <div className="w-full h-[350px] bg-slate-100 rounded-xl overflow-hidden border border-slate-200 relative shadow-md">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.967666632642!2d114.20363337586558!3d22.31693797967477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34040106a3655555%3A0x550176959062072a!2sEnterprise%20Square!5e0!3m2!1sen!2shk!4v1709620000000!5m2!1sen!2shk"
                            width="100%" 
                            height="100%" 
                            style={{ border: 0 }} 
                            allowFullScreen={true} 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Harbour Trade Co. Office Location"
                            className="transition-all duration-500"
                        ></iframe>
                    </div>
                </FadeIn>
            </div>
        </div>
      </section>
    </div>
  );
}
