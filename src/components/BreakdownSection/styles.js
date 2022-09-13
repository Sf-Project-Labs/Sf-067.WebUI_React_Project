const useStyles = {
  title: {
    padding: '0.5rem 3rem',
    display: 'inline',
    border: '1px solid #B2B2B2',
    borderRadius: '50px',
    background: '#fafafa',
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
  },
  title_container: {
    position: 'relative',
    margin: '100px auto 80px',
    padding: 0,
  },
  news_container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'stretch',
    gap: '50px',
    margin: '0 auto 50px',
  },
  category_tag: {
    color: 'white',
    zIndex: 2,
    margin: 0,
    position: 'absolute',
    background: '#2F2F2F',
    padding: '6px 55px',
  },
  card: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
  },
};

export default useStyles;
