import { Metadata } from "next";

export const runtime = "edge";


export async function generateMetadata(): Promise<Metadata> {
  const data = await fetch("https://swapi.dev/api/people/1");
  const json = await data.json();
  await new Promise((resolve) => setTimeout(resolve, 3000));
  
  return {
    title: json.name,
  };
}

export default async function Page() {
  const data = await fetch("https://swapi.dev/api/people/1");
  const json = await data.json();

  return (
    <div>
      <h1>About</h1>
      <p>This is the about page.</p>
      {json.name && <p>{json.name}</p>}
    </div>
  );
}
