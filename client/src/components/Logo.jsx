import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import { Box } from '@mui/material';
import configData from '../config';

Logo.propTypes = {
  disabledLink: PropTypes.bool,
  sx: PropTypes.object,
};

export default function Logo({ disabledLink = false, sx }) {
  const logo = (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1,
        ...sx
      }}
    >
      <img src="/static/image.png" alt="logo" style={{ width: 40, height: 40 }} />
      <h3 style={{ margin: 0, color: 'white', textDecoration: 'none', }}>PaiseDo</h3>
    </Box>
  );

  if (disabledLink) {
    return <>{logo}</>;
  }

  return <RouterLink to={configData.DASHBOARD_URL}>{logo}</RouterLink>;
}
