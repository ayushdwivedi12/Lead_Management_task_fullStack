# Lead Management Task Submission

This repository contains my submission for the Full Stack Developer role assessment.

-   **Scope:** Full Stack (Frontend + Backend)
-   **Time Taken:** Approximately 3 hours

---

## ✅ Core Features Implemented

I focused on building the primary CRUD (Create, Read) functionality as outlined in the task.

-   **Backend:**
    -   A **Node.js/Express.js** server to handle API requests.
    -   **MongoDB** integration using Mongoose for data persistence.
    -   API route for creating a new lead (`POST /api/leads`).
    -   API route for fetching all leads (`GET /api/leads`).
    -   Basic schema validation for the `leadSchema` model.

-   **Frontend:**
    -   A **React** application for the user interface.
    -   A lead capture form with fields for Name, Email, Phone, etc.
    -   The form submits new lead data to the backend API.
    -   A list/table component that fetches and displays all existing leads from the API on page load.
    -   Styling is done using **Tailwind CSS**.

---

## 🛠 Tech Stack

-   **Frontend:** React, Tailwind CSS
-   **Backend:** Node.js, Express.js
-   **Database:** MongoDB, Mongoose

---

## 📸 Screenshots

Here are a few screenshots of the application in action.

**1. Lead Capture Form**
https://github.com/ayushdwivedi12/Lead_Management_task_fullStack/blob/65fccff50d6f908f83a329a00223b058788e10a4/Screenshot%202025-09-05%20221141.png

**2. Form with Data and Success Message**
![Lead Creation Success](./screenshots/Screenshot-2025-09-05-221250.png)

**3. Final Leads List**
![Leads List Table](./screenshots/Screenshot-2025-09-05-221413.png)

---

## 🚀 How to Run Locally

### Prerequisites
- Node.js
- npm (or yarn)
- A running instance of MongoDB (or a MongoDB Atlas connection string)

### 1. Backend Setup
```bash
# Navigate to the server directory
cd server

# Install dependencies
npm install

# Create a .env file and add your MONGO_URI and PORT
# Example: MONGO_URI=mongodb://localhost:27017/lead-task
npm start
