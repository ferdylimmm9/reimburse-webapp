import { departments } from 'modules/department/components/department-form-type';
import * as Yup from 'yup';
export type EmployeeModel = {
  nip: string;
  nama: string;
  departemen_id: string;
  departemen_name: string;
  status: EmployeeStatusEnum;
  peran: EmployeeRoleEnum;
  kata_sandi: string;
  nomor_rekening: string;
  tanggal_dibuat: Date;
  tanggal_diubah: Date;
};

export enum EmployeeStatusEnum {
  active = 'active',
  inactive = 'inactive',
}

export enum EmployeeRoleEnum {
  admin = 'admin',
  user = 'user',
}

export const EmployeeFormSchema = () =>
  Yup.object({
    nip: Yup.string().default(''),
    nama: Yup.string().required(),
    departemen_id: Yup.string().default(''),
    status: Yup.mixed<EmployeeStatusEnum>()
      .oneOf(Object.values(EmployeeStatusEnum))
      .default(EmployeeStatusEnum.active),
    peran: Yup.mixed<EmployeeRoleEnum>()
      .oneOf(Object.values(EmployeeRoleEnum))
      .default(EmployeeRoleEnum.user),
    kata_sandi: Yup.string().default(''),
    nomor_rekening: Yup.string().default(''),
  });

export type EmployeeFormType = Yup.InferType<
  ReturnType<typeof EmployeeFormSchema>
> & {
  data?: EmployeeModel;
};

export const employees: EmployeeModel[] = [
  {
    departemen_id: departments[0].id,
    departemen_name: departments[0].nama,
    kata_sandi: '',
    nama: 'Alexander',
    nip: '2211',
    nomor_rekening: '1212121213',
    peran: EmployeeRoleEnum.user,
    status: EmployeeStatusEnum.active,
    tanggal_dibuat: new Date(),
    tanggal_diubah: new Date(),
  },
  {
    departemen_id: departments[1].id,
    departemen_name: departments[1].nama,
    kata_sandi: '',
    nama: 'Christine',
    nip: '2331',
    nomor_rekening: '1212121213',
    peran: EmployeeRoleEnum.admin,
    status: EmployeeStatusEnum.inactive,
    tanggal_dibuat: new Date(),
    tanggal_diubah: new Date(),
  },
  {
    departemen_id: departments[3].id,
    departemen_name: departments[3].nama,
    kata_sandi: '',
    nama: 'Alwin',
    nip: '3222',
    nomor_rekening: '1212121213',
    peran: EmployeeRoleEnum.admin,
    status: EmployeeStatusEnum.active,
    tanggal_dibuat: new Date(),
    tanggal_diubah: new Date(),
  },
  {
    departemen_id: departments[2].id,
    departemen_name: departments[2].nama,
    kata_sandi: '',
    nama: 'Ferdy',
    nip: '4111',
    nomor_rekening: '1212121213',
    peran: EmployeeRoleEnum.user,
    status: EmployeeStatusEnum.inactive,
    tanggal_dibuat: new Date(),
    tanggal_diubah: new Date(),
  },
];
