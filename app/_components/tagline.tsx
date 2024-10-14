import { Button } from "@nextui-org/button";
import Link from "next/link";

import styles from "@/styles/style.module.scss";
import BgTagline from "@/assets/illustrations/bg-tagline.png";
import MotionSection from "@/components/motion/section";

export default function Benefits() {
  return (
    <div className={styles.tagline}>
      <div
        className={styles.tagline__background}
        style={{
          backgroundImage: `url(${BgTagline.src})`,
        }}
      />
      <MotionSection directions="up">
        <div className={styles.tagline__content}>
          <h4 className={styles.text_super}>
            Improve Your Cash Flow with <br /> Zanbio
          </h4>

          <Button
            as={Link}
            className={`${styles.tagline__content_cta} bg-white h-[52px] px-6 text-base font-medium mt-8`}
            href="/sales-team"
          >
            Talk to Sales
          </Button>
        </div>
      </MotionSection>
    </div>
  );
}
