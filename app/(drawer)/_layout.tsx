import { createDrawerNavigator } from "@react-navigation/drawer";
import { withLayoutContext } from "expo-router";

const DrawerNavigator = createDrawerNavigator().Navigator;
const Drawer = withLayoutContext(DrawerNavigator);

export default function DrawerLayout() {
  return <Drawer />;
}
