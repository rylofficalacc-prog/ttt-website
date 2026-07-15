import Link from "next/link";

function regionClass(region) {
  if (region === "NA") return "region na";
  if (region === "EU") return "region eu";
  return "region as";
}

function tierClass(tier) {
  return `tier-badge tier-${tier.replace("+", "plus")}`;
}

export default function RankRow({ player, kit }) {
  const tier = player.ranks[kit];
  return (
    <Link href={`/players/${player.username}`} className={`rank-row rank-${player.overall}`}>
      <div className="place-block">
        <div className="skin-frame">
          <img src={`https://mc-heads.net/body/${player.username}/left`} alt="" />
        </div>
        <div className="place-medal">{player.overall}</div>
      </div>

      <div className="player-info">
        <strong>{player.username}</strong>
        <div className="subtitle-row">
          <span className="title-pill">TTT RANKED</span>
          <span>{player.points} Points</span>
        </div>
      </div>

      <div className={regionClass(player.region)}>
        <strong>{player.region}</strong>
      </div>

      <div className="kit-ranks">
        <div className="rank-chip">
          <span className="mini-icon">🔨</span>
          <span className={tierClass(player.ranks.brokemace)}>{player.ranks.brokemace}</span>
        </div>
        <div className="rank-chip">
          <span className="mini-icon">🧭</span>
          <span className={tierClass(player.ranks.opmanhunt)}>{player.ranks.opmanhunt}</span>
        </div>
        <div className="rank-chip">
          <span className="mini-icon">🏹</span>
          <span className={tierClass(player.ranks.bowboostmace)}>{player.ranks.bowboostmace}</span>
        </div>
      </div>
    </Link>
  );
}
