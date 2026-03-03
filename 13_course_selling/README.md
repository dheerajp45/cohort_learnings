## Create a course selling app

- Initialize a new Node.js project
- Add Express, jsonwebtoken to it as a dependency
- Create index. js
- Add route skeleton for user login, signup, purchase a course, see course
- Add routes for admin login, admin gignup, create a course, delete a course, add course content.
- Define the schema for User, Admin, Course, Purchase
- Add a database (mongodb), use dotenv to store the database connection string
- Add middlewares for user and admin auth
- Complete the routes for user login, signup, purchase a course, see course (Extra points - Use express routing to better structure your routes)
- Create the frontend



From your code (TODOs):

Add Zod validation in signup/signin for both user and admin
Add bcrypt to hash passwords before saving
Add try/catch in all routes
Move JWT key to env file (already done ✅)
From your tutorial (Good to haves):
5. Use cookies instead of JWT tokens for auth
6. Add rate limiting middleware (use express-rate-limit)
7. Frontend in EJS (low priority)
8. Frontend in React

My suggestions after analyzing your project:
9. Add Zod validation for course creation/update in admin routes
10. Check deletedCount and modifiedCount in delete/update routes
11. Add pagination in GET /admin/course/bulk and GET /course/preview
12. Add proper error messages instead of just 500 errors