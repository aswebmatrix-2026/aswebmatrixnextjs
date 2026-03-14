export default function Page({ params }) {

  const city = params?.city || "";
  const service = params?.service || "";

  const formattedService = service
    .replace(/-/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());

  const formattedCity =
    city.charAt(0).toUpperCase() + city.slice(1);

  return (
    <div>
      <h1>{formattedService} in {formattedCity}</h1>
    </div>
  );
}