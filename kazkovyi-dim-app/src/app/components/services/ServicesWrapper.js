import { fetchServices } from "@/app/utils/fetchServices";
import ServicesClient from "./ServicesClient";

export default async function ServicesWrapper() {
  const services = await fetchServices();

  return <ServicesClient services={services} />;
}
