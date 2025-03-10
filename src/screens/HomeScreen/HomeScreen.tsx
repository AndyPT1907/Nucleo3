import React, { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import { Avatar, Button, FAB, Icon, IconButton, Modal, Portal, Text, TextInput } from "react-native-paper";
import { style } from "../../theme/style";
import { auth, database } from "../../firebaseConfig";
import firebase from '@firebase/auth'
import { updateProfile, signOut } from "firebase/auth";
import { ProductCardComponent } from "./Components/ProductCardComponent";
import { NewPorductComponent } from "./Components/NewProductComponent";
import { onValue, ref } from "firebase/database";
import { CommonActions, useNavigation } from "@react-navigation/native";
import { EditProfileComponent } from "./Components/EditProfileComponent";


//Interfaz: Informacion del usuario  FormUser
interface FormUser {
    name: string;
}
//interface para los productos 
export interface Product {
    id: string,
    code: string,
    nameProduct: string,
    price: number,
    stock: number
    description: string,
}

export const HomeScreen = () => {

    const navigation = useNavigation()

    //Crear un hook- UseState: Cambiar el estado del formulario
    const [FormUser, setFormUser] = useState<FormUser>({
        name: "",
    });

    //Hook: capturar y modificar la data del usuario
    const [userData, setUserData] = useState<firebase.User | null>(null)

    //hook useState: gestionar la lista de productos a mostrar
    const [products, setProducts] = useState<Product[]>([])


    //hook useState: permitir que el modal se visualize o no 
    const [showModalProfile, setShowModalProfile] = useState<Boolean>(false)

    //hook useState para ver y ocultar el modal de agregar
    const [showModalProduct, setShowModalProduct] = useState<Boolean>(false)

    //Funcion para actualizar la informacion del usuario autenticado

    //funcion para obtener productos y listarlos
    const getAllProducts = () => {
        //1 direccionar a la db
        const dbRef = ref(database, 'products')
        //2 acceder a la data
        onValue(dbRef, (snapshot) => {
            // capturar la data
            const data = snapshot.val(); //obtener la data en un formato esperado
            //VERIFICAR QUE EXISTE DATOS
            if (!data) return;
            //4. obtener las keys de cada valor
            const getKeys = Object.keys(data)
            // 5. crear un arreglo para almacenar los productos obtenidos
            const listProducts: Product[] = [];
            //6 recorrer las kwys para acceder a los productos
            getKeys.forEach((key) => {
                const value = { ...data[key], id: key }
                listProducts.push(value);
                console.log('Products:', listProducts);
            })
            //7 actualizar la data obtenida en el arreglo en el hook useState
            setProducts(listProducts);
        })
    }

    //Funcion para actualizar el estado del formulario


    //hook UseEffect : validar la autenticacion
    useEffect(() => {
        setUserData(auth.currentUser); //Obtener el usuario Logeado
        setFormUser({ name: auth.currentUser?.displayName ?? '' })
        //llamar a la funcion para ver la lista de productos
        getAllProducts()
    }, [])

    //Funcion para cerrar sesion
    const hanldeSingOut = async () => {
        try {
            await signOut(auth)
            //resetear oas rutas
            navigation.dispatch(CommonActions.reset({ index: 0, routes: [{ name: 'Login' }] }))
        } catch (error) {
            console.log(error);

        }
    }

    return (
        <>
            <View style={style.rootHome}>
                <View style={style.Header}>
                    <Icon size={50} source="face-man" />
                    <View>
                        <Text variant="bodySmall">Bienvenido</Text>
                        <Text variant="labelLarge">{userData?.displayName}</Text>
                    </View>
                    <View style={style.icon}>
                        <IconButton
                            icon="file-document-edit-outline"
                            size={30}
                            mode="contained"
                            onPress={() => setShowModalProfile(true)}
                        />
                    </View>
                </View>
                <View>
                    <FlatList
                        data={products}
                        renderItem={({ item }) => <ProductCardComponent product={item} />}
                        keyExtractor={item => item.id}
                    />
                </View>
            </View>
            <EditProfileComponent showModalProfile={showModalProfile} setShowModalProfile={setShowModalProfile} />
            <FAB
                icon="newspaper-plus"
                style={style.fab}
                onPress={() => setShowModalProduct(true)}
            />
            <FAB
                icon="exit-to-app"
                style={style.exit}
                onPress={hanldeSingOut}
            />
            <NewPorductComponent showModalProduct={showModalProduct} setShowModalProduct={setShowModalProduct} />
        </>
    )
}