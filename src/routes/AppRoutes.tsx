import React from 'react';
import { getRoutes } from '@/helper/routeHelper';
import Layout from '@/layout/Layout';

const AppRoutes: React.FC = () => {
    return (
        <Layout>
            {getRoutes()}
        </Layout>
    );
};

export default AppRoutes;