import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Anchor, Globe, ShieldCheck, Truck } from "lucide-react";
import Link from "next/link";
import { FadeIn } from "@/components/ui/fade-in";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden bg-slate-900 text-white">
        <div 
            className="absolute inset-0 z-0 opacity-40 bg-cover bg-center"
            style={{ backgroundImage: 'url("/images/hero-bg.jpg")' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent z-0" />
        
        <div className="container relative z-10 px-4 md:px-8 text-center max-w-4xl mx-auto">
          <FadeIn delay={0.2}>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 font-heading">
                Connecting Global Markets with <span className="text-secondary">Hong Kong Efficiency</span>
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.4}>
            <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-2xl mx-auto leading-relaxed">
                Your trusted partner in import/export solutions since 2010. We bridge the gap between Eastern manufacturing and Western markets.
            </p>
          </FadeIn>

          <FadeIn delay={0.6}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/services">
                    <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-secondary/20 text-lg px-8 h-12 w-full sm:w-auto cursor-pointer">
                    Explore Services
                    </Button>
                </Link>
                <Link href="/contact">
                    <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 text-lg px-8 h-12 w-full sm:w-auto bg-transparent hover:text-white cursor-pointer">
                    Contact Us
                    </Button>
                </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-10 bg-slate-50 border-b border-slate-100">
        <div className="container mx-auto px-4 text-center">
            <FadeIn delay={0.2}>
                <p className="text-xs font-bold text-muted-foreground mb-6 uppercase tracking-widest">Trusted by industry leaders globally</p>
            </FadeIn>
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                {/* Placeholders for logos */}
                <FadeIn delay={0.3} direction="up"><div className="text-xl font-bold font-heading flex items-center gap-2"><Globe className="h-5 w-5"/> GlobalLogistics</div></FadeIn>
                <FadeIn delay={0.4} direction="up"><div className="text-xl font-bold font-heading flex items-center gap-2"><Anchor className="h-5 w-5"/> EuroTrade</div></FadeIn>
                <FadeIn delay={0.5} direction="up"><div className="text-xl font-bold font-heading flex items-center gap-2"><Truck className="h-5 w-5"/> AsiaConnect</div></FadeIn>
                <FadeIn delay={0.6} direction="up"><div className="text-xl font-bold font-heading flex items-center gap-2"><ShieldCheck className="h-5 w-5"/> PacificLine</div></FadeIn>
            </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <FadeIn>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading text-primary">Comprehensive Trade Solutions</h2>
                </FadeIn>
                <FadeIn delay={0.2}>
                    <p className="text-muted-foreground text-lg">End-to-end services designed to streamline your supply chain and ensure quality.</p>
                </FadeIn>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    {
                        title: "Sourcing & Procurement",
                        icon: Globe,
                        desc: "Leveraging our vast network in Greater Bay Area to find the best suppliers for your needs."
                    },
                    {
                        title: "Logistics & Shipping",
                        icon: Truck,
                        desc: "Seamless freight forwarding and customs clearance solutions to get your goods delivered on time."
                    },
                    {
                        title: "Quality Inspection",
                        icon: ShieldCheck,
                        desc: "Rigorous on-site quality control to ensure your products meet international standards."
                    }
                ].map((service, i) => (
                    <FadeIn key={i} delay={i * 0.2} fullWidth>
                        <Card className="group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-slate-100 bg-card/50 backdrop-blur-sm cursor-pointer h-full">
                            <CardHeader>
                                <div className="h-14 w-14 rounded-xl bg-primary/5 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors text-primary duration-300 group-hover:scale-110">
                                    <service.icon className="h-7 w-7" />
                                </div>
                                <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">{service.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground mb-6 leading-relaxed">{service.desc}</p>
                                <Link href="/services" className="text-primary font-bold flex items-center gap-2 group-hover:gap-3 transition-all text-sm uppercase tracking-wide">
                                    Learn more <ArrowRight className="h-4 w-4" />
                                </Link>
                            </CardContent>
                        </Card>
                    </FadeIn>
                ))}
            </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-primary text-primary-foreground overflow-hidden relative">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:16px_16px]"></div>
          
          <div className="container relative z-10 mx-auto px-4 md:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                  <div>
                      <FadeIn direction="right">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">Why Partner with Harbour Trade?</h2>
                      </FadeIn>
                      <FadeIn direction="right" delay={0.2}>
                        <p className="text-primary-foreground/80 text-lg mb-8 leading-relaxed">
                            We combine local expertise with international standards to deliver a seamless trading experience.
                        </p>
                      </FadeIn>
                      <div className="space-y-6">
                          {[
                              "Hong Kong Based, Global Reach",
                              "10+ Years of Industry Experience",
                              "Multilingual Team (English, Mandarin, Cantonese)",
                              "Verified Supplier Network"
                          ].map((item, i) => (
                              <FadeIn key={i} direction="right" delay={0.3 + (i * 0.1)}>
                                <div className="flex items-center gap-4">
                                    <div className="bg-secondary/20 p-2 rounded-full">
                                        <Anchor className="h-5 w-5 text-secondary" />
                                    </div>
                                    <p className="text-lg font-medium text-primary-foreground/90">{item}</p>
                                </div>
                              </FadeIn>
                          ))}
                      </div>
                      <FadeIn direction="up" delay={0.8}>
                        <Link href="/about">
                            <Button className="mt-10 bg-secondary text-secondary-foreground hover:bg-secondary/90 hover:-translate-y-1 transition-all duration-300 h-12 px-8 text-lg shadow-lg cursor-pointer">
                                More About Us
                            </Button>
                        </Link>
                      </FadeIn>
                  </div>
                  <FadeIn direction="left" delay={0.4}>
                    <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
                        <div 
                            className="absolute inset-0 bg-cover bg-center hover:scale-105 transition-transform duration-700"
                            style={{ backgroundImage: 'url("/images/why-us.jpg")' }}
                            />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
                        <div className="absolute bottom-8 left-8 right-8">
                            <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">
                                <div className="text-3xl font-bold text-white mb-1">500+</div>
                                <div className="text-white/80">Successful Shipments This Year</div>
                            </div>
                        </div>
                    </div>
                  </FadeIn>
              </div>
          </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-4 text-center max-w-3xl">
              <FadeIn>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary font-heading">Ready to Streamline Your Sourcing?</h2>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                    Stop worrying about logistics and quality control. Let us handle the complexities while you focus on growing your business.
                </p>
              </FadeIn>
              <FadeIn delay={0.4}>
                <Link href="/contact">
                    <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 hover:-translate-y-1 transition-all duration-300 text-lg px-10 h-14 shadow-xl shadow-primary/20 cursor-pointer">
                        Request a Free Quote
                    </Button>
                </Link>
              </FadeIn>
          </div>
      </section>
    </div>
  );
}
