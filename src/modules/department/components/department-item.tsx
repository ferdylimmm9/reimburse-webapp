import { Flex, Text, Title } from '@mantine/core';
import ListItem from 'components/common/list-item/list-item';
import NavigationRoutes from 'components/common/side-navigation/navigations';
import { format } from 'date-fns';
import { useRouter } from 'next/router';
import React from 'react';

import { DepartmentModel } from './department-form-type';

export default function DepartmentItem(props: DepartmentModel) {
  const { prefetch, push } = useRouter();
  const route = `${NavigationRoutes.departments}/${props.id}`;

  React.useEffect(() => {
    prefetch(route);
  }, [prefetch, route]);

  return (
    <ListItem onClick={() => push(route)}>
      <Flex direction="column">
        <Title order={6}>{props.nama}</Title>
        <Text fz={11}>{format(props.tanggal_dibuat, 'dd MMM yyyy')}</Text>
      </Flex>
    </ListItem>
  );
}
