import { NetflixSeries } from "./components/NetflixSeries";
import { DerivedState } from "./components/derivedState";
import { LiftingUp } from "./components/liftingTheStateUp";
import { ToggleSwitch } from "./projects/toggleSwitch/toggleSwitch";
// import "./components/netflix.css";
import { Todo } from "./projects/todo/todo";
import { CounterChallenge } from "./components/hooks/useState/counter";
import { RegistrationForm } from "./components/hooks/useState/registrationFom";
import { Challenge } from "./components/hooks/useEffect/challenge";
import { PokemonCard } from "./components/hooks/useEffect/pokemonCard";
import { UseRef } from "./components/hooks/useRefs";
import { UseRef2 } from "./components/hooks/useRefs/forwardRef";
import { BioProvider } from "./components/hooks/contextApi";
import { Home } from "./components/hooks/contextApi/home";
import {
  DarkLight,
  ThemeProvider,
} from "./components/hooks/contextApi/darkLight";
import { ReducerTodo } from "./components/hooks/useReducer";

export const App = () => {
  return (
    <section>
      {/* <h1 className="card-heading">List of best Netflix series</h1> */}
      {/* <NetflixSeries /> */}
      {/* <DerivedState /> */}
      {/* <LiftingUp /> */}
      {/* <ToggleSwitch /> */}
      {/* <Todo /> */}
      {/* <CounterChallenge /> */}
      {/* <RegistrationForm /> */}
      {/* <Challenge /> */}
      {/* <PokemonCard /> */}
      {/* <UseRef /> */}
      {/* <UseRef2 /> */}
      {/* <BioProvider>
        <Home />
      </BioProvider> */}
      {/* <ThemeProvider>
        <DarkLight />
      </ThemeProvider> */}
      <ReducerTodo />
    </section>
  );
};
