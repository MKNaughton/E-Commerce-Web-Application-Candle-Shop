// create the web server
const express = require("express");
const app = express();

//middle ware needed for app.post
app.use(express.urlencoded({ extended: true }));  //https://expressjs.com/en/api.html#express.urlencoded

//const bodyparser = require ("body-parser");     //https://expressjs.com/en/resources/middleware/body-parser.html
//app.use(bodyParser.urlencoded({extended: true}));

  
   // back to homepage 
   app.get("/home", function(req, res){
       res.render("home.ejs");
   })

//set up for ejs - imports
const ejs = require('ejs');


// Tell Express to use EJS
app.set('view engine', 'ejs');
app.engine('ejs', ejs.renderFile);


// route to render home page
//app.get("/", function(req, res) {
 //   res.render("home.ejs");  // Make sure home.ejs exists in views folder
//});

app.get("/", function(req, res){
    res.render("login.ejs");
});                         //make login in root

app.post("/login", (req, res) => {
    const { username, password } = req.body;
    
    // Check if user exists and password is correct
    if (auth.authenticateUser(username, password)) {
        // If authentication successful, go to the home page
        res.redirect("/home");
    } else {
        // If authentication fails, redirect to login page with error.
        res.redirect("/?error=login_failed");
    }
});

//route to handle /home URL
app.get("/home", function(req, res) {
    res.render("home.ejs");  // Same as above, redirects /home to homepage
});
//see if work

//Import authentication module
const auth = require("./auth.js");

auth.createUser("John", "secret123");
auth.createUser("Alice", "pass256");

//test in console that the auth works
console.log(auth.authenticateUser("John", "secret123"));
console.log(auth.authenticateUser("john", "secret999"));

//to connect to the database
const mysql = require('mysql');
//connection to mysql database
const connection = mysql.createConnection(
    {
        host:'localhost',
        user:'root',
        password:'root',
        database: 'g00472916',
    
    }
);

// db connection feeback to console
connection.connect((err) => {
    if (err){
        console.error('error connecting to database', err);
    } else {
        console.log('Connected to database!');
    }
})




app.get("/shop",function(req,res){
 //  a connection query to database
 //let ID = 1;
  const ID = req.query.rec; //(instead of specifying in console as above with 
 // let ID = 1  localhost3000/shop?rec=3 will output to console product 3 info)h
 connection.query('SELECT * FROM g00472916 WHERE ID = ?', [ID],function (err, rows, fields)
 {
    if (err) {
        console.error("Error retrieving data from database:", err);
        res.status(500).send("Error retreiving data from database");
    }
    else if (rows.length===0)
    {
        console.error("No rows found for for ID $[ID]");
    }
    else
    {
        console.log("Data retrieved from the database!");
        console.log(rows[0].Product);
        console.log(rows[0].Manufacturer);
        console.log(rows[0]["Batch Info"]);
        console.log(rows[0].Price);
       
        
        const prodName = rows[0].Product;
        const prodManufacturer = rows[0].Manufacturer;
        const prodBatch = rows[0]["Batch Info"];
        const image = rows[0].Image
        const prodPrice = parseFloat(rows[0].Price).toFixed(2);
        

        res.render("candleshop.ejs", {
            myMessage: prodName, 
            prodManufacturer: prodManufacturer, 
            Batch_Info: prodBatch, 
            prodPrice: prodPrice, 
            myImage:image
           });
        




    }
   //inject data into a HTML


    //console.log('this is from a request!');
   // res.send('<html><h1>Candle Shop Page</h1></html>');
});
});

//post method route for index page
app.post("/shop",function(req,res){
    //  a connection query to database
    //let ID = 1;
     const ID = req.body.rec2; //(instead of specifying in console as above with 
    // let ID = 1  localhost3000/shop?rec=3 will output to console product 3 info)h
    connection.query('SELECT * FROM g00472916 WHERE ID = ?', [ID],function (err, rows, fields)
    {
       if (err) {
           console.error("Error retrieving data from database:", err);
           res.status(500).send("Error retreiving data from database");
       }
       else if (rows.length===0)
       {
           console.error("No rows found for for ID $[ID]");
       }
       else
       {
           console.log("Data retrieved from the database!");
           console.log(rows[0].Product);
           console.log(rows[0].Manufacturer);
           console.log(rows[0]["Batch Info"]);
           console.log(rows[0].Price);
           
           
           const prodName = rows[0].Product;
           const prodManufacturer = rows[0].Manufacturer;
           const prodBatch = rows[0]["Batch Info"];
           const image = rows[0].Image
           const prodPrice = parseFloat(rows[0].Price).toFixed(2);

          

           res.render("candleshop.ejs", {
               myMessage: prodName, 
               prodManufacturer: prodManufacturer, 
               Batch_Info: prodBatch, 
               prodPrice: prodPrice, 
               myImage:image
                });
   
       }
     
   });
   });
  
  //server static files from the public directory
   //app.use(express.static("home"));

 //server static files from the public directory
 app.use(express.static("home"));


// to start the web server
app.listen(3000, () =>{
    console.log('Server started on port 3000');
});