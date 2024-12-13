import InforCard from "@components/Infor/InforCard/InfoCard";
import MainLayout from "@components/Layout/Layout";
import styles from "./styles.module.scss";
import { dataInfo } from "@components/Infor/constants";

function Info() {
  const { container } = styles;
  return (
    <div>
      <MainLayout>
        <div className={container}>
          {dataInfo.map((item) => {
            return (
              <InforCard
                content={item.title}
                description={item.description}
                src={item.src}
              ></InforCard>
            );
          })}
        </div>
      </MainLayout>
    </div>
  );
}

export default Info;
