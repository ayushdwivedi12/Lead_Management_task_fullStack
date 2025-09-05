# Lead Management Task

This is a full-stack lead management application built with the MERN stack (MongoDB, Express.js, React, Node.js). It allows users to add new leads through a form and view all entries in a table.

---

## ✅ Core Features Implemented


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
![Lead Creation Success](https://github.com/ayushdwivedi12/Lead_Management_task_fullStack/blob/main/Screenshot%202025-09-05%20221141.png?raw=true)

**2. Lead Details Filled in Form**
![Leads Details Filled](https://github.com/ayushdwivedi12/Lead_Management_task_fullStack/blob/main/Screenshot%202025-09-05%20221349.png?raw=true)

**3. Form with Data and Success Message**
![Lead Creation Success](https://github.com/ayushdwivedi12/Lead_Management_task_fullStack/blob/main/Screenshot%202025-09-05%20221141.png?raw=true)

**4. Final Leads List**
![Leads List Table](https://github.com/ayushdwivedi12/Lead_Management_task_fullStack/blob/main/Screenshot%202025-09-05%20221413.png?raw=true)

**5. Backend Working Details on Terminal**
![Lead Backend Connection Working Terminal Server](https://github.com/ayushdwivedi12/Lead_Management_task_fullStack/blob/main/Screenshot%202025-09-05%20221446.png?raw=true)

---

## 🚀 How to Run Locally

### Prerequisites
- Node.js & npm 
- A running instance of MongoDB.


### 1. Backend Setup
```bash
# Navigate to the server directory
cd server

# Install dependencies
npm install

# Create a .env file and add your MONGO_URI and PORT
# Example: MONGO_URI=mongodb://localhost:27017/lead-task
npm start
```

### 2. Frontend Setup 
```bash
#Navigate to the lead-task-fullstack-enhanced

# Install dependencies
npm install
npm run dev
