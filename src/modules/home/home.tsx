import { Card, Flex, SimpleGrid, Text, Title } from '@mantine/core';
import {
  Bank,
  Books,
  ChartLine,
  Icon,
  Money,
  PaperPlaneTilt,
  Pencil,
  Plus,
  User,
  Lock,
  Users,
  SignOut,
} from '@phosphor-icons/react';
import NavigationRoutes from 'components/common/side-navigation/navigations';
import Link from 'next/link';
import React from 'react';

export type NavigationItemType = {
  link: NavigationRoutes;
  label: string;
  icon: Icon;
};

export const adminNavigationItems: NavigationItemType[] = [
  { link: NavigationRoutes.dashboard, label: 'Dashboard', icon: ChartLine },
  { link: NavigationRoutes.users, label: 'Karyawan', icon: Users },
  {
    link: NavigationRoutes.itineraries,
    label: 'Trip',
    icon: PaperPlaneTilt,
  },
  {
    link: NavigationRoutes.reimburses,
    label: 'Reimburse',
    icon: Money,
  },
  {
    link: NavigationRoutes.stationaries,
    label: 'Alat Kantor',
    icon: Pencil,
  },
  { link: NavigationRoutes.accounts, label: 'Kas', icon: Bank },
];

export const userNavigationItems: NavigationItemType[] = [
  {
    link: NavigationRoutes.createReimburse,
    label: 'Buat Reimburse',
    icon: Plus,
  },
  {
    link: NavigationRoutes.historyReimburse,
    label: 'Riwayat Reimburse',
    icon: Books,
  },
  {
    link: NavigationRoutes.itineraries,
    label: 'Trip',
    icon: PaperPlaneTilt,
  },
  {
    link: NavigationRoutes.profile,
    label: 'Profil',
    icon: User,
  },
  {
    link: NavigationRoutes.changePassword,
    label: 'Ganti Password',
    icon: Lock,
  },
];

export default function Home() {
  const adminLinks = adminNavigationItems.map((item) => {
    return (
      <Link href={item.link} passHref key={item.link}>
        <Card withBorder style={{ cursor: 'pointer' }}>
          <Flex direction="column" justify="center" align="center">
            <item.icon size={36} />
            <Text ta="center" fw={600} mt={8}>
              {item.label}
            </Text>
          </Flex>
        </Card>
      </Link>
    );
  });

  const userLinks = (
    <>
      {userNavigationItems.map((item) => {
        return (
          <Link href={item.link} passHref key={item.link}>
            <Card withBorder style={{ cursor: 'pointer' }}>
              <Flex direction="column" justify="center" align="center">
                <item.icon size={36} />
                <Text ta="center" fw={600} mt={8}>
                  {item.label}
                </Text>
              </Flex>
            </Card>
          </Link>
        );
      })}
      <Card
        c="red"
        withBorder
        style={{ cursor: 'pointer', borderColor: '#fa5252' }}
      >
        <Flex direction="column" justify="center" align="center">
          <SignOut size={36} />
          <Text ta="center" fw={600} mt={8}>
            Logout
          </Text>
        </Flex>
      </Card>
    </>
  );

  return (
    <>
      <Flex direction="row" gap={16} align="center">
        <User size={24} weight="bold" />
        <Title order={6}>Hello, Alwin</Title>
      </Flex>
      <SimpleGrid cols={2} my={24}>
        {adminLinks}
      </SimpleGrid>
      <SimpleGrid cols={2} my={24}>
        {userLinks}
      </SimpleGrid>
    </>
  );
}
