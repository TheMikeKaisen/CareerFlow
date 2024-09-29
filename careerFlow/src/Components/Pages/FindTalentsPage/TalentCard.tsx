import { Avatar, Button, Divider, Text } from "@mantine/core"
import { IconHeart, IconMapPin } from "@tabler/icons-react"
import { Link } from "react-router-dom"

const TalentCard = (props:any) => {
  return (
    <div className="bg-mine-shaft-900 p-4 w-96 flex flex-col gap-3 rounded-xl hover:shadow-[0_0_5px_1px_yellow] !shadow-bright-sun-400 transition duration-200 ease-in-out">
        {/* icon and heading */}
      <div className="flex justify-between">

        <div className="flex gap-2 items-center">

            {/* image */}
            <div className="p-2 bg-mine-shaft-800 rounded-full">
                <Avatar size={'lg'} className="h-15 w-15" src={`${props.image}.png`} alt="" />
            </div>

            {/* heading and subheading */}
            <div>
                {/* heading */}
                <div className="font-semibold text-lg">{props.name}</div>

                {/* subheading */}
                <div className="text-xs text-mine-shaft-300"> {props.role} &bull; {props.company}</div>
            </div>
        </div>

        {/* bookmark button */}
        <div><IconHeart className="text-mine-shaft-300 cursor-pointer"/></div>
      </div>

      {/* experience */}
      <div className="flex gap-2">
        {props.topSkills?.map((skill:any, index:any)=>(
          <div className="py-1 p-2 bg-mine-shaft-800 text-bright-sun-400 rounded-lg text-xs" key={index}>{skill}</div>
        ))}
      </div>

      {/* description */}
      <div>
        <Text lineClamp={3} className="!text-xs !text-justify !text-mine-shaft-300">
            {props.about}
        </Text>
      </div>

      <Divider size={"xs"} color="mineShaft.7"/>

      {/* pay */}
      <div className="flex justify-between text-mine-shaft-400">
        {/* salary */}
        <div className="font-semibold text-mine-shaft-200">
            {props.expectedCtc}
        </div>

        {/* posted date */}
        <div className="flex gap-1 text-xs items-center">
            <IconMapPin stroke={1.5} className="h-5 w-5" />
            {props.location}
        </div>
      </div>
      <Divider size={"xs"} color="mineShaft.7"/>
      <div className="flex [&>*]:w-1/2 [&>*]:p-1">
        <Link to={'/talent-profile'}>
          <Button color="brightSun.4" fullWidth variant="outline">Profile</Button>
        </Link>
        <div>
          <Button color="brightSun.4" fullWidth variant="light">Message</Button>
        </div>

      </div>
    </div>
  )
}

export default TalentCard
