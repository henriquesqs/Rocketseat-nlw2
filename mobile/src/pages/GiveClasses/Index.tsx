import React from "react";
import {View, ImageBackground, Text} from "react-native";
import styles from "./styles";
import giveClassesBgImg from "../../assets/images/give-classes-background.png";
import {RectButton} from "react-native-gesture-handler";
import {useNavigation} from "@react-navigation/native";

function GiveClasses() {
    const {navigate} = useNavigation();

    // Method to redirect user to landing page
    function handleNavigationToLandingPage() {
        navigate("Landing");
    }

    return (
        <View style={styles.container}>
            <ImageBackground
                resizeMode="contain"
                source={giveClassesBgImg}
                style={styles.content}
            >
                <Text style={styles.title}>Quer ser um Proffy?</Text>
                <Text style={styles.description}>
                    Para começar, você precisa se cadastrar como um professor na
                    nossa plataforma web.
                </Text>
            </ImageBackground>
            <RectButton
                style={styles.confirmButton}
                // When pressing this button, user will be redirected to landing page
                onPress={handleNavigationToLandingPage}
            >
                <Text style={styles.confirmButtonText}>Tudo bem</Text>
            </RectButton>
        </View>
    );
}

export default GiveClasses;
