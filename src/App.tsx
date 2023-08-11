import Form from "./components/Form/Form";
import Todos from "./components/Todos/Todos";

const App: React.FC = () => {

  return (
    <>
      <h1>Todo List</h1>
      <Form />
      <Todos />
    </>
  );
};

export default App;
