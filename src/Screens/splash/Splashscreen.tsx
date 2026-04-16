import React, { useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    Dimensions,
    Image,
    ImageBackground,
} from 'react-native';

const { width, height } = Dimensions.get('window');

interface SplashScreenProps {
    onFinish?: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onFinish }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onFinish?.();
        }, 3000);
        return () => clearTimeout(timer);
    }, [onFinish]);

    return (
        <ImageBackground
            source={require('../../../assets/images/bg-onboarding.png')}
            style={styles.background}
            resizeMode="cover"
        >
            <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />

            {/* Logo */}
            <View style={styles.centerContent}>
                <Image
                    source={require('../../../assets/images/logo2.png')}
                    style={styles.logo}
                />
                {/* Tagline */}
                <Text style={styles.tagline}>Your style, simplified.</Text>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width,
        height,
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 999,
        alignItems: 'center',
        justifyContent: 'center',
    },
    centerContent: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 290,
        height: 105,
        resizeMode: 'contain',
        marginBottom: 16,
    },
    tagline: {
        fontSize: 18,
        color: '#fff',
        fontWeight: '500',
        textAlign: 'center',
        fontFamily: 'InterMedium',
    },
});

export default SplashScreen;