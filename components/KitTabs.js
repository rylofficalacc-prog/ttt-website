import Link from "next/link";
import { kits } from "../lib/data";

export default function KitTabs({ active }) {
  return (
    <div className="kit-tabs">
      {kits.map((kit) => (
        <Link
          key={kit.slug}
          href={`/rankings/${kit.slug}`}
          className={active === kit.slug ? "kit-tab active" : "kit-tab"}
        >
          <span className="kit-icon">{kit.icon}</span>
          <span>{kit.name.toUpperCase()}</span>
        </Link>
      ))}
    </div>
  );
}
