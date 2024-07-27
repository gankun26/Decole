import Image from "next/image";
import styles from "./button.module.css";
import Link from "next/link";


export default function Button({ name, href, img }) {
  return (
    <Link href={href} target="_blank">
      <button className={styles.button}>
        <Image alt={name} src={img} width={30} height={30} />
      </button>
    </Link>
  );
}