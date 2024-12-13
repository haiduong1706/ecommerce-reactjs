import MyHeader from "@components/Header/Header";
import Banner from "@components/Banner/Banner";
import AdcanceHeadling from "@components/AdvanceHeadling/AdvanceHeadling";
import Info from "@components/Infor/Infor";
import HeadingListProducts from "@components/HeadingListProducts/HeadingListProducts";
import PoPularproduct from "@components/PopularProduct/PopularProduct";
import { useState, useEffect } from "react";
import { getProducts } from "@/apis/productsService";

function HomePage() {
  const [listProducts, setListProducts] = useState([]);
  useEffect(() => {
    getProducts().then((res) => {
      setListProducts(res.contents);
    });
  }, []);

  return (
    <div>
      <MyHeader></MyHeader>
      <Banner></Banner>
      <Info></Info>
      <AdcanceHeadling></AdcanceHeadling>
      <HeadingListProducts data={listProducts.slice(0, 2)} />
      <PoPularproduct data={listProducts.slice(2, listProducts.length)} />
      <div style={{ height: "300px" }}></div>
    </div>
  );
}

export default HomePage;
