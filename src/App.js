import React, { useEffect } from 'react';
import Root from './Root';
import { MuiThemeProvider, CssBaseline } from '@material-ui/core';
import mainTheme from './MuiTheme'

import store from './reducers';
import { Provider } from 'react-redux';

function App() {
  useEffect(() => {
  }, [])
  return (
    <MuiThemeProvider theme={mainTheme}>
      <CssBaseline />
      {/* <Suspense fallback={<RenderLoaderComponent />}> */}
        <Provider store={store}>
          <Root />
        </Provider>
      {/* </Suspense> */}
    </MuiThemeProvider>
  );
}

export default App;
