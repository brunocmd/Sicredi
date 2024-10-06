import { useLocation, Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { Box } from "@chakra-ui/react";

const MainLayout = () => {
  const location = useLocation();
  const showSideBar = location.pathname !== '/';

  return (
    <Box display="flex">
      {showSideBar && <Sidebar />}
      <Box ml={showSideBar ? '250px' : '0px'} p={8} w="100%">
        <Outlet />
      </Box>
    </Box>
  );
};

export default MainLayout;