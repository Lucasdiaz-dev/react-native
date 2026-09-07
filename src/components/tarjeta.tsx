import { View, Text, StyleSheet, Pressable } from "react-native"
import Etiqueta from "./etiqueta";


export default function Tarjeta({title, precio, description, buttonText }: Props) {
    return (
        <View style={styles.card}>
            <Text style={styles.titleCard}>{title}</Text>
            <Text style={styles.descriptionCard}>{description}</Text>
            <Etiqueta precio={precio}></Etiqueta>
            <Pressable style={styles.buttonCard}>
                <Text style={styles.buttonText}>{buttonText}</Text>
            </Pressable>
        </View>
    )
}

type Props= {
    title: string,
    description: string,
    buttonText: string,
    precio: number,
}


export const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 30,
        margin: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    titleCard: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
    },
    descriptionCard: {
        fontSize: 8,
        color: 'black',
        paddingTop: 10,
        paddingBottom: 10,
    },
    priceCard: {
        fontSize: 16,
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'right',
    },
    buttonCard: {
        backgroundColor: 'black',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
