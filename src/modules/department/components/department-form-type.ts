import * as Yup from 'yup';

export type DepartmentModel = {
  id: string;
  nama: string;
  tanggal_dibuat: Date;
  tanggal_diubah: Date;
};

export const DepartmentSchema = () =>
  Yup.object({
    nama: Yup.string().required(),
  });

export type DepartmentFormType = Yup.InferType<
  ReturnType<typeof DepartmentSchema>
> & {
  data?: DepartmentModel;
};

//dummies
export const departments: DepartmentModel[] = [
  {
    id: '1',
    nama: 'Accounting',
    tanggal_dibuat: new Date(),
    tanggal_diubah: new Date(),
  },
  {
    id: '2',
    nama: 'Personalia',
    tanggal_dibuat: new Date(),
    tanggal_diubah: new Date(),
  },
  {
    id: '3',
    nama: 'IT',
    tanggal_dibuat: new Date(),
    tanggal_diubah: new Date(),
  },
  {
    id: '4',
    nama: 'General Affair',
    tanggal_dibuat: new Date(),
    tanggal_diubah: new Date(),
  },
];
