import React from 'react'
import styles from './styles'
import { View, ImageBackground, Text, Image, Animated, Keyboard, StyleSheet } from 'react-native'


const duration_Anim = 500;
class Logo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            backgroundSize: new Animated.Value(styles.$largeBackgroundLogo),
            logoSize: new Animated.Value(styles.$largeLogo),
        };
    }

    componentDidMount() {
        this.KeyboardShow = Keyboard.addListener('keyboardDidShow', this.__KeyBoardShow.bind(this));
        this.KeyboardHide = Keyboard.addListener('keyboardDidHide', this.__KeyBoardHide.bind(this));
    }

    componentWillUnmount() {
        this.KeyboardShow.remove();
        this.KeyboardHide.remove();
    }

    __KeyBoardShow() {
        Animated.parallel([
            Animated.timing(this.state.backgroundSize,
                {
                    toValue: styles.$smallBackgroundLogo,
                    duration: duration_Anim
                }),

            Animated.timing(this.state.logoSize,
                {
                    toValue: styles.$smallLogo,
                    duration: duration_Anim
                })
        ]).start();
    }

    __KeyBoardHide() {
        Animated.parallel([
            Animated.timing(this.state.backgroundSize,
                {
                    toValue: styles.$largeBackgroundLogo,
                    duration: duration_Anim,
                }),

            Animated.timing(this.state.logoSize,
                {
                    toValue: styles.$largeLogo,
                    duration: duration_Anim,
                })
        ]).start();
    }

    render() {
        /*  because this is reference varible*/
        const primaryColor = this.props.primaryColor
        const backgroundLogoStyle = [styles.backgroundLogo, { width: this.state.backgroundSize, height: this.state.backgroundSize }]
        const logoStyle = [styles.logo, { width: this.state.logoSize }, { tintColor: primaryColor }]

        return (
            <View style={styles.container}>
                <Animated.View style={backgroundLogoStyle}>
                    <Animated.Image style={[StyleSheet.absoluteFill, backgroundLogoStyle]} source={require('./images/background.png')}></Animated.Image>
                    <Animated.Image style={logoStyle} source={require('./images/logo.png')}></Animated.Image>
                </Animated.View>
                <Text style={styles.text}>Currency Converter</Text>
            </View>
        );
    }
}

export default Logo;