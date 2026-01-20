import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowRight, Sparkles, ShieldAlert } from "lucide-react";

const Hero = () => {
    return (
        // Add negative margins and wider container
        <section className="relative w-screen border-b border-[#2A2A2A] bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden"
                 style={{ marginLeft: 'calc(-50vw + 50%)', marginRight: 'calc(-50vw + 50%)' }}>

            {/* Full width container */}
            <div className="w-full mx-auto px-4 py-16 md:py-24">
                {/* Subtle background pattern - full width */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent"></div>

                {/* Glowing orb effects - positioned relative to viewport */}
                <div className="absolute top-1/4 left-10 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-pink-600/5 rounded-full blur-3xl"></div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center space-y-8">
                        {/* Warning badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-900/20 border border-red-800/40 backdrop-blur-sm">
                            <ShieldAlert className="w-4 h-4 text-red-400" />
                            <span className="text-sm font-semibold text-red-300 tracking-wider">🔞 18+ ONLY – STRICTLY NO MINORS</span>
                        </div>

                        {/* Main heading with gradient */}
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
                The Gossip Insider
              </span>
                        </h1>

                        {/* Subtitle */}
                        <p className="text-xl font-medium text-gray-300">
                            Where <span className="text-purple-300 font-bold">raw filth</span> meets{" "}
                            <span className="text-pink-300 font-bold">uncensored reality</span>
                        </p>

                        {/* Description with icon highlights */}
                        <div className="space-y-6 text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto">
                            <div className="flex items-start gap-3">
                                <Sparkles className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                                <p>
                                    <span className="text-white font-semibold">Raw, uncensored erotica drops:</span> Direct PDF/EPUB/Word links,
                                    <span className="text-gray-300"> no paywalls, no bullshit.</span>
                                </p>
                            </div>

                            <div className="flex items-start gap-3">
                                <Sparkles className="w-5 h-5 text-pink-400 mt-1 flex-shrink-0" />
                                <p>
                                    <span className="text-white font-semibold">Exclusive SizeSlaughterer Black Insider rates:</span> The thickest,
                                    nastiest OnlyFans queens, cam sluts & babes.
                                </p>
                            </div>

                            <p className="text-xl font-bold bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent pt-4">
                                Pure filth. Zero mercy. Total access.
                            </p>
                        </div>

                        {/* CTA Button with hover effects */}
                        <Button
                            asChild
                            className="group relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 px-8 py-6 text-lg font-bold rounded-xl shadow-2xl shadow-purple-900/50 hover:shadow-purple-900/70 transition-all duration-300 hover:scale-105"
                        >
                            <Link href="/explore" className="flex items-center gap-2">
                                <span>Explore All Books</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />

                                {/* Button shine effect */}
                                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></span>
                            </Link>
                        </Button>

                        {/* Stats or additional info */}
                        <div className="pt-8 flex justify-center gap-8 text-sm text-gray-500">
                            <div className="flex flex-col items-center">
                                <span className="text-2xl font-bold text-white">100+</span>
                                <span>Exclusive Drops</span>
                            </div>
                            <div className="h-8 w-px bg-gray-800"></div>
                            <div className="flex flex-col items-center">
                                <span className="text-2xl font-bold text-white">24/7</span>
                                <span>Direct Access</span>
                            </div>
                            <div className="h-8 w-px bg-gray-800"></div>
                            <div className="flex flex-col items-center">
                                <span className="text-2xl font-bold text-white">0</span>
                                <span>Paywalls</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-gray-700 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full mt-2"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;