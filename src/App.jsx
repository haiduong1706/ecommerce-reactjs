import MyFooter from "@components/Footer/Footer";
import MyHeader from "@components/Header/Header";
import MainLayout from "@components/Layout/Layout";
import MyButton from "@components/Button/Button";

function App() {
  return (
    <>
      <MainLayout>
        {/* <MyHeader></MyHeader>
        Content
        <MyFooter></MyFooter> */}
        <MyButton></MyButton>
      </MainLayout>
    </>
  );
}

export default App;
