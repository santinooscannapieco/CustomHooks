import { CounterApp } from "./components/CounterApp";
import { FertchApp } from "./components/FertchApp";
import { FormsApp } from "./components/FormsApp";

export const HooksApp = () => {
  return (
    <>
      <h1 className="text-center">Aplicación de Hooks</h1>
      <hr />
      <FertchApp />
      <hr />
      <CounterApp />
      <hr />
      <FormsApp />
    </>
  );
};
