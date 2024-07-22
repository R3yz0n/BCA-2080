import Button from "./Button";

function App() {
  let a = 7;
  let b = 6;
  console.log(`The sum of ${a} and ${b} is ${a + b}`);

  const now = new Date();
  console.log(now);

  return (
    <div>
      <p>The time is : {now.toString()}</p>

      <p>
        The sum of {a} and {b} is {a + b}{" "}
      </p>

      <Button text="Sign In" />
      <Button tex="Sign Up" />
    </div>
  );
}

export default App;
