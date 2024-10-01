import { StyleSheet } from "react-native";
export const style = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        gap: 12,
        backgroundColor: '#F5F5F5',  // Color to change?
    },
    text: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: "center",
        color: '#333',  // Color to change?
    },
    message: {
        width: '100%',
        padding: 10,
        backgroundColor: '#EDEDED',  // Color to change?
        borderRadius: 8,
    },
    textRedirect: {
        marginTop: 20,
        textAlign: "center",
        fontSize: 16,
        fontWeight: "bold",
        color: "#705AA9",  // Color to change?
    },
    rootActivity: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        backgroundColor: '#FAFAFA',  // Color to change?
    },
    rootHome: {
        flex: 1,
        backgroundColor: '#caddfc',  // Color to change?
        elevation: 3,
    },
    Header: {
        flexDirection: "row",
        gap: 12,
        alignItems: "center",
        paddingVertical: 10,
        justifyContent: 'space-between',
        padding: 10,
    },
    icon: {
        alignItems: 'flex-end',
        flex: 1,
        gap: 30
    },
    modal: {
        padding: 20,
        marginHorizontal: 20,
        backgroundColor: '#fff',  // Color to change?
        borderRadius: 10,
        gap: 10
    },
    rootListProduct: {
        marginTop: 10,
        flexDirection: 'row',
        padding: 10,
        alignItems: "center",
        gap: 20
    },
    fab: {
        position: 'absolute',
        bottom: 20,
        right: 20,

    },
    rootInputsProducts: {
        flexDirection: 'row',
        gap:5
    },
    rootDetail: {
        flex: 1,
        padding: 20,
        gap:20,
        backgroundColor:'#ffffc9'  // Color to change?
    },
    textDetail:{
        fontWeight:"bold",
        fontSize:16
    },
    exit: {
        position: 'absolute',
        bottom: 20,
        left: 20,

    }
});
