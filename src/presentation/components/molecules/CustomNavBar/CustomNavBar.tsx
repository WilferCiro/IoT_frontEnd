import { NavLink, Navbar } from "@mantine/core";
import { nprogress } from "@mantine/nprogress";
import {
  IconHome2,
  IconUsersGroup,
  IconShoppingCart,
  IconFileInvoice,
  IconShoppingBag,
  IconBuilding,
  IconBox,
  IconTools,
  IconCategory,
  IconGraph,
  IconDeviceRemote,
} from "@tabler/icons-react";
import { usePathname, useRouter } from "next/navigation";

interface Props {
  opened: boolean;
}

const CustomNavBar = ({ opened }: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  const goTo = (path: string) => {
    nprogress.reset();
    nprogress.start();
    router.push(path);
  };
  return (
    <Navbar
      p="md"
      hiddenBreakpoint="sm"
      hidden={!opened}
      width={{ sm: 150, lg: 210 }}
    >
      <NavLink
        active={pathname === "/org/home"}
        label="Inicio"
        icon={<IconHome2 size="1rem" stroke={1.5} />}
        onClick={() => goTo("/org/home")}
      />
      <NavLink
        active={pathname === "/org/devices"}
        label="Dispositivos"
        icon={<IconDeviceRemote size="1rem" stroke={1.5} />}
        onClick={() => goTo("/org/devices")}
      />
      <NavLink
        active={pathname === "/org/read"}
        label="Lecturas"
        icon={<IconGraph size="1rem" stroke={1.5} />}
        onClick={() => goTo("/org/read")}
      />
      <NavLink
        active={pathname === "/org/users"}
        label="Usuarios"
        icon={<IconUsersGroup size="1rem" stroke={1.5} />}
        onClick={() => goTo("/org/users")}
      />
    </Navbar>
  );
};

export default CustomNavBar;
