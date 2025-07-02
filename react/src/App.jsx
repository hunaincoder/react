import { NetflixSeries } from "./components/NetflixSeries";
import { DerivedState } from "./components/derivedState";
import { LiftingUp } from "./components/liftingTheStateUp";
import { ToggleSwitch } from "./projects/toggleSwitch/toggleSwitch";
import "./components/netflix.css";
import { Todo } from "./projects/todo/todo";
import { CounterChallenge } from "./components/hooks/useState/counter";

export const App = () => {
  return (
    <section>
      {/* <h1 className="card-heading">List of best Netflix series</h1> */}
      {/* <NetflixSeries /> */}
      {/* <DerivedState /> */}
      {/* <LiftingUp /> */}
      {/* <ToggleSwitch /> */}
      {/* <Todo /> */}
      <CounterChallenge />
    </section>
  );
};
