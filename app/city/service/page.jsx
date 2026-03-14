export default function Page({ params }) {
  const { city, service } = params;

  return (
    <div>
      <h1>{service.replace("-", " ")} in {city}</h1>

      <p>
        A.S Web Matrix provides professional {service.replace("-", " ")} 
        services in {city}. Grow your business with our expert team.
      </p>
    </div>
  );
}