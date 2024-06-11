import React from 'react';
import { DashboardCore } from '@splunk/dashboard-core';
import { DashboardContextProvider } from '@splunk/dashboard-context';
import EnterpriseViewOnlyPreset from '@splunk/dashboard-presets/EnterpriseViewOnlyPreset';
import WinDashboardDefinition from './WinDashboardDefinition.json'
import DomainChart from './DomainChart';

const customPreset = {
    ...EnterpriseViewOnlyPreset,
    visualizations: {
        ...EnterpriseViewOnlyPreset.visualizations,
        'splunk.DomainChart': DomainChart,
    },
};

const WinDashboard = () => {

    return (
        <DashboardContextProvider
        preset={customPreset}
        initialDefinition={WinDashboardDefinition}
        >
            <DashboardCore width="100%" height="100%" />
        </DashboardContextProvider>
    );

}

export default WinDashboard;