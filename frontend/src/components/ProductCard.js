import React, { useState } from 'react';
import { Card, CardMedia, CardContent, Typography, TextField, Button, Box, CardActions } from '@mui/material';

const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    const value = Math.min(e.target.value, product.quantity);
    setQuantity(value);
  };

  const handleAddToCart = () => {
    console.log(`Added ${quantity} of ${product.name} to cart`);
  };

  const isOutOfStock = product.quantity === 0;

  return (
    <Card style={{ opacity: isOutOfStock ? 0.5 : 1 }}>
      <CardMedia
        component="img"
        height="140"
        image={product.imageUrl}
        alt={product.name}
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {product.name}
        </Typography>
        {isOutOfStock && (
          <Typography variant="body2" color="error">
            OUT OF STOCK
          </Typography>
        )}
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
        <Typography variant="h6" component="div">
          RS.{product.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Box display="flex" alignItems="center" mt={2}>
          <TextField
            type="number"
            label="Quantity"
            value={quantity}
            onChange={handleQuantityChange}
            inputProps={{ min: 1, max: product.quantity }}
            style={{ width: '100px' }}
            disabled={isOutOfStock}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddToCart}
            style={{ marginLeft: '16px' }}
            disabled={isOutOfStock}
          >
            Add to Cart
          </Button>
        </Box>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
