import { useRouter } from 'next/router';

import DepartmentForm from './components/department-form';
import { departments } from './components/department-form-type';

export default function DepartmentView() {
  const { query } = useRouter();
  const id = query.id;

  const department = departments.find((department) => department.id === id);
  return <DepartmentForm department={department} />;
}
