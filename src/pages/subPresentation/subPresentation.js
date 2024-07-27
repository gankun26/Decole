import { TypeAnimation } from "react-type-animation";

export default function SubPresentationText() {
  return (
    <TypeAnimation
      sequence={[
        "Uma visão inovadora sobre escritorio de contabilidade.",
        1000,
        "Focada no crescimento empresarial e profissional dos seus parceiros de negocios.",
        1000,
        "Vamos construir juntos?",
        3000,
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      style={{
        fontSize: "1.1em",
        color: "#9ca3af",
        maxWidth: "600px",
        lineHeight: "160%",
        margin: "40px 0px",
      }}
    />
  );
}