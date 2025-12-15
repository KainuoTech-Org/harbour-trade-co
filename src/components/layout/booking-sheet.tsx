"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useLanguage } from "@/lib/LanguageContext";
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

export function BookingSheet({ trigger }: { trigger?: React.ReactNode }) {
  const { dict } = useLanguage();

  return (
    <Sheet>
      <SheetTrigger asChild>
        {trigger || (
          <Button className="gap-2">
            <Calendar className="h-4 w-4" />
            {dict.booking.btn}
          </Button>
        )}
      </SheetTrigger>
      <SheetContent side="right" className="w-full sm:max-w-lg p-0">
         <SheetHeader className="px-6 py-4 border-b">
            <SheetTitle>{dict.booking.title}</SheetTitle>
            <SheetDescription>{dict.booking.desc}</SheetDescription>
         </SheetHeader>
         <div className="flex-1 h-full w-full bg-background relative">
            <iframe 
                src="https://calendly.com/trae-demo/30min?hide_event_type_details=1&hide_gdpr_banner=1" 
                width="100%" 
                height="100%" 
                className="h-[calc(100vh-100px)] w-full"
                frameBorder="0"
                title="Schedule Appointment"
            ></iframe>
            <div className="absolute inset-0 -z-10 flex items-center justify-center text-muted-foreground">
                Loading Calendar...
            </div>
         </div>
      </SheetContent>
    </Sheet>
  );
}
