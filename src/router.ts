import Dashboard from "./pages/Dashboard.vue";
import { createRouter, createWebHistory } from "vue-router"
    const routeInfos = [
        {
            path : "/",
            component : Dashboard
        },
    ]
    
    const router = createRouter({
        history : createWebHistory(),
        routes : routeInfos
    })
    
    export default router;