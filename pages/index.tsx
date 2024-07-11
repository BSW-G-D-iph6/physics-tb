import Image from "next/image";
import styles from "./../styles/Home.module.css";
import iformula, { data } from "./db";
export default function Home() {
  return (
    <main className={styles.main}>


      <div className={styles.center}>
        <h1>Physics Formulae</h1>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className={styles.grid}>


        {
          data?.formulas.map((item, i) => <Card key={i} item={item} />)
        }


      </div>
    </main>
  );
}

interface iprops {
  item: iformula
}
function Card(props: iprops) {


  let path = props.item.title.replace(/\s/g, '')
  return (
    <a
      href={`/formula/${path}`}
      className={styles.card}

    >
      <h2>
        {props.item.title} <span>-&gt;</span>
      </h2>
      <p>{props.item.content}</p>
      <hr />
      <code>Tags: {props.item.tags.map((item, i) => `${item}, `)}</code>
    </a>

  )
}