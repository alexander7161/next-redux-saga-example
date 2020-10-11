import { wrapper } from "../../../store";
import EditUser from "../../../modules/EditUser";

const UpdateUser = () => {
  return <EditUser />;
};

export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {});

export default UpdateUser;
