import RoleGuard from "../guard/roleGuard";
import { lazy } from "react";
import Sam0101 from "../pages/sam/sam0101/Sam0101";
import ButtonSample from "../pages/sam/sam0102/ButtonSample";
import DateSample from "../pages/sam/sam0102/DateSample";
import GridSample from "../pages/sam/sam0102/GridSample";
import IconsSample from "../pages/sam/sam0102/IconsSample";
import InputSample from "../pages/sam/sam0102/InputSample";
import Sam0102 from "../pages/sam/sam0102/Sam0102";
import SelectSample from "../pages/sam/sam0102/SelectSample";
import TableSample from "../pages/sam/sam0102/TableSample";
import Sam0103 from "../pages/sam/sam0103/Sam0103";
import Sam0103V from "../pages/sam/sam0103/Sam0103V";
import Sam0108 from "../pages/sam/sam0108/Sam0108";



// const Sam0101 = lazy(() => import("../../app/pages/sam/sam0101/Sam0101"));
// const Sam0102 = lazy(() => import("../../app/pages/sam/sam0102/Sam0102"));
// const Sam0103 = lazy(() => import("../../app/pages/sam/sam0103/Sam0103"));
// const Sam0103V = lazy(() => import("../../app/pages/sam/sam0103/Sam0103V"));
// const Sam0104 = lazy(() => import("../../app/pages/sam/sam0104/Sam0104"));
// const Sam0106 = lazy(() => import("../../app/pages/sam/sam0106/Sam0106"));
// const Sam0107 = lazy(() => import("../../app/pages/sam/sam0107/Sam0107"));
// const Sam0108 = lazy(() => import("../../app/pages/sam/sam0108/Sam0108"));

export const samRouter: any = [
    { path: "sam/sam0101", element: <RoleGuard><Sam0101 /></RoleGuard> },
    {
        path: "sam/sam0102", element: <RoleGuard><Sam0102 /></RoleGuard>, children: [
            { path: "button-sample", element: <ButtonSample /> },
            { path: "input-sample", element: <InputSample /> },
            { path: "icon-sample", element: <IconsSample /> },
            { path: "select-sample", element: <SelectSample /> },
            { path: "date-sample", element: <DateSample /> },
            { path: "table-sample", element: <TableSample /> },
            { path: "grid-sample", element: <GridSample /> },
        ]
    },
    { path: "sam/sam0103", element: <RoleGuard><Sam0103 /></RoleGuard> },
    { path: "sam/sam0103/:qa", element: <RoleGuard><Sam0103V /></RoleGuard> },

    
    
    { path: "sam/sam0108", element: <RoleGuard><Sam0108 /></RoleGuard> },
]