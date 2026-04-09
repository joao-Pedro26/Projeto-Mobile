import { View, Text, StyleSheet } from 'react-native';

export default function About() {
    return (
        <View style={styles.container}>

            <Text style={styles.titulo}>🍔 Sobre o App</Text>

            <View style={styles.card}>
                <Text style={styles.texto}>
                    Este app ajuda você a organizar suas comidas favoritas,
                    criando listas rápidas e fáceis.
                </Text>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#FFF8E1',
    },

    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#E65100',
        marginBottom: 20,
        textAlign: 'center'
    },

    card: {
        backgroundColor: '#FFE0B2',
        padding: 20,
        borderRadius: 15,
        elevation: 4,
    },

    texto: {
        fontSize: 16,
        color: '#BF360C',
        textAlign: 'center'
    }
});