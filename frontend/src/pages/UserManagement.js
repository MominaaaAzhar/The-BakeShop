import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers, updateUserAdminStatus } from '../redux/actions/usersActions';
import { Container, Table, TableBody, TableCell, TableHead, TableRow, Checkbox, Typography } from '@mui/material';

const UserManagement = () => {
  const dispatch = useDispatch();
  const { users, loading } = useSelector((state) => state.users);
  const { user: currentUser } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const handleAdminToggle = useCallback((id, isAdmin) => {
    if (currentUser && currentUser._id === id) {
      return;
    }
    dispatch(updateUserAdminStatus(id, !isAdmin));
  }, [dispatch, currentUser]);

  if (loading) return <div>Loading...</div>;

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        User Management
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Username</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Admin</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user._id}>
              <TableCell>{user.username}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>
                <Checkbox
                  checked={user.isAdmin}
                  onChange={() => handleAdminToggle(user._id, user.isAdmin)}
                  disabled={currentUser && currentUser._id === user._id}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};

export default UserManagement;
