import { Coach } from "./_components/Coach";
import { Gym } from "./_components/Gym";
import { Plan } from "./_components/Plan";
import { ToPresent } from "./_components/ToPresent";
import { TrainingDesigned } from "./_components/TrainingDesigned";

export default function Home() {
  return (
    <>
      <ToPresent />
      <TrainingDesigned />
      <Coach />
      <Gym />
      <Plan />
    </>
  );
}
