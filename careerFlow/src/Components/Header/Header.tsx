import { Avatar, Indicator } from "@mantine/core";
import {
    IconBell,
    IconSeeding,
    IconSettings
} from "@tabler/icons-react";
import NavLinks from "./NavLinks";

const Header = () => {
  return (
    <div className="w-full bg-mine-shaft-950 h-20 text-white flex px-6 justify-between items-center">
      <div className="flex gap-3 text-bright-sun-400">
        {/* Logo */}
        <IconSeeding className="h-8 w-8" stroke={2} />
        <div className="text-3xl font-semibold">CareerFlow</div>
      </div>
      
        {/* Links */}
        <NavLinks />
      
      <div className="flex gap-5 items-center">
        {/* Profile */}
        <div className="flex items-center gap-2">
          <div>
            <div>Mike</div>
          </div>
          <Avatar src={"avatar2.png"} />
        </div>
        <div className="bg-mine-shaft-900 p-1.5 rounded-full">
          <IconSettings stroke={1.5} />
        </div>
        <div className="bg-mine-shaft-900 p-1.5 rounded-full">
          <Indicator color="brightSun.4" withBorder processing>
            <IconBell stroke={1.5} />
          </Indicator>
        </div>
      </div>
    </div>
  );
};

export default Header;
