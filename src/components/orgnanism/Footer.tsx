import GetIcon from "@/utils/getIcon";
import Logo from "../atoms/Logo";
import { SocialIcon } from "../atoms/SocialIcon";
import { NavColumn } from "../moleculers/NavColumn";
import { SubscribeForm } from "../moleculers/SubscribeForm";
import { motion } from "framer-motion";
const Footer: React.FC = () => {
return (
<footer className="w-full  border-t border-dashed border-zinc-800 mt-12">
<div className="max-w-7xl mx-auto px-6 py-12">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
{/* Left: Logo + Socials */}
<div className="flex flex-col gap-6">
<Logo size="middle" />
<p className="text-sm text-zinc-400 max-w-sm">
Crafted with care — premium textiles and thoughtful designs. Connect with us on social.
</p>
<div className="flex gap-3">
<SocialIcon href="#instagram">
<GetIcon name="Instagram" className="w-4 h-4 text-zinc-100" />
</SocialIcon>
<SocialIcon href="#phone">
<GetIcon name="Phone" className="w-4 h-4 text-zinc-100" />
</SocialIcon>

</div>
</div>


{/* Middle: Nav columns */}
<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
<NavColumn title="Home" links={["Why Us", "About Us", "Testimonials", "FAQ's"]} />
<NavColumn title="Products" links={["Menswear", "Womenswear", "Kidswear"]} />
<NavColumn title="Support" links={["Contact", "Shipping", "Returns"]} />
</div>


{/* Right: Subscribe */}
<div className="flex flex-col justify-between">
<div>
<h4 className="text-sm font-semibold text-white mb-2">Subscribe to Newsletter</h4>
<SubscribeForm />
</div>


<div className="mt-6 text-xs text-zinc-500 flex flex-col md:items-end gap-2">
<div>© {new Date().getFullYear()} StyleLoom. All rights reserved.</div>
<div className="flex gap-4">
<a className="hover:underline">Terms & Conditions</a>
<a className="hover:underline">Privacy Policy</a>
</div>
</div>
</div>
</div>


{/* bottom divider */}
<motion.div
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{ duration: 0.6 }}
className="mt-8 border-t border-dashed border-zinc-800 pt-6"
>
<div className="flex flex-col md:flex-row md:justify-between items-center gap-4 text-xs text-zinc-400">
<div>Built with care by StyleLoom</div>
<div className="flex gap-3 items-center">
<a className="px-2 py-1 rounded bg-zinc-900/60">Instagram</a>
<a className="px-2 py-1 rounded bg-zinc-900/60">Dribbble</a>
<a className="px-2 py-1 rounded bg-zinc-900/60">Twitter</a>
</div>
</div>
</motion.div>
</div>
</footer>
);
};


export default Footer;