import { Text, View, StyleSheet, Image } from "react-native"; // Added Image here

const Welcome = () => {
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
                    But it’s not too simple. It requires us to think about all sorts of things.
                </Text>
                {/* Added a style to the Image */}
                <Image 
                    source={require("../assets/Task-bro.png")} 
                    style={styles.illustration}
                    resizeMode="contain" 
                />
            </View>
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
        borderRadius: 10,
        alignItems: 'center', // Centers the image horizontally in the card
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    bodyText: {
        fontSize: 14,
        lineHeight: 22,
        color: '#444',
        marginBottom: 15, // Added some space before the image
    },
    illustration: {
        width: 200,   // You must specify dimensions
        height: 200,
    },
});

export default Welcome;