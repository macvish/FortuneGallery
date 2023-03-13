import { CreatePage, Home, ViewPage } from "../screens"
import GenerateTab from "./generateTab"
import { routeUrls } from "./routeUrls"

const MainTabs = () => (
  <GenerateTab
    paths={[
      {
        name: routeUrls.home,
        icon: 'home',
        component: Home,
      },
      {
        name: routeUrls.view,
        icon: 'view',
        component: ViewPage,
      },
      {
        name: routeUrls.create,
        icon: 'create',
        component: CreatePage,
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