import { twMerge } from "tailwind-merge";

export const SocialIcon: React.FC<{ href?: string; children: React.ReactNode; className?: string }> = ({ href = "#", children, className }) => (
<a href={href} className={twMerge("inline-flex items-center justify-center w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-700", className)}>
{children}
</a>
);