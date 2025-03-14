import Image from "next/image";
import styles from "./page.module.css";
import Banner from "@/components/Banner";
import ProductCard from "@/components/Card";

export default function Home() {
  return (
    <main>
      <Banner />
      <div
        style={{
          margin: "20px",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-around",
          alignContent: "space-around",
        }}
      >
        {/* <ProductCard/> */}
        <ProductCard venueName="The Bloom Pavilion" imgSrc="/img/bloom.jpg" />
        <ProductCard venueName="Spark Space" imgSrc="/img/sparkspace.jpg" />
        <ProductCard venueName="The Grand Table" imgSrc="/img/grandtable.jpg" />
      </div>
    </main>
  );
}
