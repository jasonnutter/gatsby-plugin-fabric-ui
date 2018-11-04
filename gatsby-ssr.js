const React = require('react');
const { renderToString } = require('react-dom/server');
const { configureLoadStyles } = require('@microsoft/load-themed-styles');

let _allStyles = '';

configureLoadStyles(styles => {
    _allStyles += styles;
});

function replaceRenderer({
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

exports.replaceRenderer = replaceRenderer;
