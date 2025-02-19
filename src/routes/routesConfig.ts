import Home from "@/pages/Home"
import JobDescription from "@/pages/JobDescription"
import JobList from "@/pages/JobList"

interface RouteConfig {
    path: string
    component: React.FC
}

export const routesConfig: RouteConfig[] = [
    { path: '/', component: Home },
    { path: '/job-list', component: JobList },
    { path: '/job-description', component: JobDescription },
]