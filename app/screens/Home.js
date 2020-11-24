import React, { Component } from 'react'
import { StatusBar } from 'react-native'
import Container from '../components/Container/Container'
import Logo from '../components/Logo/logo'
import InputButton from '../components/TextInput/TextInput'
import RefreshButton from '../components/Buttons/Button'
import LastConverted from '../components/Text/LastConverted'
import Header from '../components/Header/Header'
import { swapCurrency, changeAmount, getInitialConversion } from '../redux/actions/currencies'
import { connect } from 'react-redux'


class Home extends Component {

    componentWillMount() {
        this.props.dispatch(getInitialConversion())
    }

    ActionBase = () => {
        const { navigation } = this.props
        navigation.navigate('Currency', { title: 'Base Currrency', type: 'CHANGE_BASE_CURRENCY' })
    }

    ActionQuote = () => {
        const { navigation } = this.props
        navigation.navigate('Currency', { title: 'Quote Currency', type: 'CHANGE_QUOTE_CURRENCY' })
    }
    /*done */
    ActionReverse = () => {
        this.props.dispatch(swapCurrency())
    }

    ActionHeader = () => {
        this.props.navigation.navigate('Option');
    }
    /* done */
    ActionChangeText = (amount) => {
        this.props.dispatch(changeAmount(amount))
    }

    render() {
        let quotePrice = (this.props.amount * this.props.conversionRate).toFixed(2)
        if (this.props.isFetching) {
            quotePrice = '....';
        }
        return (
            <Container primaryColor={this.props.color}>
                <StatusBar translucent={false} barStyle='default' />
                <Header onPress={this.ActionHeader}></Header>
                <Logo primaryColor={this.props.color}></Logo>
                {/* Props */}
                <InputButton onPress={this.ActionBase} buttonText={this.props.baseCurrency} defaultValue={this.props.amount.toString()} onChangeText={this.ActionChangeText}></InputButton>
                <InputButton onPress={this.ActionQuote} buttonText={this.props.quoteCurrency} value={quotePrice.toString()} editable={false}></InputButton>
                <LastConverted
                    base={this.props.baseCurrency}
                    quote={this.props.quoteCurrency}
                    conversionRate={this.props.conversionRate.toFixed(2).toString()}
                    date={this.props.date}>
                </LastConverted>
                <RefreshButton onPress={this.ActionReverse} Text='Reverse Currency'></RefreshButton>
            </Container>
        );
    }
}


const mapStateToProps = (state) => {
    const baseCurrency = state.currencies.baseCurrency
    const quoteCurrency = state.currencies.quoteCurrency
    const amount = state.currencies.amount
    /*to fetch */
    const conversionSelector = state.currencies.conversions[baseCurrency] || {}
    const rates = conversionSelector.rates|| {}
    const conversionRate = rates[quoteCurrency] || 0  

    const isFetching = conversionSelector.isFetching
    const date = conversionSelector.date
    const color = state.themes.primaryColor
    return (
        {
            baseCurrency,
            quoteCurrency,
            amount,
            conversionRate,
            isFetching,
            date,
            color,
        }
    )
}

export default connect(mapStateToProps)(Home);