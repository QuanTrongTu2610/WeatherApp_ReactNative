import React from 'react'
import ListItem from '../components/List/ListItems'
import Separator from '../components/List/Separator'
import { ScrollView, Linking } from 'react-native';
import Icon from 'react-native-ionicons';


const IconColor = '#868686'
const IconSize = 28

class Option extends React.Component {
    handleThemes = () => {
        this.props.navigation.navigate('Themes')
    }
    handleSite() {
        Linking.openURL('http://fixer.io').catch(() => { alert('Error 404') })
    }

    render() {
        return (
            <ScrollView>
                <ListItem
                    text='Themes'
                    onPress={this.handleThemes}
                    customIcon={<Icon name="add"></Icon>}>
                </ListItem>
                <Separator></Separator>
                <ListItem
                    text='Site'
                    onPress={this.handleSite.bind(this)}
                    customIcon={<Icon name="add"></Icon>}>
                </ListItem>
                <Separator></Separator>
            </ScrollView>
        );
    }
}

export default Option;