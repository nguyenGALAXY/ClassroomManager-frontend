import { DeleteOutlined } from '@mui/icons-material';
import { Card, CardContent, CardHeader, IconButton, Typography } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';

const ClassroomCard = ({ classroom, handleDelete }) => (
  <div>
    <Card>
      <CardHeader
        action={
          <IconButton onClick={() => handleDelete(classroom.id)}>
            <DeleteOutlined />
          </IconButton>
        }
        title={classroom.ClassName}
        subheader={classroom.Section}
      />
      <CardContent>
        <Typography variant="body2" color="texSecondary">
          {classroom.subject}
        </Typography>
      </CardContent>
    </Card>
  </div>
);
ClassroomCard.propTypes = {
  classroom: PropTypes.object,
  handleDelete: PropTypes.func
};
export default ClassroomCard;
