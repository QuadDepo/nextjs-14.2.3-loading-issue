
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
        <nav>
            NAVBAR
        </nav>
      <div>{children}</div>
      <footer>FOOTER</footer>
    </div>
  );
}
