"use client";

import { Sidebar } from "flowbite-react";
import { CiSettings } from "react-icons/ci";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";

export function MySidebar() {
  return (
    <Sidebar aria-label="Sidebar with content separator example">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={HiChartPie}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiViewBoards}>
            Itemnew Request
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiUser}>
            Account
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiInbox}>
            Todo
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiShoppingBag}>
            Booking
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiArrowSmRight}>
            Transaction
          </Sidebar.Item>
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={CiSettings}>
            Setting
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
