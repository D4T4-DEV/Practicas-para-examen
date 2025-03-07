import { View, Text, Modal, SafeAreaView, Pressable, StyleSheet } from "react-native";

interface ResultModalProps {
    modalVisible: boolean;
    setModalVisible: (visible: boolean) => void;
    isCorrect: boolean;
}

const ResultModal: React.FC<ResultModalProps> = ({
    modalVisible,
    setModalVisible,
    isCorrect,
}) => {
    // const [modalVisible, setModalVisible] = useState<boolean>(false);
    // const [isCorrect, setIsCorrect] = useState<boolean>(false);
    // const handleButtonPress = (isReal: boolean) => {
    //     setModalVisible(true);
    // };

    return (
        <SafeAreaView>
            <Modal 
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(false);
            }}>
                <View style={styles.container}>
                    <Text>{isCorrect ? Correcto: Incorrecto}</Text>
                <Pressable
                onPress={() => setModalVisible(false)}>
                    <Text>Ok</Text>
                </Pressable>
                </View>
            </Modal>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});

export default ResultModal;