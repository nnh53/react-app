import { Avatar, Dropdown, Navbar } from "flowbite-react";
import WalletIcon from "./WalletIcon.tsx";
import BellIcon from "./BellIcon.tsx";
import SearchBar from "./SearchBar.tsx";

export const MyNavbar = () => {
  return (
    <div>
      <Navbar fluid rounded>
        <Navbar.Brand href="https://flowbite-react.com">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite React Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Flowbite React
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <h3 className="mr-2 content-center text-xl font-semibold">
            100.000vnđ
          </h3>
          <div className="mr-10 content-center">
            <WalletIcon />
          </div>
          <div className="mr-10 content-center">
            <BellIcon />
          </div>
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded
                title="abc"
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">
                name@flowbite.com
              </span>
            </Dropdown.Header>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div>
        <div className="mr-96">
          <SearchBar />
        </div>
      </Navbar>
    </div>
  );
};
export default MyNavbar;
