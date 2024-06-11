import React from 'react';

import layout from '@splunk/react-page';
import FirstComponent from '@splunk/first-component';
import { getUserTheme } from '@splunk/splunk-utils/themes';

import { StyledContainer, StyledGreeting } from './StartStyles';

getUserTheme()
    .then((theme) => {
        layout(
            <StyledContainer>
                <StyledGreeting>Hello, from inside SuiSampleApp!</StyledGreeting>
                <div>Your component will appear below.</div>
                <FirstComponent name="from inside FirstComponent" />
            </StyledContainer>,
            {
                theme,
            }
        );
    })
    .catch((e) => {
        const errorEl = document.createElement('span');
        errorEl.innerHTML = e;
        document.body.appendChild(errorEl);
    });
