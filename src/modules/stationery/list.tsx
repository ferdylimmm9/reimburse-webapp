import { Flex } from '@mantine/core';

import { stationeries } from './components/stationery-form-type';
import StationeryItem from './components/stationery-item';

export default function StationeryList() {
  return (
    <Flex direction="column">
      {stationeries.map((stationery) => {
        return <StationeryItem key={stationery.id} {...stationery} />;
      })}
    </Flex>
  );
}
