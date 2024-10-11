import { Button } from "@nextui-org/button";
import Image from "next/image";

import styles from "@/styles/style.module.scss";
import ImgFeaturesPayment from "@/assets/illustrations/features-payment.svg";
import ImgFeaturesInvoice from "@/assets/illustrations/features-invoice.svg";
import BgFeatures from "@/assets/illustrations/bg-features.png";

import MotionSection from "@/components/motion/section";

export default function Features() {
  return (
    <div className={styles.features}>
      <div
        className={styles.features__background}
        style={{
          backgroundImage: `url(${BgFeatures.src})`,
        }}
      />
        <div className={styles.features__container}>
          <div className={styles.features__head}>
            <h2 className={styles.text_heading_1}>Features</h2>
            <h3 className={`${styles.text_super} ${styles.features__title}`}>Helping to raise your Finance team’s <br /> quality of life</h3>
            <h4
              className={`${styles.text_subtitle} ${styles.features__subtitle}`}
            >
              Zanbio helps finance teams to increase Operational efficiency by simplifying workflows and automating repetitive tasks. <br /> <br />
              Employees can focus on key tasks, raises total productivity and improve customer relationships
            </h4>
          </div>

          <MotionSection directions="left">
            <div className={styles.features__content}>
              <div className={styles.features__content_container}>
                <h4
                  className={`${styles.text_heading_1}  ${styles.features__content_head}`}
                >
                  Product
                </h4>
                <h5
                  className={`${styles.text_super} ${styles.features__content_title}`}
                >
                  Accounts Receivable Automation
                </h5>
                <h6
                  className={`${styles.text_subtitle} ${styles.features__content_subtitle}`}
                >
                  Accounts receivable automation is more than sending invoices by email, adding digital payment options and hoping your customers pay on time. 
                  <br /><br />
                  An automated solution should reduce Invoice to Cash Time (DSO), reduce manpower cost in chasing customer payments while improving working capital and customer experience.
                  <br /><br />
                  Zanbio helps you release cash from customers using next-generation smart workflow tools powered by customer behavioural data analytics and machine learning. Achieve operational efficiencies and optimize working capital by driving world-class invoice-to-cash processes.
                </h6>
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
          </MotionSection>
          <MotionSection directions="right">
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
                  Accounts Payable Automation
                </h5>
                <h6
                  className={`${styles.text_subtitle} ${styles.features__content_subtitle}`}
                >
                  Driving sales and generating revenue gets most of the attention within an organisation, but managing expenses and vendor relationships effectively is equally significant in a business to ensure profitability and sustainability. 
                  <br /><br />
                  Zanbio’s automated workflows streamlines your accounts payable processes to improve efficiency and accuracy, while protecting your business from frauds, over payments or duplicated invoices, helping you achieve better cash management 
                </h6>
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
          </MotionSection>
        </div>
    </div>
  )
}
