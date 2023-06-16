import { DashboardLayout } from "@/components";
import { FaUserCircle } from "react-icons/fa";

export const Dashboard = () => {
  const navigation = [
    {
      to: "/dashboard/profile",
      icon: <FaUserCircle />,
      text: "profile",
    },
  ];
  return <DashboardLayout navigation={navigation}></DashboardLayout>;
};
