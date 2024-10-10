import { Button } from "@nextui-org/button";
import Image from "next/image";
import Link from "next/link";

import BgIntroductionGradient from "@/assets/illustrations/bg-introduction-gradient.png";
import styles from "@/styles/style.module.scss";

export default function Introduction() {
  return (
    <div className={styles.introduction}>
      <div
        className={styles.introduction__background}
        style={{
          backgroundImage: `url(${BgIntroductionGradient.src})`,
      }}/>
      <div className={styles.introduction__content}>
        <h1 className={styles.text_super}>
          <span className={styles.text_gradient_primary}>Simplify</span> Your
          Invoicing <br /> with Zanbio
        </h1>
        <h4 className={`lg:max-w-[620px] mt-4 ${styles.text_subtitle}`}>
          Zanbio streamlines your financial management by generating Accounts
          Receivable, Accounts Payable, and invoices effortlessly. Manage your
          business finances efficiently—all in one place.
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
    </div>
  )
}
