import Link from "next/link";

export default function Header() {
  return (
    <header className="topbar">
      <Link href="/" className="logo-wrap">
        <div className="logo-shield">TTT</div>
      </Link>
      <nav className="main-nav">
        <Link href="/" className="active">⌂ <span>HOME</span></Link>
        <Link href="/rankings/brokemace">♙ <span>TIER LIST</span></Link>
        <a href="#community">◌ <span>COMMUNITY</span></a>
        <a href="#resources">▣ <span>RESOURCES</span></a>
        <a href="#support">✎ <span>SUPPORT</span></a>
      </nav>
      <div className="server-chip">SERVER: <strong>TTT</strong></div>
    </header>
  );
}
