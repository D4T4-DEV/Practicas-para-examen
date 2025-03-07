import { CatFact } from "@/src/domain/entities/CatFact";
import React from "react";
import { Modal, View, Text, TouchableOpacity, StyleSheet } from "react-native";

interface ModalProps {
    visible: boolean;
    onClose: () => void;
    userResponse: boolean;
    catFactIsAFact: boolean;
}

const ModalComponent: React.FC<ModalProps> = ({ visible, onClose, userResponse, catFactIsAFact }) => {
    return (
        <Modal transparent animationType="slide" visible={visible} onRequestClose={onClose}>
            <View style={styles.overlay}>
                <View style={styles.modalContainer}>

                    <Text style={styles.title}>La respuesta dada es...</Text>
                    <Text style={[styles.reponse, { color: userResponse === catFactIsAFact ? 'green' : 'red' }]}>{userResponse === catFactIsAFact ? 'Correcta 😼' : 'Incorrecta 😿'}</Text>

                    {userResponse != catFactIsAFact ?
                        <Text>
                            La respuesta era {catFactIsAFact === true ? 'Verdadera' : 'Falsa'}
                        </Text>
                        : null
                    }

                    <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                        <Text style={styles.closeText}>Cerrar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.5)",
        justifyContent: "center",
        alignItems: "center",
    },
    modalContainer: {
        width: "80%",
        backgroundColor: "#fff",
        padding: 20,
        borderRadius: 10,
        alignItems: "center",
    },
    title: {
        fontSize: 14,
        fontWeight: "bold",
        marginBottom: 10,
    },
    reponse: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
    },
    closeButton: {
        marginTop: 10,
        backgroundColor: "#007bff",
        padding: 10,
        borderRadius: 5,
    },
    closeText: {
        color: "#fff",
        fontWeight: "bold",
    },
});

export default ModalComponent;
