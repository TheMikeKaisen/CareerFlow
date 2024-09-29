import { Divider } from "@mantine/core";
import TalentsSearchBar from "./FindTalentsPage/TalentsSearchBar";
import Talents from "./FindTalentsPage/Talents";

const FindTalents = () => {
  return (
    <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins']">
      <Divider size={"xs"} mx={"md"} />
      <TalentsSearchBar />
      <Divider size={"xs"} mx={"md"} />
      <Talents />
    </div>
  );
};

export default FindTalents;
