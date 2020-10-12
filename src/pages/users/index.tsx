import { END } from "redux-saga";
import UserList from "../../modules/UserList";
import { SagaStore, wrapper } from "../../store";
import { fetchUserList } from "../../store/userList";

const List = () => {
  return <UserList />;
};

export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
  store.dispatch(fetchUserList());
  store.dispatch(END);

  await (store as SagaStore).sagaTask.toPromise();
});

export default List;
