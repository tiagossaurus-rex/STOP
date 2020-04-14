import React from 'react';

import { Switch, Route } from 'react-router-dom';

import { Game } from './Game';
import { Create } from './Create';

const pages = [
    {
        exact: true,
        id: 'game',
        path: '/g/:id',
        title: 'Home',
        children: <Game />,
    },
    {
        exact: true,
        id: 'create',
        path: '/create',
        title: 'Create New Game',
        children: <><Create /> <Game /></>,
    },
    {
        id: '404',
        path: '/',
        title: '404',
        children: <div>404</div>,
    },
];

const MyRoute = ({
    title,
    ...props
}) => {

    React.useEffect(() => {
        document.title = title || 'T';
    }, [])

    return <Route {...props} />
}


export function Routes() {
	return (
		<Switch>
            { pages.map(page => {
                if (!page.path || !page.children) return null;
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
