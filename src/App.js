import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import {Web3Provider} from "./contexts/Web3Context";
// routes
import Router from './routes';
// theme
import ThemeProvider from './theme';
// components
import { StyledChart } from './components/chart';
import ScrollToTop from './components/scroll-to-top';

// ----------------------------------------------------------------------

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ThemeProvider>
          <Web3Provider>
            <ScrollToTop />
            <StyledChart />
            <Router />
          </Web3Provider>
        </ThemeProvider>
      </BrowserRouter>
    </HelmetProvider>
  );
}
