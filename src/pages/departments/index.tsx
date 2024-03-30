import NavigationRoutes from 'components/common/side-navigation/navigations';
import { ListLayout } from 'modules/common/layout';
import DepartmentList from 'modules/department/list';
import { NextPageWithLayout } from 'pages/_app';

export default DepartmentList;

(DepartmentList as NextPageWithLayout).getLayout = (page) => {
  return (
    <ListLayout createNavigation={NavigationRoutes.createDepartment}>
      {page}
    </ListLayout>
  );
};
