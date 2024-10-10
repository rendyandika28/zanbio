import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@nextui-org/button";
import { SubmitHandler, useForm } from "react-hook-form";

import FieldInput from "../field/input";

import ValidationFormSchema from "@/formschema/sales-connect-formschema";
import { IFormInput } from "@/types/form";

export default function FormSales({
  onSubmit,
}: {
  onSubmit: SubmitHandler<IFormInput>;
}) {
  const {
    handleSubmit,
    control,
    formState: { isSubmitting, isValid },
  } = useForm<IFormInput>({
    resolver: yupResolver(ValidationFormSchema),
    mode: "onChange",
    defaultValues: {
      full_name: "",
      work_email: "",
      phone_number: "",
      company_name: "",
      job_title: "",
      current_system: "",
    },
  });

  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
      <FieldInput
        control={control}
        label="Full Name"
        name="full_name"
        placeholder="Input your full name"
      />
      <FieldInput
        control={control}
        label="Work Email"
        name="work_email"
        placeholder="example@email.com"
        type="email"
      />
      <FieldInput
        control={control}
        label="Phone Number"
        name="phone_number"
        placeholder="088866677712"
        type="tel"
      />
      <FieldInput
        control={control}
        label="Company Name"
        name="company_name"
        placeholder="Input your company name"
      />
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
        <FieldInput
          control={control}
          label="Your job title"
          name="job_title"
          placeholder="Input your job title"
        />
        <FieldInput
          control={control}
          label="Current ERP / Accounting System"
          name="current_system"
          placeholder="Input your current ERP"
        />
      </div>

      <Button
        className="h-[48px] font-medium text-base mt-4 bg-[#0052CC] text-white disabled:bg-[#ECEFF3] disabled:text-[#818898] disabled:opacity-100"
        isDisabled={!isValid}
        isLoading={isSubmitting}
        radius="sm"
        type="submit"
      >
        Submit
      </Button>
    </form>
  );
}
