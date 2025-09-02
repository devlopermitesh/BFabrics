import Navlink from "../atoms/Navlink";

export const NavColumn: React.FC<{ title: string; links: string[] }> = ({
  title,
  links,
}) => (
  <div className="flex flex-col gap-3">
    <h4 className="text-sm font-semibold text-white">{title}</h4>
    <nav className="flex flex-col gap-2">
      {links.map((l) => (
        <Navlink key={l} name={l} active={false} link={l} />
      ))}
    </nav>
  </div>
);
