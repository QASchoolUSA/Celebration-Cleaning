
import Link from "next/link";
import { Sparkles, Facebook, Instagram, Twitter, Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-foreground text-background border-t border-white/10">
            <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Brand & Description */}
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center gap-2 font-bold text-xl text-white">
                            <Sparkles className="h-6 w-6 text-secondary" />
                            <span>Celebration Cleaning</span>
                        </Link>
                        <p className="text-sm text-gray-300 leading-relaxed">
                            Bringing the joy of cleanliness to your home. Professional, reliable, and tailored to your needs. Let us celebrate your space!
                        </p>
                        <div className="flex gap-4">
                            <Link href="#" className="text-gray-400 hover:text-secondary transition-colors">
                                <Facebook className="h-5 w-5" />
                                <span className="sr-only">Facebook</span>
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-secondary transition-colors">
                                <Instagram className="h-5 w-5" />
                                <span className="sr-only">Instagram</span>
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-secondary transition-colors">
                                <Twitter className="h-5 w-5" />
                                <span className="sr-only">Twitter</span>
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-semibold mb-4 text-white">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/" className="text-gray-300 hover:text-secondary transition-colors">Home</Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-gray-300 hover:text-secondary transition-colors">About Us</Link>
                            </li>
                            <li>
                                <Link href="/services" className="text-gray-300 hover:text-secondary transition-colors">Services</Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-gray-300 hover:text-secondary transition-colors">Contact</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="font-semibold mb-4 text-white">Our Services</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/services/standard" className="text-gray-300 hover:text-secondary transition-colors">Standard Cleaning</Link>
                            </li>
                            <li>
                                <Link href="/services/deep" className="text-gray-300 hover:text-secondary transition-colors">Deep Cleaning</Link>
                            </li>
                            <li>
                                <Link href="/services/move-in-out" className="text-gray-300 hover:text-secondary transition-colors">Move-In/Out</Link>
                            </li>
                            <li>
                                <Link href="/services/commercial" className="text-gray-300 hover:text-secondary transition-colors">Commercial Cleaning</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="font-semibold mb-4 text-white">Contact Us</h3>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-start gap-3">
                                <Phone className="h-4 w-4 mt-1 text-secondary" />
                                <span className="text-gray-300">689-388-2588</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Mail className="h-4 w-4 mt-1 text-secondary" />
                                <span className="text-gray-300">hello@celebrationcleaning.com</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin className="h-4 w-4 mt-1 text-secondary" />
                                <span className="text-gray-300">123 Clean Street, Sparkle City, SC 12345</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Celebration Cleaning. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
