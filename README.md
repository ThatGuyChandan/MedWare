# MedWare

1. Server side-

   1. add node_modules(use npm init)
   2. install all the required dependencies -
   <!-- "dependencies": {
       "axios": "^1.7.2",
    "body-parser": "^1.20.2",
    "cors": "^2.8.5",
    "dotenv": "^16.4.5",
    "express": "^4.19.2",
    "mysql": "^2.18.1",
    "mysql2": "^3.10.1",
    "nodemon": "^3.1.3"
     } -->

   3. connection to database (change the database, user and password accordingly to connect it to mySQL )
   <!-- table schema-
   -- CREATE TABLE form (
   -- id INT AUTO_INCREMENT PRIMARY KEY,
   -- formType VARCHAR(10),
   -- name VARCHAR(100),
   -- countryCode VARCHAR(10),
   -- phoneNumber VARCHAR(15)
   -- ); -->
   4. I used sheetDB for storing sql data to online excel
      ->Go to SheetDB.
      ->Sign up and create a new API by linking your Google Sheet.
      ->You'll get a unique API endpoint for your Google Sheet.(copy that)
      ->past the copied api endpoint inside axios.post()
      ->manually initialize your Google Sheet with the required column headers.
   5. Now run the program using npm start (using nodemon ) or node index.js

2. CLient side-
   1. add node_modules(use npm init)
   2. install all the required dependencies
   3. Now run the program using npm start
