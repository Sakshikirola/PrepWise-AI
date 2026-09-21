#  PrepWise AI

PrepWise AI is an AI-powered interview preparation platform designed to help students and job seekers practice mock interviews, improve their answers, and track their interview performance over time.

The platform generates interview questions based on the user's selected topic, interview type, and experience level. After the interview, AI evaluates the user's answers and provides a score, accuracy, strengths, areas for improvement, and question-wise feedback.

## 🌐 Live Demo

🔗 **Live Website:**  
https://prep-wise-j9xguqkkt-sakshi-kirolas-projects.vercel.app/

## 📌 About the Project

Preparing for interviews can be difficult without regular practice and personalized feedback.

PrepWise AI provides a simulated interview environment where users can:

- Select an interview topic
- Choose an interview type
- Select their experience level
- Generate AI-powered interview questions
- Answer questions in a timed environment
- Receive AI-generated performance evaluation
- Review strengths and improvement areas
- View previous interview attempts
- Track overall interview performance

The project combines frontend development, backend APIs, AI integration, authentication, database management, and cloud deployment into a single full-stack application.

---

## ✨ Features

### 🔐 Authentication

- User registration
- User login
- Secure session handling
- Logout functionality
- Protected application routes
- User-specific interview data

### 🤖 AI-Powered Interviews

- AI-generated interview questions
- Questions based on selected topic
- Different interview types
- Experience-level based questions
- Dynamic questions for different interview attempts
- Timed interview sessions

### 📊 AI Evaluation

After completing an interview, the AI evaluates the submitted answers and provides:

- Overall score
- Accuracy percentage
- Strengths
- Areas for improvement
- Question-wise feedback

### 📚 Interview History

Users can view their previous interviews including:

- Interview topic
- Interview type
- Experience level
- Score
- Date
- Previous interview performance

### 📈 Dashboard

The dashboard provides an overview of the user's interview performance:

- Total interviews
- Average score
- Best score
- Total practice time
- Performance overview
- Recent interviews
- Strengths
- Areas to improve
- Recommended focus areas

### 🔒 Data Security

- Supabase Authentication
- PostgreSQL database
- Row Level Security (RLS)
- User-specific data access
- API keys stored using environment variables

### 📱 Responsive Design

The application is designed to work across:

- Desktop
- Laptop
- Tablet
- Mobile devices

---

# 🛠️ Tech Stack

## Frontend

- **React.js** – Building the user interface
- **Vite** – Frontend development and build tool
- **Tailwind CSS** – Styling and responsive design
- **React Router** – Application routing
- **Recharts** – Dashboard performance charts
- **Lucide React** – UI icons

## Backend

- **Node.js**
- **Express.js**
- **REST APIs**
- **CORS**
- **dotenv**

## Artificial Intelligence

- **Google Gemini API**

Gemini is used for:

- Generating interview questions
- Evaluating interview answers
- Generating performance feedback

## Database & Authentication

- **Supabase**
- **PostgreSQL**
- **Supabase Authentication**
- **Row Level Security (RLS)**

## Deployment

- **Vercel** – Frontend deployment
- **Render** – Backend deployment
- **Supabase** – Database and authentication

---

# 🏗️ Project Architecture 
                         ┌─────────────────────┐
                         │       User          │
                         └──────────┬──────────┘
                                    │
                                    ▼
                         ┌─────────────────────┐
                         │       Vercel       │
                         │ React + Tailwind   │
                         │     Frontend       │
                         └──────────┬──────────┘
                                    │
                                    ▼
                         ┌─────────────────────┐
                         │       Render       │
                         │    Express.js      │
                         │      Backend      │
                         └───────┬─────┬──────┘
                                 │     │
                    ┌────────────┘     └─────────────┐
                    ▼                                ▼
          ┌──────────────────┐             ┌──────────────────┐
          │   Gemini API     │             │     Supabase     │
          │ AI Questions &   │             │ Authentication & │
          │   Evaluation     │             │   PostgreSQL     │
          └──────────────────┘             └──────────────────┘

👩‍💻 Developer
Sakshi Kirola
Frontend Developer | Full-Stack Development Learner