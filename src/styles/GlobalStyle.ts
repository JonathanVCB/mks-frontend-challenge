import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 /* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
  box-sizing: border-box;
  font-family: 'Inter', sans-serif;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
  box-sizing: border-box;
}
body {
	line-height: 1;
  width: 100vw;
  height: 100vh;
  background-color: var(--Grey-4);
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
button{
  cursor: pointer;
  transition: 0.7s;
}
a{
  transition: 0.7s;
}
main{
  height: 100%;
}
#root{
  height: 100%;
}


:root{
    /* Primary Palette */
    --Color-primary: #0F52BA;
    --Black-0:#000000;
    --Black-2:#373737;
    --Black-3:#2C2C2C;
    --White-0:#fff;

    
    /* Feedback Palette */
    --Sucess:#3FE864;
    --Negative:#E83F5B;
}

`;
export default GlobalStyle;
