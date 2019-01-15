import React, { Component } from 'react';
import marked from 'marked';
import './styles.scss'

export const demoInput =
  '# This is a header\n## This is a subheader \nThis is a Windows 3.1 themed Markdown previewer which previews Github flavored Markdown, for more info about Markdown, click [here](https://github.github.com/gfm/). In case you think this text sucks, it does, I already spent too much time working out the CSS to bother too much with this, sorry about that!\n```\n<somecode id="somecode">\n <someothercode>\n```\nThis is `also some code`, as you can see.\n\nYou can also have **bold** or _italic_ text\n>and Blockquotes.\n- Lists\n- are also possible.\n- They don\'t\n- need to be numbered\n\n1. but\n1. they can be.\nAlso, here\'s the react logo:\n\n![React logo](https://goo.gl/Umyytc)';

export const TopBar = (props) => { 
  return (
    <div className="top-bar">
      <div style={{fontSize: 11}} className="left-button button">
        <div id="dash" />
      </div>
      <div className="bar-title">
      Markdown {props.title}
      </div>
      <div className="right-button button" style={{fontSize: 17}} >
        {String.fromCharCode(9662)}
      </div>
      <div className="right-button button" style={{fontSize: 16}} >
        {String.fromCharCode(9652)}
      </div>
    </div>
  )
}

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: demoInput
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  render() {
    return (
      <div>
        <div className="wrapper" id="editor-wrapper">
          <TopBar title="Input" />
          <textarea
            id="editor"
            value={this.state.input}
            onChange={this.handleChange}
          />
        </div>
        <div className="wrapper" id="preview-wrapper">
          <TopBar title="Preview" />
          <div
            id="preview"
            dangerouslySetInnerHTML={{
              __html: marked(this.state.input, { gfm: true })
            }}
          />
        </div>
      </div>
    );
  }
}