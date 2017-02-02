// We only need to import the modules necessary for initial render
import React, {Component} from "react";
import Navbar from "./containers/Navbar";
import "./styles/core.scss";

class RootUI extends Component {
	static propTypes = {
		children: React.PropTypes.element.isRequired
	};

	render() {
		var {children} = this.props;
		return (
			<div>
				<Navbar/>
				<div>
					{children}
				</div>
			</div>
		);
	}
}

import Home from "./routes/Home";
import LoginRoute from "./routes/Login";
import SignupRoute from "./routes/Signup";
import ProjectsRoute from "./routes/Projects";
import AccountRoute from "./routes/Account";

/*  Note: Instead of using JSX, we recommend using react-router
    PlainRoute objects to build route definitions.   */

export default function createRoutes(store) {
	return {
		path: "/",
		component: RootUI,
		indexRoute: Home,
		childRoutes: [
			AccountRoute(store),
			LoginRoute(store),
			SignupRoute(store),
			ProjectsRoute(store)
		]
	};
}

/*  Note: childRoutes can be chunked or otherwise loaded programmatically
    using getChildRoutes with the following signature:

    getChildRoutes (location, cb) {
      require.ensure([], (require) => {
        cb(null, [
          // Remove imports!
          require("./Counter").default(store)
        ])
      })
    }

    However, this is not necessary for code-splitting! It simply provides
    an API for async route definitions. Your code splitting should occur
    inside the route `getComponent` function, since it is only invoked
    when the route exists and matches.
*/