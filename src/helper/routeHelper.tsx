import { Route, Routes } from "react-router-dom"
import { routesConfig } from "../routes/routesConfig"

export const getRoutes = () => {
    return (
        <Routes>
            {routesConfig.map(({path, component: Component}) => (
                    <Route key={path} path={path} element={<Component />} />
                )
            )}
        </Routes>
    )
}