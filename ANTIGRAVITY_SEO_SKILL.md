SEO SKILL — LOCAL RESTAURANT WEBSITE
For use with: Mother Masala Family Kitchen (sumandev911.github.io/Mothermasalafamilykitchen)
Paste this entire block at the START of every Antigravity session where you touch the website code.

WHO YOU ARE WORKING ON

Business: Mother Masala Family Kitchen
Location: Shop No. 46, Avenue E, Evershine Homes, Global City, Virar West, Maharashtra 401303
Phone 1: +91 9972351151
Phone 2: +91 9506312379
Hours: Daily 11:00 AM – 11:30 PM
Cuisine: Indian — Biryani, Tandoori, Malvani, Chinese, Veg & Non-Veg
Live URL: https://sumandev911.github.io/Mothermasalafamilykitchen/
Swiggy: https://www.swiggy.com/city/mumbai/mother-masala-virar-east-virar-west-rest207850
Zomato: https://www.zomato.com/mumbai/mother-masala-virar


TARGET KEYWORDS (ranked by priority)

restaurant in Virar West
family restaurant Virar West
biryani Virar West
tandoori chicken Virar West
Malvani food Virar West
Indian restaurant Global City Virar
food delivery Virar West
best restaurant near Evershine Homes
order food Virar West online
non veg restaurant Virar West


SEO RULES — APPLY TO EVERY FILE YOU TOUCH
1. <head> BLOCK — REQUIRED ON EVERY HTML PAGE
Every HTML page must have ALL of the following in <head>:
html<!-- Primary Meta -->
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>[PAGE SPECIFIC TITLE — see below]</title>
<meta name="description" content="[PAGE SPECIFIC — see below]" />
<meta name="robots" content="index, follow" />
<link rel="canonical" href="[FULL URL OF THIS PAGE]" />

<!-- Open Graph (WhatsApp previews, Facebook) -->
<meta property="og:type" content="restaurant" />
<meta property="og:title" content="[SAME AS TITLE]" />
<meta property="og:description" content="[SAME AS DESCRIPTION]" />
<meta property="og:url" content="[FULL URL OF THIS PAGE]" />
<meta property="og:image" content="https://sumandev911.github.io/Mothermasalafamilykitchen/assets/og-image.jpg" />
<meta property="og:locale" content="en_IN" />
<meta property="og:site_name" content="Mother Masala Family Kitchen" />

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="[SAME AS TITLE]" />
<meta name="twitter:description" content="[SAME AS DESCRIPTION]" />
<meta name="twitter:image" content="https://sumandev911.github.io/Mothermasalafamilykitchen/assets/og-image.jpg" />
2. PAGE-SPECIFIC TITLES & DESCRIPTIONS
index.html:
title: Mother Masala Family Kitchen | Best Restaurant in Virar West | Biryani, Tandoori & More
description: Mother Masala Family Kitchen — authentic Indian restaurant in Global City, Virar West. Award-worthy Biryani, Tandoori, Malvani curries & Chinese. Open daily 11AM–11:30PM. Order on Swiggy & Zomato.
menu.html:
title: Full Menu | Mother Masala Family Kitchen Virar West | Prices & Dishes
description: Explore the complete menu at Mother Masala Family Kitchen, Virar West. Veg & Non-Veg, Biryani, Tandoori, Malvani fish curries, Chinese and more. View prices and order online.
3. LOCAL BUSINESS SCHEMA — ADD TO EVERY PAGE <head>
html<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "name": "Mother Masala Family Kitchen",
  "image": "https://sumandev911.github.io/Mothermasalafamilykitchen/assets/og-image.jpg",
  "url": "https://sumandev911.github.io/Mothermasalafamilykitchen/",
  "telephone": ["+919972351151", "+919506312379"],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Shop No. 46, Avenue E, Evershine Homes, Global City",
    "addressLocality": "Virar West",
    "addressRegion": "Maharashtra",
    "postalCode": "401303",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 19.4644,
    "longitude": 72.8079
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
    "opens": "11:00",
    "closes": "23:30"
  },
  "servesCuisine": ["Indian", "Biryani", "Tandoori", "Malvani", "Chinese"],
  "priceRange": "₹₹",
  "hasMenu": "https://sumandev911.github.io/Mothermasalafamilykitchen/menu.html",
  "acceptsReservations": "True",
  "sameAs": [
    "https://www.swiggy.com/city/mumbai/mother-masala-virar-east-virar-west-rest207850",
    "https://www.zomato.com/mumbai/mother-masala-virar"
  ]
}
</script>
4. IMAGE ALT TEXT RULES

Every <img> MUST have a descriptive alt attribute
Format: [dish name] at Mother Masala Family Kitchen, Virar West
Example: alt="Chicken Biryani at Mother Masala Family Kitchen Virar West"
Never use: alt="" or alt="image" or alt="photo"

5. HEADING STRUCTURE RULES

Each page gets EXACTLY ONE <h1> — it must contain the primary keyword
<h2> for major sections
<h3> for dish names and subsections
Never skip heading levels (don't go h1 → h3)

index.html h1 must be:
html<h1>Mother Masala Family Kitchen — Restaurant in Virar West</h1>
(Can be styled visually however you want with CSS, but the text content must contain "Restaurant in Virar West")
6. FILES TO CREATE (if they don't exist)
sitemap.xml — create in root:
xml<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://sumandev911.github.io/Mothermasalafamilykitchen/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://sumandev911.github.io/Mothermasalafamilykitchen/menu.html</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>
robots.txt — create in root:
User-agent: *
Allow: /
Sitemap: https://sumandev911.github.io/Mothermasalafamilykitchen/sitemap.xml
7. PERFORMANCE RULES (affects SEO ranking)

All <img> tags must have loading="lazy" EXCEPT the hero/first visible image
Hero image must have loading="eager" and fetchpriority="high"
External fonts: add <link rel="preconnect" href="https://fonts.googleapis.com"> before font link
Tailwind CDN script: move to bottom of <body> or add defer if possible

8. NEVER BREAK THESE

Never remove the WhatsApp floating button
Never remove Swiggy/Zomato links
Never remove the Google Maps directions link
Never change the phone numbers
Never change the address text


CHECKLIST — Run through this for EVERY session
Before finishing any coding session on this website, verify:

 <title> tag is set and contains target keyword
 <meta name="description"> is present and under 160 characters
 <link rel="canonical"> is present
 Open Graph tags are present (og:title, og:description, og:url, og:image)
 Local Business JSON-LD schema is in <head>
 Every <img> has a descriptive alt attribute
 Page has exactly one <h1> with location keyword
 sitemap.xml exists in root
 robots.txt exists in root
 Hero image has loading="eager" and fetchpriority="high"
 All other images have loading="lazy"


WHAT NOT TO DO

Do NOT stuff keywords unnaturally in visible text
Do NOT add hidden text or invisible divs with keywords
Do NOT change the design or layout when only asked to do SEO
Do NOT remove any existing links or navigation
Do NOT create duplicate content across pages


This skill file is maintained for Mother Masala Family Kitchen. Update business info here if hours, address, or phone numbers change.