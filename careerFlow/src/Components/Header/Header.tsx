import { Avatar } from "@mantine/core"
import { IconAsset, IconBell, IconSettings } from "@tabler/icons-react"

const Header = () => {
  return (
    <div className='w-full bg-black h-28 text-white flex px-6 justify-between items-center'>
      <div className="flex gap-3 ">
        {/* Logo */}
        <IconAsset className="h-10 w-10" stroke={1.25}/>
        <div className="text-3xl font-semibold">
            CareerFlow
        </div>
            
      </div>
      <div className="flex gap-3">
        {/* Links */}
        <a href="">Find Jobs</a>
        <a href="">Find Talent</a>
        <a href="">Upload Job</a>
        <a href="">About Us</a>

      </div>
      <div className="flex gap-5 items-center">
        {/* Profile */}
        <IconBell />
        <div className="flex items-center gap-2">
            <div>
                <div>Mike</div>
            </div>
            <Avatar />
        </div>
        <IconSettings />

      </div>
    </div>
  )
}

export default Header
