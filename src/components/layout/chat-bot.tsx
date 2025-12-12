"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Headset, Send, X, Minus, MessageSquare } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinified, setIsMinified] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content: "Hi there! 👋 I'm your AI Trade Assistant. How can I help you with sourcing or logistics today?",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: "user",
      content: inputValue,
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: "Thanks for your inquiry! Since I am a demo AI, I can't process real orders yet. Please use the Contact form or WhatsApp to reach our human team for immediate assistance. 🚀",
      };
      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 1500);
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    setIsMinified(false);
  };

  return (
    <>
        {/* Chat Trigger Button (Only visible when chat is closed) */}
        <AnimatePresence>
            {!isOpen && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="fixed bottom-36 right-6 z-50"
                >
                    <Button 
                        onClick={toggleChat}
                        size="icon" 
                        className="h-14 w-14 rounded-full bg-primary text-primary-foreground !shadow-none border-none ring-0 hover:bg-primary/90 hover:scale-110 transition-all duration-300"
                    >
                        <Headset className="h-7 w-7" />
                        <span className="sr-only">Open AI Chat</span>
                    </Button>
                </motion.div>
            )}
        </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ 
                opacity: 1, 
                y: 0, 
                scale: 1,
                height: isMinified ? "auto" : "500px"
            }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-24 z-50 w-[350px] sm:w-[380px] shadow-2xl rounded-xl overflow-hidden border border-border bg-background flex flex-col"
          >
            {/* Header */}
            <div className="bg-primary p-4 flex items-center justify-between text-primary-foreground cursor-pointer" onClick={() => setIsMinified(!isMinified)}>
              <div className="flex items-center gap-2">
                <div className="bg-white/20 p-1.5 rounded-full">
                    <Headset className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm">Harbour AI Assistant</h3>
                  <p className="text-xs opacity-80 flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"/> Online
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <Button variant="ghost" size="icon" className="h-6 w-6 text-primary-foreground hover:bg-white/20" onClick={(e) => { e.stopPropagation(); setIsMinified(!isMinified); }}>
                    <Minus className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-6 w-6 text-primary-foreground hover:bg-white/20" onClick={(e) => { e.stopPropagation(); setIsOpen(false); }}>
                    <X className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Body (Hidden if minified) */}
            {!isMinified && (
                <>
                    <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50" ref={scrollRef}>
                    {messages.map((msg) => (
                        <div
                        key={msg.id}
                        className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                        >
                        <div
                            className={`max-w-[80%] p-3 rounded-lg text-sm ${
                            msg.role === "user"
                                ? "bg-primary text-primary-foreground rounded-tr-none"
                                : "bg-white border border-slate-200 text-slate-800 rounded-tl-none shadow-sm"
                            }`}
                        >
                            {msg.content}
                        </div>
                        </div>
                    ))}
                    {isTyping && (
                        <div className="flex justify-start">
                        <div className="bg-white border border-slate-200 p-3 rounded-lg rounded-tl-none shadow-sm flex items-center gap-1">
                            <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                            <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                            <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></span>
                        </div>
                        </div>
                    )}
                    </div>

                    {/* Footer Input */}
                    <div className="p-3 bg-white border-t border-slate-100">
                        <form 
                            onSubmit={(e) => {
                                e.preventDefault();
                                handleSend();
                            }}
                            className="flex gap-2"
                        >
                            <Input 
                                placeholder="Ask about shipping..." 
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                className="flex-1"
                            />
                            <Button type="submit" size="icon" disabled={!inputValue.trim() || isTyping} className="shrink-0">
                                <Send className="h-4 w-4" />
                            </Button>
                        </form>
                    </div>
                </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
