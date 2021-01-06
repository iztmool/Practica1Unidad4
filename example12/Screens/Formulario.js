import React, {useContext} from 'react';
import {TextInput, View, StyleSheet, Text} from 'react-native';
import {Button} from 'react-native-elements'
import {Picker} from '@react-native-picker/picker';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {AlumnosContext} from '../Context/AlumnosContext';
import Constants from 'expo-constants';
import firebase from '../Settings/ConfigFirebase'

const validations =Yup.object().shape({
    id:Yup.number().typeError('Este campo es numérico').max(99999999,"Número muy grande").required('Obligatorio'),
    genero:Yup.string().nullable().required('Selecciona un genero'),
    temporada: Yup.string().nullable().required('Selecciona una temporada'),
    talla: Yup.string().nullable().required('Selecciona una talla'),
    descripcion: Yup.string().min(2,'Descripción muy chico').max(50,'Descripción muy Grande').required('Obligatorio')
})

export default function Formulario({route,navigation}){
    const {status} = route.params;
    const {zapatos,lista,setZapatos,setLista}= useContext(AlumnosContext);

    return(
        <View style={styles.container}>
            <Text style={styles.header}>zapatos</Text>

            <Formik
                initialValues={zapatos}
                onSubmit={(values,{resetForm})=>{
                     firebase.database().ref('Zapatos/'+zapatos.id).update(zapatos).then(()=>{
                         alert("Enviado")
                     })
                    const temporal = lista.filter(al=>al.id!=zapatos.id);//!==
                    //alert('enviado')
                    setLista([...temporal,zapatos]);
                    resetForm({
                        id:"",
                        genero:"",
                        temporada:"",
                        talla:"",
                        descripcion:""
                    })
                    navigation.navigate('Listado')

                    console.log(lista) 
                }}
                validationSchema={validations}
                validate={(values)=>{
                    setZapatos(values)
                }}
            >
            {
                ({handleChange, handleBlur, handleSubmit, setFieldValue, handleReset, errors, values})=>(
                    <View>
                        <TextInput
                            style={styles.textinput}
                            onChangeText={handleChange('id')}
                            onBlur={handleBlur('id')}
                            placeholder="Id"
                            value={values.id}
                            editable={status==="add"?true:false}
                        />
                        
                        {errors.id && <Text style={styles.texterror}>{errors.id}</Text>}

                        <View style={styles.picker}>
                            <Picker
                                mode="dialog"
                                style={{height:40, backgroundColor:'white'}}
                                selectedValue={values.genero}
                                onValueChange={ (v)=>
                                    setFieldValue('genero',v)
                                }
                            >
                                <Picker.Item color="White" label="Genero" value="" />
                                <Picker.Item color="black" label="Masculino" value="Masculino"/>
                                <Picker.Item color="black" label="Femenino" value="Femenino"/>
                            </Picker>
                        </View>

                        {errors.genero && <Text style={styles.texterror}>{errors.genero}</Text>}      

                        <View style={styles.picker}>
                            <Picker
                                mode="dialog"
                                style={{height:40, backgroundColor:'white'}}
                                selectedValue={values.temporada}
                                onValueChange={ (v)=>
                                    setFieldValue('temporada',v)
                                }
                            >
                                <Picker.Item color="white" label="Temporada" value="" />
                                <Picker.Item color="black" label="Primavera" value="Primavera"/>
                                <Picker.Item color="black" label="Verano" value="Verano"/>
                                <Picker.Item color="black" label="Otoño" value="Otoño"/>
                                <Picker.Item color="black" label="Invierno" value="Invierno"/>
                            </Picker>
                        </View>

                        {errors.temporada && <Text style={styles.texterror}>{errors.temporada}</Text>}

                        <View style={styles.picker}>
                            <Picker
                                mode="dialog"
                                style={{height:40, backgroundColor:'white'}}
                                selectedValue={values.talla}
                                onValueChange={ (v)=>
                                    setFieldValue('talla',v)
                                }
                            >
                                <Picker.Item color="grey" label="Medida" value="" />
                                <Picker.Item color="black" label="9" value="9"/>
                                <Picker.Item color="black" label="10" value="10"/>
                                <Picker.Item color="black" label="11" value="11"/>
                            </Picker>
                        </View>

                        {errors.talla && <Text style={styles.texterror}>{errors.talla}</Text>}

                        <TextInput
                            style={styles.textinput}
                            onChangeText={handleChange('descripcion')}
                            onBlur={handleBlur('descripcion')}
                            placeholder="Descripción"
                            value={values.descripcion}                        

                        />

                        {errors.descripcion && <Text style={styles.texterror}>{errors.descripcion}</Text>}

                        <View style={{marginTop:20}}>
                            <Button
                                buttonStyle={styles.buttons}
                                onPress={handleSubmit}
                                title="Enviar"
                            />

                            {
                                status==="add"
                                &&
                                <Button
                                buttonStyle={styles.buttons}
                                onPress={handleReset}
                                title="Limpiar"
                                />

                            }
                        


                        </View>

                    </View>
                )


            }    
                
            </Formik>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent:'center',
      margin:20,
      marginTop:Constants.statusBarHeight
   
    },
    texterror:{
      color:'red'
    },
    textinput:{
      borderRadius:10, 
      height: 40, 
      borderColor: 'gray', 
      borderWidth: 1, 
      margin:5, 
      paddingLeft:15, 
      backgroundColor:'white',
      elevation: 5,
    },
    buttons:{
      backgroundColor:'gray', 
      color:'black', 
      marginTop:10, 
      borderRadius:10
    },
    header:{
      fontSize:20, 
      textAlign:'center', 
      marginBottom:40
    },
    picker:{
      margin:5, 
      borderRadius: 10, 
      borderWidth: 1, 
      borderColor: 'gray', 
      overflow: 'hidden',
      elevation: 5,
    }
  
  });