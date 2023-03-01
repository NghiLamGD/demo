
import * as Md from "../md/full";
import React from "react";
import { Dashboard } from "@gooddata/sdk-ui-dashboard";
import { idRef } from "@gooddata/sdk-model";

const style = { height: 300 };

const dashboardRef = idRef(Md.Dashboards.DashboardStageName);

const Home: React.FC = () => {
    return (
        <div style={style}>
            <Dashboard dashboard={dashboardRef} />;
        </div>
    );
};

export default Home;