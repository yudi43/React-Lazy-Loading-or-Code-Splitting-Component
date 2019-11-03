import React from "react";

// importComponent is a function reference which is executed whenever any referred component has to be imported.
const asyncComponent = importComponent => {
  //this will return the Component which is imported lazily
  return class extends React.Component {
    state = {
      //the Component which is imported lazily
      component: null
    };

    componentDidMount() {
      importComponent().then(cmp => {
        //'cmp' will have one property called default, which is component we loaded dynamically
        this.setState({ component: cmp.default });
      });
    }

    render() {
      const C = this.state.component;
      //return C(the component to be rendered) with all its props, if its not null.
      return C ? <C props={...props}/> : null;
    }
  };
};
