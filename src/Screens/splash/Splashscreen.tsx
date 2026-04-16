import React, { useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    Dimensions,
    Image,
    ImageBackground,
    ActivityIndicator,
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

            {/* Loading Indicator at Bottom */}
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="small" color="#1A2F7A" />
                <Text style={styles.loadingText}>Loading...</Text>
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
        width: 250,
        height: 90,
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
    loadingContainer: {
        alignItems: 'center',
        paddingBottom: 60,
    },
    loadingText: {
        marginTop: 8,
        fontSize: 13,
        color: '#1A2F7A',
        fontFamily: 'InterMedium',
    },
});

export default SplashScreen;