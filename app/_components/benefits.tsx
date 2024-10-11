import Image from "next/image";

import styles from "@/styles/style.module.scss";
import BenefitAutomatedInvoicing from "@/assets/illustrations/benefits-automated-invoicing.svg"
import BenefitCashFlow from "@/assets/illustrations/benefits-cash-flow.svg"
import BenefitCentralizedManagement from "@/assets/illustrations/benefits-centralized-management.svg"
import BenefitPaymentTracking from "@/assets/illustrations/benefits-payment-tracking.svg"

import MotionSection from "@/components/motion/section";

interface Benefit {
  title: string
  short_description: string;
  illustration: string;
  className?: string
  illustrationClassName?: string
}

export default function Benefits() {
  const benefits: Benefit[] = [
    {
      title: "Automated Invoicing",
      short_description:
        "Effortlessly create and send customized invoices in just a few clicks, streamlining your billing process.",
      illustration: BenefitAutomatedInvoicing,
      className: "col-span-1 lg:col-span-5",
      illustrationClassName: "size-full",
    },
    {
      title: "Efficient Payment Tracking",
      short_description:
        "Monitor what’s owed to you and what you owe, all in one place.",
      illustration: BenefitPaymentTracking,
      className: "col-span-1 lg:col-span-4",
      illustrationClassName: "size-full",
    },
    {
      title: "Streamlined Cash Flow",
      short_description:
        "Get real-time insights into your finances, helping you make better decisions for your business.",
      illustration: BenefitCashFlow,
      className: "col-span-1 lg:col-span-4",
      illustrationClassName: "w-full h-fit",
    },
    {
      title: "Centralized Management",
      short_description:
        "Manage all your Accounts Payable, Accounts Receivable, and invoices from a single, easy-to-use dashboard.",
      illustration: BenefitCentralizedManagement,
      className: "col-span-1 lg:col-span-5",
      illustrationClassName: "size-full",
    },
  ]

  const Benefit = ({ benefit }: { benefit: Benefit }) => {
    return (
      <div className={`${styles.benefits__item} ${benefit.className}`}>
        <h3 className={styles.benefits__item_title}>{benefit.title}</h3>
        <h5 className={styles.benefits__item_subtitle}>
          {benefit.short_description}
        </h5>
        <div className={styles.benefits__item_illustration}>
          <Image
            alt={benefit.title}
            className={`object-contain object-center lg:object-fill lg:object-bottom ${benefit.illustrationClassName}`}
            height={100}
            src={benefit.illustration}
            width={100}
          />
        </div>
      </div>
    );
  }

  return (
    <MotionSection directions="up">
      <div className={styles.benefits}>
        <div className={styles.benefits__head}>
          <h2
            className={`${styles.text_heading_1} ${styles.benefits__head_title}`}
          >
            Benefits
          </h2>
          <h3 className={`${styles.text_super} ${styles.benefits__title}`}>
            What You Get from{" "}
            <span className={styles.text_gradient_primary}>Zanbio</span>
          </h3>
          <h4 className={`${styles.text_subtitle} ${styles.benefits__subtitle}`}>
            With Zanbio, managing your business finances has never been easier.
            From automating invoices to keeping track of your payables and
            receivables, Zanbio offers a complete solution to help you stay on top
            of your financial game. Save time, reduce errors, and make smarter
            decisions with everything you need in one intuitive platform.
          </h4>
        </div>

        <div className={styles.benefits__list}>
          {benefits.map((benefit, index) => (
            <Benefit key={index} benefit={benefit} />
          ))}
        </div>
      </div>
    </MotionSection>
  )
}
