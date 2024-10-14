import { Button } from "@nextui-org/button";
import Image from "next/image";
import Link from "next/link";

import styles from "@/styles/style.module.scss";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const copyrightText = `${currentYear} Zanbio. All right reserved`;

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__content}>
        <aside className={styles.footer__content_left}>
          <Image
            priority
            alt="logo"
            className="w-28 mb-4"
            height={100}
            src={"logo-monochrome.svg"}
            width={100}
          />
        </aside>
        <aside className={styles.footer__content_right}>
          <h5 className={styles.text_heading_1}>Contact Us</h5>
          <h6 className={`${styles.footer__tagline} my-4`}>
            Connect with Our Sales Team
          </h6>

          <Button
            as={Link}
            className={`${styles.footer__cta} bg-white h-[40px] px-6 text-base font-medium`}
            href="/sales-team"
          >
            Talk to Sales
          </Button>
        </aside>
      </div>
      <span className="text-center block py-10 text-base text-[#666D80]">
        &copy; {copyrightText}
      </span>
    </footer>
  );
}
