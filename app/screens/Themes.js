import React from 'react'
import { ScrollView } from 'react-native';
import ListItem from '../components/List/ListItems'
import Separator from '../components/List/Separator';
import EStyleSheet from 'react-native-extended-stylesheet';
import { changeThemes } from '../redux/actions/themes';
import { connect } from 'react-redux'

const styles = EStyleSheet.create({
    $blue: '$primaryBlue',
    $orange: '$primaryOrange',
    $green: '$primaryGreen',
    $purple: '$primaryPurple',
})

class Themes extends React.Component {

    HandlePress = (color) => {
        this.props.dispatch(changeThemes(color))
        this.props.navigation.goBack();
    }

    render() {
        return (
            <ScrollView>
                <ListItem text='Blue' onPress={() => { this.HandlePress(styles.$blue) }} selected={true} checkmark={false} colorTheme={styles.$blue}></ListItem>
                <Separator></Separator>
                <ListItem text='Green' onPress={() => { this.HandlePress(styles.$green) }} selected={true} checkmark={false} colorTheme={styles.$green}></ListItem>
                <Separator></Separator>
                <ListItem text='Orange' onPress={() => { this.HandlePress(styles.$orange) }} selected={true} checkmark={false} colorTheme={styles.$orange}></ListItem>
                <Separator></Separator>
                <ListItem text='Purple' onPress={() => { this.HandlePress(styles.$purple) }} selected={true} checkmark={false} colorTheme={styles.$purple}></ListItem>
                <Separator></Separator>
            </ScrollView>
        );
    }
}

export default connect()(Themes);