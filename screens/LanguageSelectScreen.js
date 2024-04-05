import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { HeaderButton, HeaderButtons, Item } from 'react-navigation-header-buttons';
import colors from '../utils/colors';
import { Ionicons } from '@expo/vector-icons';
import supportedlanguages from "../utils/sup"

const CustomHeaderButton = props => {
    return (
        <HeaderButton
            {...props}
            IconComponent={Ionicons}
            iconSize={23}
            color={colors.greyBackground}

        />
    )
}

const LanguageSelectScreen = ({ navigation, route }) => {
    const params = route.params || {}
    const {title} = params;
    useEffect(() => {
        navigation.setOptions({
            headerTitle: route.params.title,
            headerRight: () => (
                <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                    <Item
                        iconName="close"
                        color={colors.Black}
                        onPress={() => navigation.goBack()}
                    />
                </HeaderButtons>
            )
        })
    }, [navigation]);
    return (
        <View>
            <Text>LanguageSelectScreen</Text>
        </View>
    )
}

export default LanguageSelectScreen