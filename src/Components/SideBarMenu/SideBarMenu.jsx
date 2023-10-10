import React from "react";
import {
    Card, Typography, List, ListItem, ListItemPrefix, ListItemSuffix,
    Chip, Accordion, AccordionHeader, AccordionBody, Alert, Input,
} from "@material-tailwind/react";
import {
    PresentationChartBarIcon, ShoppingBagIcon, UserCircleIcon,
    Cog6ToothIcon, InboxIcon, PowerIcon,
} from "@heroicons/react/24/solid";
import {
    ChevronRightIcon, ChevronDownIcon, CubeTransparentIcon, MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

import { TbHeadphones, TbPentagon } from "react-icons/tb";
import { GiReceiveMoney } from "react-icons/gi";
import { LiaIdCard } from "react-icons/lia";
import { VscGraphLine } from "react-icons/vsc";
import { LuLogOut } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { RxAvatar } from "react-icons/rx";


export function SidebarWithSearch() {
    const [open, setOpen] = React.useState(0);
    const [openAlert, setOpenAlert] = React.useState(true);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

    return (
        // <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
        <Card className="h-full hidden tablet:block w-full max-w-[20rem] left-0 bg-transparent p-4 shadow-[0_10px_20px_]">
            <div className="p-2">
                <Input icon={<MagnifyingGlassIcon className="h-5 w-5" />} label="Search" />
            </div>
            <List>
                <ListItem className="py-2">
                    <ListItemPrefix>
                        <TbPentagon className="h-5 w-5" />
                    </ListItemPrefix>
                    <p>
                        Compliance
                    </p>
                </ListItem>
                <ListItem className="py-2">
                    <ListItemPrefix>
                        <VscGraphLine className="h-5 w-5" />
                    </ListItemPrefix>
                    <p>
                        Dashboard
                    </p>
                </ListItem>

                <hr className="my-1 border-blue-gray-50" />

                <div className="px-4 py-1">
                    <h5 className="text-[#9A9AAF] text-[0.9375rem] font-semibold">
                        MANAGEMENT
                    </h5>
                </div>
                <ListItem className="py-2">
                    <ListItemPrefix>
                        <GiReceiveMoney className="h-5 w-5" />
                    </ListItemPrefix>
                    Transaction History
                </ListItem>
                <ListItem className="py-2">
                    <ListItemPrefix>
                        <LiaIdCard className="h-5 w-5" />
                    </ListItemPrefix>
                    Sub Accounts
                </ListItem>
                <ListItem className="py-2">
                    <ListItemPrefix>
                        {/* <UserCircleIcon className="h-5 w-5" /> */}
                        <RxAvatar className="h-5 w-5" />
                    </ListItemPrefix>
                    Profile
                </ListItem>

                <hr className="my-1 border-blue-gray-50" />

                <div className="px-4 py-1">
                    <h5 className="text-[#9A9AAF] text-[0.9375rem] font-semibold">
                        ADMINISTRATION
                    </h5>
                </div>

                <ListItem className="py-2">
                    <ListItemPrefix>
                        <TbHeadphones className="h-5 w-5" />
                    </ListItemPrefix>
                    Support
                </ListItem>
                <ListItem className="py-2">
                    <ListItemPrefix>
                        {/* <Cog6ToothIcon className="h-5 w-5" /> */}
                        <IoSettingsOutline className="h-5 w-5" />
                    </ListItemPrefix>
                    Account Settings
                </ListItem>

                <hr className="my-1 border-blue-gray-50" />

                <ListItem className="py-2">
                    <ListItemPrefix>
                        {/* <PowerIcon className="h-5 w-5" /> */}
                        <LuLogOut className="h-5 w-5" />
                    </ListItemPrefix>
                    Log Out
                </ListItem>
            </List>

            <Alert open={openAlert} className="mt-8 bg-blue-gray-900" onClose={() => setOpenAlert(false)}>
                <CubeTransparentIcon className="mb-4 h-12 w-12" />
                <Typography variant="h6" className="mb-1">
                    Upgrade to PRO
                </Typography>
                <Typography variant="small" className="font-normal opacity-80">
                    Upgrade to PRO and get even more perks, plugins, advanced features
                    and premium.
                </Typography>
                <div className="mt-4 flex gap-3">
                    <Typography
                        as="a"
                        href="#"
                        variant="small"
                        className="font-medium opacity-80 text-warning"
                        onClick={() => setOpenAlert(false)}
                    >
                        Dismiss
                    </Typography>
                    <Typography as="a" href="#" variant="small" className="font-medium text-success">
                        Upgrade Now
                    </Typography>
                </div>
            </Alert>
        </Card>
    );
}


// Accordion (Dropdown 1 & 2)

{/* <Accordion
                    open={open === 1}
                    icon={
                        <ChevronDownIcon
                            strokeWidth={2.5}
                            className={`mx-auto h-4 w-4 transition-transform ${open === 1 ? "rotate-180" : ""}`}
                        />
                    }
                >
                    <ListItem className="p-0" selected={open === 1}>
                        <AccordionHeader onClick={() => handleOpen(1)} className="border-b-0 p-3">
                            <ListItemPrefix>
                                <TbPentagon className="h-5 w-5" />
                            </ListItemPrefix>
                            <Typography color="blue-gray" className="mr-auto font-normal">
                                Dashboard
                            </Typography>
                        </AccordionHeader>
                    </ListItem>
                    <AccordionBody className="py-1">
                        <List className="p-0">
                            <ListItem className="py-2">
                                <ListItemPrefix>
                                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                </ListItemPrefix>
                                Analytics
                            </ListItem>
                            <ListItem className="py-2">
                                <ListItemPrefix>
                                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                </ListItemPrefix>
                                Reporting
                            </ListItem>
                            <ListItem className="py-2">
                                <ListItemPrefix>
                                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                </ListItemPrefix>
                                Projects
                            </ListItem>
                        </List>
                    </AccordionBody>
                </Accordion>
                <Accordion
                    open={open === 2}
                    icon={
                        <ChevronDownIcon
                            strokeWidth={2.5}
                            className={`mx-auto h-4 w-4 transition-transform ${open === 2 ? "rotate-180" : ""}`}
                        />
                    }
                >
                    <ListItem className="p-0" selected={open === 2}>
                        <AccordionHeader onClick={() => handleOpen(2)} className="border-b-0 p-3">
                            <ListItemPrefix>
                                <ShoppingBagIcon className="h-5 w-5" />
                            </ListItemPrefix>
                            <Typography color="blue-gray" className="mr-auto font-normal">
                                E-Commerce
                            </Typography>
                        </AccordionHeader>
                    </ListItem>
                    <AccordionBody className="py-1">
                        <List className="p-0">
                            <ListItem className="py-2">
                                <ListItemPrefix>
                                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                </ListItemPrefix>
                                Orders
                            </ListItem>
                            <ListItem className="py-2">
                                <ListItemPrefix>
                                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                </ListItemPrefix>
                                Products
                            </ListItem>
                        </List>
                    </AccordionBody>
                </Accordion> */}