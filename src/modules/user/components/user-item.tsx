import { Flex, Text, Title } from '@mantine/core';
import ListItem from 'components/common/list-item/list-item';
import NavigationRoutes from 'components/common/side-navigation/navigations';
import { useRouter } from 'next/router';
import React from 'react';

import { EmployeeModel } from './user-form-type';

export default function UserItem(props: EmployeeModel) {
  const route = `${NavigationRoutes.users}/${props.nip}`;
  const label = [props.nip, props.nama].join(' - ');
  const { push, prefetch } = useRouter();

  React.useEffect(() => {
    prefetch(route);
  }, [prefetch, route]);

  return (
    <ListItem onClick={() => push(route)}>
      <Flex align="center" gap={16}>
        <Flex direction="column">
          <Title order={6}>{label}</Title>
          <Text fz={11}>Departemen: {props.departemen_name}</Text>
          <Text fz={11}>Peran: {props.peran}</Text>
          <Text fz={11}>Status: {props.status}</Text>
        </Flex>
      </Flex>
    </ListItem>
  );
}
