import { Flex } from '@mantine/core';

import { itinenaries } from './components/itinenary-form-type';
import ItinenaryItem from './components/itinenary-item';

export default function ItinenaryList() {
  return (
    <Flex direction="column">
      {itinenaries.map((itinenary) => {
        return <ItinenaryItem key={itinenary.id} {...itinenary} />;
      })}
    </Flex>
  );
}
