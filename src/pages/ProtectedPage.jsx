import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

const ProtectedPage = ({ PageComponent, fromURL }) => {
  const history = useHistory();

  const checkUserLoggedIn = () => {
    if (localStorage.getItem("token")) {
      return <PageComponent />;
    } else {
      toast.warn("Bu sayfaya devam edebilmek için login olmalısın!.");
      setTimeout(() => {
        history.push({
          pathname: "/login",
          state: { referrer: fromURL },
        });
      }, 3000);

      return (
        <div className=" text-deep-orange-900 text-2xl font-bold text-center py-28">
          To continue to this page, you're being redirected to the login screen.
        </div>
      );
    }
  };

  return checkUserLoggedIn();
};

export default ProtectedPage;
