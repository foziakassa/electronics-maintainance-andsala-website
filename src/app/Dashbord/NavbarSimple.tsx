"use client";
import { useState } from "react";
import { Group, MantineProvider } from "@mantine/core";
import '@mantine/charts/styles.css';
import '@mantine/core/styles.css';
import {
  IconBellRinging,
  IconFingerprint,
  IconKey,
  IconSettings,
  Icon2fa,
  IconDatabaseImport,
  IconReceipt2,
  IconSwitchHorizontal,
  IconLogout,
} from "@tabler/icons-react";
import classes from "./NavbarSimple.module.css";
import Demo from "./Demo";
import Cards from "./Cards";
import Header from "../Header/Header";
import Demo2 from "./Demo2";
import Mu3 from "./Mu3";
// import Mu from "./mu";

const data = [
  { link: "", label: "Notifications", icon: IconBellRinging },
  // { link: "", label: "Billing", icon: IconReceipt2 },
  // { link: "", label: "Security", icon: IconFingerprint },
  // { link: "", label: "SSH Keys", icon: IconKey },
  // { link: "", label: "Databases", icon: IconDatabaseImport },
  // { link: "", label: "Authentication", icon: Icon2fa },
  // { link: "", label: "Other Settings", icon: IconSettings },
];

export function NavbarSimple() {
  const [active, setActive] = useState("Billing");

  const links = data.map((item) => (
    <a
      className={classes.link}
      data-active={item.label === active || undefined}
      href={item.link}
      key={item.label}
      onClick={(event) => {
        event.preventDefault();
        setActive(item.label);
      }}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </a>
  ));

  return (
    <nav
      className=""
    >
      <div className=" flex flex-row">


        <div
          className="h-[rem(700px)] 
        pt-[var(--mantine-spacing-md)] 
        pr-[var(--mantine-spacing-md)] 
        pb-[var(--mantine-spacing-md)] 
        pl-[var(--mantine-spacing-md)] 
        flex flex-col 
        border-t-2 border-inherit  border-r-2 
        bg-teal-600
        
        w-96"
        >
           <Group
        className="pb-[var(--mantine-spacing-md)] 
        mb-[calc(var(--mantine-spacing-md)_*_1.5)]
        border-b-2 border-inherit
        "
        
      >
        <div
          className=""
        >
          {/* <MantineLogo size={28} /> */}
          <h1 className="text-2xl p-2 text-white"><span className="p-2 text-white text-4xl font-bold">xx</span>Electronics</h1>
        </div>
      </Group>


          <div className="flex-1 ">{links}</div>

          <div
            className="pt-[var(--mantine-spacing-md)] mt-[var(--mantine-spacing-md)]

            border-t-[rem(1px)] border-solid
             border-t-2 border-inherit
             "
          >
            <a
              href="#"
              className={classes.link}
              onClick={(event) => event.preventDefault()}
            >
              <IconSwitchHorizontal
                className="text-white
                mr-[var(--mantine-spacing-sm)] w-[rem(25px)] h-[rem(25px)]"
                stroke={1.5}
              />
              <span className="text-white">Change account</span>
            </a>

            <a
              href="#"
              className={classes.link}
              onClick={(event) => event.preventDefault()}
            >
              <IconLogout
                className="text-white
                mr-[var(--mantine-spacing-sm)] w-[rem(25px)] h-[rem(25px)]"
                stroke={1.5}
              />
              <span className="text-white">Logout</span>
            </a>
          </div>
        </div>

        <div className="overflow-x-hidden px-10 bg-white h-screen">

<Header/>
          <Cards/>
          <Demo/>
          <p>
           Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Laborum ad ea odio vitae quo perferendis 
           quidem nam! Animi perferendis, unde ad quod voluptates quo
           
         sunt molestiae velit facere consequuntur suscipit.
          </p>
          <MantineProvider>
          <Demo2/>

            </MantineProvider>
            <MantineProvider>
{/* <Mu viewerData={[]}/> */}
<Mu3 viewerData={[]}/>
            </MantineProvider>
        </div>
      </div>
    </nav>
  );
}
