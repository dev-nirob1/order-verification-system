import { FiTruck, FiSmartphone } from "react-icons/fi";

export const paymentOptions = [
  {
    id: "cod",
    label: "Cash on Delivery",
    desc: "Pay when your order arrives.",
    icon: FiTruck,
  },
  {
    id: "bkash",
    label: "bKash",
    desc: "Send payment via bKash and confirm below.",
    icon: FiSmartphone,
    accent: "#E2136E",
  },
  {
    id: "nagad",
    label: "Nagad",
    desc: "Send payment via Nagad and confirm below.",
    icon: FiSmartphone,
    accent: "#F7941D",
  },
];