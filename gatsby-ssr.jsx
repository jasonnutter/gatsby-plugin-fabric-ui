import React from 'react';
import { renderToString } from 'react-dom/server';
import { configureLoadStyles } from '@microsoft/load-themed-styles';

let _allStyles = '';

configureLoadStyles(styles => {
    _allStyles += styles;
});

export function replaceRenderer({
    bodyComponent,
    replaceBodyHTMLString,
    setHeadComponents
}) {
    const bodyHTML = renderToString(bodyComponent);
    replaceBodyHTMLString(bodyHTML);
    setHeadComponents([
        <style
            type="text/css"
            dangerouslySetInnerHTML={{
                __html: _allStyles,
            }}
        />,
    ]);
}
