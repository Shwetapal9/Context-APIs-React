import CounterContextProvider from "./context/CounterContextProvider";
import Counter from "./Counter";

function App() {
  return (
    <>
      <CounterContextProvider>
        <Counter />
      </CounterContextProvider>
    </>
  );
}

export default App;
