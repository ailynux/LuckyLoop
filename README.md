# 🎲 LuckyLoop

**LuckyLoop** is a sleek casino dice game for developers who love code and luck!  
Built with **React + Material-UI** on the frontend and **ASP.NET Core Web API (C#)** on the backend.

Test your luck, roll the dice, and climb the coin ladder!

---

## 🚀 Features

- ⚙️ React frontend with Material-UI for a modern interface  
- 🎲 C# ASP.NET Core backend for game logic & API  
- 🔗 Axios integration between frontend and backend  
- 💰 Coin balance system (start with 100 coins)  
- 🏆 Win/loss rules:
  - Roll **7 or 11** → +10 coins (WIN)
  - Roll **2 or 12** → -10 coins (LOSE)
  - Other rolls → no change (NEUTRAL)
- 🔊 (Planned) Sound effects: roll, win, lose  
- ✨ (Planned) Dice animations, bet amounts, game history

---

## 🛠 Tech Stack

- **Frontend:** React, Material-UI, Axios  
- **Backend:** C# ASP.NET Core Web API  
- **Optional Enhancements:** SQL Server, Entity Framework Core, Azure Deployment

---

## 📦 Setup Instructions

### 🔧 Backend Setup (ASP.NET Core API)

1. Clone the backend repository:

    ```bash
    git clone https://github.com/ailynux/LuckyLoop-Backend.git
    cd LuckyLoop-Backend
    ```

2. Run the API:

    ```bash
    dotnet run
    ```

3. Backend will run on:

    ```
    https://localhost:5001
    ```

---

### 🖥 Frontend Setup (React App)

1. Clone the frontend repository:

    ```bash
    git clone https://github.com/ailynux/LuckyLoop.git
    cd LuckyLoop
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Start the React app:

    ```bash
    npm start
    ```

4. Frontend will run on:

    ```
    http://localhost:3000
    ```

---

### 🌐 Connecting Frontend & Backend

- Make sure the React app points to the backend API at:

    ```
    https://localhost:5001/api/dice/roll
    ```

- Update the Axios base URL in `src/App.js` if needed.

---

## ✨ Future Plans

- Add sound effects (roll, win, lose)  
- Add dice rolling animation  
- Let users place custom bets  
- Save and display game history  
- Deploy backend to **Azure App Service**  
- Deploy frontend to **Vercel** or **Netlify**

---

## 💻 Screenshots

> _(Add screenshots or GIFs here once UI is polished!)_

---

## 👑 Author

**Ailyn Diaz**  
[GitHub: ailynux](https://github.com/ailynux)

---

## 📄 License

MIT License

---

### 🕹 LuckyLoop: Where code meets chance. Roll the dice, own the odds. 🎰💥
