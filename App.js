import React from 'react';
import {View, Text, Button} from 'react-native';
import FileViewer from 'react-native-file-viewer';

class App extends React.Component {
  openBook = () => {
    const path = '/assets/books/book.epub';
    FileViewer.open(path)
      .then(res => {
        console.log('RES', res);
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <View style={{height: '100%', position: 'relative'}}>
        <Text> Hello</Text>
        <Button title="show" onPress={this.openBook} />
      </View>
    );
  }
}

export default App;
