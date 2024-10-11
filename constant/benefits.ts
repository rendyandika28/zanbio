import { Benefit, MetaBenefits } from "@/types/component";
import BenefitAPEnhanceAutomated from "@/assets/illustrations/benefits-ap-enhance-automated.svg";
import BenefitAPFreeVendor from "@/assets/illustrations/benefits-ap-free-vendor.svg";
import BenefitAPImproveCash from "@/assets/illustrations/benefits-ap-improve-cash.svg";
import BenefitAPImprovePayment from "@/assets/illustrations/benefits-ap-improve-payment.svg";
import BenefitAPInvoiceApproval from "@/assets/illustrations/benefits-ap-invoice-approval.svg";
import BenefitAREliminateInvoice from "@/assets/illustrations/benefits-ar-eliminate-invoice.svg";
import BenefitAREnhanceCustomer from "@/assets/illustrations/benefits-ar-enhance-customer.svg";
import BenefitARGreatCustomer from "@/assets/illustrations/benefits-ar-great-customer.svg";
import BenefitARImproveRevenue from "@/assets/illustrations/benefits-ar-improve-revenue.svg";
import BenefitARReduceDSO from "@/assets/illustrations/benefits-ar-reduce-dso.svg";

const benefitsOfAR: Benefit[] = [
  {
    title: "Reduce DSO cycle",
    short_description:
      "Accelerate customer payment cycles by tracking invoice delivery status and fully automating follow-up actions until each invoice is paid without any human involvement",
    illustration: BenefitARReduceDSO,
    illustrationClassName: "size-full",
  },
  {
    title: "Eliminate Invoice to payment reconciliation",
    short_description:
      "Enable finance and accounting teams to focus on more strategic activities by reducing manual inefficiencies by automating reconciliation processes",
    illustration: BenefitAREliminateInvoice,
    illustrationClassName: "size-full",
  },
  {
    title: "Enhance Customer payment forecasting",
    short_description:
      "AI powered machine learning predictions provide you with customer payment pattern insights plus a projected window when the customer is most likely to pay, not based on conventional aging of invoices due based on invoice due dates",
    illustration: BenefitAREnhanceCustomer,
    illustrationClassName: "size-full",
  },
  {
    title: "Improve Revenue leakage",
    short_description:
      "Resolve Disputes & Collect debt faster. Prevent revenue leakages and maintain customer satisfaction by accelerating dispute resolution with smart workflow tools",
    illustration: BenefitARImproveRevenue,
    illustrationClassName: "size-full",
  },
  {
    title: "Don’t just focus on collections, create great customer experience",
    short_description:
      "Give your customers payable team a tool to easily manage the entire invoice to payment experience which make their life easier with an interactive self-serving customer portal - so you get paid faster",
    illustration: BenefitARGreatCustomer,
    illustrationClassName: "size-full",
  },
];

const benefitsOfAP: Benefit[] = [
  {
    title: "Touch free Vendor Invoice data capture",
    short_description:
      "Eliminate the need to manually capture each vendor invoice. Our AI vision learning tool reads any invoice format be it a scanned invoice or pdf and will automatically transfer the relevant invoice data into the platform.",
    illustration: BenefitAPFreeVendor,
    illustrationClassName: "size-full",
  },
  {
    title: "Optimise Invoice Approval Workflow",
    short_description:
      "Automatically route each invoice through its appropriate and secured workflow and allow the system to send approvers alerts. Approvers can review and approve requests within minutes",
    illustration: BenefitAPInvoiceApproval,
    illustrationClassName: "size-full",
  },
  {
    title: "Improve Payment risk management",
    short_description:
      "In today’s digital world, protect your business falling victim to fraudulent schemes such as fake invoice submissions and overbilling by vendors. Let the system monitor and alert any abnormalities to you to help protect your business",
    illustration: BenefitAPImprovePayment,
    illustrationClassName: "w-full h-fit",
  },
  {
    title: "Enhance automated PO to invoice matching",
    short_description:
      "Eliminate the need to go through each vendor invoice manually and spend long periods of time performing invoice matching. Our automated matching system reads and matches invoices against PO’s.",
    illustration: BenefitAPEnhanceAutomated,
    illustrationClassName: "size-full",
  },
  {
    title: "Improve cash outflow forecasting",
    short_description:
      "Comprehensive dashboards provide an unobscured view of your payment cycle, offering real-time data access and analytics",
    illustration: BenefitAPImproveCash,
    illustrationClassName: "size-full",
  },
];

export const metaBenefitsOfAP: MetaBenefits = {
  title: "Benefits",
  subtitle: "AP Automation",
  contents: benefitsOfAP,
};

export const metaBenefitsOfAR: MetaBenefits = {
  title: "Benefits",
  subtitle: "AR Automation",
  contents: benefitsOfAR,
};
