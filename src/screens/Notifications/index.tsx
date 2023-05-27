import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import colors from '../../constants/colors';
import { COLORS } from '../../constants';

const notificationsData = [
  {
    id: '1',
    title: 'Notification 1',
    message: 'This is the first notification',
    timestamp: '2023-05-26T10:00:00',
  },
  {
    id: '2',
    title: 'Notification 2',
    message: 'This is the second notification',
    timestamp: '2023-05-26T11:00:00',
  },
  {
    id: '3',
    title: 'Notification 3',
    message: 'This is the third notification',
    timestamp: '2023-05-26T12:00:00',
  },
  {
    id: '4',
    title: 'Notification 4',
    message: 'This is the third notification',
    timestamp: '2023-05-26T12:00:00',
  },
  {
    id: '5',
    title: 'Notification 5',  
    message: 'This is the third notification',
    timestamp: '2023-05-26T12:00:00',
  },
  {
    id: '6',
    title: 'Notification 6',
    message: 'This is the third notification',
    timestamp: '2023-05-26T12:00:00',
  },
];

const NotificationsScreen = () => {
  return (
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {notificationsData.map((item) => (
          <View style={styles.notificationContainer} key={item.id}>
            <Text style={styles.notificationTitle}>{item.title}</Text>
            <Text style={styles.notificationMessage}>{item.message}</Text>
            <Text style={styles.notificationTimestamp}>{item.timestamp}</Text>
          </View>
        ))}
      </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    padding: 10
  },
  notificationContainer: {
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1 ,
    elevation: 2 ,
  },
  notificationTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  notificationMessage: {
    fontSize: 16,
    color: COLORS.primary,
  },
  notificationTimestamp: {
    fontSize: 14,
    color: '#808080',
    marginTop: 8,
  },
});

export default NotificationsScreen;
