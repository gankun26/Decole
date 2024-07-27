"use client";
import Image from "next/image";
import styles from "./servico.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import SubPresentationText from "@/pages/subPresentation/subPresentation";

function Servicos() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className={styles.mainWrapper}>
      <main className={styles.main}>
        <div data-aos="fade-right" className={styles.presentationWrapper}>
          <h1 className={styles.presentationText}>
          Decole Acessória Contábil,{" "}
            <span className={styles.promotedText}>uma</span> visão <br /> inovadora sobre contabilidade.
          </h1>
          <div className={styles.subPresentationWrapper}>
            <SubPresentationText />
          </div>
        </div>
        <div data-aos="fade-left" className={styles.presentationImage}>
        <img
            src="/images/Icone_Decole_fundo_branco.jpg"
            alt="Logo Decole"
            width={550} height={400} priority
          />
        </div>
      </main>
    </div>
  );
}

export default Servicos;
