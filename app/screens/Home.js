import React, { Component } from 'react'
import { Image, Text, View, Dimensions, TouchableOpacity, FlatList, ImageBackground, ScrollView } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import DataList from '../components/data/time'
import Item from './StatusList'
import DayList from './Daylist'
import dayData from '../components/data/day'
import Separator from '../components/separator/Separator'
import Detail from './Detail'
import { connect } from 'react-redux'
import { getInit } from '../redux/action'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const times = []
const days = []

const styles = EStyleSheet.create({
    $primaryColor: '$darkBlue',
    $secondColor: '$orange',
    totalBackGround: {
        flex: 1,
    },
    header: {
        marginTop: height / 50,
        marginLeft: width / 30,
        marginRight: width / 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

    },
    iconSearch: {
        resizeMode: 'contain',
        height: 25,
        width: 25,
    },
    title: {
        color: 'white',
        fontSize: 18,
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold'
    },
    body: {
        marginTop: 15,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'

    },
    iconWeather: {
        resizeMode: 'contain',
        width: 30,
        height: 30,
    },
    degree: {
        marginLeft: 20,
        fontSize: 70,
        color: 'white'
    },
    information: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    textStatus: {
        color: 'white',
        fontSize: 16
    },
    containTextStatus: {
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 15,
        marginBottom: 20,
        margin: 30,
    },

    dayItem: {
        // alignItems: 'center'
    }
})

class Home extends Component {
    componentDidMount() {
        this.props.dispatch(getInit())
    }

    changeDegreeFormat = (degree) => {
        const result = (degree - 32) / 1.8
        return result.toFixed(0)
    }

    timeConvert = (time) => {
        const converTime = new Date(time * 1000)
        const result = converTime.getHours()
        return result
    }

    renderDay = (item) => {
        var result = 'hello'
        var day = new Date(item['time'] * 1000).getDay()
        switch (day) {
            case 0:
                result = 'Sunday'
                break;
            case 1:
                result = 'Monday'
                break;
            case 2:
                result = 'Tuesday'
                break;
            case 3:
                result = 'Wednesday'
                break;
            case 4:
                result = 'Thurday'
                break;
            case 5:
                result = 'Friday'
                break;
            case 6:
                result = 'Saturday'
                break;
        }
        return result
    }

    renderIcon = (item) => {
        var result = null
        switch (item['icon']) {
            case 'clear-day':
                result = require('../components/weather-icons/clear-day.png')
                break;
            case 'clear-night':
                result = require('../components/weather-icons/clear-night.png')
                break;
            case 'rain':
                result = require('../components/weather-icons/rain.png')
                break;
            case 'snow':
                result = require('../components/weather-icons/snow.png')
                break;
            case 'sleet':
                result = require('../components/weather-icons/sleet.png')
                break;
            case 'wind':
                result = require('../components/weather-icons/wind.png')
                break;
            case 'fog':
                result = require('../components/weather-icons/fog.png')
                break;
            case 'cloudy':
                result = require('../components/weather-icons/cloudy.png')
                break;
            case 'partly-cloudy-day':
                result = require('../components/weather-icons/partly-cloudy-day.png')
                break;
            case 'partly-cloudy-night':
                result = require('../components/weather-icons/partly-cloudy-night.png')
                break;
        }

        return result
    }
    render() {
        return (
            <ImageBackground source={require('../components/image-background/background.gif')} style={styles.totalBackGround}>
                <View style={styles.header}>
                    <TouchableOpacity>
                        <Image style={styles.iconSearch} source={require('../components/icons/more.png')}></Image>
                    </TouchableOpacity>
                    <Text style={styles.title}>Weather Forcaster</Text>
                </View>
                <View style={styles.body}>
                    <Image style={styles.iconWeather} source={this.renderIcon(this.props.data[0])}></Image>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.degree}>{this.changeDegreeFormat(this.props.temperature)}</Text>
                        <Text style={{ color: styles.$secondColor, fontSize: 50 }}>°C</Text>
                    </View>
                </View>
                <View style={styles.information}>
                    <Text style={{ color: 'white', letterSpacing: 0.5, fontSize: 20, fontWeight: 'bold' }}>{this.props.location}</Text>
                    <Text style={{ color: styles.$secondColor, fontSize: 16 }}>{this.props.status}</Text>
                </View>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                >
                    <View style={styles.containTextStatus}>
                        <Text style={styles.textStatus}>{this.props.overall}</Text>
                    </View>
                    {/*Scroll View*/}

                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: styles.$secondColor, fontSize: 20, fontWeight: 'bold' }}>Overall Forcaster</Text>
                        <FlatList
                            horizontal={true}
                            data={this.props.data}
                            renderItem={({ item }) => {
                                return (
                                    <View>
                                        <Item
                                            time={this.timeConvert(item['time'])}
                                            source={
                                                this.renderIcon(item)
                                            }
                                            degree={this.changeDegreeFormat(item['temperature'])}
                                        ></Item>
                                    </View>
                                )
                            }}
                            keyExtractor={item => item}
                            showsHorizontalScrollIndicator={false}
                        >
                        </FlatList>
                    </View>
                    <Separator></Separator>
                    <View style={{
                        marginTop: 10,
                        marginBottom: 10,
                        marginLeft: width / 10,
                        marginRight: width / 30,
                    }}>
                        <FlatList
                            data={this.props.days}
                            renderItem={
                                ({ item }) => {
                                return (
                                    <View style={styles.dayItem}>
                                        <DayList
                                            name={this.renderDay(item)}
                                            source={this.renderIcon(item)}
                                            minTemp={this.changeDegreeFormat(item['temperatureLow'])}
                                            maxTemp={this.changeDegreeFormat(item['temperatureHigh'])}
                                        >
                                        </DayList>
                                    </View>
                                )
                            }}
                            keyExtractor={item => item}
                            showsHorizontalScrollIndicator={false}
                        >
                        </FlatList>
                    </View>
                    <Separator></Separator>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ justifyContent: 'flex-start', marginTop: 10, marginBottom: 10, marginLeft: 80, marginRight: 80 }}>
                            <Detail title={'ClOUD COVER'} informarion={this.props.cloudCover}></Detail>
                            <Detail title={'OZONE'} informarion={this.props.ozone}></Detail>
                            <Detail title={'UV INDEX'} informarion={this.props.uv}></Detail>
                            <Detail title={'FEELS LIKE'} informarion={this.props.feels}></Detail>
                        </View>
                        <View style={{ justifyContent: 'flex-start', marginTop: 10, marginBottom: 10, marginLeft: 50 }}>
                            <Detail title={'WIND'} informarion={this.props.wind}></Detail>
                            <Detail title={'PRESSURE'} informarion={this.props.pressure}></Detail>
                            <Detail title={'VISIBILITY'} informarion={this.props.visibility}></Detail>
                        </View>
                    </View>
                </ScrollView>
            </ImageBackground >
        )
    }
}


mapStatetoProps = (state) => {
    const current = state.currently
    return ({
        days: state.daily['data'],
        data: state.hourly['data'],
        location: state.timeZone,
        temperature: current['temperature'],
        status: state.currently['summary'],
        overall: state.hourly.summary,
        cloudCover: current['cloudCover'],
        wind: current['windSpeed'],
        ozone: current['ozone'],
        pressure: current['pressure'],
        visibility: current['visibility'],
        uv: current['uvIndex'],
        feels: current['apparentTemperature'],
    })
}

export default connect(mapStatetoProps)(Home)