import { Flex } from '@mantine/core';
import Form from 'components/form';
import Input from 'components/input';
import { format } from 'date-fns';
import useYupValidationResolver from 'hooks/use-yup-validation-resolver';
import { FormLayout } from 'modules/common/layout';
import { itinenaries } from 'modules/itinenary/components/itinenary-form-type';
import { employees } from 'modules/user/components/user-form-type';
import React from 'react';
import { useForm, useFormContext, useWatch } from 'react-hook-form';

import {
  ReimburseFormSchema,
  ReimburseFormType,
  ReimburseModel,
  ReimburseStatusEnum,
  ReimburseTypeEnum,
} from './reimburse-form-type';

interface ReimburseFormProps {
  reimburse?: ReimburseModel;
}

function SelectItinery() {
  const { control } = useFormContext<ReimburseFormType>();
  const type = useWatch({
    control,
    name: 'jenis',
  });
  switch (type) {
    case ReimburseTypeEnum.itinerary:
      return (
        <Input
          type="select"
          name="perjalanan_id"
          label="Perjalanan"
          placeholder="Masukkan Perjalanan"
          data={itinenaries.map((item) => {
            return {
              label: [
                item.nama,
                format(item.tanggal_mulai, 'dd MMM yyyy'),
                format(item.tanggal_selesai, 'dd MMM yyyy'),
              ].join(' - '),
              value: item.id,
            };
          })}
        />
      );
    case ReimburseTypeEnum.stationery:
    default:
      return null;
  }
}

export default function ReimburseForm(props: ReimburseFormProps) {
  const { reimburse } = props;
  const defaultValues = React.useMemo<ReimburseFormType>(() => {
    return {
      deskripsi: reimburse?.deskripsi ?? '',
      jenis: reimburse?.jenis ?? ReimburseTypeEnum.itinerary,
      nip_pemohon: reimburse?.nip_pemohon ?? employees[3].nip,
      nip_pic: reimburse?.nip_pemohon ?? null,
      status: reimburse?.status ?? ReimburseStatusEnum.pending,
      perjalanan_id: reimburse?.perjalanan_id ?? null,
      details: reimburse?.details?.map((detail) => {
        return {
          deskripsi: detail.deskripsi,
          file_url: detail.file_url,
          nama: detail.nama,
          pengembalian_id: detail.pengembalian_id,
          subtotal: detail.subtotal,
          id: detail.id,
        };
      }) ?? [
        {
          deskripsi: '',
          file_url: '',
          nama: '',
          pengembalian_id: '',
          subtotal: 0,
        },
      ],
      data: reimburse,
    };
  }, [reimburse]);

  const resolver = useYupValidationResolver(ReimburseFormSchema());

  const methods = useForm({
    defaultValues,
    resolver,
  });

  const { setValue } = methods;

  const onSubmit = React.useCallback(
    async (values: ReimburseFormType) => {},
    [],
  );

  const isEdit = !!reimburse;

  return (
    <Form methods={methods} onSubmit={onSubmit}>
      <FormLayout>
        <Flex gap={16} direction="column">
          <Input
            type="select"
            name="nip_pemohon"
            data={employees.map((employee) => {
              return {
                value: employee.nip,
                label: [employee.nip, employee.nama].join(' - '),
              };
            })}
            label="Pemohon"
            placeholder="Masukkan Pemohon"
            disabled
          />
          <Input
            type="text"
            name="deskripsi"
            label="Deskripsi"
            placeholder="Masukkan Deskripsi"
          />
          <Input
            type="select"
            name="jenis"
            label="Jenis Reimburse"
            placeholder="Masukkan Jenis Reimburse"
            data={[
              {
                value: ReimburseTypeEnum.itinerary,
                label: 'Perjalanan',
              },
              {
                value: ReimburseTypeEnum.stationery,
                label: 'ATK (Alat Tulis Kantor)',
              },
            ]}
            onAfterChange={() => {
              setValue('perjalanan_id', null);
            }}
            disabled={isEdit}
          />
          <SelectItinery />
        </Flex>
      </FormLayout>
    </Form>
  );
}
