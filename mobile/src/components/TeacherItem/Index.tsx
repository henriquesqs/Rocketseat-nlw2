import React from "react";
import {View, Image, Text} from "react-native";
import styles from "./styles";
import {RectButton} from "react-native-gesture-handler";
import heartOutlineIcon from "../../assets/images/icons/heart-outline.png";
import unfavoriteIcon from "../../assets/images/icons/unfavorite.png";
import whatsappIcon from "../../assets/images/icons/whatsapp.png";

function TeacherItem() {
    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image
                    style={styles.avatar}
                    source={{uri: "http://github.com/henriquesqs.png"}}
                />

                <View style={styles.profileInfo}>
                    <Text style={styles.name}>Henrique dos Santos</Text>
                    <Text style={styles.subject}>Matemática</Text>
                </View>
            </View>
            <Text style={styles.bio}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur aliquet dolor et consectetur vehicula. Nulla semper
                nunc elit, quis laoreet orci venenatis non. Integer cursus
                fringilla mauris a efficitur.
            </Text>

            <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço/hora: {"   "}
                    <Text style={styles.priceValue}>84</Text>
                </Text>

                <View style={styles.buttonsContainer}>
                    <RectButton
                        style={[styles.favoriteButton, styles.favorited]}
                    >
                        {/* <Image source={heartOutlineIcon}></Image> */}
                        <Image source={unfavoriteIcon}></Image>
                    </RectButton>
                    <RectButton style={styles.contactButton}>
                        <Image source={whatsappIcon}></Image>
                        <Text style={styles.contactButtonText}>
                            Entrar em contato
                        </Text>
                    </RectButton>
                </View>
            </View>
        </View>
    );
}

export default TeacherItem;
