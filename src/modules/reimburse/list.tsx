import { Flex, SegmentedControl, Text, TextInput } from '@mantine/core';
import { MagnifyingGlass } from '@phosphor-icons/react';
import colors from 'common/styles/colors';
import useAuth from 'hooks/use-auth';
import { EmployeeRoleEnum } from 'modules/user/components/user-form-type';
import React from 'react';

import { reimburses } from './components/reimburse-form-type';
import ReimburseItem from './components/reimburse-item';

export default function ReimburseList() {
  const [segment, setSegment] = React.useState('pending');
  const { user } = useAuth();

  const nip = user?.nip;
  const isAdmin = user?.peran === EmployeeRoleEnum.admin;

  const data = reimburses
    .filter((reimburse) => isAdmin || reimburse.nip_pemohon === nip)
    .filter((reimburse) => reimburse.status === segment);

  return (
    <Flex direction="column">
      <Flex
        direction="column"
        pos="sticky"
        top={0}
        p={16}
        bg={colors.mainWhite}
        style={{ zIndex: 10 }}
      >
        <TextInput
          placeholder="Cari Karyawan"
          my={16}
          rightSection={<MagnifyingGlass size={16} />}
        />
        <SegmentedControl
          value={segment}
          onChange={setSegment}
          data={['pending', 'rejected', 'finished']}
        />
      </Flex>
      {data.length === 0 && (
        <Text mx={16} fw={600} c={colors.foregroundTertiary}>
          No Result Found
        </Text>
      )}
      {data.map((reimburse) => {
        return <ReimburseItem key={reimburse.id} {...reimburse} />;
      })}
    </Flex>
  );
}
