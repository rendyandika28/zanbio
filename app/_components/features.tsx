import { Button } from "@nextui-org/button";
import Image from "next/image";

import styles from "@/styles/style.module.scss";
import ImgFeaturesPayment from "@/assets/illustrations/features-payment.svg";
import ImgFeaturesInvoice from "@/assets/illustrations/features-invoice.svg";

export default function Features() {
  return (
    <div className={styles.features}>
      <div className={styles.features__background} />
      <div className={styles.features__container}>
        <div className={styles.features__head}>
          <h2 className={styles.text_heading_1}>Features</h2>
          <h3 className={`${styles.text_super} ${styles.features__title}`}>What is <span className={styles.text_gradient_primary}>Zanbio</span></h3>
          <h4
            className={`${styles.text_subtitle} ${styles.features__subtitle}`}
          >
            Zanbio helps you streamline your finances by automating Accounts
            Receivable, Accounts Payable, and invoice generation. With
            everything in one place, managing your business&apos;s financial
            operations becomes effortless and efficient.{" "}
          </h4>
        </div>

        <div className={styles.features__content}>
          <div className={styles.features__content_container}>
            <h4
              className={`${styles.text_heading_1}  ${styles.features__content_head}`}
            >
              High Level Product
            </h4>
            <h5
              className={`${styles.text_super} ${styles.features__content_title}`}
            >
              Account{" "}
              <span className={styles.text_gradient_primary}>Receivable</span>
            </h5>
            <h6
              className={`${styles.text_subtitle} ${styles.features__content_subtitle}`}
            >
              Take control of your outgoing payments with ease. Zanbio’s
              Accounts Payable feature tracks all your bills and expenses,
              ensuring you never miss a payment deadline. Stay on top of your
              obligations and manage your cash flow efficiently with automated
              reminders and real-time updates.
            </h6>

            <Button className={styles.features__content_cta} variant="bordered">
              Learn more
            </Button>
          </div>
          <div className={styles.features__content_img}>
            <Image
              priority
              alt="features-payment"
              className="size-full"
              height={100}
              src={ImgFeaturesPayment}
              width={100}
            />
          </div>
        </div>

        <div
          className={`${styles.features__content} ${styles.features__content_swap}`}
        >
          <div className={styles.features__content_container}>
            <h4
              className={`${styles.text_heading_1}  ${styles.features__content_head}`}
            >
              High Level Product
            </h4>
            <h5
              className={`${styles.text_super} ${styles.features__content_title}`}
            >
              Account{" "}
              <span className={styles.text_gradient_primary}>Payable</span>
            </h5>
            <h6
              className={`${styles.text_subtitle} ${styles.features__content_subtitle}`}
            >
              Get paid faster with Zanbio’s streamlined Accounts Receivable
              system. Automatically generate invoices and track customer
              payments in one simple dashboard. Stay informed on which clients
              owe you, follow up with reminders, and watch your revenue flow in
              without hassle.
            </h6>

            <Button className={styles.features__content_cta} variant="bordered">
              Learn more
            </Button>
          </div>
          <div className={styles.features__content_img}>
            <Image
              priority
              alt="features-payment"
              className="size-full"
              height={100}
              src={ImgFeaturesInvoice}
              width={100}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
