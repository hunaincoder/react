import { NetflixSeries } from "./components/NetflixSeries";
import { DerivedState } from "./components/derivedState";
import { LiftingUp } from "./components/liftingTheStateUp";
import { ToggleSwitch } from "./projects/toggleSwitch/toggleSwitch";
import "./components/netflix.css";

export const App = () => {
  return (
    <section className="container">
      {/* <h1 className="card-heading">List of best Netflix series</h1> */}
      {/* <NetflixSeries /> */}
      {/* <DerivedState /> */}
      {/* <LiftingUp /> */}
      <ToggleSwitch />
    </section>
  );
};
