import EStyleSheet from 'react-native-extended-stylesheet'

export default EStyleSheet.create({
    $underlayColor: '$border',

    row: {
        paddingHorizontal: 20,
        paddingVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        alignItems: 'center'
    },
    text: {
        fontSize: 16,
        color: '$darkText',
        fontWeight: '600'
    },
    separator: {
        marginRight: 20,
        marginLeft: 20,
        backgroundColor: '$border',
        height: 0.5,
        flex: 1
    },

    icon: {
        width: 30,
        height: 30,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },

    iconVisible: {
        backgroundColor: '$primaryBlue'
    },
    checked: {
        width: 18,
        height: 18,
        resizeMode: 'contain'
    }
});