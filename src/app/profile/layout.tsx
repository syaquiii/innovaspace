export default function ProfileLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <section className="min-h-screen">{children}</section>;
}
