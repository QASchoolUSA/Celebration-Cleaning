
"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X, Phone, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
];

export function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Link href="/" className="flex items-center gap-2 font-bold text-xl text-primary">
                            <Sparkles className="h-6 w-6 text-secondary" />
                            <span>Celebration Cleaning</span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-6">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-sm font-medium transition-colors hover:text-primary"
                            >
                                {item.name}
                            </Link>
                        ))}
                        <div className="flex items-center gap-4 border-l pl-4">
                            <a href="tel:6893882588" className="hidden lg:flex items-center gap-2 text-sm font-medium hover:text-primary">
                                <Phone className="h-4 w-4" />
                                689-388-2588
                            </a>
                            <Button asChild className="bg-primary hover:bg-primary/90 text-white hidden md:inline-flex shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-300 font-bold">
                                <Link href="/contact" className="whitespace-nowrap flex items-center">Get a Quote</Link>
                            </Button>
                        </div>
                    </nav>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden p-2 text-foreground"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? (
                            <X className="h-6 w-6" />
                        ) : (
                            <Menu className="h-6 w-6" />
                        )}
                        <span className="sr-only">Toggle menu</span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden border-t">
                    <div className="container mx-auto px-4 py-4 space-y-4 bg-background">
                        <nav className="flex flex-col space-y-4">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-base font-medium hover:text-primary"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <hr />
                            <a href="tel:6893882588" className="flex items-center gap-2 text-base font-medium hover:text-primary">
                                <Phone className="h-4 w-4" />
                                689-388-2588
                            </a>
                            <Button asChild className="w-full">
                                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>Get a Quote</Link>
                            </Button>
                        </nav>
                    </div>
                </div>
            )}
        </header>
    );
}
