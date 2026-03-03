
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, ShieldCheck, Clock, Award } from "lucide-react";

export function Hero() {
    return (
        <section className="relative overflow-hidden bg-[#fafafa] pt-20 md:pt-32 pb-20 md:pb-32 isolate">
            {/* Animated Gradient Backgrounds */}
            <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
                <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-secondary opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem] animate-pulse-slow"></div>
            </div>

            <div className="absolute top-1/2 left-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>

            <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

                    {/* Text Column */}
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-8 z-10">
                        <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-semibold text-primary backdrop-blur-md shadow-sm">
                            <Star className="mr-2 h-4 w-4 fill-secondary text-secondary animate-pulse" />
                            <span>Florida's Premier Cleaning Service</span>
                        </div>

                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
                            Experience the Joy of a <br className="hidden lg:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Spotless Home</span>
                        </h1>

                        <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">
                            Professional, reliable, and white-glove cleaning services tailored to your lifestyle.
                            Let us handle the mess while you celebrate life.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-4">
                            <Button asChild size="lg" className="text-lg px-8 h-14 rounded-full shadow-xl shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300 font-bold bg-primary hover:bg-primary/90 text-white group">
                                <Link href="/contact" className="flex items-center">
                                    Get a Free Quote
                                    <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="text-lg px-8 h-14 rounded-full border-2 border-slate-200 hover:border-primary/50 hover:bg-primary/5 text-slate-700 font-semibold transition-all duration-300">
                                <Link href="/services">
                                    Explore Services
                                </Link>
                            </Button>
                        </div>

                        {/* Social Proof */}
                        <div className="pt-8 flex items-center gap-6">
                            <div className="flex -space-x-4">
                                {/* Simulated user avatars */}
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className={`w-12 h-12 rounded-full border-2 border-white bg-slate-200 shadow-sm flex items-center justify-center text-xs font-bold text-slate-500 overflow-hidden`}>
                                        <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" />
                                    </div>
                                ))}
                                <div className="w-12 h-12 rounded-full border-2 border-white bg-secondary/10 flex items-center justify-center text-xs font-bold text-secondary shadow-sm">
                                    500+
                                </div>
                            </div>
                            <div className="text-sm">
                                <div className="flex text-secondary">
                                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                                </div>
                                <p className="font-semibold text-slate-700 mt-1">Trusted by Florida families</p>
                            </div>
                        </div>
                    </div>

                    {/* Image / Interactive Column */}
                    <div className="relative lg:h-[600px] flex items-center justify-center lg:justify-end z-10 hidden md:flex">
                        {/* Main Glass Card */}
                        <div className="relative w-full max-w-md aspect-[4/5] rounded-[2.5rem] bg-gradient-to-br from-white/60 to-white/20 backdrop-blur-xl border border-white/40 shadow-2xl p-8 flex flex-col justify-between overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            <div className="relative z-10 space-y-6">
                                <div className="flex justify-between items-start">
                                    <div className="w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center">
                                        <ShieldCheck className="w-8 h-8 text-secondary" />
                                    </div>
                                    <span className="bg-white/80 backdrop-blur text-primary text-xs font-bold px-3 py-1 rounded-full shadow-sm">Verified Professionals</span>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-800 mb-2">Immaculate Detail</h3>
                                    <p className="text-slate-600 font-medium">We clean the corners others cut. 100% satisfaction guaranteed.</p>
                                </div>
                            </div>

                            {/* Floating Badges */}
                            <div className="relative z-10 space-y-4">
                                <div className="bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-lg border border-white/50 flex items-center gap-4 transform -translate-x-12 group-hover:translate-x-0 transition-transform duration-500 ease-out">
                                    <div className="bg-primary/10 p-2 rounded-xl text-primary"><Clock className="w-6 h-6" /></div>
                                    <div>
                                        <p className="font-bold text-slate-800">On-Time Arrival</p>
                                        <p className="text-xs text-slate-500">Always reliable</p>
                                    </div>
                                </div>
                                <div className="bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-lg border border-white/50 flex items-center gap-4 transform translate-x-12 group-hover:translate-x-0 transition-transform duration-500 ease-out delay-75">
                                    <div className="bg-secondary/10 p-2 rounded-xl text-secondary"><Award className="w-6 h-6" /></div>
                                    <div>
                                        <p className="font-bold text-slate-800">Top Rated Service</p>
                                        <p className="text-xs text-slate-500">5-star reviews</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Bottom Graphic Fade */}
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
        </section>
    );
}
