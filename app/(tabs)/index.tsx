import { View, Text, StyleSheet, Image } from 'react-native';

export default function Home() {
    return (
        <View style={styles.container}>

            <Text style={styles.titulo}>🍕 Bem-vindo!</Text>

            {/* <Image
                source={require('../../assets/comida.png')}
                style={styles.imagem}
            /> */}

            <Text style={styles.texto}>
                Organize suas comidas favoritas de forma simples 😋
            </Text>

        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF8E1',
        padding: 20,
    },

    titulo: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#E65100',
        marginBottom: 20,
    },

    texto: {
        fontSize: 18,
        textAlign: 'center',
        color: '#BF360C',
        marginTop: 15,
    },

    imagem: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
    }
});