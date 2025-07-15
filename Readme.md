# Backend Mastery Project - VideoTube API

This project is built as part of a backend mastery journey. It includes full user authentication, video handling, secure cookie management, error handling, and scalable MVC structure using **Node.js**, **Express.js**, and **MongoDB**.

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB (with Mongoose)
- **Authentication**: JWT (access & refresh tokens)
- **Middleware**: Custom asyncHandler, cookie-parser, CORS
- **File Upload**: Multer, Cloudinary
- **Pagination**: mongoose-aggregate-paginate-v2

---

##  Project Structure

src/

├── controllers/ # Request handlers

├── models/ # Mongoose schemas

├── routes/ # All express routes

├── utils/ # Custom utility functions (e.g., asyncHandler)

├── middlewares/ # Auth, error, upload middlewares

├── constants.js # Constant variables

├── db/ # DB connection logic

└── index.js # App entry point

makefile
Copy
Edit
