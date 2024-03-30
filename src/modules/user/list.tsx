import { Flex } from '@mantine/core';
import { Plus } from '@phosphor-icons/react';
import AppLayout from 'components/common/app-layout/app-layout';
import NavigationRoutes from 'components/common/side-navigation/navigations';
import { useRouter } from 'next/router';

import { employees } from './components/user-form-type';
import UserItem from './components/user-item';

export function UserListLayout({ children }) {
  const { push } = useRouter();
  return (
    <AppLayout
      back
      rightIconProps={{
        onClick: () => push(NavigationRoutes.createUser),
        children: <Plus size={16} />,
      }}
    >
      {children}
    </AppLayout>
  );
}
export default function UserList() {
  return (
    <Flex direction="column">
      {employees.map((employee) => {
        return <UserItem key={employee.nip} {...employee} />;
      })}
    </Flex>
  );
}
