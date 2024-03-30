import Form from 'components/form';
import Input from 'components/input';
import useYupValidationResolver from 'hooks/use-yup-validation-resolver';
import { FormLayout } from 'modules/common/layout';
import React from 'react';
import { useForm } from 'react-hook-form';

import {
  DepartmentFormType,
  DepartmentModel,
  DepartmentSchema,
} from './department-form-type';

interface DepartmentFormProps {
  department?: DepartmentModel;
}

export default function DepartmentForm(props: DepartmentFormProps) {
  const defaultValues = React.useMemo<DepartmentFormType>(() => {
    return {
      nama: props.department?.nama ?? '',
      data: props.department,
    };
  }, [props.department]);

  const resolver = useYupValidationResolver(DepartmentSchema());

  const methods = useForm({
    defaultValues,
    resolver,
  });

  const onSubmit = React.useCallback(
    async (valeus: DepartmentFormType) => {},
    [],
  );

  return (
    <Form methods={methods} onSubmit={onSubmit}>
      <FormLayout>
        <Input
          type="text"
          placeholder="Masukkan Nama Departemen"
          name="nama"
          label="Nama Departemen"
        />
      </FormLayout>
    </Form>
  );
}
