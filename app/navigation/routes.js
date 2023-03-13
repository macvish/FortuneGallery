import { CreateFortune, Home, ViewFortune } from "../screens"
import GenerateTab from "./generateTab"
import { routeUrls } from "./routeUrls"

const MainTabs = () => (
  <GenerateTab
    paths={[
      {
        name: routeUrls.home,
        icon: 'home',
        label: 'Home',
        component: Home,
      },
      {
        name: routeUrls.view,
        icon: 'view',
        label: 'View Fortune',
        component: ViewFortune,
      },
      {
        name: routeUrls.create,
        icon: 'create',
        label: 'Create Fortune',
        component: CreateFortune,
      },
    ]}
  />
)

export const Root = [
  {
    name: routeUrls.mainTabs,
    component: MainTabs,
    options: {
      headerShown: false,
      gesturesEnabled: false,
      animationEnabled: false,
    },
  }
]