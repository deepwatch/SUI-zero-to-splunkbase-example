import React from 'react';
import layout from '@splunk/react-page';
import Heading from '@splunk/react-ui/Heading';
import { getUserTheme, getThemeOptions } from '@splunk/splunk-utils/themes';
import SplunkThemeProvider from '@splunk/themes/SplunkThemeProvider';
import { StyledContainer, GlobalStyle } from './Styles';
import StepLayout from './StepLayout';

getUserTheme()
    .then((theme) => {

        const splunkTheme = getThemeOptions(theme);

        layout(
            <SplunkThemeProvider family="prisma" density="compact" colorScheme={splunkTheme.colorScheme}>

                <StyledContainer>
                    <GlobalStyle />
                    <StepLayout />
                    <Heading level={1}>Hello, from inside SampleSplunkReactPage!</Heading>
                </StyledContainer>

            </SplunkThemeProvider>
            ,
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
