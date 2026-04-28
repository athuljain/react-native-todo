import { useRoute } from "@react-navigation/native"
import { useState } from "react"
import { Text, TextInput, Touchable, TouchableOpacity } from "react-native"
import { View } from "react-native"

const TodoDetails=()=>{
    const route=useRoute()
    const {item} =route.params;
    const [isEdit,setIsEdit]=useState(false)
    const [todoTitle,setTodoTitle]=useState(item?.title)
    const [todoDescription,setTodoDescription]=useState(item?.description)

    return(
        <View>
            <Text>Todo Details</Text>
            {/* <Text>{item.title}</Text> */}
            <TextInput 
            value={todoTitle} 
            editable={isEdit}/>
            <TextInput 
            value={todoDescription} 
            editable={isEdit}
            multiline numberOfLines={10}
            />
            <TextInput value="Date" readOnly={true}/>
            <TouchableOpacity>
                <Text>Edit Todo</Text>
            </TouchableOpacity>
            <View>
            <TouchableOpacity>
                <Text>UPDATE</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>Delete</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}

export default TodoDetails;