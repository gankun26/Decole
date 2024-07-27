"use client";
import Image from "next/image";
import styles from "./sobre.module.css";
import Button from "@/components/button/button";
import networks from "./sobreSocialMedia";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Sobre() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className={styles.aboutMeWrapper}>
      <div className={styles.aboutMe}>
        <div className={styles.imageWrapper} data-aos="fade-right">
        <img
            src="/images/icone_decole_fundo_preto.jpg"
            class="h-8"
            alt="Logo Decole"
          />
        </div>
        <div className={styles.description}>
          <span className={styles.promotedText} data-aos="fade-down">
            Sobre mim
          </span>
          <h2 data-aos="fade-down">Cauã Yves</h2>
          <h4 data-aos="fade-down">Full Stack Developer</h4>
          <p data-aos="fade-left">
            Meu nome é Cauã Yves, sou desenvolvedor full stack com{" "}
            em desenvolvimento web, atualmente trabalho na Erudir Tech,
            desenvolvendo projetos de cultura para o município onde moro,
            desenvolvo meus projetos pensando em resolver problemas de forma
            escalável e seguindo os conceitos de{" "}
            <span className={styles.promotedText}>
              <a href="https://12factor.net/" target="_blank">
                twelve factor app
              </a>
            </span>{" "}
            de forma que o código seja limpo e de fácil compreensão.
          </p>
        </div>
      </div>
    </div>
  );
}
