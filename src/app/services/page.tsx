import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, Box, ClipboardCheck, Container, Factory, Globe, Search, Ship } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <section className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-heading">Our Services</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Comprehensive trade solutions tailored to your business needs. From sourcing to shipping, we handle it all.
          </p>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-8">
            
            {/* Service 1: Sourcing */}
            <div className="flex flex-col md:flex-row gap-12 mb-24 items-center">
                <div className="w-full md:w-1/2">
                     <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-xl text-primary mb-6">
                        <Search className="w-8 h-8" />
                     </div>
                     <h2 className="text-3xl font-bold mb-4 text-primary font-heading">Sourcing & Procurement</h2>
                     <p className="text-lg text-muted-foreground mb-6">
                        Finding the right factory is the hardest part of importing. We leverage our extensive network in the Greater Bay Area to match you with verified manufacturers.
                     </p>
                     <ul className="space-y-3 mb-8">
                        {["Supplier Verification & Audits", "Price Negotiation", "Sample Development", "Contract Management"].map((item, i) => (
                            <li key={i} className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-secondary" />
                                <span className="text-slate-700 font-medium">{item}</span>
                            </li>
                        ))}
                     </ul>
                     <Link href="/contact">
                        <Button variant="outline" className="hover:bg-primary hover:text-white transition-colors duration-300 cursor-pointer">Inquire About Sourcing</Button>
                     </Link>
                </div>
                <div className="w-full md:w-1/2 bg-slate-100 rounded-2xl h-[350px] relative overflow-hidden shadow-lg">
                    <Image
                        src="/images/service-sourcing.jpg"
                        alt="Sourcing negotiation"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>

            <Separator className="my-12" />

            {/* Service 2: QC */}
            <div className="flex flex-col md:flex-row-reverse gap-12 mb-24 items-center">
                <div className="w-full md:w-1/2">
                     <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-xl text-primary mb-6">
                        <ClipboardCheck className="w-8 h-8" />
                     </div>
                     <h2 className="text-3xl font-bold mb-4 text-primary font-heading">Quality Control (QC)</h2>
                     <p className="text-lg text-muted-foreground mb-6">
                        Don't let poor quality damage your brand reputation. Our on-the-ground team conducts rigorous inspections before your goods leave the factory.
                     </p>
                     <ul className="space-y-3 mb-8">
                        {["Pre-Production Inspection", "During Production Inspection", "Pre-Shipment Inspection", "Container Loading Check"].map((item, i) => (
                            <li key={i} className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-secondary" />
                                <span className="text-slate-700 font-medium">{item}</span>
                            </li>
                        ))}
                     </ul>
                     <Link href="/contact">
                        <Button variant="outline" className="hover:bg-primary hover:text-white transition-colors duration-300 cursor-pointer">Inquire About QC</Button>
                     </Link>
                </div>
                <div className="w-full md:w-1/2 bg-slate-100 rounded-2xl h-[350px] relative overflow-hidden shadow-lg">
                     <Image
                        src="/images/service-qc.jpg"
                        alt="Quality Control Inspection"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>

            <Separator className="my-12" />

            {/* Service 3: Logistics */}
            <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="w-full md:w-1/2">
                     <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-xl text-primary mb-6">
                        <Ship className="w-8 h-8" />
                     </div>
                     <h2 className="text-3xl font-bold mb-4 text-primary font-heading">Logistics & Shipping</h2>
                     <p className="text-lg text-muted-foreground mb-6">
                        We handle the logistics so you don't have to. From customs clearance to door-to-door delivery, we ensure your goods arrive safely and on time.
                     </p>
                     <ul className="space-y-3 mb-8">
                        {["Sea Freight (FCL/LCL)", "Air Freight", "Customs Clearance", "Warehousing & Consolidation"].map((item, i) => (
                            <li key={i} className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-secondary" />
                                <span className="text-slate-700 font-medium">{item}</span>
                            </li>
                        ))}
                     </ul>
                     <Link href="/contact">
                        <Button variant="outline" className="hover:bg-primary hover:text-white transition-colors duration-300 cursor-pointer">Inquire About Logistics</Button>
                     </Link>
                </div>
                <div className="w-full md:w-1/2 bg-slate-100 rounded-2xl h-[350px] relative overflow-hidden shadow-lg">
                    <Image
                        src="/images/service-logistics.jpg"
                        alt="Logistics and Shipping"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-4 font-heading text-primary">How We Work</h2>
                <p className="text-muted-foreground text-lg">A simple, transparent process to get your products from A to B.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                    { step: "01", title: "Consultation", desc: "We discuss your requirements and product specifications." },
                    { step: "02", title: "Sourcing", desc: "We identify the best suppliers and negotiate prices." },
                    { step: "03", title: "Production & QC", desc: "We monitor production and inspect goods for quality." },
                    { step: "04", title: "Shipping", desc: "We handle logistics and deliver to your doorstep." }
                ].map((item, i) => (
                    <Card key={i} className="relative border-none shadow-sm bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                        <CardHeader>
                            <span className="text-5xl font-bold text-slate-100 absolute top-4 right-4 font-heading">{item.step}</span>
                            <CardTitle className="text-xl font-bold relative z-10">{item.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground relative z-10">{item.desc}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
      </section>
    </div>
  );
}
