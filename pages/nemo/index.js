import styles from "../../styles/Nemo.module.css";
import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { nemo: data },
  };
};

function index({ nemo }) {
  return (
    <div>
      <h1>All Lists</h1>
      {nemo.map((nemo) => (
        <Link href={`/nemo/` + nemo.id} key={nemo.id}>
          <div className={styles.single}>
            <h1>{nemo.name}</h1>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default index;
