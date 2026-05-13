import { useState } from 'react'; // Importamos o useState para gerenciar a imagem
import { Text, StyleSheet, View, Alert } from 'react-native';
import { Background } from '@/components/Background';
import Button from '@/components/Button';
import * as ImagePicker from 'expo-image-picker'; // 1. Importação do ImagePicker

export default function Home() {

    return (
        <Background style={styles.container}> 

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
        marginBottom: 20, 
    },
    footerContainer: {
        marginTop: 20,
        alignItems: 'center',
    },
});