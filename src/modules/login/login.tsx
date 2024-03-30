import { Box, Button, Card, Flex, Space, Title } from '@mantine/core';
import { SignIn } from '@phosphor-icons/react';
import Form from 'components/form';
import Input from 'components/input';
import useYupValidationResolver from 'hooks/use-yup-validation-resolver';
import React from 'react';
import { useForm } from 'react-hook-form';

import { LoginFormSchema } from './form-type';

export default function Login() {
  const defaultValues = React.useMemo(() => {
    return {};
  }, []);

  const resolver = useYupValidationResolver(LoginFormSchema());

  const methods = useForm({
    defaultValues,
    resolver,
    mode: 'onChange',
  });

  const onSubmit = React.useCallback(async (values) => {
    console.log(values);
  }, []);

  return (
    <Form methods={methods} onSubmit={onSubmit}>
      <Flex align="center" justify="center" miw="100vw" mih="100vh" p={16}>
        <Card withBorder shadow="xs" miw={320} maw={600} radius="md" w="100%">
          <Title order={6} mb={8} ta="center">
            Reimburse-app
          </Title>
          <Box bg="dark" m="auto" h={36} w={120} />
          <Space h={24} />
          <Input
            type="text"
            name="nip"
            label="NIP"
            placeholder="Masukkan NIP"
            required
          />
          <Space h={16} />
          <Input
            type="password"
            name="kata_sandi"
            label="Kata Sandi"
            placeholder="Masukkan Kata Sandi"
            required
          />
          <Space h={16} />
          <Button
            fullWidth
            type="submit"
            leftSection={<span />}
            rightSection={<SignIn size={16} />}
          >
            Login
          </Button>
        </Card>
      </Flex>
    </Form>
  );
}
