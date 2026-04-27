import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import Entypo from '@expo/vector-icons/Entypo';
import { useNavigation } from "@react-navigation/native";

const Welcome = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <Text style={styles.header}>To-Do App</Text>
            <Text style={styles.subHeader}>Welcome</Text>
            
            <View style={styles.card}>
                <Text style={styles.bodyText}>
                    To-do app. But we’re going to do it again, 
                    as a website, and for good reason: it’s the perfect scope. 
                    A to-do app is fairly simple, 
                    adding and removing short bits of text forming a list.
                </Text>
                <Image 
                    source={require("../assets/Task-bro.png")} 
                    style={styles.illustration}
                    resizeMode="contain" 
                />
            </View>

            {/* Styled Button */}
            <TouchableOpacity 
                style={styles.button} 
               onPress={() => navigation.navigate("AddTodo")}
                activeOpacity={0.7} // Visual feedback when tapped
            >
                <Entypo name="add-to-list" size={20} color="white" />
                <Text style={styles.buttonText}>Create Todo</Text>
            </TouchableOpacity>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        padding: 20,
        justifyContent: 'center',
    },
    header: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
    },
    subHeader: {
        fontSize: 18,
        color: '#666',
        textAlign: 'center',
        marginBottom: 20,
    },
    card: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 15,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 3,
        marginBottom: 30, // Space between card and button
    },
    bodyText: {
        fontSize: 14,
        lineHeight: 22,
        color: '#444',
        marginBottom: 15,
        textAlign: 'center',
    },
    illustration: {
        width: 180,
        height: 180,
    },
    button: {
        backgroundColor: '#062e06', // A nice blue
        flexDirection: 'row',       // Places icon and text side-by-side
        paddingVertical: 15,
        paddingHorizontal: 25,
        borderRadius: 30,           // Pill-shaped button
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',        // Prevents button from stretching to full width
        shadowColor: '#02430e',
        shadowOpacity: 0.4,
        shadowRadius: 5,
        elevation: 5,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
        marginLeft: 10,             // Space between icon and text
    },
});

export default Welcome;