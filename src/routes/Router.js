import { lazy } from "react";

/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout.js"));

/***** Pages ****/

const Search = lazy(() => import("../views/ui/Search.js"));
const Contacts = lazy(() => import("../views/ui/Contacts.js"));


/*****Routes******/

const ThemeRoutes = [
  {
    path: "/",
    element: <FullLayout />,
    children: [
      { path: "/search", exact: true, element: <Search/> },
      { path: "/contacts", exact: true, element: <Contacts /> },
    ],
  },
];

export default ThemeRoutes;
