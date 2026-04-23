import {  Text, StyleSheet } from 'react-native';
import { Background } from '@/components/Background';


export default function Home() {
    return (
        <Background Background style={styles.container}>
            <Text style={styles.titulo}>🍕 Bem-vindo!</Text>

            <Text style={styles.texto}>
                Organize suas comidas favoritas de forma simples 😋
            </Text>
        </Background>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },

    backgroundImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
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
});