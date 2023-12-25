
class StateButton_comp extends React.Component {
    constructor(props) {
        super(props);

        // os meus dados
        this.state = { estado: false };
        this.myVar = "ola";
        // this.handleStateChange = this.handleStateChange.bind(this);
    }

    handleStateChange() {
        console.log(this)
        console.log(this.myVar)
        this.setState({ estado: !this.state.estado });
    }

    render() {
        let status;
        if (this.state.estado) status = 'Estado atual: true'; 
        else status = 'Estado atual: false';

        // VISIBLE
        return React.createElement('div', null,
            React.createElement('h1', null, status),
            // React.createElement('button', { onClick: this.handleStateChange }, 'Muda de Estado') // only work if bound in the constructor
            // React.createElement('button', { onClick: function() {this.handleStateChange()} }, 'Muda de Estado') // never works
            React.createElement('button', { onClick: () => {this.handleStateChange()} }, 'Muda de Estado') // always works (ecause the closure caused by the arrow function. This allows the correct this to be used inside the handler)
            // React.createElement('button', { onClick: () => { this.handleStateChange.bind(this); this.handleStateChange()} }, 'Muda de Estado') // of course it always works 
        );
    }
}
ReactDOM.render(React.createElement(StateButton_comp), document.body);



function ExemploComponente({name}) {
    return React.createElement('h1', {style: {color: "red"} }, `Olá ${name}!`);
}
// ReactDOM.render(React.createElement(ExemploComponente, {name: "joao"}), document.body);



