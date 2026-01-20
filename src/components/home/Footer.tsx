import React from "react";
import Link from "next/link";
import { Mail, MessageSquare, Send, Github, Heart, Shield, Users } from "lucide-react";

const Footer = () => {
    const developers = [
        {
            name: "Alex Chen",
            role: "Lead Developer",
            telegram: "@alexchen_dev",
            email: "alex@gossipinsider.com",
            description: "Handling all technical development, features, and site maintenance"
        },
        {
            name: "Max Carter",
            role: "Content Manager",
            telegram: "@maxcarter_content",
            email: "max@gossipinsider.com",
            description: "Managing story uploads, content curation, and community engagement"
        }
    ];

    const links = {
        Platform: [
            { name: "Explore Archives", href: "/explore" },
            { name: "PDF Library", href: "/library" },
            { name: "Upload Content", href: "/upload" },
            { name: "Featured Stories", href: "/featured" }
        ],
        Legal: [
            { name: "Privacy Policy", href: "/privacy" },
            { name: "Terms of Service", href: "/terms" },
            { name: "Content Guidelines", href: "/guidelines" },
            { name: "DMCA", href: "/dmca" }
        ],
        Support: [
            { name: "Help Center", href: "/help" },
            { name: "Report Issue", href: "/report" },
            { name: "Content Removal", href: "/remove" },
            { name: "FAQ", href: "/faq" }
        ]
    };

    return (
        <footer className="bg-black border-t border-gray-900 mt-20">
            {/* Main Footer */}
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                    {/* Brand Section */}
                    <div className="lg:col-span-4">
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur"></div>
                                    <MessageSquare className="relative w-8 h-8 text-white" />
                                </div>
                                <span className="text-2xl font-bold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                  Gossip Insider
                </span>
                            </div>

                            <p className="text-gray-400 text-sm leading-relaxed">
                                Raw, uncensored storytelling platform. Providing exclusive adult content
                                with zero compromises. For mature audiences only.
                            </p>

                            <div className="flex items-center gap-4 pt-4">
                                <button className="p-2 bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors group">
                                    <TelegramIcon className="w-5 h-5 text-gray-400 group-hover:text-blue-400" />
                                </button>
                                <button className="p-2 bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors group">
                                    <Mail className="w-5 h-5 text-gray-400 group-hover:text-red-400" />
                                </button>
                                <button className="p-2 bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors group">
                                    <Github className="w-5 h-5 text-gray-400 group-hover:text-white" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="lg:col-span-5">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                            {Object.entries(links).map(([category, items]) => (
                                <div key={category}>
                                    <h3 className="text-white font-semibold mb-4 text-lg">{category}</h3>
                                    <ul className="space-y-3">
                                        {items.map((item) => (
                                            <li key={item.name}>
                                                <Link
                                                    href={item.href}
                                                    className="text-gray-400 hover:text-purple-300 transition-colors text-sm flex items-center gap-2 group"
                                                >
                                                    <span className="w-1 h-1 bg-gray-600 rounded-full group-hover:bg-purple-500"></span>
                                                    {item.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Contact Us - Developers */}
                    <div className="lg:col-span-3">
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-white font-semibold mb-4 text-lg flex items-center gap-2">
                                    <Users className="w-5 h-5" />
                                    Contact the Team
                                </h3>
                                <p className="text-gray-400 text-sm mb-6">
                                    Directly reach out to the people behind the platform
                                </p>
                            </div>

                            {/* Developers List */}
                            <div className="space-y-6">
                                {developers.map((dev, index) => (
                                    <div key={dev.name} className="space-y-3">
                                        <div className="flex items-start justify-between">
                                            <div>
                                                <h4 className="text-white font-medium">{dev.name}</h4>
                                                <p className="text-purple-300 text-sm">{dev.role}</p>
                                            </div>
                                            {index === 0 && (
                                                <span className="px-2 py-1 bg-purple-900/30 text-purple-300 text-xs rounded-full">
                          Owner
                        </span>
                                            )}
                                        </div>

                                        <p className="text-gray-400 text-xs">{dev.description}</p>

                                        <div className="space-y-2">
                                            <div className="flex items-center gap-2">
                                                <Send className="w-4 h-4 text-blue-400" />
                                                <a
                                                    href={`https://t.me/${dev.telegram.replace('@', '')}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-sm text-gray-300 hover:text-blue-400 transition-colors"
                                                >
                                                    {dev.telegram}
                                                </a>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Mail className="w-4 h-4 text-red-400" />
                                                <a
                                                    href={`mailto:${dev.email}`}
                                                    className="text-sm text-gray-300 hover:text-red-400 transition-colors"
                                                >
                                                    {dev.email}
                                                </a>
                                            </div>
                                        </div>

                                        {index === 0 && <div className="h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-900">
                <div className="container mx-auto px-4 py-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                            <div className="flex items-center gap-2">
                                <Shield className="w-4 h-4" />
                                <span>🔞 18+ Only • No Minors Allowed</span>
                            </div>
                            <div className="hidden md:block h-4 w-px bg-gray-800"></div>
                            <div className="flex items-center gap-2">
                                <Heart className="w-4 h-4" />
                                <span>Made for adult entertainment</span>
                            </div>
                        </div>

                        <div className="text-sm text-gray-500">
                            <p>© {new Date().getFullYear()} Gossip Insider. All rights reserved.</p>
                        </div>
                    </div>

                    {/* Disclaimer */}
                    <div className="mt-4 text-center">
                        <p className="text-xs text-gray-600">
                            This website contains adult material. All members must be 18 years of age or older.
                            All content is user-submitted. We do not claim ownership of any uploaded material.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

// Telegram Icon component
const TelegramIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.697.064-1.225-.461-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
    </svg>
);

export default Footer;