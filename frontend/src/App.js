import React from 'react';

import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './styles/theme';

import { AppContextProvider } from './context';

import { Routes } from './routes';

function App() {
	return (
		<MuiThemeProvider theme={theme}>
			<CssBaseline />
			<AppContextProvider>
				<div className="App">
					<Routes />
				</div>
			</AppContextProvider>
		</MuiThemeProvider>
	);
}

export default App;
