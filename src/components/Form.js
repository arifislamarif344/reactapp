import React from 'react';

class Form extends React.Component {
    state = {
        title: 'JavaScript',
        text: 'JavaScript is Awesome',
        library: 'React',
        isAwesome: true,
    };

    handleChange = (e) => {
        if (e.target.type === 'text') {
            this.setState({
                title: e.target.value,
            });
        } else if (e.target.type === 'textarea') {
            this.setState({
                text: e.target.value,
            });
        } else if (e.target.type === 'select-one') {
            this.setState({
                library: e.target.value,
            });
        } else if (e.target.type === 'checkbox') {
            this.setState({
                isAwesome: e.target.checked,
            });
        }
    };

    submitHandler = (e) => {
        const { title, text, library, isAwesome } = this.state;
        e.preventDefault();
        console.log(title, text, library, isAwesome);
    };

    render() {
        const { title, text, library, isAwesome } = this.state;

        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <input type="text" value={null} />
                    <br />
                    <br />
                    <input
                        type="text"
                        placeholder="Enter the title"
                        value={title}
                        onChange={this.handleChange}
                    />
                    <br />
                    <br />
                    <textarea name="text" value={text} onChange={this.handleChange} />
                    <br />
                    <br />
                    <select value={library} onChange={this.handleChange}>
                        <option value="React">React</option>
                        <option value="Angular">Angular</option>
                    </select>
                    <br />
                    <br />
                    <input type="checkbox" checked={isAwesome} onChange={this.handleChange} />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default Form;
