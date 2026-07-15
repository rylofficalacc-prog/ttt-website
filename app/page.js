import Header from "../components/Header";
import KitTabs from "../components/KitTabs";

const discordInvite = "https://discord.gg/b3dncHHwWM";

export default function HomePage() {
  return (
    <div className="site-shell">
      <Header />
      <main className="content">
        <section className="main-column">
          <div className="title-row">
            <div>
              <p className="eyebrow">TTT OFFICIAL</p>
              <h1>Rankings</h1>
            </div>
          </div>

          <KitTabs active="brokemace" />

          <section className="empty-rankings">
            <div className="empty-icon">🏆</div>
            <p className="eyebrow">SEASON OPENING SOON</p>
            <h2>No players are ranked yet.</h2>
            <p>
              TTT has not published any official placements. Join the Discord,
              request a test, and earn one of the first spots on the leaderboard.
            </p>
            <a className="discord-button" href={discordInvite} target="_blank" rel="noreferrer">
              Apply for a Test
            </a>
          </section>

          <section className="kit-status-grid">
            <div className="kit-status-card">
              <span>🔨</span>
              <strong>BrokeMace Kit</strong>
              <p>No official rankings yet.</p>
            </div>
            <div className="kit-status-card">
              <span>🧭</span>
              <strong>OPManhunt</strong>
              <p>No official rankings yet.</p>
            </div>
            <div className="kit-status-card">
              <span>🏹</span>
              <strong>BowBoostMace</strong>
              <p>No official rankings yet.</p>
            </div>
          </section>
        </section>

        <aside className="sidebar">
          <div className="side-card info-card">
            <h3>ⓘ Info</h3>
            <p>TTT is a Minecraft Java tier-testing platform.</p>
            <p>Only three kits are ranked:</p>
            <ul>
              <li>BrokeMace Kit</li>
              <li>OPManhunt</li>
              <li>BowBoostMace</li>
            </ul>
          </div>

          <div className="side-card">
            <h3>Testing</h3>
            <p>Official rankings begin once verified tests are completed.</p>
            <a className="side-discord-button" href={discordInvite} target="_blank" rel="noreferrer">
              Join the Discord
            </a>
          </div>

          <div className="side-card">
            <h3>Queue Status</h3>
            <div className="queue-line"><span>BrokeMace</span><b>Opening Soon</b></div>
            <div className="queue-line"><span>OPManhunt</span><b>Opening Soon</b></div>
            <div className="queue-line"><span>BowBoostMace</span><b>Opening Soon</b></div>
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
