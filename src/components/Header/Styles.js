export const styles = {
  headerWrapper: {
    width: '100%',
    height: '84px',
    borderBottom: '1px',
    background: '#EDEDED',
    display: 'grid',
    gridTemplateColumns: '253px 33% 17% 36.5%',
    gap: '1px',
    justifyContent: 'space-between',
  },

  logo: {
    background: '#D72130',
    height: '84px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '&:hover': {
      cursor: 'pointer',
    },
  },

  searchWrapper: {
    display: 'flex',
    alignItems: 'center',
    height: '83px',
    background: 'white',
    left: '255px',
  },

  searchForm: {
    border: 'white',
    marginLeft: '20px',
    padding: '5px',
    color: 'black',
    fontSize: '18px',
    outline: 'none',
    width: '250px',
  },

  socialMediaWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '83px',
    background: 'white',
  },

  userInfoWrapper: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'auto',
    height: '83px',
    background: 'white',
  },

  userDropdownHover: {
    padding: '10px',
    background: '#FFFFFF',
    pl: '2',
    '&:hover': {
      background: 'rgba(215, 33, 48, 0.11)',
      color: '#D72130',
    },
  },

  logout: {
    padding: '10px',
    background: '#FFFFFF',
    borderTop: '1px solid #EDEDED',
    pl: '2',
    fontSize: '14px',
    '&:hover': {
      background: 'rgba(215, 33, 48, 0.11)',
      color: '#D72130',
    },
  },

  icon: {
    color: 'black',
    padding: '10px 10px 10px 10px',
    fontSize: '26px',
    '&:hover': {
      color: 'gray',
      cursor: 'pointer',
    },
  },
};
