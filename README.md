# 10 Minute School Clone
<img src="https://repository-images.githubusercontent.com/900930451/517a8bbf-d884-4f14-b973-bfc9e3b739ee"/>
A full-stack web application replicating the front page and product page UI of the popular **10 Minute School** platform. This project demonstrates modern web development practices with a focus on scalability, authentication, and responsive design.

---

## 🚀 Live Demo
👉 [battles-of-biology.vercel.app](https://battles-of-biology.vercel.app/)

---

## 🛠 Tech Stack
- **Frontend:**
  - React
  - Next.js
  - Tailwind CSS

- **Backend:**
  - Prisma ORM
  - PostgreSQL

- **Authentication:**
  - Auth.js (Google, GitHub, and Credentials Sign-In)

---

## 💡 Features
- Fully responsive UI built with Tailwind CSS
- Secure authentication with Google, GitHub, and Credentials sign-in options
- Database management using Prisma and PostgreSQL
- Clean and maintainable codebase

---

## 🚧 Setup and Installation

### Prerequisites
- Node.js >= 16.x
- PostgreSQL

### Installation Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/alaminXpro/battles_of_biology.git
   cd battles_of_biology
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Copy the `.env.example` file to `.env` and update the values accordingly.
   ```bash
   cp .env.example .env
   ```

4. Apply Prisma migrations:
   ```bash
   npm run prisma:update
   ```

5. Run the development server:
   ```bash
   npm run dev
   ```

6. Open your browser and navigate to:
   [http://localhost:3000](http://localhost:3000)

---

## 📜 Scripts
- **`npm run dev`**: Starts the development server
- **`npm run build`**: Builds the project for production
- **`npm run start`**: Runs the production build
- **`npm run prisma:update`**: Generates Prisma client and applies database changes
- **`npm run prisma:clean`**: Resets migrations and pushes changes

---

## 🙌 Contributions
Contributions, issues, and feature requests are welcome! Feel free to open a PR or issue.

---

## 📝 License
This project is licensed under the MIT License.

---

### Author
Developed by **[MD. AL AMIN](https://linkedin.com/in/alaminxpro/)**
