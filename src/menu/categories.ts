export interface Category {
  [key: string]: string[];
}

interface Categories {
  [key: string]: Category;
}

export const categories: Categories = {
  electronics: {
    smartphones: ["iphone", "samsung", "google"],
    laptops: ["macbook", "dell", "hp"],
    tablets: ["ipad", "samsung galaxy tab", "microsoft surface"],
  },
  clothing: {
    shirts: ["t-shirts", "button-downs", "polos"],
    pants: ["jeans", "slacks", "shorts"],
    dresses: ["maxi", "midi", "sundress"],
  },
  home: {
    furniture: ["sofas", "chairs", "tables"],
    appliances: ["refrigerators", "dishwashers", "washing machines"],
    decor: ["rugs", "artwork", "throw pillows"],
  },
};
