import React, { useState } from "react";
import { Button, Card, TextField, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";
import DeleteIcon from "@mui/icons-material/Delete";

const AddressCard = ({ address, onEdit, onDelete, onFavorite }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(address.name);
  const [editedLocation, setEditedLocation] = useState(address.location);

  const handleEdit = () => {
    if (isEditing) {
      onEdit(address.id, editedName, editedLocation);
    }
    setIsEditing(!isEditing);
  };

  const handleFavorite = () => {
    onFavorite(address.id);
  };

  return (
    <Card
    
    
      style={{ minWidth: 800, maxWidth: 800, minHeight: 300, maxHeight: 300, border: 2 }}
      sx={{
        p: 2,
        mb: 2,
        backgroundColor: address.isFavorite ? "#ffffff" : "#ffffff", // Yellow star for the favorite address
      }}

    >
      <div style={{ display: "flex", justifyContent: "justify-content" }}>
        <Typography variant="h6">
          {isEditing ? (
            <TextField
              value={editedName}
              onChange={(e) => setEditedName(e.target.value)}
            />
          ) : (
            address.name
          )}
        </Typography>
        <div>
          <Button onClick={handleEdit} size="small" startIcon={isEditing ? <CheckIcon /> : <EditIcon />}>
            {isEditing ? "Save" : "Edit"}
          </Button>
          <Button onClick={() => onDelete(address.id)} size="small" startIcon={<DeleteIcon />}>
            Delete
          </Button>
          <Button onClick={handleFavorite} size="small" startIcon={address.isFavorite ? <StarIcon /> : <StarBorderIcon />}>
            Favorite
          </Button>
        </div>
      </div>
      <Typography>{isEditing ? <TextField value={editedLocation} onChange={(e) => setEditedLocation(e.target.value)} /> : address.location}</Typography>
    </Card>
  );
};

export default AddressCard;
