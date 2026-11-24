# ShopNest — React E-commerce Website

A responsive college-practical e-commerce frontend built with React, Vite, React Router DOM and CSS.

## Requirements
- Node.js (18 or newer recommended)
- npm

## Run the project
1. Extract the ZIP file.
2. Open the extracted `modern-ecommerce-react` folder in VS Code.
3. Open a terminal in that folder.
4. Install dependencies:

   ```bash
   npm install
   ```

5. Start the development server:

   ```bash
   npm run dev
   ```

6. Open the local URL shown in the terminal (usually `http://localhost:5173`).

## Included features
- Shared header, search field, navigation, category sidebar and footer.
- React Router pages: Home, Products, Categories, About Us and Contact Us.
- Search and category filtering.
- Add-to-cart demo with cart item count.
- Responsive product grid and mobile layout.
- Reusable `ProductCard` component.

## Project structure

```text
modern-ecommerce-react/
├── index.html
├── package.json
├── README.md
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── App.css
    ├── components/
    │   ├── Header.jsx
    │   ├── Navbar.jsx
    │   ├── Sidebar.jsx
    │   ├── Footer.jsx
    │   └── ProductCard.jsx
    └── pages/
        ├── Home.jsx
        ├── Products.jsx
        ├── Categories.jsx
        ├── About.jsx
        └── Contact.jsx
```

## Notes
This is a frontend demonstration. Login/account actions and checkout are placeholders; the contact form shows a demo confirmation and does not send data to a server. Product photos load from Unsplash, so an internet connection is needed for those images.
