import Register from "../../components/Register/Register";

const RegisterPage = () => {
  const data = (data) => {
    console.log(data);
  };

  return (
    <div className="d-flex justify-content-center">
      <Register getData={data()} />
  </div>
  );
};
export default RegisterPage;
