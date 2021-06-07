import React from 'react';
import { NofiticationContainer } from './styles';

interface NotificationProps {
  label?: string,
  display: boolean
}

const Notification: React.FC<NotificationProps> = ({label, display}) => {
  return <NofiticationContainer display={display}>{label}</NofiticationContainer>;
}

export default Notification;