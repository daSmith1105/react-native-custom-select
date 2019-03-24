import React from 'react';
import Select from './components/Select';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedItems: [2],
      selectedPlaces: []
    };

  }

  onSelectedItemsChange = selectedItems => {
    alert(selectedItems)
    this.setState({ selectedItems });
  };

  onSelectedPlacesChange = selectedPlaces => {
    this.setState({ selectedPlaces });
  };

  render() {

    const { selectedItems, selectedPlaces } = this.state;

    const items = [{
      id: 'a0s0a8ssbsa',
      name: 'Ondo',
    }, {
      id: 'a0s0a8ssbsd',
      name: 'Ogun',
    }, {
      id: '16hbajsabsd',
      name: 'Calabar',
    }, {
      id: 'nahs75a5sg',
      name: 'Lagos',
    }, {
      id: '667atsas',
      name: 'Maiduguri',
    }, {
      id: 'hsyasajs',
      name: 'Anambra',
    }, {
      id: 'djsjudksjd',
      name: 'Benue',
    }, {
      id: 'sdhyaysdj',
      name: 'Kaduna',
    }, {
      id: 'suudydjsjd',
      name: 'Abuja',
    }];

    const places = [{
      id: '92iijs7yta',
      name: 'Maryland',
    }, {
      id: 'a0s0a8ssbsd',
      name: 'Brooklyn',
    }, {
      id: '16hbajsabsd',
      name: 'Boston',
    }, {
      id: 'nahs75a5sg',
      name: 'Florida',
    }, {
      id: '667atsas',
      name: 'Washington',
    }];

    return (
      <View style={{ flex: 1, paddingTop: 200 }}>
        <View style={ styles.container }> 
          {/* <Text style={{ fontSize: 30, marginBottom: 20 }}>Items:</Text> */}
          <Select 
              single={ true }
              items={ items }
              uniqueKey="id"
              displayKey="name"
              ref={ (component) => { this.multiSelect = component } }
              onSelectedItemsChange={ this.onSelectedItemsChange }
              selectedItems={ selectedItems }
              onChangeInput={ (text)=> console.log(text) }
              onAddItem={ () => {}}
              canAddItems={ true } //default: false
              fixedHeight={ false } //default
              hideDropdown={ false } //default
              hideSubmitButton={ false } //default
              hideTags={ false } //default
              selectText="Item"
              searchInputPlaceholderText="Search Items..."
              searchInputStyle={{ color: '#CCC', fontSize: 30 }}
              styleMainWrapper={{ width: 600, padding: 20 }}
              // styleDropdownMenu={{}}
              styleDropdownMenuSubsection={{  height: 54, paddingLeft: 10, marginBottom: 30, marginTop: 20 }}
              styleInputGroup={{ paddingTop: 20, justifyContent: 'center' }}
              // styleItemsContainer={{ borderWidth: 5, borderColor: 'green' }}
              // styleSelectorContainer={{}}
              // styleListContainer={{}}
              styleRowList={{ borderBottomWidth: 2, borderColor: 'lightgrey', padding: 5 }}
              styleTextDropdown={{}}
              fontSize={ 30 }
              itemFontSize={ 30 }
              itemTextColor="#000"
              tagRemoveIconColor="red"
              tagBorderColor="grey"
              tagTextColor="grey"
              textColor="black"
              selectedItemTextColor="#CCC"
              selectedItemIconColor="#CCC"
              submitButtonColor="green"
              submitButtonText="Submit"
              // flatListProps={}  
              textInputProps={{ clearButtonMode: 'always' }}
              />
        </View>
        <View style={ styles.container }> 
          {/* <Text style={{ fontSize: 30, marginBottom: 20 }}>Places:</Text> */}
          <Select 
              single={ false }
              items={ places }
              uniqueKey="id"
              displayKey="name"
              ref={ (component) => { this.multiSelect = component } }
              onSelectedItemsChange={ this.onSelectedPlacesChange }
              selectedItems={ selectedPlaces }
              onChangeInput={ (text)=> console.log(text) }
              onAddItem={ () => {}}
              canAddItems={ true } //default: false
              fixedHeight={ false } //default
              hideDropdown={ false } //default
              hideSubmitButton={ false } //default
              hideTags={ false } //default
              selectText="Places:"
              searchInputPlaceholderText="Search Items..."
              searchInputStyle={{ color: '#CCC', fontSize: 30 }}
              styleMainWrapper={{ width: 600, padding: 20 }}
              // styleDropdownMenu={{}}
              styleDropdownMenuSubsection={{  height: 54, paddingLeft: 10, marginBottom: 30, marginTop: 20 }}
              styleInputGroup={{ paddingTop: 20, justifyContent: 'center' }}
              // styleItemsContainer={{ borderWidth: 5, borderColor: 'green' }}
              // styleSelectorContainer={{}}
              // styleListContainer={{}}
              styleRowList={{ borderBottomWidth: 2, borderColor: 'lightgrey', padding: 5 }}
              styleTextDropdown={{}}
              fontSize={ 30 }
              itemFontSize={ 30 }
              itemTextColor="#000"
              tagRemoveIconColor="red"
              tagBorderColor="grey"
              tagTextColor="grey"
              textColor="black"
              selectedItemTextColor="#CCC"
              selectedItemIconColor="#CCC"
              submitButtonColor="green"
              submitButtonText="Submit"
              // flatListProps={}  
              textInputProps={{ clearButtonMode: 'always' }}
              />
        </View>

        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
