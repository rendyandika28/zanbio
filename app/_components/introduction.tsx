import { Button } from "@nextui-org/button";
import Link from "next/link";

import BgIntroductionGradient from "@/assets/illustrations/bg-introduction-gradient.png";
import styles from "@/styles/style.module.scss";
import MotionSection from "@/components/motion/section";

interface CardInfo {
  title: string;
  short_description: string;
}

export default function Introduction() {
  const cardInfos: CardInfo[] = [
    {
      title: "52%",
      short_description: "Faster Payment Collection timing",
    },
    {
      title: "30%",
      short_description: "Less Receivable Management Cost",
    },
  ];

  const CardInfo = ({ info }: { info: CardInfo }) => {
    return (
      <div className={styles.introduction__infos_item}>
        <h4 className={styles.text_gradient_primary}>{info.title}</h4>
        <h5>{info.short_description}</h5>
      </div>
    );
  };

  return (
    <div className={styles.introduction}>
      <div
        className={styles.introduction__background}
        style={{
          backgroundImage: `url(${BgIntroductionGradient.src})`,
        }}
      />
      <MotionSection directions="up">
        <div className={styles.introduction__content}>
          <h1 className={styles.text_super}>
            <span className={styles.text_gradient_primary}>Improve</span> your
            Cashflow with <br />
            Zanbio
          </h1>
          <h4 className={`lg:max-w-[720px] mt-4 ${styles.text_subtitle}`}>
            Everything you need to get your customers to{" "}
            <strong>Pay You Faster</strong> and{" "}
            <strong>Optimise Payments</strong> to your vendors, in one place
          </h4>

          <Button
            as={Link}
            className="bg-brand text-white h-[52px] text-sm px-[25px] mt-10 mb-[60px]"
            href="/sales-team"
          >
            Talk to Sales
          </Button>

          <div className={styles.introduction__infos}>
            {cardInfos.map((info, index) => (
              <CardInfo key={`${info.title} with key ${index}`} info={info} />
            ))}
          </div>
        </div>
      </MotionSection>
    </div>
  );
}
