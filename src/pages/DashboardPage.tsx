"use client";

import { MyNavbar } from "../components/MyNavbar";
import { MySidebar } from "../components/MySidebar.tsx";
import { Card } from "flowbite-react";

type OverViewItemType = {
  header: string;
  title: string;
  numberValue: number;
};

type ToolsItemType = {
  unit: string;
  description: string;
  money: string;
  numOfDay: number;
};

export function DashboardPage() {
  const listOverViewToday: OverViewItemType[] = [
    {
      header: "Today",
      title: "Tool Created",
      numberValue: 23,
    },
    {
      header: "Today",
      title: "In-use",
      numberValue: 13,
    },
    {
      header: "Total",
      title: "Tool",
      numberValue: 60,
    },
    {
      header: "Total",
      title: "Booking",
      numberValue: 10,
    },
    {
      header: "Total",
      title: "Renew Tool",
      numberValue: 90,
    },
  ];
  const listTools: ToolsItemType[] = [
    {
      unit: "1D",
      description: "1 ngày",
      money: "500.000VND",
      numOfDay: 1,
    },
    {
      unit: "3D",
      description: "3 ngày",
      money: "700.000VND",
      numOfDay: 3,
    },
    {
      unit: "7D",
      description: "7 ngày",
      money: "900.000VND",
      numOfDay: 7,
    },
    {
      unit: "1S",
      description: "1 Kì",
      money: "700.000VND",
      numOfDay: 120,
    },
  ];

  return (
    <div>
      <MyNavbar />
      <div className="flex items-stretch">
        <div className="sidebar">
          <MySidebar />
        </div>

        {/*DASHBOARD ITEM*/}
        <div className="dashboard flex flex-grow flex-col">
          {/*start block 1*/}
          <div className="flex-grow px-3">
            <Card href="#">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Overview
              </h5>
              <div className="item">
                <div className="flex justify-between">
                  {listOverViewToday.map((item, index) => (
                    <div key={index}>
                      <p className="font-normal text-gray-700 dark:text-gray-400">
                        {item.header}
                      </p>
                      <div className="flex items-end">
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                          {item.title}
                        </p>
                        <p className="pl-2 text-2xl text-blue-600 dark:text-gray-400">
                          {item.numberValue}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
          {/*end block 1*/}

          {/*start block 2*/}
          <div className="flex-grow px-3">
            <Card href="#">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Tools
              </h5>
              <div className="item">
                <div className="flex justify-between">
                  {listTools.map((item, index) => (
                    <div key={index} className="flex-1 p-2">
                      <div className="">
                        <Card>
                          <p className="font-normal text-gray-700 dark:text-gray-400">
                            {item.unit}
                          </p>
                          <div className="items-end">
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                              {item.description}
                            </p>
                            <p className="text-2xl text-blue-600 dark:text-gray-400">
                              {item.money}{" "}
                              <span className="text-xs">
                                /{item.numOfDay} days
                              </span>
                            </p>
                          </div>
                        </Card>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
          {/*end block 2*/}
        </div>
      </div>
    </div>
  );
}

{
  /*<div className="flex-none">*/
}
{
  /*  <Card href="#" className="max-w-sm">*/
}
{
  /*    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">*/
}
{
  /*      Overview*/
}
{
  /*    </h5>*/
}
{
  /*    <p className="font-normal text-gray-700 dark:text-gray-400">*/
}
{
  /*      Here are the biggest enterprise technology acquisitions of 2021 so*/
}
{
  /*      far, in reverse chronological order.*/
}
{
  /*    </p>*/
}
{
  /*  </Card>*/
}
{
  /*</div>*/
}
