

# Online Flight and Hotel Booking System

## Introduction
Welcome to the **Online Flight and Hotel Booking System**, a comprehensive web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). This platform allows users to seamlessly search, book, and manage flights and hotel accommodations, while providing administrators with the tools to manage content and view analytics.

## Project Features
### User Features:
- **Search Flights and Hotels:** Users can search for flights and hotels based on various criteria.
- **Hotel Booking:** Users can view detailed information about hotels, including pictures, location, feedback, and reviews. They can select rooms, make payments, and manage bookings.
- **Flight Booking:** Users can search for flights, select seats, and make payments.
- **User Profile Management:** Users can view and manage their booking history, including past and canceled bookings.

### Admin Features:
- **Manage Content:** Admins can add, edit, or delete hotels and flights.
- **View Bookings:** Admins have access to view all bookings made by users.
- **Analytics:** Admins can view system analytics to track performance and usage.

## Tech Stack
- **Frontend:** React.js, Context API
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JWT (JSON Web Tokens)
- **Payment Gateway:** [Insert Payment Gateway Used, e.g., Stripe, PayPal]
- **Styling:** Tailwind CSS

## Getting Started

### Prerequisites
Before you begin, ensure you have the following installed:
- **Node.js** (v14 or above)
- **npm** or **yarn**
- **MongoDB** (either locally or via a cloud provider like MongoDB Atlas)

### Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/yourusername/online-flight-hotel-booking.git
   cd online-flight-hotel-booking
   ```

2. **Install Dependencies:**

   Navigate to the root directory and install the required dependencies for both the frontend and backend.

   ```bash
   # Install backend dependencies
   cd backend
   npm install

   # Install frontend dependencies
   cd ../frontend
   npm install
   ```

3. **Set Up Environment Variables:**

   Create a `.env` file in the `backend` directory and add the following variables:

   ```plaintext
   MONGO_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   NODE_ENV=development
   PORT=5000
   ```

4. **Start the Application:**

   - Start the backend server:

     ```bash
     cd backend
     npm run dev
     ```

   - Start the frontend server:

     ```bash
     cd ../frontend
     npm start
     ```

5. **Access the Application:**

   Open your browser and navigate to `http://localhost:3000` to view the application.

### Project Structure
```
online-flight-hotel-booking/
├── backend/                 # Backend code with Express.js and MongoDB
│   ├── config/              # Configuration files
│   ├── controllers/         # Controllers for handling requests
│   ├── models/              # Mongoose models for MongoDB
│   ├── routes/              # API routes
│   └── server.js            # Entry point for the backend
├── frontend/                # Frontend code with React.js
│   ├── public/              # Static assets
│   ├── src/                 # React components, hooks, and context
│   └── index.js             # Entry point for the frontend
└── README.md                # Project documentation
```

## Screenshots
![Home Page](images/homepage.png)
![Flight Search](images/flight_search.png)
![Hotel Details](images/hotel_details.png)

## Contributing
If you’d like to contribute to this project, please fork the repository and create a pull request. We welcome contributions of all kinds!

