🚀Project Name: DeVStack.

  Description: It is a simple React application where users can interect with different technologies and build their own stack.Users also add their stack,remove the stack and also remove the all stack in one click.

⚙️Technology Used
- React.js
- Tailwind CSS, DaisyUI
- TypeScript
- React-Toastify 
- JSON 
- Vite 

✨ Features
1. Add technogies to stack
2. Remove technologies from stack
3. Browse their favourite technologies

📚 React Questions & Answers-

1. JSX is a HTML based code that helps to write code insise JS and TS.React uses JSX to make UI code easier and faster.
2. Props are used to pass data from a parent to a child component and State is used to store data that can change inside a componet.
3. useState helps to create and update state in a component.In this project, I used useState to stored the selected technology and manage the technology button when technology is added.
4. useEffect runs code after a component renders. I did use it because i don't need it this time.
5. React needs a unique key to find the specific item in list.It helps React to understand which card is changed
6. Conditional rendering means showing different UI that based on a condition.
An example:
<p className="text-gray-500">
  {isStack.length > 0
    ? `${isStack.length} Technology Selected`
    : "No technologies selected yet."}
</p>

7. A parent sends data to a child using its props.
  <TechnologyCard technology={technology} />
  A child can send something back to the parent by calling a function.
  <TechnologyCard setIsStack={setIsStack}/>