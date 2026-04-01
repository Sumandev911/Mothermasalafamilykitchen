// ===================================
// Mother Masala — Full Menu Data
// ===================================

const menuData = {
  restaurant: "Mother Masala Family Kitchen",
  location: "Virar West, Mumbai",
  menu: [
    {
      category: "INDIAN MAIN COURSE VEG",
      type: "veg",
      items: [
        { name: "Mix Veg", half: 110, full: 170 },
        { name: "Veg Kolhapuri", half: 120, full: 180 },
        { name: "Veg Kadai", half: 120, full: 190 },
        { name: "Veg Hyderabadi", half: 130, full: 200 },
        { name: "Veg Kheema Masala", half: 130, full: 210 },
        { name: "Veg Lahori", price: 210 },
        { name: "Veg Tawa Masala", price: 230 },
        { name: "Veg Diwani Handi", price: 230 },
        { name: "Lasooni Methi Paneer", price: 220 },
        { name: "Palak Paneer", half: 140, full: 220 },
        { name: "Paneer Makhani", half: 140, full: 230 },
        { name: "Paneer Kadai", half: 130, full: 220 },
        { name: "Paneer Handi", half: 140, full: 230 },
        { name: "Paneer Sigdi", half: 130, full: 210 },
        { name: "Paneer Masala", half: 120, full: 200 },
        { name: "Paneer Tikka Masala", half: 140, full: 220 },
        { name: "Paneer Butter Masala", half: 140, full: 220 },
        { name: "Paneer Mutter", half: 130, full: 200 },
        { name: "Paneer Do Pyaza", price: 220 },
        { name: "Shahi Paneer", price: 220 },
        { name: "Paneer Bhurji", price: 220 },
        { name: "Paneer Channa", half: 140, full: 200 },
        { name: "Paneer Tomato", half: 140, full: 190 },
        { name: "Green Peas Masala", half: 120, full: 170 },
        { name: "Jeera Aloo", half: 110, full: 140 },
        { name: "Aloo Methi", half: 110, full: 160 },
        { name: "Aloo Mutter", half: 110, full: 160 },
        { name: "Chana Masala", half: 110, full: 180 },
        { name: "Bhendi Masala", half: 110, full: 180 },
        { name: "Bhendi Fry", price: 210 },
        { name: "Gobi Fry", price: 190 },
        { name: "Malai Methi", price: 190 },
        { name: "Malai Kofta", price: 210 },
        { name: "Dal Kolhapuri", price: 180 },
        { name: "Dal Fry", half: 100, full: 150 },
        { name: "Dal Fry Tadka", half: 120, full: 160 },
        { name: "Dal Palak", half: 130, full: 180 },
        { name: "Mushroom Masala", half: 120, full: 200 },
        { name: "Mushroom Tikka Masala", half: 140, full: 220 },
        { name: "Mushroom Palak", half: 140, full: 220 },
        { name: "Stuffed Tomato", price: 190 },
        { name: "Stuffed Simla", price: 190 },
        { name: "Dum Aloo Kashmiri/Punjabi", price: 220 },
        { name: "Aloo Tomato", half: 120, full: 190 },
        { name: "Babycorn Masala", half: 120, full: 200 },
        { name: "Veg. Chuparusta", half: 140, full: 220 },
        { name: "Kaju Masala", half: 160, full: 290 },
        { name: "Malai Methi Mutter", price: 230 },
        { name: "Veg Maharaja", price: 260 },
        { name: "Veg Chakodi", price: 240 }
      ]
    },
    {
      category: "INDIAN VEG STARTER",
      type: "veg",
      items: [
        { name: "Paneer Pakoda", price: 170 },
        { name: "Paneer Koliwada", price: 200 },
        { name: "Paneer Chatpata", price: 190 },
        { name: "Hara Bhara Kabab", price: 190 },
        { name: "Veg Pakoda", price: 130 },
        { name: "Paneer Ghee Roast", half: 140, full: 230 },
        { name: "Mushroom Ghee Roast", half: 140, full: 230 },
        { name: "Veg Seek Kabab", price: 190 },
        { name: "Paneer Tikka", price: 240 },
        { name: "Veg Jungli", price: 250 }
      ]
    },
    {
      category: "INDIAN RICE",
      type: "veg",
      items: [
        { name: "Steam Rice", half: 80, full: 100 },
        { name: "Jeera Rice", half: 90, full: 130 },
        { name: "Biryani Rice", half: 90, full: 130 },
        { name: "Veg Biryani", half: 100, full: 160 },
        { name: "Veg Pulau", half: 100, full: 160 },
        { name: "Paneer Pulau", half: 120, full: 170 },
        { name: "Paneer Biryani", half: 130, full: 210 },
        { name: "Paneer Tikka Biryani", half: 120, full: 180 },
        { name: "Veg Hyderabadi Biryani", half: 120, full: 190 },
        { name: "Green Peas Pulau", half: 100, full: 160 },
        { name: "Curd Rice", price: 150 },
        { name: "Mushroom Biryani", half: 120, full: 180 },
        { name: "Mushroom Tikka Biryani", half: 130, full: 210 },
        { name: "Mushroom Tawa Biryani", price: 230 },
        { name: "Dal Khichadi", half: 110, full: 160 },
        { name: "Dal Khichadi Tadka", half: 120, full: 170 },
        { name: "Dal Palak Khichadi", half: 120, full: 180 }
      ]
    },
    {
      category: "CHINESE VEG RICE & NOODLES",
      type: "veg",
      items: [
        { name: "Veg Fried Rice", half: 90, full: 150 },
        { name: "Veg Schezwan Rice", half: 100, full: 160 },
        { name: "Veg Triple Rice", half: 120, full: 190 },
        { name: "Veg Chopper Rice", price: 210 },
        { name: "Paneer Fried Rice", price: 180 },
        { name: "Paneer Schezwan Rice", price: 190 },
        { name: "Mushroom Fried Rice", price: 190 },
        { name: "Mushroom Schezwan Fried Rice", price: 200 },
        { name: "Veg Manchurian Rice", half: 100, full: 180 },
        { name: "Veg HongKong Rice", half: 110, full: 180 },
        { name: "Veg Shanghai Rice", price: 180 },
        { name: "Veg Singapori Rice", price: 190 },
        { name: "Veg Hakka Noodles", half: 90, full: 150 },
        { name: "Veg Schezwan Noodles", half: 100, full: 160 },
        { name: "Veg Manchurian Noodles", half: 110, full: 190 },
        { name: "Veg Singapori Noodles", price: 190 },
        { name: "Veg HongKong Noodles", half: 120, full: 190 }
      ]
    },
    {
      category: "CHINESE VEG STARTER & GRAVY",
      type: "veg",
      items: [
        { name: "Veg Manchurian Dry", half: 110, full: 150 },
        { name: "Veg Crispy", half: 120, full: 190 },
        { name: "Veg Chilly", half: 120, full: 170 },
        { name: "Veg 65", half: 120, full: 180 },
        { name: "Paneer Chilly", half: 120, full: 190 },
        { name: "Paneer Manchurian", half: 120, full: 190 },
        { name: "Paneer 65", half: 130, full: 190 },
        { name: "Paneer Garlic Dry", half: 140, full: 190 },
        { name: "Paneer Crispy", half: 140, full: 210 },
        { name: "Spinach Manchurian Dry", price: 180 },
        { name: "Gobi Manchurian Dry", price: 180 },
        { name: "Mushroom Manchurian Dry", price: 190 },
        { name: "Potato Chilly", price: 170 }
      ]
    },
    {
      category: "CHINESE VEG SOUP",
      type: "veg",
      items: [
        { name: "Veg Manchow Soup", half: 80, full: 120 },
        { name: "Veg Noodles Soup", price: 120 },
        { name: "Veg Hot & Sour Soup", half: 80, full: 120 },
        { name: "Veg Clear Soup", half: 80, full: 120 },
        { name: "Veg Sweet Corn Soup", half: 80, full: 120 },
        { name: "Veg Mushroom Soup", price: 140 },
        { name: "Tomato Soup", price: 160 },
        { name: "Veg Sorba Soup", price: 130 },
        { name: "Veg Palak Soup", price: 130 },
        { name: "Veg Coriander Soup", price: 130 }
      ]
    },
    {
      category: "INDIAN NON VEG STARTER",
      type: "nonveg",
      items: [
        { name: "Chicken Koliwada", half: 140, full: 220 },
        { name: "Chicken Tawa", half: 160, full: 260 },
        { name: "Chicken Jeera", half: 160, full: 240 },
        { name: "Chicken Ghee Roast", half: 140, full: 270 },
        { name: "Chicken Liver Tita Oil Fry", half: 130, full: 170 },
        { name: "Chicken Chatpata", price: 280 },
        { name: "Chicken Jungli", price: 280 },
        { name: "Chicken Dabba", price: 270 },
        { name: "Chicken Dragon", price: 200 },
        { name: "Mutton Ghee Roast", half: 260, full: 410 },
        { name: "Mutton Jeera", half: 260, full: 440 },
        { name: "Prawns Koliwada", price_on_request: true }
      ]
    },
    {
      category: "INDIAN MAIN COURSE NON VEG",
      type: "nonveg",
      items: [
        { name: "Chicken Mother Special", price: 260 },
        { name: "Chicken Masala", half: 120, full: 190 },
        { name: "Chicken Kolhapuri", half: 130, full: 200 },
        { name: "Chicken Kadai", half: 130, full: 200 },
        { name: "Chicken Handi", half: 200, full: 340 },
        { name: "Butter Chicken", half: 200, full: 350 },
        { name: "Chicken Hyderabadi", half: 140, full: 210 },
        { name: "Chicken Mogulai", half: 130, full: 200 },
        { name: "Chicken Peshavari", half: 120, full: 200 },
        { name: "Chicken Tikka Masala", half: 140, full: 220 },
        { name: "Chicken Kheema Masala", half: 150, full: 220 },
        { name: "Chicken Lasooni Masala", price: 220 },
        { name: "Murga Musallam", half: 250, full: 440 },
        { name: "Chicken Patiyala", half: 140, full: 220 },
        { name: "Chicken Do Pyaza", price: 230 },
        { name: "Chicken Jalfrezee", half: 130, full: 210 },
        { name: "Chicken Liver Masala", price: 180 },
        { name: "Chicken Liver Dry/Fry", price: 200 },
        { name: "Chicken Lajawab", half: 150, full: 230 },
        { name: "Chicken Hungama", price: 280 },
        { name: "Chicken Kuchori", price: 270 },
        { name: "Chicken Sukka", price: 240 },
        { name: "Mutton Sukka", price: 350 },
        { name: "Chicken Kinara", price: 250 },
        { name: "Mutton Kinara", price: 400 },
        { name: "Prawns Sukka", price_on_request: true }
      ]
    },
    {
      category: "MUTTON MAIN COURSE",
      type: "nonveg",
      items: [
        { name: "Mutton Masala", half: 170, full: 260 },
        { name: "Mutton Kadai", half: 180, full: 300 },
        { name: "Mutton Handi", half: 250, full: 440 },
        { name: "Mutton Kolhapuri", price: 320 },
        { name: "Mutton Mughlai", price: 340 },
        { name: "Mutton Rogan Josh", half: 190, full: 340 },
        { name: "Dal Gosht", price: 340 }
      ]
    },
    {
      category: "TANDOORI STARTER",
      type: "nonveg",
      items: [
        { name: "Mother Masala Spl Kabab", price: 360 },
        { name: "Tandoori Chicken (Half)", price: 200 },
        { name: "Tandoori Chicken (Full)", price: 320 },
        { name: "Chicken Tikka", price: 210 },
        { name: "Chicken Pahadi Kabab", price: 230 },
        { name: "Chicken Achari Kabab", price: 240 },
        { name: "Chicken Rashmi Kabab", price: 240 },
        { name: "Chicken Kalimiri Kabab", price: 240 },
        { name: "Chicken Tangdi Kabab", price: 130 },
        { name: "Hakka Chicken Tandoori", price: 380 },
        { name: "Tandoori Lollipop", price: 220 },
        { name: "Chicken Liver Tikka", price: 180 },
        { name: "Chicken Seekh Kabab", price: 240 },
        { name: "Chicken Khasta Kebab", price: 240 },
        { name: "Atom Bomb Kebab", half: 260, full: 280 },
        { name: "Labnani Kebab", price: 280 },
        { name: "Chicken Platter", price: 700 }
      ]
    },
    {
      category: "VEG TANDOORI STARTER",
      type: "veg",
      items: [
        { name: "Gobi Tandoori", price: 170 },
        { name: "Mushroom Tikka", price: 190 }
      ]
    },
    {
      category: "BIRYANI",
      type: "nonveg",
      items: [
        { name: "Chicken Biryani", half: 110, full: 190 },
        { name: "Chicken Biryani Boneless", half: 130, full: 220 },
        { name: "Chicken Tikka Biryani", half: 130, full: 230 },
        { name: "Chicken Hyderabadi Biryani", half: 130, full: 200 },
        { name: "Chicken Tandoori Biryani", half: 130, full: 220 },
        { name: "Chicken Pulau", half: 130, full: 230 },
        { name: "Chicken Tawa Biryani", price: 240 },
        { name: "Chicken Dal Khichada", price: 230 },
        { name: "Mutton Biryani", half: 170, full: 250 },
        { name: "Mutton Tawa Biryani", price: 330 },
        { name: "Egg Biryani", price: 150 },
        { name: "Egg Tawa Biryani", price: 200 },
        { name: "Egg Hyderabadi Biryani", price: 190 },
        { name: "Prawns Biryani", price_on_request: true },
        { name: "Prawns Tawa Biryani", price_on_request: true },
        { name: "Prawns Hyderabadi Biryani", price_on_request: true }
      ]
    },
    {
      category: "MALVANI",
      type: "nonveg",
      items: [
        { name: "Chicken Malvani", price: 230 },
        { name: "Mutton Malvani", price: 340 }
      ]
    },
    {
      category: "FISH MENU",
      type: "nonveg",
      items: [
        { name: "Prawns", price_on_request: true },
        { name: "Banghda", price_on_request: true },
        { name: "Surmai", price_on_request: true },
        { name: "Pomfret", price_on_request: true },
        { name: "Bombil", price_on_request: true },
        { name: "Mandili", price_on_request: true }
      ]
    },
    {
      category: "CHINESE NON VEG RICE & NOODLES",
      type: "nonveg",
      items: [
        { name: "Mother Masala Spl Rice", price: 230 },
        { name: "Chicken Fried Rice", half: 100, full: 160 },
        { name: "Chicken Schezwan Rice", half: 110, full: 170 },
        { name: "Chicken Triple Rice", half: 130, full: 200 },
        { name: "Chicken Chopper Rice", price: 220 },
        { name: "Chicken Manchurian Rice", half: 120, full: 180 },
        { name: "Chicken Singapori Rice", half: 120, full: 170 },
        { name: "Chicken HongKong Rice", half: 120, full: 180 },
        { name: "Chicken Crispy Rice", half: 120, full: 190 },
        { name: "Chicken Shanghai Rice", half: 110, full: 170 },
        { name: "Mix Fried Rice", price: 210 },
        { name: "Mix Schezwan Rice", price: 230 },
        { name: "Prawn Fried Rice", price_on_request: true },
        { name: "Prawns Schezwan Rice", price_on_request: true },
        { name: "Egg Fried Rice", half: 90, full: 150 },
        { name: "Egg Schezwan Fried Rice", half: 100, full: 160 },
        { name: "Chicken Hakka Noodles", half: 100, full: 160 },
        { name: "Chicken Schezwan Noodles", half: 110, full: 170 },
        { name: "Chicken Manchurian Noodles", half: 120, full: 180 },
        { name: "Chicken Singapori Noodles", half: 120, full: 180 },
        { name: "Chicken HongKong Noodles", half: 120, full: 180 },
        { name: "Chicken Garlic Rice Noodles", half: 120, full: 180 },
        { name: "Chicken Ginger Rice Noodles", half: 120, full: 180 }
      ]
    },
    {
      category: "CHINESE NON VEG STARTER & GRAVY",
      type: "nonveg",
      items: [
        { name: "Chicken Spring Roll", price: 210 },
        { name: "Chicken Chilly Dry", half: 130, full: 200 },
        { name: "Chicken Manchurian Dry", half: 130, full: 200 },
        { name: "Chicken 65", half: 130, full: 200 },
        { name: "Chicken Garlic Dry", half: 130, full: 200 },
        { name: "Chicken Crispy Dry", half: 140, full: 230 },
        { name: "Chicken Wing Chilly", half: 130, full: 170 },
        { name: "Chicken Lollipop", price: 200 },
        { name: "Chicken Lollipop Schezwan", half: 150, full: 220 },
        { name: "Chicken Butter Garlic Dry", price: 220 },
        { name: "Chicken Finger", price: 220 },
        { name: "Apple Chicken", half: 150, full: 220 },
        { name: "Chicken Schezwan Dry", half: 130, full: 210 },
        { name: "Egg Chilly", price: 160 },
        { name: "Prawn Chilly", price_on_request: true },
        { name: "Prawns Chilly Schezwan Dry", price_on_request: true },
        { name: "Chicken Chinese Bhel", half: 120, full: 190 },
        { name: "Bombil Chilly", price: 160 }
      ]
    },
    {
      category: "CHINESE NON VEG SOUP",
      type: "nonveg",
      items: [
        { name: "Chicken Manchow Soup", half: 90, full: 140 },
        { name: "Chicken Noodles Soup", price: 140 },
        { name: "Chicken Hot & Sour Soup", half: 90, full: 140 },
        { name: "Chicken Clear Soup", half: 90, full: 140 },
        { name: "Chicken Sweet Corn Soup", half: 90, full: 140 }
      ]
    },
    {
      category: "EGG MENU",
      type: "nonveg",
      items: [
        { name: "Egg Omelette", price: 60 },
        { name: "Egg Bhurji", price: 80 },
        { name: "Egg Half Fry", price: 50 },
        { name: "Boiled Egg", price: 50 },
        { name: "Egg Tawa Fry", price: 90 },
        { name: "Egg Masala", price: 140 },
        { name: "Egg Masala Fry", price: 160 }
      ]
    },
    {
      category: "THALI NON VEG",
      type: "nonveg",
      items: [
        { name: "Chicken Thali", price: 180 },
        { name: "Mutton Thali", price: 200 },
        { name: "Bangda Thali", price: 160 },
        { name: "Surmai/Prawns Thali", price_on_request: true },
        { name: "Egg Thali", price: 150 }
      ]
    },
    {
      category: "THALI VEG",
      type: "veg",
      items: [
        { name: "Veg Thali", price: 140 }
      ]
    },
    {
      category: "BREAD ROTI",
      type: "veg",
      items: [
        { name: "Tandoori Roti", price: 15 },
        { name: "Butter Roti", price: 20 },
        { name: "Onion Roti", price: 30 },
        { name: "Garlic Roti", price: 40 },
        { name: "Jeera Roti", price: 30 },
        { name: "Methi Paratha", price: 50 },
        { name: "Plain Naan", price: 35 },
        { name: "Butter Naan", price: 40 },
        { name: "Cheese Naan", price: 60 },
        { name: "Kulcha", price: 30 },
        { name: "Butter Kulcha", price: 35 },
        { name: "Garlic Butter Naan", price: 80 },
        { name: "Cheese Garlic Naan", price: 90 },
        { name: "Paratha", price: 35 },
        { name: "Butter Paratha", price: 40 },
        { name: "Aloo Paratha", price: 60 },
        { name: "Gobi Paratha", price: 60 },
        { name: "Paneer Paratha", price: 80 },
        { name: "Stuffed Paratha", price: 90 }
      ]
    },
    {
      category: "NON VEG BREAD",
      type: "nonveg",
      items: [
        { name: "Chicken Paratha", price: 90 }
      ]
    },
    {
      category: "SALAD & RAITHA",
      type: "veg",
      items: [
        { name: "Veg Raitha", price: 70 },
        { name: "Boondi Raitha", price: 70 },
        { name: "Curd", price: 45 },
        { name: "Green Salad", price: 70 },
        { name: "Fry Papad", price: 25 },
        { name: "Masala Papad", price: 45 },
        { name: "Roasted Papad", price: 20 }
      ]
    },
    {
      category: "DRINKS",
      type: "veg",
      items: [
        { name: "Butter Milk", price: 40 },
        { name: "Lassi", price: 60 },
        { name: "Cold Drinks / Soft Drinks", price_on_request: true }
      ]
    },
    {
      category: "VEG BIRYANI BY KG",
      type: "veg",
      items: [
        { name: "Veg Biryani", price: 850 },
        { name: "Paneer Biryani", price: 1000 },
        { name: "Paneer Tikka Biryani", price: 1200 }
      ]
    },
    {
      category: "NON VEG BIRYANI BY KG",
      type: "nonveg",
      items: [
        { name: "Chicken Biryani", price: 950 },
        { name: "Chicken Tikka Biryani", price: 1200 },
        { name: "Chicken Tandoori Biryani", price: 1300 },
        { name: "Mutton Biryani", price: 1700 },
        { name: "Prawns Biryani", price_on_request: true }
      ]
    }
  ]
};
