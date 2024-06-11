import React, { useMemo, useEffect, useState } from "react";
import SplunkVisualization from '@splunk/visualizations/common/SplunkVisualization';
import { ResponsiveTree } from '@nivo/tree'
import useSplunkTheme from '@splunk/themes/useSplunkTheme';

// Format Data for the Nivo Tree Chart
const formatData = (dataSources) => {

    const defaultVizData = {
        "name": "SUI Sample Org"
    }
    if (!dataSources.primary) {
        return defaultVizData;
    }

    if(!dataSources.primary.data) {
        return defaultVizData;
    }

    const groupData = []
    const groupsArray = dataSources.primary.data.columns[0]
    const usersArray = dataSources.primary.data.columns[1]

    groupsArray.forEach((col, i) => {
        const users = []

        if(usersArray[i]) {
            if(Array.isArray(usersArray[i])) {
                usersArray[i].forEach((user) => {
                    users.push({name: user})
                })
            }
            else if (typeof usersArray[i] === 'string') {
                users.push({name: usersArray[i]})
            }
        }

        groupData.push({
            name: col,
            children: users
        })

    });

    return {
        ...defaultVizData,
        children: groupData
    };
};

const DomainChart = (props) => {

    const { width, height, dataSources } = props;

    const [chartData,setChartData] = useState({});

    const { contentColorActive, backgroundColorScrim } = useSplunkTheme();

    const chartTheme = {
        text: {
            fill: contentColorActive
        }
    }

    const style = useMemo(
        () => ({
            height,
            width,
            overflow: 'auto',
        }),
        [width, height]
    );

    useEffect(() => {
        setChartData(formatData(dataSources));
    }, [dataSources]);

    return (
        <div style={style}>
             <ResponsiveTree
                data={chartData}
                identity="name"
                activeNodeSize={36}
                nodeSize={24}
                inactiveNodeSize={24}
                nodeColor={{ scheme: 'tableau10' }}
                fixNodeColorAtDepth={1}
                linkThickness={2}
                activeLinkThickness={8}
                inactiveLinkThickness={2}
                theme={chartTheme}
                orientLabel={false}
                linkColor={{
                    from: 'target.color',
                    modifiers: [
                        [
                            'opacity',
                            0.4
                        ]
                    ]
                }}
                margin={{ top: 90, right: 90, bottom: 90, left: 90 }}
                motionConfig="stiff"
                meshDetectionRadius={80}
            />
        </div>
    );

};

DomainChart.propTypes = {
    ...SplunkVisualization.propTypes,
};
DomainChart.defaultProps = {
    ...SplunkVisualization.defaultProps,
};

DomainChart.dataContract = {
    // required data sources
    requiredDataSources: ['primary'],
    // initial requestParams for each data sources
    initialRequestParams: {
        primary: {
            offset: 0,
            count: 50,
        },
    },
};

DomainChart.config = {
    dataContract: {},
    editorConfig: [],
    optionsSchema: {},
    key: 'viz.CustomTreeChart',
    name: 'Custom Tree Chart',
    icon: () => <div />,
    category: 'Comparisons',
};

export default DomainChart;