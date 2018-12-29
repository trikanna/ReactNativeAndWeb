import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Router, Switch, Route } from './routing/routing';

import Welcome from './components/welcome/Welcome';
import Detail from './components/detail/Detail';

export default class App extends React.Component {
  state = {
    selectedItem: null
  };

  selectItem = selectedItem => {
    this.setState({
      selectedItem
    });
  };

  render() {
    const { selectedItem } = this.state;

    return (
      <View style={styles.container}>
        <Router>
          <Switch>
            <Route
              exact
              path="/"
              render={props => <Welcome {...props} selectItem={this.selectItem} />}
            />
            <Route
              path="/detail"
              render={props => <Detail {...props} selectedItem={selectedItem} />}
            />
          </Switch>
        </Router>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    padding: 10
  }
});
