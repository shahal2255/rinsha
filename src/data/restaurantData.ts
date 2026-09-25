export interface DishItem {
  id: string;
  name: string;
  category: 'Shawaya' | 'Rice Combos' | 'Al Faham' | 'Mandi' | 'Fast Food';
  description: string;
  priceNote?: string;
  price?: number;
  comboPrices?: { label: string; price: number }[];
  image: string;
  isSignature?: boolean;
  signatureNumber?: string;
  spicyLevel?: 'Mild' | 'Medium' | 'Hot';
}

export const RESTAURANT_INFO = {
  name: "YAMAMA SHAWAYA",
  tagline: "AN GRILLED CHICKEN WITH SPECIAL FLAVORED RICE",
  category: "Arabic Restaurant • Shawaya • Grilled Chicken • Fast Food",
  address: "Oradampalam-Valiyavitilpadi, Calicut Road, Angadipuram, Perinthalmanna, Malappuram, Kerala 679321",
  shortLocation: "Calicut Road, Angadipuram, Perinthalmanna",
  phones: [
    { number: "9747362101", label: "Primary Order Line", tel: "tel:9747362101" },
    { number: "9747362102", label: "Takeaway & Delivery", tel: "tel:9747362102" }
  ],
  openingHours: "Daily: 11:00 AM – 11:00 PM",
  hoursNote: "Hours may vary. Please call before visiting (dining typically opens around 12:00 PM – 12:30 PM).",
  services: ["Dine-in", "Takeaway", "Home Delivery"],
  rating: "4.1",
  ratingSource: "Google customer rating",
  priceRange: "₹1–200 Approx. Price Range",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Yamama+Shawaya+Oradampalam+Valiyavitilpadi+Calicut+Road+Angadipuram+Perinthalmanna+Kerala+679321",
  embedMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15664.24949168435!2d76.208151!3d10.985958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7cc347bcbe7bf%3A0xb3049b1ff3a6f1d2!2sAngadipuram%2C%20Kerala!5e0!3m2!1sen!2sin!4v1711310000000!5m2!1sen!2sin"
};

export const SIGNATURE_DISHES: DishItem[] = [
  {
    id: "sig-1",
    signatureNumber: "01",
    name: "Shawaya",
    category: "Shawaya",
    description: "Charcoal slow-fired grilled chicken served with flavorful Arabic rice, tender inside with crisp charred skin.",
    comboPrices: [
      { label: "Quarter Plate", price: 180 },
      { label: "Half Plate", price: 340 },
      { label: "Full Plate", price: 660 }
    ],
    priceNote: "Served with special flavored Arabic rice",
    image: "/src/assets/images/hero_shawaya_chicken_1790312667383.jpg",
    isSignature: true,
    spicyLevel: "Medium"
  },
  {
    id: "sig-2",
    signatureNumber: "02",
    name: "Masala Shawaya",
    category: "Shawaya",
    description: "Juicy grilled chicken infused with rich Kerala-Arabic special masala seasoning and aromatic rice.",
    priceNote: "Price available at restaurant",
    image: "/src/assets/images/dish_masala_shawaya_1790312680409.jpg",
    isSignature: true,
    spicyLevel: "Hot"
  },
  {
    id: "sig-3",
    signatureNumber: "03",
    name: "Al Faham",
    category: "Al Faham",
    description: "Charcoal-grilled chicken marinated in Middle Eastern spices, slow-grilled over natural coals for deep smokiness.",
    priceNote: "Price available at restaurant",
    image: "/src/assets/images/dish_al_faham_1790312693394.jpg",
    isSignature: true,
    spicyLevel: "Medium"
  },
  {
    id: "sig-4",
    signatureNumber: "04",
    name: "Mandi",
    category: "Mandi",
    description: "Aromatic Arabic rice infused with spices and dry heat, topped with succulently cooked chicken.",
    priceNote: "Price available at restaurant",
    image: "/src/assets/images/dish_mandi_rice_1790312706017.jpg",
    isSignature: true,
    spicyLevel: "Mild"
  },
  {
    id: "sig-5",
    signatureNumber: "05",
    name: "Bishawari Rice",
    category: "Rice Combos",
    description: "Special fragrant long-grain flavored Arabic rice seasoned with signature spices, perfectly paired with grilled chicken.",
    priceNote: "Price available at restaurant",
    image: "/src/assets/images/hero_shawaya_chicken_1790312667383.jpg",
    isSignature: true,
    spicyLevel: "Mild"
  }
];

