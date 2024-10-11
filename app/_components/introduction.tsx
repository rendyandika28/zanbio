import { Button } from "@nextui-org/button";
import Image from "next/image";
import Link from "next/link";

import BgIntroductionGradient from "@/assets/illustrations/bg-introduction-gradient.png";
import styles from "@/styles/style.module.scss";
import MotionSection from "@/components/motion/section";

export default function Introduction() {
  return (
    <div className={styles.introduction}>
      <div
        className={styles.introduction__background}
        style={{
          backgroundImage: `url(${BgIntroductionGradient.src})`,
      }}/>
      <MotionSection directions="up">
        <div className={styles.introduction__content}>
          <h1 className={styles.text_super}>
            <span className={styles.text_gradient_primary}>Improve</span> your Cashflow with <br />
            Zanbio
          </h1>
          <h4 className={`lg:max-w-[720px] mt-4 ${styles.text_subtitle}`}>
            Everything you need to get your customers to <strong>Pay You Faster</strong> and <strong>Optimise Payments</strong> to your vendors, in one place
          </h4>

          <Button
            as={Link}
            className={styles.introduction__cta}
            href="/sales-team"
          >
            Talk to Sales
          </Button>

          <Image 
            priority
            alt="introduction-illustration"
            className="size-full"
            height={100}
            src="introduction-illustration.svg"
            width={100}
          />
        </div>
      </MotionSection>
    </div>
  )
}
