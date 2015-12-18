let Actions = React.createClass({
    render() {
        return (
            <div className="actions">{this.props.children}</div>
        )
    }
});

_.extend(FormComponents,{Actions});