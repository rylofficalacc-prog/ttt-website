import "./globals.css";

export const metadata = {
  title: "TTT Rankings",
  description: "Minecraft Java tier rankings for BrokeMace Kit, OPManhunt, and BowBoostMace."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
