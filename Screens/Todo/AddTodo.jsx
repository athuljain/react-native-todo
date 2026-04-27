import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { 
    Text, 
    TouchableOpacity, 
    View, 
    ScrollView, 
    TextInput, 
    StyleSheet,
    KeyboardAvoidingView,
    Platform, 
    Alert
} from "react-native";

const AddTodo = () => {
    const navigation = useNavigation()
    const [todoTitle,setTodoTitle]=useState("")
    const [todoDescription,setTodoDescription]=useState("")
    const handleCreate=()=>{
        if(todoTitle.trim()==""|| todoDescription.trim()==""){
            return Alert.alert("warning","please add title & description")
        }
        Alert.alert("success!","todo created")
        navigation.navigate("Todo List");
        console.log(todoTitle);
        
    }
    return (
        // KeyboardAvoidingView prevents the keyboard from covering your inputs
        <KeyboardAvoidingView 
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.formCard}>
                    <Text style={styles.title}>Create a Todo</Text>
                    
                    <Text style={styles.label}>Title</Text>
                    <TextInput 
                        style={styles.input} 
                        placeholder="Enter todo title"
                        placeholderTextColor="#999"
                        value={todoTitle}
                        onChangeText={(text)=>setTodoTitle(text)}
                    />

                    <Text style={styles.label}>Description</Text>
                    <TextInput 
                        style={[styles.input, styles.textArea]} 
                        placeholder="Enter todo description" 
                        value={todoDescription}
                        onChangeText={(text)=>setTodoDescription(text)}
                        multiline
                        numberOfLines={10}
                        placeholderTextColor="#999"
                        multiline={true}
                        numberOfLines={4}
                        textAlignVertical="top" // Ensures text starts at the top on Android
                    />

                    <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={handleCreate}>
                        <Text style={styles.buttonText}>Create Task</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f9fa',
    },
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        padding: 20,
    },
    formCard: {
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 25,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#2d3436',
        marginBottom: 25,
        textAlign: 'center',
    },
    label: {
        fontSize: 14,
        fontWeight: '600',
        color: '#636e72',
        marginBottom: 8,
        marginLeft: 4,
    },
    input: {
        backgroundColor: '#f1f2f6',
        borderRadius: 12,
        paddingHorizontal: 15,
        paddingVertical: 12,
        fontSize: 16,
        color: '#2d3436',
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#dfe6e9',
    },
    textArea: {
        height: 120, // Give description more space
        paddingTop: 15,
    },
    button: {
        backgroundColor: '#6c5ce7',
        borderRadius: 12,
        paddingVertical: 16,
        alignItems: 'center',
        marginTop: 10,
        shadowColor: '#6c5ce7',
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default AddTodo;