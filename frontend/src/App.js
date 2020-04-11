import React from 'react';

import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './styles/theme';

import { Routes } from './routes';

function App() {
	return (
		<MuiThemeProvider theme={theme}>
			<CssBaseline />
			<div className="App">
				<Routes />
			</div>
		</MuiThemeProvider>
	);
}

export default App;
