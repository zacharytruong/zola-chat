import useStore from '@/customHooks/store';
import { ImSpinner9 } from 'react-icons/im';
import { MainContainer } from './styles/CustomLoading';

const CustomLoading = () => {
  const theme = useStore((state) => state.theme);
  return (
    <MainContainer className="h-full w-full flex justify-center items-center">
      <div className="animate-spin">
        <ImSpinner9 size={50} color={theme.primary} />
      </div>
    </MainContainer>
  );
};

export default CustomLoading;
