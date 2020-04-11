import React from 'react';

import { Switch, Route } from 'react-router-dom'

const pages = [
    {
        exact: true,
        id: 'home',
        path: '/',
        title: 'Home',
        page: 'home',
    },
];

const MyRoute = ({
    title,
    page,
    props,
}) => {

    React.useEffect(() => {
        document.title = title || 'T';
    }, [])

    return (
        <Route {...props}>
            {page}
        </Route>
    )
}


export function Routes() {
	return (
		<Switch>
            { pages.map(page => {
                if (!page.path || !page.page) return null;

                return (
                    <MyRoute
                        key={page.id}
                        {...page}
                    />
                )
            })}
		</Switch>
	);
}
