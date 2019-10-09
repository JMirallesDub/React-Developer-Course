class IndecisionApp extends React.Component {
render() {
    const title = 'Indecision';
    const subtitle = 'Put your like in the hands of a computer';
    const options = ['Thing one', 'Thing two', 'Thing four'];
    return (
        <div>
            <Header title={title} subtitle={subtitle} />
            <Action />
            <Options options={options}/>
            <AddOption />            
        </div>
    )
}
}
class Header extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    };
};


class Action extends React.Component {
    render() {
        return (
            <div>
                <button>What should I do?</button>
            </div>
        );
    };
};

class Options extends React.Component {
    constructor(props){
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
    }
    handleRemoveAll () {
        console.log(this.props.options);
        this.props.options = [];
        alert('Remove all the options.')
    }
    render() {
        return (
            <div>
            <button onClick={this.handleRemoveAll.bind(this)}>Remove all the options.</button>
            {
                this.props.options.map((option, index) => <Option key={index} optionText={option}/> ) 
            }
            </div>
        );
    };
};

class Option extends React.Component {
    render() {
        return (
            <div>
                {this.props.optionText}
            </div>
        );
    };
};

class AddOption extends React.Component {
    handleAddOption (e) {
        e.preventDefault();    
        const option = e.target.elements.option.value.trim();
        if (option) {
            alert(option);
            e.target.elements.option.value = '';
        }
    };
    
    render() {
        return (
            <div>
            <form onSubmit={this.handleAddOption}>
            <input type="text" name="option"></input>
            <button>Add Option</button>
            </form>
            </div>
        );
    };
};


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));