const app = {
    title: 'Indecision app',
    subtitle: 'This is some info.',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();    
    const option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderOptions();
    }
};

const removeAll = () =>{
    app.options = [];
    renderOptions();
};

const onMakeDecision = () => {
    const randonNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randonNum];
    alert(option);
};

const renderOptions = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <o>{app.subtitle}</o>}
            <p>{app.options.length > 0 ? 'Here are your options:' : 'No options'}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={removeAll}>Remove All</button>
            <ol>
                {app.options.map((value, key) => {
                   return <li key={key}>{value}</li>
                })};
            </ol>
            <form onSubmit={onFormSubmit}>
            <input type="text" name="option"></input>
            <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
};


const appRoot = document.getElementById('app');

renderOptions();