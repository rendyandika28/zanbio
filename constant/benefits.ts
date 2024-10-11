import { Benefit, MetaBenefits } from "@/types/component";
import BenefitAutomatedInvoicing from "@/assets/illustrations/benefits-automated-invoicing.svg"
import BenefitCashFlow from "@/assets/illustrations/benefits-cash-flow.svg"
import BenefitCentralizedManagement from "@/assets/illustrations/benefits-centralized-management.svg"
import BenefitPaymentTracking from "@/assets/illustrations/benefits-payment-tracking.svg"

const benefitsOfAR: Benefit[] = [
  {
    title: "Reduce DSO cycle",
    short_description:
      "Accelerate customer payment cycles by tracking invoice delivery status and fully automating follow-up actions until each invoice is paid without any human involvement",
    illustration: BenefitAutomatedInvoicing,
    illustrationClassName: "size-full",
  },
  {
    title: "Eliminate Invoice to payment reconciliation",
    short_description:
      "Enable finance and accounting teams to focus on more strategic activities by reducing manual inefficiencies by automating reconciliation processes",
    illustration: BenefitPaymentTracking,
    illustrationClassName: "size-full",
  },
  {
    title: "Enhance Customer payment forecasting",
    short_description:
      "AI powered machine learning predictions provide you with customer payment pattern insights plus a projected window when the customer is most likely to pay, not based on conventional aging of invoices due based on invoice due dates",
    illustration: BenefitCashFlow,
    illustrationClassName: "w-full h-fit",
  },
  {
    title: "Improve Revenue leakage",
    short_description:
      "Resolve Disputes & Collect debt faster. Prevent revenue leakages and maintain customer satisfaction by accelerating dispute resolution with smart workflow tools",
    illustration: BenefitCentralizedManagement,
    illustrationClassName: "size-full",
  },
  {
    title: "Don’t just focus on collections, create great customer experience",
    short_description:
      "Give your customers payable team a tool to easily manage the entire invoice to payment experience which make their life easier with an interactive self-serving customer portal - so you get paid faster",
    illustration: BenefitAutomatedInvoicing,
    illustrationClassName: "size-full",
  },
]

const benefitsOfAP: Benefit[] = [
  {
    title: "Touch free Vendor Invoice data capture",
    short_description:
      "Eliminate the need to manually capture each vendor invoice. Our AI vision learning tool reads any invoice format be it a scanned invoice or pdf and will automatically transfer the relevant invoice data into the platform.",
    illustration: BenefitAutomatedInvoicing,
    illustrationClassName: "size-full",
  },
  {
    title: "Optimise Invoice Approval Workflow",
    short_description:
      "Automatically route each invoice through its appropriate and secured workflow and allow the system to send approvers alerts. Approvers can review and approve requests within minutes",
    illustration: BenefitPaymentTracking,
    illustrationClassName: "size-full",
  },
  {
    title: "Improve Payment risk management",
    short_description:
      "In today’s digital world, protect your business falling victim to fraudulent schemes such as fake invoice submissions and overbilling by vendors. Let the system monitor and alert any abnormalities to you to help protect your business",
    illustration: BenefitCashFlow,
    illustrationClassName: "w-full h-fit",
  },
  {
    title: "Enhance automated PO to invoice matching",
    short_description:
      "Eliminate the need to go through each vendor invoice manually and spend long periods of time performing invoice matching. Our automated matching system reads and matches invoices against PO’s.",
    illustration: BenefitCentralizedManagement,
    illustrationClassName: "size-full",
  },
  {
    title: "Improve cash outflow forecasting",
    short_description:
      "Comprehensive dashboards provide an unobscured view of your payment cycle, offering real-time data access and analytics",
    illustration: BenefitAutomatedInvoicing,
    illustrationClassName: "size-full",
  },
]

export const metaBenefitsOfAP: MetaBenefits = {
  title: 'Benefits',
  subtitle: 'Benefits of AP Automation',
  contents: benefitsOfAP
}

export const metaBenefitsOfAR: MetaBenefits = {
  title: 'Benefits',
  subtitle: 'Benefits of AR Automation',
  contents: benefitsOfAR
}

