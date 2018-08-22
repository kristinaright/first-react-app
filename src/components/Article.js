import React, { PureComponent } from 'react';

class Article extends PureComponent {
  incrementCounter = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };


  // shouldComponentUpdate(nextProps, nextState) {
  //   return this.state.isOpen !== nextState.isOpen
  // }

  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.defaultOpen !== this.props.defaultOpen) this.setState({
  //     isOpen: nextProps.defaultOpen
  //   })
  // }

  componentWillMount() {
    console.log('---', 'mounting');
  }

  componentWillUpdate() {
    console.log('---', 'will update');
  }

  render() {
    const { article, isOpen, onButtonClick } = this.props;
    const body = isOpen && <section className="card-text">{article.text}</section>;

    return (
      <div className="card mx-auto" style={{ width: '50%' }}>
        <div className="card-header">
          <h2 onClick={this.incrementCounter}>
            {article.title}
            clicked {this.state.count}
            <button onClick={onButtonClick} className="btn btn-primary btn-lg float-right">
              {isOpen ? 'close' : 'open'}
            </button>
          </h2>
        </div>
        <div className="card-body">
          <h6 className="card-subtitle text-muted">
            creation date: {(new Date(article.date)).toDateString()}
          </h6>
          {body}
        </div>
      </div>
    );
  }
}


export default Article;