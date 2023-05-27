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
    id: '3',
    title: 'Notification 3',
    message: 'This is the third notification',
    timestamp: '2023-05-26T12:00:00',
  },
  {
    id: '3',
    title: 'Notification 3',
    message: 'This is the third notification',
    timestamp: '2023-05-26T12:00:00',
  },
  {
    id: '3',
    title: 'Notification 3',
    message: 'This is the third notification',
    timestamp: '2023-05-26T12:00:00',
  },
];

const NotificationsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.screenTitle}>Notifications</Text>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {notificationsData.map((item) => (
          <View style={styles.notificationContainer} key={item.id}>
            <Text style={styles.notificationTitle}>{item.title}</Text>
            <Text style={styles.notificationMessage}>{item.message}</Text>
            <Text style={styles.notificationTimestamp}>{item.timestamp}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 16,
  },
  screenTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginBottom: 16,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  notificationContainer: {
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
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
