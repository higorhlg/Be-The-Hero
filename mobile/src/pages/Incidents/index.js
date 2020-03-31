import React, { useState, useEffect } from 'react';

import { Feather } from '@expo/vector-icons';
import { View, FlatList, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import logoImg from '../../assets/logo.png';

import styles from './styles';
import api from '../../services/api';

export default function Incidents(){

    const [incidents, setIncidents] = useState([])
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);


    const navigation = useNavigation();

    async function loadIncidents() {
        if(loading) {
            return;
        }
        if(total > 0 && incidents.length === total){
            return;
        }

        setLoading(true);
        const res = await api.get(`/incidents?page=${page}`);
        
        setIncidents([...incidents, ...res.data]);
        setTotal(res.headers['x-total-count']);
        setPage(page+1);
        setLoading(false);
    }



    useEffect(() => {
        loadIncidents();
        
    }, []);

    function navigateToDetail(incident) {
        navigation.navigate('Details', { incident });
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg}></Image>
                <Text style={styles.headerText}>
                    Total of <Text style={styles.headerTextBold}>{total}</Text> cases.
                </Text>
            </View>

            <Text style={styles.title}>Welcome!</Text>
            <Text style={styles.description}>Choose one of the cases below and save the day.</Text>
            
            <FlatList  
                style={styles.incidentList}
                data={incidents}
                keyExtractor={incident => String(incident.id)}
                showsVerticalScrollIndicator={false}
                onEndReached={loadIncidents}
                onEndReachedThreshold={0.2}
                renderItem={({ item : incident }) => (
                    <View style={styles.incident}>
                        <Text style={styles.incidentProperty}>NGO: </Text>
                        <Text style={styles.incidentValue}>{incident.name}</Text>

                        <Text style={styles.incidentProperty}>CASO: </Text>
                        <Text style={styles.incidentValue}>{incident.title}</Text>

                        <Text style={styles.incidentProperty}>VALUE </Text>
                        <Text style={styles.incidentValue}>{
                        Intl.NumberFormat('en-US', {style:'currency', currency: 'USD'})
                        .format(incident.value)}</Text>

                        <TouchableOpacity 
                            style={styles.detailsButton}
                            onPress={() => {navigateToDetail(incident)}}
                        >
                            <Text style={styles.detailsButtonText}> More details </Text>
                            <Feather name="arrow-right" size={16} color="#E02041" />
                        </TouchableOpacity>
                    </View>
                )}

            />
         
        </View>
    )
}