export const ALL_MENU_ITEMS: DishItem[] = [
  // Shawaya & Combos
  {
    id: "menu-1",
    name: "Shawaya + Arabic Rice (Quarter)",
    category: "Rice Combos",
    description: "Charcoal slow-fired quarter chicken served with generous portion of special flavored Arabic rice, garlic paste & gravy.",
    price: 180,
    priceNote: "Served with special flavored Arabic rice",
    image: "/src/assets/images/hero_shawaya_chicken_1790312667383.jpg",
    isSignature: true
  },
  {
    id: "menu-2",
    name: "Shawaya + Arabic Rice (Half)",
    category: "Rice Combos",
    description: "Charcoal slow-fired half chicken served with special flavored Arabic rice, kubboos, garlic paste, salads & gravy.",
    price: 340,
    priceNote: "Served with special flavored Arabic rice",
    image: "/src/assets/images/hero_shawaya_chicken_1790312667383.jpg",
    isSignature: true
  },
  {
    id: "menu-3",
    name: "Shawaya + Arabic Rice (Full)",
    category: "Rice Combos",
    description: "Whole charcoal slow-fired chicken with grand platter of special flavored Arabic rice, kubboos, fresh garlic paste & rich gravy.",
    price: 660,
    priceNote: "Served with special flavored Arabic rice",
    image: "/src/assets/images/hero_shawaya_chicken_1790312667383.jpg",
    isSignature: true
  },
  {
    id: "menu-4",
    name: "Classic Charcoal Shawaya (Chicken Only)",
    category: "Shawaya",
    description: "Authentic slow-grilled chicken over natural charcoal embers, juicy and infused with signature Arabic marinade.",
    priceNote: "Price available at restaurant",
    image: "/src/assets/images/hero_shawaya_chicken_1790312667383.jpg",
    isSignature: true
  },
  {
    id: "menu-5",
    name: "Masala Shawaya",
    category: "Shawaya",
    description: "Fresh chicken rubbed with roasted whole spices and chili paste, charcoal fired to perfection.",
    priceNote: "Price available at restaurant",
    image: "/src/assets/images/dish_masala_shawaya_1790312680409.jpg",
    isSignature: true
  },
  // Al Faham
  {
    id: "menu-6",
    name: "Arabian Al Faham Chicken",
    category: "Al Faham",
    description: "Traditional Arabian barbecue chicken seasoned with ground coriander, cumin, cardamom, and charred on grill grates.",
    priceNote: "Price available at restaurant",
    image: "/src/assets/images/dish_al_faham_1790312693394.jpg",
    isSignature: true
  },
  {
    id: "menu-7",
    name: "Pepper Al Faham",
    category: "Al Faham",
    description: "Crushed black pepper and spice-crusted charcoal grilled chicken with fiery notes and deep smokiness.",
    priceNote: "Price available at restaurant",
    image: "/src/assets/images/dish_al_faham_1790312693394.jpg"
  },
  // Mandi
  {
    id: "menu-8",
    name: "Chicken Mandi",
    category: "Mandi",
    description: "Fragrant basmati rice slow-steamed with authentic whole Mandi spices and tender roasted chicken.",
    priceNote: "Price available at restaurant",
    image: "/src/assets/images/dish_mandi_rice_1790312706017.jpg",
    isSignature: true
  },
  {
    id: "menu-9",
    name: "Bishawari Flavored Rice Platter",
    category: "Rice Combos",
    description: "Yamama's special flavored golden Arabic rice cooked with mild herbs, fried onions, and dry fruits.",
    priceNote: "Price available at restaurant",
    image: "/src/assets/images/hero_shawaya_chicken_1790312667383.jpg"
  },
  // Fast Food & Accompaniments
  {
    id: "menu-10",
    name: "Fresh Kubboos & Garlic Toum",
    category: "Fast Food",
    description: "Freshly baked Arabian flatbread served with Yamama's signature creamy homemade garlic paste.",
    priceNote: "Price available at restaurant",
    image: "/src/assets/images/dish_al_faham_1790312693394.jpg"
  },
  {
    id: "menu-11",
    name: "Crispy French Fries & Dips",
    category: "Fast Food",
    description: "Golden crispy potato fries seasoned with mild salt and served with dipping sauces.",
    priceNote: "Price available at restaurant",
    image: "/src/assets/images/restaurant_atmosphere_dining_1790312717045.jpg"
  },
  {
    id: "menu-12",
    name: "Fast Food Chicken Burger",
    category: "Fast Food",
    description: "Grilled or crispy chicken patty with lettuce, tomatoes, mayo and toasted sesame buns.",
    priceNote: "Price available at restaurant",
    image: "/src/assets/images/dish_masala_shawaya_1790312680409.jpg"
  }
];

export const GALLERY_ITEMS = [
  {
    id: "gal-1",
    title: "Signature Charcoal Shawaya",
    caption: "Slow-fired to juicy perfection over natural charcoal",
    image: "/src/assets/images/hero_shawaya_chicken_1790312667383.jpg",
    tag: "Shawaya"
  },
  {
    id: "gal-2",
    title: "Masala Shawaya with Spices",
    caption: "Rich spice crust infused with robust Arabian seasoning",
    image: "/src/assets/images/dish_masala_shawaya_1790312680409.jpg",
    tag: "Masala"
  },
  {
    id: "gal-3",
    title: "Smoky Arabian Al Faham",
    caption: "Flame-kissed chicken served with kubboos & garlic dip",
    image: "/src/assets/images/dish_al_faham_1790312693394.jpg",
    tag: "Al Faham"
  },
  {
    id: "gal-4",
    title: "Aromatic Chicken Mandi Rice",
    caption: "Flavored long-grain rice slow-cooked with tender chicken",
    image: "/src/assets/images/dish_mandi_rice_1790312706017.jpg",
    tag: "Mandi"
  },
  {
    id: "gal-5",
    title: "Warm Family Dining Atmosphere",
    caption: "Cozy welcoming seating for friends and families",
    image: "/src/assets/images/restaurant_atmosphere_dining_1790312717045.jpg",
    tag: "Ambiance"
  },
  {
    id: "gal-6",
    title: "Special Flavored Arabic Rice",
    caption: "Steaming aromatic Bishawari rice pairing",
    image: "/src/assets/images/hero_shawaya_chicken_1790312667383.jpg",
    tag: "Rice"
  }
];

export const REVIEWS = [
  {
    id: "rev-1",
    quote: "Average atmosphere, good service and decent pricing.",
    author: "Google Local Reviewer",
    detail: "Dine-in Customer",
    rating: 4
  },
  {
    id: "rev-2",
    quote: "A nice spot to enjoy tasty grilled food with family and friends.",
    author: "Google Local Reviewer",
    detail: "Family Dining Experience",
    rating: 5
  },
  {
    id: "rev-3",
    quote: "Shawaya and alfaham served with gravy which was a new experience.",
    author: "Google Local Reviewer",
    detail: "Shawaya & Al Faham Lover",
    rating: 4
  }
];
