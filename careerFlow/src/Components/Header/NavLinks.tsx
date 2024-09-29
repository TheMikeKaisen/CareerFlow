import { Link, useLocation } from "react-router-dom";

const NavLinks = () => {
    const Links = [
        {name: "Find Jobs", url:"find-jobs"},
        {name: "Find Talent", url:"find-talent"},
        {name: "Post Job", url:"post-job"},
        {name: "About Us", url:"about"}
    ]

    const location = useLocation();
  return (
    
    <div className="flex gap-5 text-mine-shaft-300 h-full items-center">
      {
        Links.map((links, index)=> (
            <div className={`${location.pathname=="/"+links.url?"border-bright-sun-400 text-bright-sun-400": "border-transparent"}  border-t-[3px] h-full flex items-center`}>

            <Link key={index} to={links.url}>{links.name}</Link>
            </div>
        ))
    }
    </div>
  );
};

export default NavLinks;
