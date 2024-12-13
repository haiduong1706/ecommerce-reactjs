import MainLayout from "@components/Layout/Layout";
import styles from "./styles.module.scss";

function AdcanceHeadling() {
  const { container, headline, title, des, containerMiddleBox } = styles;
  return (
    <MainLayout>
      <div className={container}>
        <div className={headline}></div>
        <div className={containerMiddleBox}>
          <p className={des}>DON'T MISS SUPER OFFERS</p>
          <p className={title}>Our best products</p>
        </div>
        <div className={headline}></div>
      </div>
    </MainLayout>
  );
}

export default AdcanceHeadling;
