import {View, Text, StyleSheet} from 'react-native';


export default function Etiqueta({precio}: Props) {
    return(
        <View style={styles.etiqueta}>
            <Text style={styles.textoEtiqueta}>${precio}</Text>
        </View>
    )
}

type Props = {
    precio: number,
}


export const styles = StyleSheet.create({
    etiqueta: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 10,
    },
    textoEtiqueta: {
        color: 'white',
    },
})
