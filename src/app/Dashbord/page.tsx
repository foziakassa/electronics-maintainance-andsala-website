import { MantineProvider } from "@mantine/core";
import { NavbarSimple } from "./NavbarSimple";
import '@mantine/charts/styles.css';
import '@mantine/core/styles.css';
import Demo from "./Demo";

// import { NavbarSimpleColored } fro./NavbarSimplered";

export default function Dashbord(){
  return(
    <div className="">
      <MantineProvider>
        <NavbarSimple/>
        {/* <Demo/> */}
      </MantineProvider>
    </div>
  )
}