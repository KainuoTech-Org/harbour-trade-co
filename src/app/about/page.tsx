import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Target, TrendingUp, Users } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <section className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-heading">About Harbour Trade Co.</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Bridging the gap between Eastern manufacturing and Western markets with integrity and efficiency.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-primary font-heading">Our Story</h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Founded in 2010 in the heart of Hong Kong, Harbour Trade Co. began with a simple mission: to simplify the complex world of international trade for small and medium-sized enterprises.
                </p>
                <p>
                  Over the past decade, we have grown from a small sourcing agency into a full-service trading partner, helping hundreds of clients across Europe and North America navigate the Asian manufacturing landscape.
                </p>
                <p>
                  Our strategic location in Hong Kong allows us to act as a gateway to China's Greater Bay Area, giving our clients access to the world's most efficient supply chains while maintaining strict quality control standards.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
               <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop"
                alt="Harbour Trade Co. Team Meeting"
                fill
                className="object-cover"
               />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-md hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary">
                  <Target className="w-6 h-6" />
                </div>
                <CardTitle className="text-xl font-bold">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To provide transparent, efficient, and reliable trading solutions that empower businesses to grow globally without the headache of supply chain management.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <CardTitle className="text-xl font-bold">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To be the most trusted trade partner in Asia, known for our commitment to quality, integrity, and sustainable business practices.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary">
                  <Users className="w-6 h-6" />
                </div>
                <CardTitle className="text-xl font-bold">Our Values</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Integrity first. We believe in long-term partnerships over short-term gains. Transparency in pricing and communication is our hallmark.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Hong Kong? */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-4xl">
           <h2 className="text-3xl font-bold mb-12 text-primary font-heading">Why We Are Based in Hong Kong</h2>
           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
              {[
                "Strategic Gateway to Mainland China",
                "World-Class Logistics Infrastructure",
                "Strong Legal System & IP Protection",
                "Free Port Status & Tax Efficiency",
                "International Financial Hub",
                "Multilingual Talent Pool"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 rounded-lg bg-slate-50 border border-slate-100">
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="font-medium text-slate-700">{item}</span>
                </div>
              ))}
           </div>
        </div>
      </section>
    </div>
  );
}
