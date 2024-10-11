"use client";

import { Button } from "@nextui-org/button";
import Image from "next/image";
import { useState } from "react";
import { SubmitHandler } from "react-hook-form";

import FormSales from "../_components/form/sales";

import AcceptIcon from "@/assets/icons/accepted.svg";
import SalesTeamImg from "@/assets/images/sales-team.png";
import { useToast } from "@/hooks/use-toast";
import styles from "@/styles/style.module.scss";
import { IFormInput } from "@/types/form";
import Link from "next/link";

export default function SalesTeam() {
  const [isSuccessSubmitForm, setIsSuccessSubmitForm] = useState(false);
  const { toast } = useToast()
  const onSubmit: SubmitHandler<IFormInput> = async (data: IFormInput) => {
    const _response = await fetch("/api/contact-sales", {
      method: "POST",
      body: JSON.stringify(data),
    });

    const response = await _response.json();

    if (response?.statusCode == 200) {
      setIsSuccessSubmitForm(true)

      return toast({
        title: "Success send message",
        description: "We'll catch you after receive your message",
      })
    }

    return toast({
      title: "Uh oh! Something went wrong.",
      description: "There was a problem with your request.",
      variant: "destructive",
      className: " bg-[#DC2625] text-white",
    });
  };

  return (
    <main className={styles.sales}>
      <div className={styles.sales__head}>
        <h2 className={styles.sales__head_title}>
          Connect with{" "}
          <span className={styles.text_gradient_primary}> Our Sales Team </span>
        </h2>
      </div>
      <div className={styles.sales__content}>
        <Image
          priority
          alt="sales-team"
          className="size-full rounded-xl flex-1"
          height={1200}
          src={SalesTeamImg}
          width={1200}
        />
        <div className={styles.sales__content_form}>
          {!isSuccessSubmitForm ? (
            <FormSales onSubmit={onSubmit} />
          ) : (
            <div className={styles.sales__content_form_success}>
              <Image
                alt="accept-icon"
                className="size-16"
                height={100}
                src={AcceptIcon}
                width={100}
              />
              <div>
                <h4
                  className={`${styles.text_heading_1} ${styles.sales__content_form_success_title}`}
                >
                  Thank You for Your Interest !
                </h4>
                <h6 className={styles.sales__content_form_success_subtitle}>
                  Your message has been successfully sent, and one of our sales
                  representatives will contact you soon. We’re excited to help
                  you find the perfect solution.
                </h6>
              </div>
              <Button
                className={styles.sales__content_form_success_cta}
                variant="bordered"
                as={Link}
                href="/"
              >
                Back to home
              </Button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
