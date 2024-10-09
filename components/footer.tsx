import styles from "@/styles/style.module.scss";
import { Button } from "@nextui-org/button";
import Image from "next/image";

export default function Footer({ isHomeFooter }: { isHomeFooter: boolean }) {
  const currentYear = new Date().getFullYear()
  const copyrightText = `${currentYear} Zanbio. All right reserved`

  if (isHomeFooter) {
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

            <h5 className={styles.footer__tagline}>
              Zanbio streamlines your financial management by generating
              Accounts Receivable, Accounts Payable, and invoices effortlessly
            </h5>
          </aside>
          <aside className={styles.footer__content_right}>
            <h5 className={styles.text_heading_1}>Contact Us</h5>
            <h6 className={`${styles.footer__tagline} my-4`}>Connect with Our Sales Team</h6>

            <Button className={styles.footer__cta}>Talk to Sales</Button>
          </aside>
        </div>
        <span className="text-center block py-10 text-base text-[#666D80]">&copy; {copyrightText}</span>
      </footer>
    );
  }
  return <footer>Empty footer</footer>
}
