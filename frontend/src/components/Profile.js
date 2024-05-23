import React, { useEffect, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProfile, updateProfile } from '../redux/actions/profileActions';
import { Container, Typography, TextField, Button, Avatar, Tabs, Tab, Box, CircularProgress } from '@mui/material';

const Profile = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const [profileSettings, setProfileSettings] = useState({
    firstName: '',
    lastName: '',
    avatarBgColor: '',
    avatarTextColor: '',
  });
  const [deliveryInfo, setDeliveryInfo] = useState({
    address: '',
    city: '',
    postalCode: '',
  });
  const [tabIndex, setTabIndex] = useState(0);

  useEffect(() => {
    if (user) {
      dispatch(getProfile());
    }
  }, [dispatch, user]);

  useEffect(() => {
    setProfileSettings({
      firstName: user.firstName || '',
      lastName: user.lastName || '',
      avatarBgColor: user.avatarBgColor || '#000000',
      avatarTextColor: user.avatarTextColor || '#ffffff',
    });
  }, [user])

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileSettings((prevSettings) => ({
      ...prevSettings,
      [name]: value,
    }));
  };

  const handleSaveChanges = useCallback(() => {
    dispatch(updateProfile(profileSettings));
  }, [dispatch, profileSettings]);

  const getInitials = (firstName, lastName) => {
    if (!firstName || !lastName) return '';
    return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
  };

  if (!user) return <CircularProgress />;

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Profile
      </Typography>
      <Box display="flex" alignItems="center" mb={2}>
        <Avatar
          style={{
            backgroundColor: profileSettings.avatarBgColor,
            color: profileSettings.avatarTextColor,
          }}
        >
          {getInitials(profileSettings.firstName, profileSettings.lastName)}
        </Avatar>
        <Typography variant="h6" ml={2}>
          {`${profileSettings.firstName} ${profileSettings.lastName}`}
        </Typography>
      </Box>
      <Tabs value={tabIndex} onChange={handleTabChange} aria-label="profile tabs">
        <Tab label="Profile Settings" />
        <Tab label="Delivery Info" />
        <Tab label="Security" />
      </Tabs>
      <Box mt={2}>
        {tabIndex === 0 && (
          <Box component="form">
            <TextField
              label="First Name"
              name="firstName"
              value={profileSettings.firstName}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Last Name"
              name="lastName"
              value={profileSettings.lastName}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Avatar Background Color"
              name="avatarBgColor"
              value={profileSettings.avatarBgColor}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Avatar Text Color"
              name="avatarTextColor"
              value={profileSettings.avatarTextColor}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <Button
              variant="contained"
              color="primary"
              onClick={handleSaveChanges}
              disabled={
                !profileSettings.firstName ||
                !profileSettings.lastName ||
                !profileSettings.avatarBgColor ||
                !profileSettings.avatarTextColor
              }
            >
              Save Changes
            </Button>
          </Box>
        )}
        {tabIndex === 1 && (
          <Box component="form">
            <TextField
              label="Address"
              name="address"
              value={deliveryInfo.address}
              onChange={(e) =>
                setDeliveryInfo((prevInfo) => ({ ...prevInfo, address: e.target.value }))
              }
              fullWidth
              margin="normal"
            />
            <TextField
              label="City"
              name="city"
              value={deliveryInfo.city}
              onChange={(e) =>
                setDeliveryInfo((prevInfo) => ({ ...prevInfo, city: e.target.value }))
              }
              fullWidth
              margin="normal"
            />
            <TextField
              label="Postal Code"
              name="postalCode"
              value={deliveryInfo.postalCode}
              onChange={(e) =>
                setDeliveryInfo((prevInfo) => ({ ...prevInfo, postalCode: e.target.value }))
              }
              fullWidth
              margin="normal"
            />
            <Button variant="contained" color="primary">
              Save Changes
            </Button>
          </Box>
        )}
        {tabIndex === 2 && (
          <Box component="form">
            <TextField
              label="Current Password"
              name="currentPassword"
              type="password"
              fullWidth
              margin="normal"
            />
            <TextField
              label="New Password"
              name="newPassword"
              type="password"
              fullWidth
              margin="normal"
            />
            <Button variant="contained" color="primary">
              Change Password
            </Button>
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default Profile;
