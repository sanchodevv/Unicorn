import Home from "../Pages/Home/home"
import Invertory from "../Pages/Invertory/invertory";
import { default as MemberComponent } from "../Pages/Members/members";
import Membership from "../Pages/Members/Membership/membership";
import Payments from "../Pages/Payments/payments";
import Pos from "../Pages/Pos/pos";
import Products from "../Pages/Products/products";
import VisitHistory from "../Pages/VisitHistories/visithistory";

export const routes = [

    {
        key: 0,
        path: "/",
        element: Home
    },
    {
        key: 1, 
        path: "/members",
        element: MemberComponent
    },
    {
        key:2,
        path: "/pos",
        element: Pos
    },
    {
        
        key: 3,
        path: "/inventory",
        element: Invertory
    },
    {
        key: 4,
        path: "/products",
        element: Products
    },
    {
        key: 5,
        path: "/visit-history",
        element: VisitHistory
    },
    {
        key: 6,
        path: "/payments",
        element: Payments
    },
    {
        key: 7,
        path: "/membership",
        element: Membership
    }
    

];

