import { Flex } from '@mantine/core';
import { Plus } from '@phosphor-icons/react';
import AppLayout from 'components/common/app-layout/app-layout';
import NavigationRoutes from 'components/common/side-navigation/navigations';
import { useRouter } from 'next/router';

import { departments } from './components/department-form-type';
import DepartmentItem from './components/department-item';

export function DepartmentListLayout({ children }) {
  const { push } = useRouter();
  return (
    <AppLayout
      back
      rightIconProps={{
        onClick: () => push(NavigationRoutes.createDepartment),
        children: <Plus size={16} />,
      }}
    >
      {children}
    </AppLayout>
  );
}

export default function DepartmentList() {
  return (
    <Flex direction="column">
      {departments.map((department) => (
        <DepartmentItem key={department.id} {...department} />
      ))}
    </Flex>
  );
}
