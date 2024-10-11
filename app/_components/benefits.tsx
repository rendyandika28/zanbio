import Image from "next/image";

import styles from "@/styles/style.module.scss";
import MotionSection from "@/components/motion/section";
import { Benefit, MetaBenefits } from "@/types/component";

export default function Benefits({
  metaBenefits,
}: {
  metaBenefits?: MetaBenefits;
}) {
  const Benefit = ({ benefit, index }: { benefit: Benefit; index: number }) => {
    let colSpan;

    switch (index) {
      case 0:
      case 3:
        colSpan = "col-span-1 lg:col-span-5";
        break;
      case 1:
      case 2:
        colSpan = "col-span-1 lg:col-span-4";
        break;
      default:
        colSpan = "col-span-1 lg:col-span-9";
        break;
    }

    return (
      <div className={`${styles.benefits__item} ${colSpan}`}>
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
  };

  return (
    <MotionSection
      key={metaBenefits?.subtitle}
      directions="up"
      threshold={0.15}
    >
      <div className={styles.benefits}>
        <div className={styles.benefits__head}>
          <h2
            className={`${styles.text_heading_1} ${styles.benefits__head_title}`}
          >
            {metaBenefits?.title}
          </h2>
          <h3 className={`${styles.text_super} ${styles.benefits__title}`}>
            {metaBenefits?.subtitle}
          </h3>
        </div>

        <div className={styles.benefits__list}>
          {metaBenefits?.contents.map((benefit, index) => (
            <Benefit key={index} benefit={benefit} index={index} />
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
