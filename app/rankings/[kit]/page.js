import { notFound } from "next/navigation";
import Header from "../../../components/Header";
import KitTabs from "../../../components/KitTabs";
import { kits } from "../../../lib/data";

const discordInvite = "https://discord.gg/b3dncHHwWM";

export function generateStaticParams() {
  return kits.map((kit) => ({ kit: kit.slug }));
}

export default async function RankingsPage({ params }) {
  const { kit } = await params;
  const currentKit = kits.find((item) => item.slug === kit);
  if (!currentKit) notFound();

  return (
    <div className="site-shell">
      <Header />
      <main className="content">
        <section className="main-column">
          <div className="title-row">
            <div>
              <p className="eyebrow">TTT OFFICIAL</p>
              <h1>{currentKit.name} Rankings</h1>
            </div>
          </div>

          <KitTabs active={kit} />

          <section className="empty-rankings">
            <div className="empty-icon">{currentKit.icon}</div>
            <p className="eyebrow">NO OFFICIAL PLACEMENTS</p>
            <h2>No players have been ranked for {currentKit.name}.</h2>
            <p>
              The leaderboard will update after verified testing begins.
              Join the Discord and apply for a test to earn a placement.
            </p>
            <a className="discord-button" href={discordInvite} target="_blank" rel="noreferrer">
              Apply for a Test
            </a>
          </section>

          <div className="placeholder-placements">
            {[1, 2, 3, 4, 5].map((place) => (
              <div key={place} className="placeholder-row">
                <span>#{place}</span>
                <strong>Unclaimed</strong>
                <em>Be one of the first ranked players</em>
              </div>
            ))}
          </div>
        </section>

        <aside className="sidebar">
          <div className="side-card info-card">
            <h3>ⓘ Kit Info</h3>
            <p><strong>{currentKit.name}</strong></p>
            <p>No official results have been published for this kit.</p>
          </div>

          <div className="side-card">
            <h3>Get Ranked</h3>
            <p>Testing is handled through the TTT Discord.</p>
            <a className="side-discord-button" href={discordInvite} target="_blank" rel="noreferrer">
              Join Discord
            </a>
          </div>
        </aside>
      </main>

      <footer className="footer">
        <div className="footer-logo">TTT</div>
        <span>Minecraft Java Tier Testing</span>
        <a href={discordInvite} target="_blank" rel="noreferrer">Discord</a>
      </footer>
    </div>
  );
}
