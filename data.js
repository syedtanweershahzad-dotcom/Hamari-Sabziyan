const vegetables = [
    {
        id: 1,
        name: "Spinach",
        roman: "Palak",
        urdu: "پالک",
        price: 120,
        image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=400&h=400&q=80",
        color: "#38a169"
    },
    {
        id: 2,
        name: "Tomato",
        roman: "Tamatar",
        urdu: "ٹماٹر",
        price: 80,
        image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=400&h=400&q=80",
        color: "#e53e3e"
    },
    {
        id: 3,
        name: "Carrot",
        roman: "Gajar",
        urdu: "گاجر",
        price: 90,
        image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=400&h=400&q=80",
        color: "#dd6b20"
    },
    {
        id: 4,
        name: "Onion",
        roman: "Pyaaz",
        urdu: "پیاز",
        price: 60,
        image: "https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?auto=format&fit=crop&w=400&h=400&q=80",
        color: "#ecc94b"
    },
    {
        id: 5,
        name: "Potato",
        roman: "Aloo",
        urdu: "آلو",
        price: 50,
        image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=400&h=400&q=80",
        color: "#b7791f"
    },
    {
        id: 6,
        name: "Green Chili",
        roman: "Hari Mirch",
        urdu: "ہری مرچ",
        price: 150,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYQOtZeI7x56w7FnX4CHQZtdPuTo8nAGJU-6eQjAi7IQ&s=10",
        color: "#38a169"
    },
    {
        id: 7,
        name: "Garlic",
        roman: "Lahsun",
        urdu: "لہسن",
        price: 220,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgRg_9BVx2gn3k4nTk5JruUCI07orUzgEmXRDh-CfSjQ&s=10",
        color: "#edf2f7"
    },
    {
        id: 8,
        name: "Ginger",
        roman: "Adrak",
        urdu: "ادرک",
        price: 250,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoULYd8tLrXG5jtpwewia6WvKqE2Io_mlmLIq0abcRng&s=10",
        color: "#a0aec0"
    },
    {
        id: 9,
        name: "Cucumber",
        roman: "Kheera",
        urdu: "کھیرا",
        price: 70,
        image: "https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?auto=format&fit=crop&w=400&h=400&q=80",
        color: "#38a169"
    },
    {
        id: 10,
        name: "Eggplant",
        roman: "Baingan",
        urdu: "بینگن",
        price: 85,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaFJ-U-BY_uyrY--I5waQ2ag4p1wnU9_EQswGBGv1mhA&s=10",
        color: "#805ad5"
    },
    {
        id: 11,
        name: "Okra",
        roman: "Bhindi",
        urdu: "بھنڈی",
        price: 130,
        image: "https://images.unsplash.com/photo-1425543103986-22abb7d7e8d2?auto=format&fit=crop&w=400&h=400&q=80",
        color: "#38a169"
    },
    {
        id: 12,
        name: "Cauliflower",
        roman: "Phool Gobhi",
        urdu: "پھول گوبھی",
        price: 100,
        image: "https://images.unsplash.com/photo-1568584711075-3d021a7c3ca3?auto=format&fit=crop&w=400&h=400&q=80",
        color: "#38a169"
    },
    {
        id: 13,
        name: "Cabbage",
        roman: "Band Gobhi",
        urdu: "بند گوبھی",
        price: 65,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlQ4yXqRHcyMBtjOfLi8B55ZkK1TYnHlQTzEosY6YnXA&s=10",
        color: "#38a169"
    },
    {
        id: 14,
        name: "Peas",
        roman: "Matar",
        urdu: "مٹر",
        price: 110,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH8KgwjbCQfapfF3NicXfdygXCo1Cav_IH72mqbwbM5Q&s=10",
        color: "#38a169"
    },
    {
        id: 15,
        name: "Bell Pepper",
        roman: "Shimla Mirch",
        urdu: "شملہ مرچ",
        price: 160,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUmuFhSSEwVY7H1IDSij9jyuP41LwydzVzUVXX2yldqg&s=10",
        color: "#38a169"
    },
    {
        id: 16,
        name: "Coriander",
        roman: "Dhania",
        urdu: "دھنیا",
        price: 140,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGrdjh1xAnUBP1chdZzgLqRruB-x88OgB5uIQYMhIswg&s=10",
        color: "#38a169"
    },
    {
        id: 17,
        name: "Mint",
        roman: "Pudina",
        urdu: "پودینہ",
        price: 130,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrkSM9h9XY7QN31XSNj5vIV5bwXe23v8HBdl-IglRdnQ&s",
        color: "#38a169"
    },
    {
        id: 18,
        name: "Fenugreek",
        roman: "Methi",
        urdu: "میتھی",
        price: 115,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoQq3IzbT95dWAIDMKOQwz1UniT6U8MmQVI8N6LHDqZw&s=10",
        color: "#ecc94b"
    },
    {
        id: 19,
        name: "Radish",
        roman: "Mooli",
        urdu: "مولی",
        price: 75,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk77Cbjj8mwLjzXtoGADIh6ahGgn34FEvEd-bMTndSMg&s=10",
        color: "#edf2f7"
    },
    {
        id: 20,
        name: "Turnip",
        roman: "Shalgam",
        urdu: "شلغم",
        price: 95,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbVU74N2b2dZdLU3_wFwlZZ7bD4NIksBj95dOjTPyn0A&s",
        color: "#805ad5"
    },
    {
        id: 21,
        name: "Beetroot",
        roman: "Chukandar",
        urdu: "چقندر",
        price: 105,
        image: "https://images.unsplash.com/photo-1593105544559-ecb03bf76f82?auto=format&fit=crop&w=400&h=400&q=80",
        color: "#e53e3e"
    },
    {
        id: 22,
        name: "Bitter Gourd",
        roman: "Karela",
        urdu: "کریلا",
        price: 145,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq7DHAWPphpbcUnXwlZEFgsKnruAPhhtdlCRNbVZYqkA&s=10",
        color: "#38a169"
    },
    {
        id: 23,
        name: "Bottle Gourd",
        roman: "Lauki",
        urdu: "لوکی",
        price: 55,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMy8IFZNhJv2feJNydjtsarkKm2CJMTs9DpimNCtCMyg&s=10",
        color: "#38a169"
    },
    {
        id: 24,
        name: "Ridge Gourd",
        roman: "Tori",
        urdu: "توری",
        price: 65,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXVCFsVvlnw-KW-sHEIdlUmwlG0-4UP6E9QBQs4x5zRw&s=10",
        color: "#38a169"
    },
    {
        id: 25,
        name: "Pumpkin",
        roman: "Kaddu",
        urdu: "کدو",
        price: 70,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBy44hpI3wRDRm8vMrxVm7-XNq_-hRSGQyHWjyhtKqVQ&s=10",
        color: "#ecc94b"
    },
    {
        id: 26,
        name: "Spring Onion",
        roman: "Hara Pyaaz",
        urdu: "ہرا پیاز",
        price: 85,
        image: "https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?auto=format&fit=crop&w=400&h=400&q=80",
        color: "#38a169"
    },
    {
        id: 27,
        name: "Sweet Potato",
        roman: "Shakarkandi",
        urdu: "شکر قندی",
        price: 125,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWrW4qSB5SlIsUjrdCy6fLWmPvQozGyV_PTf6cwt0o8A&s=10",
        color: "#dd6b20"
    },
    {
        id: 28,
        name: "Broccoli",
        roman: "Broccoli",
        urdu: "بروکلی",
        price: 200,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmTS4TmYSYAaXS50RDx4nWN0AdjmMpWbqaWHOGqtvlsg&s=10",
        color: "#38a169"
    },
    {
        id: 29,
        name: "Corn",
        roman: "Makki",
        urdu: "مکئی",
        price: 90,
        image: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=400&h=400&q=80",
        color: "#ecc94b"
    },
    {
        id: 30,
        name: "Cluster Beans",
        roman: "Guar Phali",
        urdu: "گوار پھلی",
        price: 135,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHFqWCKWSdDM9Vrmr5Qhd1aZ-OWdvV7rmGglIhI5kJcA&s=10",
        color: "#38a169"
    },
    {
        id: 31,
        name: "Lettuce",
        roman: "Salad Patta",
        urdu: "سلاد پتہ",
        price: 110,
        image: "https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?auto=format&fit=crop&w=400&h=400&q=80",
        color: "#38a169"
    },
    {
        id: 32,
        name: "Red Capsicum",
        roman: "Lal Shimla Mirch",
        urdu: "لال شملہ مرچ",
        price: 180,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1t8tYHABx6hZkFIhd7IccjokdaD58KaLAbMmpkZHb9w&s=10",
        color: "#e53e3e"
    }
];