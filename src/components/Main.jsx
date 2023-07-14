import { Card } from './Card';
import { sightseeingData } from '../data/sightseeingData';

export const Main = () => {
  return (
    <main>
      {sightseeingData.map((data) => (
        <Card key={data.id} data={data} />
      ))}
    </main>
  );
};
