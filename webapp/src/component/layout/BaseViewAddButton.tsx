import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { Add } from '@mui/icons-material';
import { T } from '@tolgee/react';

export const BaseViewAddButton = (props: {
  addLinkTo: string | undefined;
  onClick: (() => void) | undefined;
}) => (
  <Button
    data-cy="global-plus-button"
    component={props.addLinkTo ? Link : Button}
    to={props.addLinkTo}
    startIcon={<Add />}
    color="primary"
    size="small"
    variant="contained"
    aria-label="add"
    onClick={props.onClick}
  >
    <T keyName="global_add_button" />
  </Button>
);
