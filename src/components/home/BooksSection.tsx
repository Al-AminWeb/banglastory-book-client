// src/components/home/BooksSection.tsx
"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import { FileText, ChevronRight, Filter, Image as ImageIcon } from "lucide-react";
import Link from "next/link";
import { mockBooks, categories, Book } from "@/data/mockBooks";

const BooksSection = () => {
    const [selectedCategory, setSelectedCategory] = useState("all");

    // Filter books based on selected category
    const filteredBooks = selectedCategory === "all"
        ? mockBooks
        : mockBooks.filter(book =>
            book.category.toLowerCase() === selectedCategory.toLowerCase()
        );

    const getCategoryDisplayName = () => {
        if (selectedCategory === "all") return "All Books";
        const category = categories.find(c => c.id === selectedCategory);
        return category ? `${category.label} Books` : "All Books";
    };

    const getCategoryColor = (categoryId: string) => {
        const colors: Record<string, string> = {
            adult: "from-pink-500 to-rose-500",
            romance: "from-rose-400 to-pink-500",
            fiction: "from-purple-500 to-violet-500",
            thriller: "from-red-500 to-orange-500",
            "short-stories": "from-blue-500 to-cyan-500"
        };
        return colors[categoryId] || "from-gray-600 to-gray-700";
    };

    return (
        <section className="bg-black py-12">
            <div className="container mx-auto px-4">

                {/* Category Filter Bar */}
                <div className="mb-10">
                    <div className="flex items-center gap-3 mb-4">
                        <Filter className="w-5 h-5 text-gray-400" />
                        <h2 className="text-lg font-semibold text-gray-300">Browse Categories</h2>
                    </div>

                    {/* Desktop Filter Bar */}
                    <div className="hidden md:flex flex-wrap justify-center gap-3">
                        {categories.map((category) => {
                            const isActive = selectedCategory === category.id;
                            return (
                                <button
                                    key={category.id}
                                    onClick={() => setSelectedCategory(category.id)}
                                    className={`
                    px-6 py-2.5 rounded-full font-medium transition-all duration-300
                    ${isActive
                                        ? `bg-gradient-to-r ${getCategoryColor(category.id)} text-white shadow-lg shadow-purple-900/30 border border-transparent`
                                        : 'bg-gray-900 text-gray-400 hover:text-white hover:bg-gray-800 border border-gray-800'
                                    }
                  `}
                                >
                                    {category.label}
                                </button>
                            );
                        })}
                    </div>

                    {/* Mobile Filter Bar (Scrollable) */}
                    <div className="md:hidden">
                        <div className="flex overflow-x-auto pb-4 gap-2 -mx-4 px-4 scrollbar-hide">
                            {categories.map((category) => {
                                const isActive = selectedCategory === category.id;
                                return (
                                    <button
                                        key={category.id}
                                        onClick={() => setSelectedCategory(category.id)}
                                        className={`
                      flex-shrink-0 px-5 py-2.5 rounded-full font-medium transition-all duration-300 whitespace-nowrap
                      ${isActive
                                            ? `bg-gradient-to-r ${getCategoryColor(category.id)} text-white shadow-lg shadow-purple-900/30 border border-transparent`
                                            : 'bg-gray-900 text-gray-400 hover:text-white hover:bg-gray-800 border border-gray-800'
                                        }
                    `}
                                    >
                                        {category.label}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Results Header */}
                <div className="mb-8">
                    <div className="flex items-center justify-between">
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-2">
                                {getCategoryDisplayName()}
                            </h3>
                            <p className="text-gray-400">
                                Showing <span className="text-purple-300 font-semibold">{filteredBooks.length}</span> book{filteredBooks.length !== 1 ? 's' : ''}
                            </p>
                        </div>
                        <div className="text-sm text-gray-500 hidden md:block">
                            Latest additions first
                        </div>
                    </div>

                    <div className="h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent mt-6"></div>
                </div>

                {/* Books Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredBooks.map((book) => (
                        <BookCard
                            key={book.id}
                            book={book}
                            getCategoryColor={getCategoryColor}
                        />
                    ))}
                </div>

                {/* Empty State */}
                {filteredBooks.length === 0 && (
                    <EmptyState
                        selectedCategory={selectedCategory}
                        categories={categories}
                        setSelectedCategory={setSelectedCategory}
                    />
                )}
            </div>
        </section>
    );
};

// Separate Book Card Component - UPDATED TO USE REGULAR IMG TAG
const BookCard = ({ book, getCategoryColor }: { book: Book, getCategoryColor: (category: string) => string }) => {
    const categorySlug = book.category.toLowerCase().replace(' ', '-');

    return (
        <div className="group bg-gray-900/50 border border-gray-800 rounded-xl overflow-hidden transition-all duration-300 hover:border-gray-700 hover:shadow-xl hover:shadow-purple-900/10">
            {/* Cover Image - UPDATED TO USE REGULAR IMG TAG */}
            <div className="aspect-[3/4] bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
                {/* Actual book cover image */}
                <div className="absolute inset-0">
                    {/* Simple img tag - no configuration needed */}
                    <img
                        src={book.coverImage}
                        alt={book.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        onError={(e) => {
                            // Fallback if image fails to load
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                        }}
                    />
                    {/* Gradient overlay for better text visibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    {/* Loading fallback - only shows if image fails */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${getCategoryColor(categorySlug)} opacity-20 flex items-center justify-center`}>
                        <ImageIcon className="w-12 h-12 text-gray-600" />
                    </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-3 left-3 z-10">
          <span className={`px-3 py-1 text-xs font-semibold rounded-full bg-black/80 backdrop-blur-sm ${book.category === 'Adult' ? 'text-pink-300' : 'text-gray-300'}`}>
            {book.category}
          </span>
                </div>

                {/* View Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 z-10">
                    <Button
                        asChild
                        className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0"
                    >
                        <Link href={book.pdfLink} className="flex items-center justify-center gap-2">
                            <FileText className="w-4 h-4" />
                            View PDF
                        </Link>
                    </Button>
                </div>
            </div>

            {/* Book Info */}
            <div className="p-4">
                <h4 className="text-white font-semibold text-lg mb-2 line-clamp-1 group-hover:text-purple-300 transition-colors">
                    {book.title}
                </h4>

                <div className="flex items-center justify-between">
          <span className="text-sm text-gray-400">
            Direct Download
          </span>
                    <ChevronRight className="w-4 h-4 text-gray-500 group-hover:text-purple-400 transition-colors" />
                </div>
            </div>
        </div>
    );
};

// Separate Empty State Component
const EmptyState = ({
                        selectedCategory,
                        categories,
                        setSelectedCategory
                    }: {
    selectedCategory: string;
    categories: typeof categories;
    setSelectedCategory: (category: string) => void
}) => {
    return (
        <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gray-900 flex items-center justify-center">
                <FileText className="w-12 h-12 text-gray-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-300 mb-2">
                No books found
            </h3>
            <p className="text-gray-500 max-w-md mx-auto">
                No books available in the `{categories.find(c => c.id === selectedCategory)?.label}` category yet.
                Check back soon or browse other categories.
            </p>
            <Button
                onClick={() => setSelectedCategory('all')}
                className="mt-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0"
            >
                View All Books
            </Button>
        </div>
    );
};

export default BooksSection;