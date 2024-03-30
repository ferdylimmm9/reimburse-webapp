import { Flex } from '@mantine/core';
import Form from 'components/form';
import Input from 'components/input';
import useYupValidationResolver from 'hooks/use-yup-validation-resolver';
import { FormLayout } from 'modules/common/layout';
import React from 'react';
import { useForm } from 'react-hook-form';

import {
  AccountFormSchema,
  AccountFormType,
  AccountModel,
} from './account-form-type';

interface AccountFormProps {
  account?: AccountModel;
}

export default function AccountForm(props: AccountFormProps) {
  const { account } = props;
  const defaultValues = React.useMemo<AccountFormType>(() => {
    return {
      deskripsi: account?.deskripsi ?? '',
      nama: account?.nama ?? '',
      data: account,
    };
  }, [account]);

  const resolver = useYupValidationResolver(AccountFormSchema());

  const methods = useForm({
    defaultValues,
    resolver,
  });

  const onSubmit = React.useCallback(async (values: AccountFormType) => {}, []);
  return (
    <Form methods={methods} onSubmit={onSubmit}>
      <FormLayout>
        <Flex direction="column" gap={16}>
          <Input
            type="text"
            name="nama"
            label="Nama"
            placeholder="Masukkan Nama"
          />
          <Input
            type="text"
            name="deskripsi"
            label="Deskripsi"
            placeholder="Masukkan Deskripsi"
          />
        </Flex>
      </FormLayout>
    </Form>
  );
}
