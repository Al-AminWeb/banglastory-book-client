// src/data/mockBooks.ts

export interface Book {
    id: string;
    title: string;
    category: string;
    coverImage: string;
    pdfLink: string;
}

export const mockBooks: Book[] = [
    {
        id: "1",
        title: "Midnight Desires",
        category: "Adult",
        coverImage: "https://bookbinbd.com/wp-content/uploads/2024/07/71dW5gYLAPL._SL1500_.jpg.webp",
        pdfLink: "/book/1"
    },
    {
        id: "2",
        title: "The Last Promise",
        category: "Romance",
        coverImage: "https://bookbinbd.com/wp-content/uploads/2024/07/71dW5gYLAPL._SL1500_.jpg.webp",
        pdfLink: "/book/2"
    },
    {
        id: "3",
        title: "Shadow Hunt",
        category: "Thriller",
        coverImage: "https://bookbinbd.com/wp-content/uploads/2024/07/71dW5gYLAPL._SL1500_.jpg.webp",

        pdfLink: "/book/3"
    },
    {
        id: "4",
        title: "Neon Dreams",
        category: "Fiction",
        coverImage: "https://bookbinbd.com/wp-content/uploads/2024/07/71dW5gYLAPL._SL1500_.jpg.webp",

        pdfLink: "/book/4"
    },
    {
        id: "5",
        title: "Secret Encounters",
        category: "Adult",
        coverImage: "https://bookbinbd.com/wp-content/uploads/2024/07/71dW5gYLAPL._SL1500_.jpg.webp",

        pdfLink: "/book/5"
    },
    {
        id: "6",
        title: "Summer Romance",
        category: "Romance",
        coverImage: "https://bookbinbd.com/wp-content/uploads/2024/07/71dW5gYLAPL._SL1500_.jpg.webp",

        pdfLink: "/book/6"
    },
    {
        id: "7",
        title: "The Short Walk",
        category: "Short Stories",
        coverImage: "https://bookbinbd.com/wp-content/uploads/2024/07/71dW5gYLAPL._SL1500_.jpg.webp",

        pdfLink: "/book/7"
    },
    {
        id: "8",
        title: "Silent Witness",
        category: "Thriller",
        coverImage: "https://bookbinbd.com/wp-content/uploads/2024/07/71dW5gYLAPL._SL1500_.jpg.webp",

        pdfLink: "/book/8"
    },
    {
        id: "9",
        title: "Urban Legends",
        category: "Fiction",
        coverImage: "https://bookbinbd.com/wp-content/uploads/2024/07/71dW5gYLAPL._SL1500_.jpg.webp",

        pdfLink: "/book/9"
    },
    {
        id: "10",
        title: "Forbidden Tales",
        category: "Adult",
        coverImage: "https://bookbinbd.com/wp-content/uploads/2024/07/71dW5gYLAPL._SL1500_.jpg.webp",

        pdfLink: "/book/10"
    },
    {
        id: "11",
        title: "Heart Strings",
        category: "Romance",
        coverImage: "https://bookbinbd.com/wp-content/uploads/2024/07/71dW5gYLAPL._SL1500_.jpg.webp",

        pdfLink: "/book/11"
    },
    {
        id: "12",
        title: "Campfire Stories",
        category: "Short Stories",
        coverImage: "https://bookbinbd.com/wp-content/uploads/2024/07/71dW5gYLAPL._SL1500_.jpg.webp",

        pdfLink: "/book/12"
    }
];

export const categories = [
    { id: "all", label: "All" },
    { id: "fiction", label: "Fiction" },
    { id: "romance", label: "Romance" },
    { id: "thriller", label: "Thriller" },
    { id: "adult", label: "Adult" },
    { id: "short-stories", label: "Short Stories" }
];