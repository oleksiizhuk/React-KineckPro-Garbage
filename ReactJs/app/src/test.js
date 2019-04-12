import React from "react";
var Box = React.createClass({
    render: function() {
        return <h1>Hello</h1>;
    }
});

React.render(
    <Box />,
    document.getElementById("content")
);