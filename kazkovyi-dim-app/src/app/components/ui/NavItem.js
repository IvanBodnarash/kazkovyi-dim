import Link from "next/link";

export default function NavItem({ href, children, ...props }) {
  return (
    <li {...props}>
      <Link className="text-gray-500 transition hover:text-gray-500/75" href={href}>
        {children}
      </Link>
    </li>
  );
}
