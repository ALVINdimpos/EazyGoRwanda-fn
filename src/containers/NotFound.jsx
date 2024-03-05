import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  // navigate
  const navigate = useNavigate();
  // handle back
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <div style={{ padding: '20vh 0' }}>
      <Result
        status='404'
        title='404'
        subTitle='Sorry, the page you are looking for was not found.'
        extra={
          <Button type='primary' onClick={handleBack} className='antdButton'>
            <span>Go Back</span>
          </Button>
        }
      />
    </div>
  );
};

export default NotFound;
