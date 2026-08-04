import { notFound } from "next/navigation";
import { customers } from "@/data/customers";
import CustomerPage from "@/components/CustomerPage";

export function generateStaticParams() {
  return Object.keys(customers).map((slug) => ({ slug }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const customer = customers[slug];

  if (!customer) {
    notFound();
  }

  return <CustomerPage customer={customer} />;
}