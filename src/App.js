

import React from 'react'
import PropTypes from 'prop-types'
import AppContext from './AppContext'

/**
 * The top-level React component setting context (global) variables
 * that can be accessed from all the child components.
 *
 * https://facebook.github.io/react/docs/context.html
 *
 * Usage example:
 *
 *   const context = {
 *     history: createBrowserHistory(),
 *     store: createStore(),
 *   };
 *
 *   ReactDOM.render(
 *     <App context={context} insertCss={() => {}}>
 *       <Layout>
 *         <LandingPage />
 *       </Layout>
 *     </App>,
 *     container,
 *   );
 */

export default function App({ context, children }) {
  // NOTE: If you need to add or modify header, footer etc. of the app,
  // please do that inside the Layout component.
  return (
      <AppContext.Provider value={{ context }}>
        {React.Children.only(children)}
      </AppContext.Provider>
  );
}

App.propTypes = {
  context: PropTypes.shape({
    // Universal HTTP client
  //  fetch: PropTypes.func.isRequired,
    pathname: PropTypes.string.isRequired,
    query: PropTypes.object,
  }).isRequired,
  children: PropTypes.element.isRequired,
}