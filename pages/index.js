import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Next js App</title>
      </Head>
      <div>
        <h1 className={styles.title}>Home Page</h1>

        <p className={styles.text}>
          lorem In publishing and graphic design, Lorem ipsum is a placeholder
          text commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. Lorem ipsum may be
          used as a placeholder
        </p>
        <p className={styles.text}>
          lorem In publishing and graphic design, Lorem ipsum is a placeholder
          text commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. Lorem ipsum may be
          used as a placeholder
        </p>
        <Link href="/nemo">
          <a className={styles.btn}>see nemo list</a>
        </Link>
      </div>
    </>
  );
}
