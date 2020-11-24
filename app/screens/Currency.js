import React from 'react'
import currencies from '../components/Data/currencies'
import { FlatList, Text, View } from 'react-native';
import ListItem from '../components/List/ListItems'
import Separator from '../components/List/Separator';
import { changeBaseCurrency, changeQuoteCurrency } from '../redux/actions/currencies'
import { connect } from 'react-redux'

class Currencies extends React.Component {

    HandlePress = (currency) => {
        if (this.props.route.params.type === 'CHANGE_BASE_CURRENCY') {
            this.props.dispatch(changeBaseCurrency(currency))
        } else {
            this.props.dispatch(changeQuoteCurrency(currency))
        }

        console.log(this.props.primaryColor)
        this.props.navigation.goBack()
    }
    render() {
        let TEMP_CHOICE = ' '
        if (this.props.route.params.type === 'CHANGE_BASE_CURRENCY') {
            TEMP_CHOICE = this.props.baseCurrency
        } else {
            TEMP_CHOICE = this.props.quoteCurrency
        }
        return (
            <View>
                <FlatList
                    data={currencies}
                    renderItem={({ item }) => {
                        return (
                            <ListItem
                                text={item}
                                selected={item === TEMP_CHOICE}
                                onPress={() => this.HandlePress(item)}
                                colorTheme={this.props.primaryColor}
                            />
                        )
                    }}
                    keyExtractor={item => item}
                    ItemSeparatorComponent={Separator}
                >
                </FlatList>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return (
        {
            baseCurrency: state.currencies.baseCurrency,
            quoteCurrency: state.currencies.quoteCurrency,
            primaryColor: state.themes.primaryColor,
        }
    )
}

export default connect(mapStateToProps)(Currencies);