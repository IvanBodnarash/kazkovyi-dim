export default function NavItem({ href, children, ...props }) {
  return (
    <li {...props}>
      <a
        className="text-gray-500 transition hover:text-gray-500/75"
        href={href}
      >
        {" "}
        {children}
      </a>
    </li>
  );
}
