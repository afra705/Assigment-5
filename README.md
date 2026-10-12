# 🚀 DeVStack — Build Your Own Tech Stack

DeVStack is a simple and interactive React application that allows users to explore different web technologies and build their own personalized tech stack. Users can add technologies to their stack, remove individual items, or clear the entire stack with one click.

🌐 **Live Demo:** [https://technologybuilder.netlify.app/](https://technologybuilder.netlify.app/)

## ✨ Features

- ➕ **Add Technologies:** Add your favorite technologies to your personal stack.
- ➖ **Remove Technologies:** Remove individual technologies whenever you want.
- 🧹 **Clear All:** Remove all selected technologies with one click.
- 🔍 **Explore Technologies:** Browse different technologies and discover your favorites.
- 📱 **Responsive UI:** Enjoy a clean interface across different screen sizes.
- 🔔 **Toast Notifications:** Get feedback through notifications when interacting with the application.

## 🛠️ Technologies Used

- ⚛️ React.js
- 🔷 TypeScript
- 🎨 Tailwind CSS
- 🌼 DaisyUI
- 🔔 React Toastify
- 📦 JSON
- ⚡ Vite

## 📸 Project Preview

<!-- Upload a screenshot to your repository and update the image path below -->

<!-- ![DeVStack Preview](./screenshots/devstack.png) -->

## ⚙️ Getting Started

Follow these steps to run DeVStack on your local machine.

### Prerequisites

Make sure you have installed:

- [Node.js](https://nodejs.org/)
- npm
- [Git](https://git-scm.com/)

### 1. Clone the Repository

```bash
git clone https://github.com/afra705/Assigment-5.git
```

### 2. Navigate to the Project Directory

```bash
cd Assigment-5
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

Open the local URL displayed in your terminal to explore DeVStack.

### 5. Build for Production

```bash
npm run build
```

## 📦 Main Dependencies

The project uses the following main packages:

| Package | Purpose |
|---|---|
| React | Building user interfaces |
| React DOM | Rendering React components |
| TypeScript | Type-safe development |
| Vite | Development server and build tool |
| Tailwind CSS | Styling the application |
| DaisyUI | Prebuilt UI components |
| React Toastify | Toast notifications |

> Note: Check `package.json` for the exact dependencies and installed versions.

## 📚 React Questions & Answers

### 1. What is JSX?

JSX stands for JavaScript XML. It is a syntax extension that allows developers to write HTML-like markup inside JavaScript code. React uses JSX to make UI code easier to read and write.

### 2. What are Props and State in React?

**Props** are used to pass data from a parent component to a child component. **State** stores information that can change over time. When state updates, React can re-render the component to reflect the changes.

### 3. What is the useState Hook?

`useState` is a React Hook that allows functional components to manage state.

In DeVStack, `useState` is used to store selected technologies and update the stack when a user adds or removes a technology.

### 4. What is the useEffect Hook? Did you use it in this project?

`useEffect` is a React Hook that allows developers to synchronize a component with external systems, such as APIs, subscriptions, or browser APIs.

I did not need `useEffect` in this project because its main functionality could be handled using state and event handlers.

### 5. Why are Keys Important in React Lists?

React uses keys to identify items in a list between renders. Unique and stable keys help React determine which items have changed, been added, or been removed.

### 6. What is Conditional Rendering?

Conditional rendering means displaying different UI elements based on a condition.

For example, in DeVStack:

```tsx
{isStack.length > 0
  ? `${isStack.length} Technologies Selected`
  : "No technologies selected yet."}
```

If the stack contains technologies, the UI displays the selected count. Otherwise, it shows a message indicating that no technologies have been selected.

### 7. How Does Data Flow Between Parent and Child Components?

A parent component passes data to a child component through props. A child component can communicate an action back to its parent by calling a callback function provided through props.

For example, a parent can pass an `onRemove` function to a child component so the child can request the removal of a technology.

## 🔗 Project Links

- 🌐 **Live Demo:** [DeVStack](https://technologybuilder.netlify.app/)
- 💻 **GitHub Repository:** [Assigment-5](https://github.com/afra705/Assigment-5)
- 👩‍💻 **GitHub Profile:** [Afra Anjum](https://github.com/afra705)
- 💼 **LinkedIn:** [Afra Anjum](https://linkedin.com/in/afra705)

## 👩‍💻 Author

**Afra Anjum**

Frontend Developer | MERN Stack Learner

- GitHub: [@afra705](https://github.com/afra705)
- LinkedIn: [Afra Anjum](https://linkedin.com/in/afra705)
- Email: [afraanjum896@gmail.com](mailto:afraanjum896@gmail.com)

---

<p align="center">
  🚀 <b>Explore technologies. Build your stack. Keep growing.</b>
</p>

<p align="center">
  💜 Thanks for visiting my project!
</p>
