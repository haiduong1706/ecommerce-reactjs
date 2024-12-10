import MyFooter from "@components/Footer/Footer";
import MyHeader from "@components/Header/Header";
import MainLayout from "@components/Layout/Layout";
import MyButton from "@components/Button/Button";
import Banner from "@components/Banner/Banner";
import styles from "./styles.module.scss";

function HomePage() {
  const { container } = styles;
  return (
    <div className={container}>
      <MyHeader></MyHeader>
      <Banner></Banner>
    </div>
  );
}

export default HomePage;
