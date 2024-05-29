import { Metadata } from "next";

import { unstable_cache } from 'next/cache';

export async function getData() {
  'use server';
  try {
    const data = await fetch("https://swapi.dev/api/people/1");
    const json = await data.json();
    
    return json.name;
  } catch (err) {
    return null;
  }
}


const getCachedName = unstable_cache(
  async () => getData(),
  ['get_name']
);


export async function generateMetadata(): Promise<Metadata> {
  const name = await getCachedName();
  await new Promise((resolve) => setTimeout(resolve, 3000));
  
  return {
    title: name,
  };
}

export default async function Page() {
  const name = await getCachedName();

  return (
    <div>
      <h1>About</h1>
      <p>This is the about page.</p>
      {name && <p>{name}</p>}
    </div>
  );
}
