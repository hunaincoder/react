import seriesData from "../api/seriesData.json";
import { SeriesCards } from "./SeriesCards";

export const NetflixSeries = () => {
  return (
    <ul className="grid grid-three--cols">
      {seriesData.map((curElem) => {
        return <SeriesCards key={curElem.id} curElem={curElem} />;
      })}
    </ul>
  );
};
