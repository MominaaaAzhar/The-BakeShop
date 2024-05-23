import React, { useEffect, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts, addProduct, updateProduct, deleteProduct } from '../redux/actions/productActions';
import { Container, Grid, TextField, Button, Typography, Card, CardContent, CardActions, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

const ProductManagement = () => {
  const dispatch = useDispatch();
  const { products, loading } = useSelector((state) => state.products);
  const [productData, setProductData] = useState({
    name: '',
    description: '',
    imageUrl: '',
    price: '',
    quantity: ''
  });
  const [editableProductId, setEditableProductId] = useState(null);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const handleChange = useCallback((e) => {
    setProductData((prevData) => ({ ...prevData, [e.target.name]: e.target.value }));
  }, []);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    dispatch(addProduct(productData));
    setProductData({
      name: '',
      description: '',
      imageUrl: '',
      price: '',
      quantity: ''
    });
  }, [dispatch, productData]);

  const handleEdit = useCallback((product) => {
    setEditableProductId(product._id);
    setProductData({
      name: product.name,
      description: product.description,
      imageUrl: product.imageUrl,
      price: product.price,
      quantity: product.quantity
    });
  }, []);

  const handleUpdate = useCallback((id) => {
    dispatch(updateProduct(id, productData));
    setEditableProductId(null);
  }, [dispatch, productData]);

  const handleDelete = useCallback((id) => {
    dispatch(deleteProduct(id));
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Product Management
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          name="name"
          value={productData.name}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Description"
          name="description"
          value={productData.description}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Image URL"
          name="imageUrl"
          value={productData.imageUrl}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Price"
          name="price"
          value={productData.price}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Quantity"
          name="quantity"
          value={productData.quantity}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary" style={{ marginTop: '16px' }}>
          Add Product
        </Button>
      </form>
      <Grid container spacing={3} style={{ marginTop: '32px' }}>
        {products.map((product) => (
          <Grid item key={product._id} xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <IconButton onClick={() => handleEdit(product)}>
                  <EditIcon />
                </IconButton>
                {editableProductId === product._id ? (
                  <>
                    <TextField
                      label="Name"
                      name="name"
                      value={productData.name}
                      onChange={handleChange}
                      fullWidth
                      margin="normal"
                    />
                    <TextField
                      label="Description"
                      name="description"
                      value={productData.description}
                      onChange={handleChange}
                      fullWidth
                      margin="normal"
                    />
                    <TextField
                      label="Image URL"
                      name="imageUrl"
                      value={productData.imageUrl}
                      onChange={handleChange}
                      fullWidth
                      margin="normal"
                    />
                    <TextField
                      label="Price"
                      name="price"
                      value={productData.price}
                      onChange={handleChange}
                      fullWidth
                      margin="normal"
                    />
                    <TextField
                      label="Quantity"
                      name="quantity"
                      value={productData.quantity}
                      onChange={handleChange}
                      fullWidth
                      margin="normal"
                    />
                  </>
                ) : (
                  <>
                    <Typography variant="h5" component="div">
                      {product.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {product.description}
                    </Typography>
                    <Typography variant="h6" component="div">
                      RS.{product.price}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Quantity: {product.quantity}
                    </Typography>
                  </>
                )}
              </CardContent>
              <CardActions>
                {editableProductId === product._id ? (
                  <Button size="small" color="primary" onClick={() => handleUpdate(product._id)}>
                    Update
                  </Button>
                ) : (
                  <Button size="small" color="secondary" onClick={() => handleDelete(product._id)}>
                    Delete
                  </Button>
                )}
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProductManagement;
