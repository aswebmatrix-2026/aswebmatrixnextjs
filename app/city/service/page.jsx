export const dynamic = "force-static";

export async function generateStaticParams() {
  const cities = [
    "delhi",
    "mumbai",
    "bangalore",
    "hyderabad",
    "chennai",
    "kolkata",
    "pune",
    "ahmedabad",
    "jaipur",
    "noida",
    "gurugram",
    "faridabad",
  ];

  const services = [
    "seo-services",
    "website-development",
    "wordpress-development",
    "mern-stack-development",
    "digital-marketing",
    "ecommerce-development",
    "mobile-app-development",
    "ppc-services",
    "social-media-marketing",
    "content-writing",
  ];

  const params = [];

  for (const city of cities) {
    for (const service of services) {
      params.push({ city, service });
    }
  }

  return params;
}

export default function Page({ params }) {
  const { city, service } = params;

  return (
    <div>
      <h1>{service.replace("-", " ")} in {city}</h1>
    </div>
  );
}