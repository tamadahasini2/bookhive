// ====================
// BOOK DATABASE
// js/books.js
// ====================
 
const books = [
    {
        id: 1,
        title: "Wings of Fire",
        author: "A.P.J. Abdul Kalam",
        category: "biography",
        price: 299,
        originalPrice: 499,
        rating: 4.8,
        reviews: 2341,
        image: "images/the.wings of fire.jpg",
        description: "Autobiography of India's beloved former president.",
        inStock: true
    },
    {
        id: 2,
        title: "The Alchemist",
        author: "Paulo Coelho",
        category: "fiction",
        price: 349,
        originalPrice: 499,
        rating: 4.7,
        reviews: 5012,
        image: "images/the Alchemist.jpg",
        description: "A magical story about pursuing your dreams.",
        inStock: true
    },
    {
        id: 3,
        title: "Atomic Habits",
        author: "James Clear",
        category: "self-help",
        price: 499,
        originalPrice: 799,
        rating: 4.9,
        reviews: 8420,
        image:"images/atomic habits.jpg" ,
        description: "Tiny changes, remarkable results.",
        inStock: true
    },
    {
        id: 4,
        title: "Sapiens",
        author: "Yuval Noah Harari",
        category: "history",
        price: 599,
        originalPrice: 899,
        rating: 4.6,
        reviews: 12450,
        image: "images/sapiens.jpg" ,
        description: "A brief history of humankind.",
        inStock: true
    },
    {
        id: 5,
        title: "Rich Dad Poor Dad",
        author: "Robert Kiyosaki",
        category: "business",
        price: 350,
        originalPrice: 499,
        rating: 4.5,
        reviews: 6800,
        image:"images/rich dad poor dad.jpeg",
        description: "What the rich teach their kids about money.",
        inStock: true
    },
    {
        id: 6,
        title: "Five Point Someone",
        author: "Chetan Bhagat",
        category: "fiction",
        price: 199,
        originalPrice: 299,
        rating: 4.3,
        reviews: 9200,
        image: "images/5 point someone.jpg",
        description: "What not to do at IIT.",
        inStock: false
    },
    {
        id: 7,
        title: "The Power of Subconscious Mind",
        author: "Joseph Murphy",
        category: "self-help",
        price: 249,
        originalPrice: 399,
        rating: 4.6,
        reviews: 4100,
        image: "images/The Power of Subconscious Mind.jpg",
        description: "Unlock the power within you.",
        inStock: true
    },
    {
        id: 8,
        title: "Think and Grow Rich",
        author: "Napoleon Hill",
        category: "business",
        price: 299,
        originalPrice: 499,
        rating: 4.7,
        reviews: 7300,
        image:"images/Think and Grow Rich .jpg" ,
        description: "The classic guide to success.",
        inStock: true
    },
    
    {
        id: 9,
        title: "Love or Obsession",
        author:"Hiah Mehta",
        category: "fiction",
        price: 299,
        originalPrice: 499,
        rating: 4.7,
        reviews: 7300,
        image: "images/love or obession.jpg",
        description: "A gripping story about love, emotions, and the fine line between love and obsession.",
        inStock: true
    },
    {
        id: 10,
        title: "Stay Hungry Stay Foolish",
        author: "Rashmi Bansal",
        category: "business",
        price: 399,
        originalPrice: 599,
        rating: 4.6,
        reviews: 4200,
        image: "images/stay hungry stay foolish.jpg" ,
        description: "Inspiring stories of entrepreneurs who followed their dreams and built successful businesses.",
        inStock: false
    },
    {
        id: 11,
        title: "The Story of 1868 to 2021 TATA",
        author: "Peter Casey",
        category: "business",
        price: 499,
        originalPrice: 699,
        rating: 4.7,
        reviews: 2100,
        image: "images/Tata business.jpg",
        description:  "The fascinating journey of the Tata Group from its beginnings in 1868 to its growth as a global business.",
        inStock: true
    },
    {
        id: 12,
        title: " 2-States  The Story of My Marriage",
        author:"Cheta Bhagat",
        category: "fiction",
        price: 249,
        originalPrice: 399,
        rating: 4.3,
        reviews: 9800,
        image: "images/The story of My marriage fiction,love.jpg",
        description: "A humorous love story about two people from different cultures who try to convince their families to accept their marriage." ,
        inStock: false
    },
];
 
console.log(`Loaded ${books.length} books`);
