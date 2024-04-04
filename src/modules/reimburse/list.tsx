import { Flex } from '@mantine/core';

import { reimburses } from './components/reimburse-form-type';
import ReimburseItem from './components/reimburse-item';

export default function ReimburseList() {
  return (
    <Flex direction="column">
      {reimburses.map((reimburse) => {
        return <ReimburseItem key={reimburse.id} {...reimburse} />;
      })}
    </Flex>
  );
}
