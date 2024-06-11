import React from 'react';
import layout from '@splunk/react-page';
import { getUserTheme } from '@splunk/splunk-utils/themes';
import { GlobalStyle, StyledContainer } from './Styles';
import WinDashboard from './WinDashboard';

getUserTheme()
    .then((theme) => {
        layout(
            <StyledContainer>
                <GlobalStyle />
                <WinDashboard />
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
