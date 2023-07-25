import React, { useRef,useState } from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import CustomizedTables from './ItemTable';
import { Container } from '@mui/material';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Typography from '@mui/material/Typography';

export const ItemForm = () => {
  const fileInputRef = useRef(null);
  const [selectedFileName, setSelectedFileName] = useState('');
  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log(file);
      setSelectedFileName(file.name);
    }
  };

  return (
    <div>
      <Container sx={{ mt: 3 }}>
        <h1>Item Management</h1>
        <Stack direction="row" spacing={2} useFlexGap flexWrap="wrap">
          <TextField sx={{ width: 250 }} id="outlined-basic" label="Item Name" variant="outlined"  size="small"/>
          <TextField sx={{ width: 250 }} id="outlined-basic" label="Item Pack Size" variant="outlined"  size="small"/>
          <TextField sx={{ width: 250 }} id="outlined-basic" label="Item Unit Price" variant="outlined"  size="small"/>
          <TextField sx={{ width: 250 }} id="outlined-basic" label="Item Quantity of Hand" variant="outlined"  size="small"/>

          <TextField
            ref={fileInputRef}
            type="file"
            style={{ display: 'none' }}
            onChange={handleFileChange}
            id="file-input"
          />
          <label htmlFor="file-input" >
            <Button
              variant="outlined"
              component="span"
              startIcon={<CloudUploadIcon />}
              onClick={handleButtonClick}
            >
              Upload Image
            </Button>
          </label>
          <Typography variant="body2" color="textSecondary" style={{ marginLeft: 8 }}>
            Selected file: {selectedFileName}
          </Typography>

          <ButtonGroup variant="contained" aria-label="outlined button group">
            <Button color="success">Save</Button>
            <Button color="secondary">Update</Button>
            <Button color="error">Delete</Button>
          </ButtonGroup>
        </Stack>
      </Container>

      <Container sx={{ mt: 5 }}>
        <CustomizedTables />
      </Container>
    </div>
  );
};
