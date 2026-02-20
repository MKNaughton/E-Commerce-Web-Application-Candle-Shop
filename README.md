# E-Commerce-Web-Application-Candle-Shop

## Description
This is a full-stack e-commerce web application built with Node.js and Express that allows users to browse and purchase handcrafted candles through an authenticated shopping experience. The application features a secure login system, dynamic product catalog driven by a MySQL database, interactive Bootstrap carousel showcasing products, and a complete shopping cart with checkout functionality using browser localStorage. Users can view individual product details, select quantities, add items to their cart, and complete purchases through a streamlined checkout process with form validation and error handling.

The application demonstrates comprehensive web development skills including server-side routing with Express, templating with EJS for dynamic content rendering, MySQL database integration with parameterized queries for security, client-side JavaScript for cart management and form validation, and responsive design using Bootstrap 5. The candle shop manages six products stored in a MySQL database, with each product containing name, manufacturer, batch information, price, and product images rendered dynamically through EJS templates.

This application serves as an MVP (Minimum Viable Product) demonstrating core e-commerce functionality. For production deployment, additional features would be implemented including: bcrypt password hashing for secure credential storage, express-session for persistent user sessions, HTTPS encryption with SSL certificates, actual payment gateway integration (Stripe/PayPal API), user registration and account management system, email confirmation for orders, CSRF protection, rate limiting for API endpoints, and environment variable configuration for sensitive credentials. The current implementation focuses on demonstrating full-stack development capabilities, RESTful API design, database integration, and modern web development best practices.

## Project Overview

This web application uses Express.js as the backend framework with EJS templating to render dynamic content from a MySQL database. The authentication system implements a custom Node.js module with hardcoded credentials for demonstration purposes. Client-side functionality includes localStorage-based shopping cart, form validation with visual feedback, randomized Bootstrap carousel starting positions, and DOM manipulation for dynamic content updates. The application supports both GET and POST HTTP methods for routing, handles errors on both client and server sides, and serves static assets including CSS styling and product images through Express middleware.

## Technologies

- **Backend:** Node.js, Express.js 5.1.0
- **Templating:** EJS 3.1.10
- **Database:** MySQL 8.0
- **Frontend:** HTML5, CSS3, JavaScript ES6
- **Framework:** Bootstrap 5.3.0 (via CDN)
- **Storage:** Browser localStorage for cart management
- **Authentication:** Custom auth.js module
- **HTTP Methods:** GET and POST routes
- **Package Manager:** npm

## System Architecture

The application is organised across seven main files with clear separation of concerns:

### Core Components

