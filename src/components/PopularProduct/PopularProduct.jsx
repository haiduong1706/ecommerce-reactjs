import MainLayout from "@components/Layout/Layout";
import ProductItem from "@components/ProductItem/ProductItem";
import styles from "./styles.module.scss";

function PoPularproduct({ data }) {
  const { container } = styles;
  return (
    <div>
      <MainLayout>
        <div className={container}>
          {data.map((item) => (
            <ProductItem
              key={item.id}
              src={item.images[0]}
              prvSrc={item.images[1]}
              name={item.name}
              price={item.price}
            />
          ))}
        </div>
      </MainLayout>
    </div>
  );
}

export default PoPularproduct;
