import { Flex } from '@mantine/core';
import Form from 'components/form';
import Input from 'components/input';
import useYupValidationResolver from 'hooks/use-yup-validation-resolver';
import { FormLayout } from 'modules/common/layout';
import React from 'react';
import { useForm } from 'react-hook-form';

import {
  EmployeeFormSchema,
  EmployeeFormType,
  EmployeeModel,
  EmployeeRoleEnum,
  EmployeeStatusEnum,
} from './user-form-type';

interface UserFormProps {
  user?: EmployeeModel;
}

export default function UserForm(props: UserFormProps) {
  const { user } = props;
  const defaultValues = React.useMemo<EmployeeFormType>(() => {
    return {
      departemen_id: user?.departemen_id ?? '',
      kata_sandi: user?.kata_sandi ?? '',
      nama: user?.nama ?? '',
      nip: user?.nip ?? '',
      nomor_rekening: user?.nomor_rekening ?? '',
      peran: user?.peran ?? EmployeeRoleEnum.user,
      status: user?.status ?? EmployeeStatusEnum.active,
      data: user,
    };
  }, [user]);

  const resolver = useYupValidationResolver(EmployeeFormSchema());

  const isEdit = !!props.user;

  const methods = useForm({
    defaultValues,
    resolver,
  });

  const onSubmit = React.useCallback(
    async (values: EmployeeFormType) => {},
    [],
  );

  return (
    <Form methods={methods} onSubmit={onSubmit}>
      <FormLayout onDelete={() => {}}>
        <Flex direction="column" gap={16}>
          {isEdit && (
            <Input
              type="text"
              name="nip"
              disabled={isEdit}
              label="Nomor Induk Pegawai"
            />
          )}
          <Input
            type="text"
            name="nama"
            label="Nama"
            placeholder="Masukkan Nama"
          />
          <Input
            type="select"
            name="peran"
            label="Peran"
            placeholder="Masukkan Peran"
            data={[EmployeeRoleEnum.admin, EmployeeRoleEnum.user]}
          />
          <Input
            type="select"
            name="status"
            label="Status Karyawan"
            placeholder="Masukkan Status Karyawan"
            data={[EmployeeStatusEnum.active, EmployeeStatusEnum.inactive]}
          />
          <Input
            type="text"
            name="nomor_rekening"
            label="Nomor Rekening"
            placeholder="Masukkan Nomor Rekening"
          />
          <Input
            type="password"
            name="kata_sandi"
            label="Kata Sandi"
            placeholder="Masukkan Kata Sandi"
          />
        </Flex>
      </FormLayout>
    </Form>
  );
}
