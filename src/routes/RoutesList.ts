import Admin from "../view/Admin/Admin";
import Login from "../view/Login/Login";
import Register from "../view/Register/Register";


export interface RoutesList {
    path: string;
    view: any | any[];
    name: string;
    private: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const PublicRoutesList: RoutesList[] = [
    
    {
        path: '/login',
        view: Login,
        name: 'login',
        private: true
    },
    {
        path: '/register',
        view: Register,
        name: 'register',
        private: true
    }
]

export const PrivateRoutesList: RoutesList[] = [
    {
        path: '/adminLg',
        view: Admin,
        name: 'admin',
        private: false
    }
    
]