import { ThemeProps } from '@/types/interfaces';
import { styled } from 'styled-components';

export const HeaderWrapper = styled.header`
  background: ${(props) => props.theme.primary};
`;

export const FooterWrapper = styled.footer`
  background: ${(props) => props.theme.primary};
`;