- **index.js** - Main Express server file handling all routes and database connections. Implements GET routes for root (/), /home, and /shop with query parameters for product display. POST routes handle /login authentication and /shop form submissions. Connects to MySQL database g00472916, executes parameterized queries to prevent SQL injection, and renders EJS templates with dynamic product data. Uses express.urlencoded middleware for parsing POST request bodies.
- **auth.js** - Custom authentication module exported to index.js using module.exports. Maintains private users array with username and password objects. Implements createUser() function with duplicate checking using array.find() and user creation using array.push(). Implements authenticateUser() function for credential validation. Encapsulates authentication logic following separation of concerns principle.
- **login.ejs** - Login page template with client-side form validation. Implements validateForm() JavaScript function using regex pattern for email validation and trim() method for password field validation. CSS error classes provide visual feedback with red borders and error messages for invalid input. Styled with navy background (#0a192f) and blue accents (#1e88e5) using "Great Vibes" font for headings.
- **home.ejs** - Homepage featuring Bootstrap 5 carousel with six candle product slides. JavaScript randomizes starting slide using Math.random() multiplied by 6, dynamically adding and removing active classes. Implements product navigation links using query parameters (/shop?rec=1 through /shop?rec=6). Includes flexbox layout for product links styled as buttons with hover effects. Responsive design hides carousel captions on mobile using d-none d-md-block classes.
- **candleshop.ejs** - Individual product page template displaying dynamic content from MySQL through EJS syntax (<%=myMessage%>, <%=prodPrice%>). Implements addToCart() JavaScript function that validates quantity selection, creates {p:price, quan:quantity} object, stores in localStorage using JSON.stringify(), and displays confirmation message using setTimeout() for 3-second auto-hide. Dropdown menu allows quantity selection 0-6. Navigation links return to home page or proceed to checkout.
- **checkout.html** - Checkout page with cart display and customer information form. JavaScript iterates through localStorage using for loop, parses JSON objects with JSON.parse(), calculates item totals (quantity × price), and displays cart contents with running total. HTML5 validation attributes (required) on name, email, address fields. Dropdown select for payment method (credit card, PayPal, Stripe). Styled with semi-transparent blue backgrounds and matching color scheme.
- **G00472916.sql** - MySQL database dump containing table structure and product data. Table g00472916 with columns: ID (primary key), Product (text), Manufacturer (varchar), Batch Info (text), Price (decimal), Image (text). Contains six candle products: Daisy Candle (€20.00), Rosemary Candle (€17.99), Shine Candle (€22.00), Beewax Candle (€25.99), Rose Candle (€20.00), Mint Candle (€15.99).

### Key Design Decisions

- **Authentication Module** - auth.js extracted as separate module instead of inline authentication, improving code organization and reusability through module.exports pattern.
- **Parameterized Queries** - connection.query() with ? placeholders separates SQL code from user input values, preventing SQL injection attacks and improving code reusability.
- **localStorage Cart** - Browser localStorage persists cart data across page navigation without server-side session management, reducing server load and enabling client-side cart calculations.
- **EJS Templating** - Server-side rendering with EJS allows dynamic content injection from MySQL while maintaining separation between logic and presentation.
- **Dual HTTP Methods** - GET routes with query parameters (/shop?rec=1) for direct links, POST routes with body parsing (req.body.rec2) for form submissions, demonstrating different parameter passing approaches.
- **Visual Feedback** - CSS error classes, alert messages with timeouts, and form validation provide immediate user feedback improving user experience.

## Features

### Authentication System
![Login Page](images/Login%20page.png)
- Login page with username (user@123.com) and password (pass) validation
- Client-side email format validation using regex patterns
- Server-side authentication through custom auth.js module
- Password field cannot be empty using trim() validation
- Visual error feedback with red borders and error messages
- Failed login redirects with error message and retry link
![Login Failed](images/Login%20failed%20page.png)

### Product Catalog
![Home Page](images/Welcome%20to%20my%20candleshop.png)
- Bootstrap 5 carousel displaying six candle products
- Randomized starting slide on each page load using Math.random()
- Product navigation with clickable links to individual product pages
- Dynamic product details pulled from MySQL database
- Product information includes name, manufacturer, batch info, price, and image
- Responsive carousel hides descriptions on mobile devices

### Shopping Cart
![Add Candle to Cart](images/Add%20candle%20to%20cart.png)
- Add to cart functionality with quantity selection (0-6)
- localStorage-based cart persistence across page navigation
- Cart data stored as JSON objects {p:price, quan:quantity}
- Visual confirmation messages with auto-hide after 3 seconds
- Cart display on checkout page with itemized quantities and prices
- Automatic total calculation (quantity × price) for all items

### Checkout Process
![Checkout Cart](images/Checkout%20cart.png)
- Cart summary displaying all added products with quantities
- Running total calculation across all cart items
- Customer information form with name, email, address fields
- HTML5 form validation (required attributes)
- Payment method selection dropdown (credit card, PayPal, Stripe)
- Place order button and back to shop navigation link
![Bottom of Checkout Page](images/bottom%20of%20checkout%20page.png)


### Database Integration
![SQL Database](images/SQL%20database%20for%20candleshop.png)
- MySQL database named g00472916 (student ID)
- Parameterized queries prevent SQL injection attacks
- Dynamic product rendering through EJS templates
- Database connection validation with error handling
- Product retrieval by ID using connection.query()
- Price formatting to two decimal places using toFixed(2)

### Responsive Design
- Bootstrap 5 via CDN for responsive grid system
- Viewport meta tags for mobile device scaling
- Flexbox layouts (d-flex) for product links and navigation
- Responsive utilities (d-none d-md-block) hide elements on mobile
- Carousel adapts to different screen sizes
- Form inputs scale properly on all devices

## Getting Started

git clone https://github.com/MKNaughton/E-Commerce-Web-Application-Candle-Shop.git
cd E-Commerce-Web-Application-Candle-Shop

### Prerequisites
- Node.js (version 14 or higher)
- MySQL Server (version 8.0 or higher)
- npm (Node Package Manager)
- Web browser (Chrome, Firefox, Safari, Edge)

### Database Setup

1. Start MySQL Server
```bash
mysql -u root -p
```

2. Import the database schema and data
```bash
mysql -u root -p < G00472916.sql
```

3. Verify database creation
```sql
USE g00472916;
SELECT * FROM g00472916;
```

### Application Setup

1. Install dependencies
```bash
npm install
```

This installs:
- express@5.1.0
- ejs@3.1.10
- mysql@2.18.1

2. Configure database connection (if needed)

Edit `index.js` lines 67-74 if your MySQL credentials differ:
```javascript
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',  
    database: 'g00472916'
});
```

### Running the Application

1. Start the Express server
```bash
node index.js
```

2. Open web browser and navigate to
```
http://localhost:3000
```

3. Login with credentials:
- **Username:** user@123.com
- **Password:** pass

### Using the Application

**Login Flow:**
1. Enter email address: user@123.com
2. Enter password: pass
3. Click Login button
4. Redirected to homepage on success

**Shopping Flow:**
1. Browse products on homepage carousel
2. Click product link button to view individual product page
3. Select quantity from dropdown (1-6)
4. Click "Add to Cart" button
5. View confirmation message
6. Continue shopping or click "View Cart & Checkout"
7. Review cart items and total on checkout page
8. Fill out customer information form
9. Select payment method
10. Click "Place Order" button

**Navigation:**
- Home page: Click "Back to Home page" link
- Checkout: Click "View Cart & Checkout" button
- Product pages: Click individual product link buttons

## Implementation Details

### Server Configuration and Routing

Express server setup with EJS templating:
```javascript
const express = require("express");
const app = express();

// Middleware for POST body parsing
app.use(express.urlencoded({ extended: true }));

// EJS configuration
const ejs = require('ejs');
app.set('view engine', 'ejs');
app.engine('ejs', ejs.renderFile);

// Static file serving
app.use(express.static("home"));

// Server start
app.listen(3000, () => {
    console.log('Server started on port 3000');
});
```

### Authentication Module

Custom auth.js module with user management:
```javascript
const users = [
    {username: "user@123.com", password: "pass"}
];

function createUser(username, password) {
    const currentUser = users.find(user => user.username === username);
    if (!currentUser) {
        users.push({username, password});
        console.log("new user created!", username);
        return true;
    }
    console.log("User already exists", username);
    return false;
}

function authenticateUser(username, password) {
    const user = users.find(user => user.username === username);
    if (!user || user.password !== password) {
        return false;
    }
    return true;
}

module.exports = { createUser, authenticateUser };
```

### Database Connection and Queries

MySQL connection with parameterized queries:
```javascript
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'g00472916'
});

connection.connect((err) => {
    if (err) {
        console.error('error connecting to database', err);
    } else {
        console.log('Connected to database!');
    }
});

// Parameterized query prevents SQL injection
const ID = req.query.rec;
connection.query('SELECT * FROM g00472916 WHERE ID = ?', [ID], function(err, rows, fields) {
    if (err) {
        console.error("Error retrieving data from database:", err);
        res.status(500).send("Error retrieving data from database");
    } else if (rows.length === 0) {
        console.error("No rows found for ID", ID);
    } else {
        const prodName = rows[0].Product;
        const prodManufacturer = rows[0].Manufacturer;
        const prodBatch = rows[0]["Batch Info"];
        const prodPrice = parseFloat(rows[0].Price).toFixed(2);
        const image = rows[0].Image;
        
        res.render("candleshop.ejs", {
            myMessage: prodName,
            prodManufacturer: prodManufacturer,
            Batch_Info: prodBatch,
            prodPrice: prodPrice,
            myImage: image
        });
    }
});
```

### Client-Side Form Validation

Login page validation with visual feedback:
```javascript
function validateForm() {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    let isValid = true;
    
    // Email validation using regex
    if (!validateEmail(email)) {
        document.getElementById("emailError").textContent = "Please enter a valid email address";
        document.querySelector('.email-group').classList.add('error');
        isValid = false;
    }
    
    // Password validation
    if (password === "") {
        document.getElementById("passwordError").textContent = "Password cannot be empty";
        document.querySelector('.password-group').classList.add('error');
        isValid = false;
    }
    
    return isValid;
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
```

### Shopping Cart Implementation

addToCart() function with localStorage:
```javascript
function addToCart() {
    let product = document.getElementById("product").innerHTML;
    let quantity = document.getElementById("quantity").value;
    let price = parseFloat(document.getElementById("price").innerHTML.replace("Price: €", ""));
    
    // Validate quantity selection
    if (quantity === "0") {
        alert("Please select a quantity greater than 0");
        return;
    }
    
    // Create object and store in localStorage
    let quan_price = {p: price, quan: quantity};
    localStorage.setItem(product, JSON.stringify(quan_price));
    
    // Display confirmation message
    const alertMsg = document.getElementById("alertMessage");
    alertMsg.style.display = "block";
    alertMsg.innerHTML = quantity + " × " + product + " added to cart!";
    
    // Auto-hide after 3 seconds
    setTimeout(function() {
        alertMsg.style.display = "none";
    }, 3000);
}
```

### Checkout Cart Display

Iterate through localStorage and calculate totals:
```javascript
let cost_allItems = 0;
for (i = 0; i < localStorage.length; i++) {
    let product = localStorage.key(i);
    let content = JSON.parse(localStorage.getItem(product));
    let total_cost = parseInt(content.quan) * parseFloat(content.p);
    cost_allItems += total_cost;
    
    if (content.quan > 0) {
        document.getElementById("cart_items").innerHTML += 
            product + " x " + content.quan + " = €" + total_cost.toFixed(2) + "<br>";
    }
}
document.getElementById("total_price").innerHTML = "Total: €" + cost_allItems.toFixed(2);
```

### Bootstrap Carousel Randomization

Random starting slide using Math.random():
```javascript
document.addEventListener('DOMContentLoaded', function() {
    // Get random number between 0 and 5 (for 6 slides)
    var randomStart = Math.floor(Math.random() * 6);
    
    // Remove active class from all slides
    document.querySelectorAll('.carousel-item').forEach(item => 
        item.classList.remove('active')
    );
    document.querySelectorAll('.carousel-indicators button').forEach(item => 
        item.classList.remove('active')
    );
    
    // Add active class to random slide
    document.querySelectorAll('.carousel-item')[randomStart].classList.add('active');
    document.querySelectorAll('.carousel-indicators button')[randomStart].classList.add('active');
});
```

## Author

Marykerin Naughton
