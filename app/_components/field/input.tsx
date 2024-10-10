import { Input } from "@nextui-org/input";
import { useController } from "react-hook-form";

import styles from "@/styles/style.module.scss";

interface FieldInput {
  label: string;
  placeholder: string;
  type?: string;
  name: string;
  control: any,
}

export default function FieldInput({
  label,
  placeholder,
  type = "text",
  name,
  control
}: FieldInput) {
  const {
    field,
    formState: { errors },
  } = useController({ name, control });

  return (
    <div className={styles.field__input}>
      <label htmlFor={label}>{label}</label>
      <Input
        {...field}
        classNames={{
          input: [
            "bg-transparent",
            "text-black/90",
            "placeholder:text-[#A4ACB9] text-base font-normal",
          ],
          inputWrapper: ["border"],
        }}
        errorMessage={errors[name]?.message as string}
        id={label}
        isInvalid={!!errors[name]}
        placeholder={placeholder}
        radius="md"
        size="lg"
        type={type}
        variant="bordered"
      />
    </div>
  );
}
