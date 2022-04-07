# snapdeal_backend

This is a repo created for backend used in the snapdeal_clone project.
**Uses express and mongoose**

api routes

- /men
- /men/:id
- /jewellery
- /jewellery/:id
- /bagsFootwear
- /bagsFootwear/:id
- /beautyProducts
- /beautyProducts/:id
- /electronics
- /electronics/:id
- /home_kitchen
- /home_kitchen/:id
- /kids
- /kids/:id
- /women_western
- /women_western/:id
- /women_ethnic
- /women_ethnic/:id
- /cart - to get the cart object
- /cart - to post the data to the cart 
- /cart/:id - to get cart item by id
- /cart/:id - to delete cart item by id
- /user - to get user data requires request body (either email, or googleId, or facebookId or mobile number)
- /user/create - to create a new user after signup
- /user/otp - to get otp for login

## Each of the above route will have 2 parts a normal get all products and a get by id

Features:

- Uses nodemailer to send OPT for the user e-mail
- get all data for different types of products
- get data for a single product by id
- Uses atlas database

