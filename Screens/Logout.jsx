import { Alert, Text, TouchableOpacity, View, StyleSheet } from "react-native";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const Logout = ({ navigation }) => {
    const handleCancel = () => {
        navigation.navigate("Todo List");
    };

    const handleLogout = () => {
        Alert.alert("Success", "Logged out successfully");
        navigation.navigate("Todo List");
    };

    return (
        <View style={styles.container}>
            <View style={styles.modalCard}>
                {/* Icon Container */}
                <View style={styles.iconCircle}>
                    <FontAwesome5 name="user-tag" size={40} color="#e74c3c" />
                </View>

                <Text style={styles.title}>Logout</Text>
                <Text style={styles.message}>Are you sure you want to log out of your account?</Text>

                {/* Button Row */}
                <View style={styles.buttonRow}>
                    <TouchableOpacity 
                        style={[styles.button, styles.cancelButton]} 
                        onPress={handleCancel}
                    >
                        <Text style={styles.cancelText}>Cancel</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={[styles.button, styles.logoutButton]} 
                        onPress={handleLogout}
                    >
                        <Text style={styles.logoutText}>Log Out</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    modalCard: {
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 25,
        padding: 30,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.1,
        shadowRadius: 20,
        elevation: 10,
    },
    iconCircle: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: '#fdf2f2',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
    },
    message: {
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
        marginBottom: 30,
        lineHeight: 22,
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    button: {
        flex: 1,
        paddingVertical: 14,
        borderRadius: 12,
        alignItems: 'center',
        marginHorizontal: 5,
    },
    cancelButton: {
        backgroundColor: '#f1f2f6',
    },
    logoutButton: {
        backgroundColor: '#e74c3c', // Red color for logout
    },
    cancelText: {
        color: '#57606f',
        fontWeight: '600',
        fontSize: 16,
    },
    logoutText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default Logout;