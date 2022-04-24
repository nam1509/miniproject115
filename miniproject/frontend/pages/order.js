import Head from "next/head";
import Layout from "../components/layout";
import Navbar from "../components/navbar";
import styles from "../styles/Home.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <body >
      <div className={styles.header}>
        <Navbar />
      </div>
    <p>สวัสดีค่ะ ขอบคุณสำหรับการสั่ง Order</p>
     
      
    </body>
  );
}
