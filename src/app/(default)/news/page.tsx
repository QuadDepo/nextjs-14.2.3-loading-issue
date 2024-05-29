export default async function Page() {
await new Promise((resolve) => setTimeout(resolve, 3000));

  return (
    <div>
      <h1>News</h1>
      <p>This is the news page.</p>
    </div>
  );
}
