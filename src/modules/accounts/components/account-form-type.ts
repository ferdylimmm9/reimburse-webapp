import * as Yup from 'yup';

export type AccountDetailModel = {
  id: string;
  kas_id: string;
  reimburse_id: string | null;
  deskripsi: string;
  tanggal_dibuat: Date;
  tanggal_diubah: Date;
};

export type AccountModel = {
  id: string;
  nama: string;
  deskripsi: string;
  tanggal_dibuat: Date;
  tanggal_diubah: Date;
  details: AccountDetailModel[];
};

export const AccountFormSchema = () =>
  Yup.object({
    nama: Yup.string().required(),
    deskripsi: Yup.string().default(''),
  });

export type AccountFormType = Yup.InferType<
  ReturnType<typeof AccountFormSchema>
> & {
  data?: AccountModel;
};

export const accountDetails: AccountDetailModel[] = [
  {
    id: '1',
    kas_id: '1',
    deskripsi:
      'Voluptate deserunt sunt aliquip ullamco nulla occaecat laboris ullamco occaecat qui.',
    reimburse_id: null,
    tanggal_dibuat: new Date(),
    tanggal_diubah: new Date(),
  },
  {
    id: '2',
    kas_id: '1',
    deskripsi:
      'Voluptate deserunt sunt aliquip ullamco nulla occaecat laboris ullamco occaecat qui.',
    reimburse_id: null,
    tanggal_dibuat: new Date(),
    tanggal_diubah: new Date(),
  },
  {
    id: '3',
    kas_id: '1',
    deskripsi:
      'Voluptate deserunt sunt aliquip ullamco nulla occaecat laboris ullamco occaecat qui.',
    reimburse_id: null,
    tanggal_dibuat: new Date(),
    tanggal_diubah: new Date(),
  },
];

export const accounts: AccountModel[] = [
  {
    id: '1',
    nama: 'Kas A',
    deskripsi:
      'Aliquip duis anim eu anim amet dolor exercitation qui aute irure duis nostrud est ex.',
    tanggal_dibuat: new Date(),
    tanggal_diubah: new Date(),
    details: accountDetails,
  },
  {
    id: '2',
    nama: 'Kas B',
    deskripsi:
      'Aliquip duis anim eu anim amet dolor exercitation qui aute irure duis nostrud est ex.',
    tanggal_dibuat: new Date(),
    tanggal_diubah: new Date(),
    details: [],
  },
  {
    id: '3',
    nama: 'Kas C',
    deskripsi:
      'Aliquip duis anim eu anim amet dolor exercitation qui aute irure duis nostrud est ex.',
    tanggal_dibuat: new Date(),
    tanggal_diubah: new Date(),
    details: [],
  },
];