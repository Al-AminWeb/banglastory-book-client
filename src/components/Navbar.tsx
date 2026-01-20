"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { BookKey, BookOpen, Compass, Library, Menu, X, Search, User, Sparkles } from "lucide-react";
import { usePathname } from "next/navigation";
import { SignedIn, UserButton } from "@clerk/nextjs";
import { useState, useEffect } from "react";

const Navbar = () => {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    function isActive(path: string) {
        return pathname === path;
    }

    // Handle scroll effect for navbar
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { href: "/", label: "PDFs", icon: BookOpen },
        { href: "/explore", label: "Explore", icon: Compass },
        { href: "/library", label: "Library", icon: Library },
    ];

    return (
        <>
            <nav className={`sticky top-0 z-50 w-full transition-all duration-300 ${
                scrolled
                    ? "bg-black/90 backdrop-blur-xl border-b border-gray-800/50 py-2"
                    : "bg-black/80 backdrop-blur-lg border-b border-gray-900 py-4"
            }`}>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <Link
                            href="/"
                            className="flex items-center gap-3 group"
                        >
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur group-hover:blur-lg transition-all duration-300"></div>
                                <BookKey className="relative w-8 h-8 text-white" />
                            </div>
                            <div className="flex flex-col">
                <span className="text-xl font-bold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                  Gossip Insider
                </span>
                                <span className="text-xs text-gray-400 hidden sm:block">Uncensored Archives</span>
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-1">
                            {navLinks.map((link) => {
                                const Icon = link.icon;
                                const active = isActive(link.href);
                                return (
                                    <Button
                                        key={link.href}
                                        variant="ghost"
                                        size="sm"
                                        asChild
                                        className={`relative group/nav-link px-4 py-2 rounded-lg transition-all duration-200 ${
                                            active
                                                ? "bg-gradient-to-r from-purple-900/30 to-pink-900/30 text-white"
                                                : "text-gray-300 hover:text-white hover:bg-gray-900/50"
                                        }`}
                                    >
                                        <Link href={link.href} className="flex items-center gap-2">
                                            <Icon className="w-4 h-4" />
                                            <span>{link.label}</span>
                                            {active && (
                                                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></span>
                                            )}
                                        </Link>
                                    </Button>
                                );
                            })}

                            {/* Search Bar */}
                            <div className="relative ml-4">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
                                <input
                                    type="text"
                                    placeholder="Search archives..."
                                    className="pl-10 pr-4 py-2 bg-gray-900/50 border border-gray-800 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-600 w-48 lg:w-64 transition-all duration-200"
                                />
                            </div>
                        </div>

                        {/* Right Side - Desktop */}
                        <div className="hidden md:flex items-center gap-3">
                            <Button
                                asChild
                                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 px-4 py-2 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-purple-900/30"
                            >
                                <Link href="/upload" className="flex items-center gap-2">
                                    <Sparkles className="w-4 h-4" />
                                    <span>Upload</span>
                                </Link>
                            </Button>

                            <SignedIn>
                                <div className="relative group">
                                    <UserButton
                                        appearance={{
                                            elements: {
                                                userButtonBox: "w-10 h-10",
                                                userButtonOuterIdentifier: "text-sm font-medium text-white",
                                                avatarBox: "w-10 h-10 border-2 border-transparent group-hover:border-purple-600 transition-all duration-300",
                                            }
                                        }}
                                    />
                                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-3/4 transition-all duration-300"></div>
                                </div>
                            </SignedIn>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="flex md:hidden items-center gap-3">
                            <Button
                                variant="ghost"
                                size="sm"
                                className="text-gray-300 hover:text-white hover:bg-gray-900/50"
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            >
                                {isMobileMenuOpen ? (
                                    <X className="w-5 h-5" />
                                ) : (
                                    <Menu className="w-5 h-5" />
                                )}
                            </Button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden fixed inset-x-0 top-16 z-40 bg-black/95 backdrop-blur-xl border-b border-gray-800 animate-in slide-in-from-top-5 duration-300">
                    <div className="container mx-auto px-4 py-6">
                        {/* Mobile Search */}
                        <div className="relative mb-6">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                            <input
                                type="text"
                                placeholder="Search archives..."
                                className="w-full pl-12 pr-4 py-3 bg-gray-900/50 border border-gray-800 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-600"
                            />
                        </div>

                        {/* Mobile Navigation Links */}
                        <div className="space-y-2">
                            {navLinks.map((link) => {
                                const Icon = link.icon;
                                const active = isActive(link.href);
                                return (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                                            active
                                                ? "bg-gradient-to-r from-purple-900/40 to-pink-900/40 text-white border-l-4 border-purple-500"
                                                : "text-gray-300 hover:text-white hover:bg-gray-900/50"
                                        }`}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        <Icon className="w-5 h-5" />
                                        <span className="font-medium">{link.label}</span>
                                        {active && (
                                            <Sparkles className="w-4 h-4 ml-auto text-purple-400" />
                                        )}
                                    </Link>
                                );
                            })}
                        </div>

                        {/* Mobile CTA */}
                        <div className="mt-8 pt-6 border-t border-gray-800">
                            <Button
                                asChild
                                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 rounded-xl font-semibold mb-4"
                            >
                                <Link href="/upload" onClick={() => setIsMobileMenuOpen(false)}>
                                    <Sparkles className="w-5 h-5 mr-2" />
                                    Upload Content
                                </Link>
                            </Button>

                            <div className="flex justify-center">
                                <SignedIn>
                                    <div className="flex items-center gap-3">
                                        <UserButton />
                                        <span className="text-gray-300">My Account</span>
                                    </div>
                                </SignedIn>
                            </div>
                        </div>

                        {/* Mobile Footer */}
                        <div className="mt-8 text-center">
                            <p className="text-xs text-gray-500">
                                🔞 18+ ONLY • Strictly No Minors
                            </p>
                        </div>
                    </div>
                </div>
            )}

            {/* Blur overlay for mobile menu */}
            {isMobileMenuOpen && (
                <div
                    className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-30 animate-in fade-in duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}
        </>
    );
};

export default Navbar;