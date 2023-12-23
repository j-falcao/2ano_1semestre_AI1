class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState( {value: event.target.value} );
    }

    handleSubmit(event) {
        console.log('A idade inserida é : '+ this.state.value);
        setState({ value: '' })
        event.preventDefault();
    }

    render() {
        return (
            React.createElement("form", { onSubmit: this.handleSubmit },
                React.createElement("div", { className: "form-group"},
                React.createElement("label", null, "Idade: "),
                React.createElement("input", { className: "form-control", type: "number", onChange: this.handleChange})),
                React.createElement("input", { className: "btn btn-primary", type: "submit", value: "Enviar"})
            )
        );
    }
}

ReactDOM.render(React.createElement(Form), document.body);