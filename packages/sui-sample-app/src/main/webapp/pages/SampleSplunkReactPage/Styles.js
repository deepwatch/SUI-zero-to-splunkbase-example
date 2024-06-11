import styled, {createGlobalStyle} from 'styled-components';
import { variables, mixins } from '@splunk/themes';

export const StyledContainer = styled.div`
    ${mixins.reset('inline')};
    display: block;
    font-size: ${variables.fontSizeLarge};
    line-height: 200%;
    margin: ${variables.spacingXXLarge} ${variables.spacingXXLarge};
`;

export const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${variables.backgroundColorPage};
    }
`